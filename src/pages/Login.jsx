import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import bannerImg from "../assets/images/immg.jpg";

export default function UserLogin() {
  let [userEmail, setUserEmail] = useState("");
  let [userPass, setUserPass] = useState("");

  let [mailErr, setMailErr] = useState("");
  let [viewPass, setViewPass] = useState(false);
  let [isLoad, setIsLoad] = useState(false);
  let [errMessage, setErrMessage] = useState("");

  let navigate = useNavigate();

  function checkEmail(val) {
    setUserEmail(val);

    if (val === "") {
      setMailErr("Email is required");
    } else if (val.indexOf("@") === -1 || val.indexOf(".") === -1) {
      setMailErr("Please enter a valid email (e.g. name@example.com)");
    } else {
      setMailErr("");
    }
  }

  function doLogin(e) {
    e.preventDefault();

    if (userEmail === "" || userPass === "" || mailErr !== "") {
      return false;
    }

    setIsLoad(true);
    setErrMessage("");

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPass,
      }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setIsLoad(false);

        let myToken = data.token;
        if (!myToken && data.data) {
          myToken = data.data.token;
        }

        if (myToken) {
          localStorage.setItem("token", myToken);
          alert("تم تسجيل الدخول بنجاح!");
          navigate("/");
        } else {
          setErrMessage(data.message || "الإيميل أو كلمة المرور غير صحيحة.");
        }
      })
      .catch(function (error) {
        setIsLoad(false);
        console.log("Login error:", error);
        setErrMessage(
          "حدث خطأ في الاتصال بالسيرفر. تأكدي من تشغيل الباك إيند على بورت 3000.",
        );
      });
  }

  function togglePassword() {
    if (viewPass === true) {
      setViewPass(false);
    } else {
      setViewPass(true);
    }
  }

  return (
    <div className="signin-page bg-white pb-5 text-start">
      <div
        className="mb-0"
        style={{
          backgroundImage: "url(" + bannerImg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="h-100 w-100 d-flex align-items-center bg-dark bg-opacity-50">
          <div className="container px-lg-5 text-white small d-flex align-items-center gap-2">
            <Link to="/" className="text-white text-decoration-none">
              <GoHome size={18} />
            </Link>
            <IoIosArrowForward /> <span>Account</span>
            <IoIosArrowForward />{" "}
            <span style={{ color: "#00B207" }}>Login</span>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div
          className="card mx-auto p-4 border shadow-sm"
          style={{ maxWidth: "450px", borderRadius: "10px" }}
        >
          <h2 className="text-center fw-bold mb-4">Sign In</h2>

          {errMessage !== "" ? (
            <div
              className="alert alert-danger py-2 small text-center"
              role="alert"
            >
              {errMessage}
            </div>
          ) : null}

          <form onSubmit={doLogin}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control py-2"
                style={{ borderColor: mailErr !== "" ? "red" : "#ccc" }}
                placeholder="Email"
                value={userEmail}
                onChange={function (e) {
                  checkEmail(e.target.value);
                }}
                required
              />
              {mailErr !== "" ? (
                <div
                  style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
                >
                  {mailErr}
                </div>
              ) : null}
            </div>

            <div className="mb-3 position-relative">
              <input
                type={viewPass ? "text" : "password"}
                className="form-control py-2"
                placeholder="Password"
                value={userPass}
                onChange={function (e) {
                  setUserPass(e.target.value);
                }}
                required
              />
              <span
                className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
                style={{ cursor: "pointer" }}
                onClick={togglePassword}
              >
                {viewPass ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 small">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label
                  className="form-check-label text-muted"
                  htmlFor="rememberMe"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                size="small"
                className="text-muted text-decoration-none"
              >
                Forget Password
              </Link>
            </div>

            <button
              type="submit"
              className="btn w-100 py-2 rounded-pill text-white fw-bold mt-2 shadow-sm d-flex justify-content-center align-items-center gap-2"
              style={{ backgroundColor: "#00B207", border: "none" }}
            >
              {isLoad === true ? "جاري تسجيل الدخول..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-3 small text-muted">
            Don't have account?
            <Link
              to="/register"
              className="text-dark fw-bold text-decoration-none ms-1"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

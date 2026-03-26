import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setPassError("Passwords do not match!");
    } else {
      setPassError("");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || emailError || passError || !password || !email) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      localStorage.setItem(
        "user",
        JSON.stringify({ name: name, email: email }),
      );
      localStorage.setItem("token", "static-fake-token-123");

      alert("Account created successfully!");
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container mt-5 text-start">
      <div
        className="card mx-auto p-4 shadow-sm"
        style={{ maxWidth: "450px", borderRadius: "10px" }}
      >
        <h2 className="text-center fw-bold mb-4">Create Account</h2>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className={`form-control ${emailError ? "is-invalid" : ""}`}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && (
              <div className="text-danger small mt-1">{emailError}</div>
            )}
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showPass ? "text" : "password"}
              className="form-control pe-5"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>

          <div className="mb-3 position-relative">
            <input
              type={showConfirmPass ? "text" : "password"}
              className={`form-control pe-5 ${passError ? "is-invalid" : ""}`}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <span
              className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            {passError && (
              <div className="text-danger small mt-1">{passError}</div>
            )}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label
              className="form-check-label small text-muted"
              htmlFor="terms"
            >
              Accept all terms & Conditions
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-bold"
            disabled={passError || emailError || !name || loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-3 small">
          Already have account?{" "}
          <Link to="/login" className="fw-bold text-dark text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

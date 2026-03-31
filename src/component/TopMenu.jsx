import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { GoChevronDown } from "react-icons/go";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiPhoneCall,
  FiUser,
} from "react-icons/fi";

import logoImg from "../assets/images/Group.png";

export default function Navbar() {
  const location = useLocation();

  const isLoggedIn = false;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 sticky-top shadow-sm">
        <div className="container px-lg-5">
          <div className="d-flex justify-content-between align-items-center w-100 gap-4">
            <Link
              to="/"
              className="d-flex align-items-center gap-2 text-decoration-none"
            >
              <motion.img
                whileHover={{ rotate: 10 }}
                src={logoImg}
                alt="Ecobazar Logo"
                style={{ width: "35px" }}
              />
              <h1
                className="m-0 fs-3 fw-bolder"
                style={{ color: "#003d29", letterSpacing: "-1px" }}
              >
                Ecobazar
              </h1>
            </Link>

            <div
              className="d-none d-lg-flex flex-grow-1 mx-5"
              style={{ maxWidth: "500px" }}
            >
              <div
                className="input-group rounded-pill border overflow-hidden p-1"
                style={{ backgroundColor: "#f3f4f6" }}
              >
                <span className="input-group-text bg-transparent border-0 text-muted ps-3">
                  <FiSearch size={18} />
                </span>
                <input
                  type="text"
                  className="form-control border-0 shadow-none bg-transparent ps-1"
                  placeholder="Search products..."
                  style={{ fontSize: "14px" }}
                />
                <button
                  className="btn btn-success rounded-pill px-4 fw-bold"
                  style={{ backgroundColor: "#00B207", border: "none" }}
                >
                  Search
                </button>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 gap-md-4">
              <div className="dropdown auth-dropdown">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="d-flex align-items-center gap-2 cursor-pointer"
                  data-bs-toggle="dropdown"
                >
                  <div
                    className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <FiUser size={22} className="text-dark" />
                  </div>
                  <div className="d-none d-md-block">
                    <p className="m-0 text-muted" style={{ fontSize: "11px" }}>
                      Welcome
                    </p>
                    <p className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                      {isLoggedIn ? "My Account" : "Login / Register"}
                    </p>
                  </div>
                </motion.div>

                <ul
                  className="dropdown-menu dropdown-menu-end shadow border-0 mt-3 p-2 rounded-3"
                  style={{ minWidth: "200px" }}
                >
                  {!isLoggedIn ? (
                    <>
                      <li>
                        <Link
                          className="dropdown-item rounded-2 py-2"
                          to="/login"
                        >
                          Sign In
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded-2 py-2"
                          to="/register"
                        >
                          Create Account
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link
                          className="dropdown-item rounded-2 py-2"
                          to="/edit-profile"
                        >
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded-2 py-2"
                          to="/orders"
                        >
                          My Orders
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider opacity-50" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item rounded-2 py-2 text-danger"
                          onClick={() => {}}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div
                className="vr opacity-25 d-none d-sm-block"
                style={{ height: "30px" }}
              ></div>

              {/* Wishlist */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="position-relative cursor-pointer"
              >
                <FiHeart size={24} className="text-dark opacity-75" />
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border border-white"
                  style={{ fontSize: "9px" }}
                >
                  0
                </span>
              </motion.div>

              {/* Cart */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="d-flex align-items-center gap-2 cursor-pointer"
              >
                <div className="position-relative">
                  <FiShoppingBag size={24} className="text-dark" />
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-success border border-white"
                    style={{ fontSize: "9px", padding: "3px 5px" }}
                  >
                    2
                  </span>
                </div>
                <div className="d-none d-md-block">
                  <p className="m-0 fw-bold" style={{ fontSize: "13px" }}>
                    $57.00
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-expand-lg py-0 d-none d-lg-block"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="container px-lg-5 d-flex justify-content-between">
          <ul className="navbar-nav gap-1">
            <NavItem
              to="/"
              label="Home"
              hasDropdown
              active={location.pathname === "/"}
            />
            <NavItem
              to="/shop"
              label="Shop"
              hasDropdown
              active={location.pathname === "/shop"}
            />
            <NavItem to="/pages" label="Pages" hasDropdown />
            <NavItem to="/blog" label="Blog" hasDropdown />
            <NavItem to="/about" label="About Us" />
            <NavItem to="/contact" label="Contact" />
          </ul>

          <div className="d-flex align-items-center text-white gap-3 py-2">
            <motion.div whileHover={{ rotate: 15 }} className="text-success">
              <FiPhoneCall size={18} />
            </motion.div>
            <span className="fw-bold" style={{ fontSize: "14px" }}>
              (219) 555-0114
            </span>
          </div>
        </div>
      </nav>

      <style>{`
        .dropdown-item:active { background-color: #00B207; }
        .dropdown-item:hover { background-color: #f8f9fa; color: #00B207; }
        .auth-dropdown .dropdown-menu { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-link-custom {
          color: #999 !important;
          font-size: 14px;
          font-weight: 500;
          padding: 15px 12px !important;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }
        .nav-link-custom:hover, .nav-link-custom.active {
          color: #fff !important;
          background-color: rgba(255,255,255,0.05);
        }
        .nav-link-custom.active { border-bottom: 2px solid #00B207; }
      `}</style>
    </>
  );
}

const NavItem = ({ to, label, hasDropdown, active }) => (
  <li className="nav-item">
    <Link
      className={`nav-link nav-link-custom d-flex align-items-center gap-1 ${active ? "active" : ""}`}
      to={to || "#"}
    >
      {label}
      {hasDropdown && <GoChevronDown size={14} className="opacity-50" />}
    </Link>
  </li>
);

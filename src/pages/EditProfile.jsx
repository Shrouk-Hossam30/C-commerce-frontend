import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdHistory,
  MdFavoriteBorder,
  MdShoppingCart,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import userImg from "../assets/images/Ellipse.png";

export default function UserDashboard() {
  const navLinks = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={22} />,
      path: "/dashboard",
      active: true,
    },
    { name: "Order History", icon: <MdHistory size={22} />, path: "/orders" },
    {
      name: "Wishlist",
      icon: <MdFavoriteBorder size={22} />,
      path: "/wishlist",
    },
    {
      name: "Shopping Cart",
      icon: <MdShoppingCart size={22} />,
      path: "/cart",
    },
    { name: "Settings", icon: <MdSettings size={22} />, path: "/settings" },
  ];

  const getStatusBadge = (status) => {
    const styles = {
      Processing: { bg: "#FFF9E5", color: "#FF8A00" },
      "On the way": { bg: "#E5F2FF", color: "#007BFF" },
      Completed: { bg: "#EDF2EE", color: "#00B207" },
    };
    const style = styles[status] || { bg: "#F2F2F2", color: "#666" };

    return (
      <span
        className="badge px-3 py-2 fw-medium"
        style={{ backgroundColor: style.bg, color: style.color }}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="dashboard-wrapper py-5 bg-light text-start min-vh-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3">
            <div
              className="card border-0 shadow-sm overflow-hidden"
              style={{ borderRadius: "12px" }}
            >
              <div className="p-3 border-bottom bg-white">
                <h6 className="mb-0 fw-bold text-dark">Navigation</h6>
              </div>
              <div className="list-group list-group-flush">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className={`list-group-item list-group-item-action p-3 d-flex align-items-center gap-3 border-0 transition-all ${
                      link.active ? "text-dark fw-bold" : "text-muted"
                    }`}
                    style={{
                      borderLeft: link.active
                        ? "4px solid #00B207"
                        : "4px solid transparent",
                      backgroundColor: link.active ? "#EDF2EE" : "transparent",
                    }}
                  >
                    <span
                      className={link.active ? "text-success" : "text-muted"}
                    >
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                ))}

                <button className="list-group-item list-group-item-action p-3 d-flex align-items-center gap-3 border-top text-danger fw-medium mt-2">
                  <MdLogout size={22} /> Log-out
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="row g-4">
              <div className="col-md-7">
                <div
                  className="card h-100 border-0 shadow-sm text-center p-4 bg-white"
                  style={{ borderRadius: "16px" }}
                >
                  <div
                    className="position-relative mx-auto mb-3"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <img
                      src={userImg}
                      alt="User"
                      className="rounded-circle border border-3 border-white shadow-sm w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <h5 className="fw-bold mb-1">Dianne Russell</h5>
                  <p className="text-muted small mb-3">Loyal Customer</p>
                  <Link
                    to="/edit"
                    className="btn btn-outline-success btn-sm rounded-pill px-4 fw-bold"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>

              <div className="col-md-5">
                <div
                  className="card h-100 border-0 shadow-sm p-4 bg-white"
                  style={{ borderRadius: "16px" }}
                >
                  <h6 className="text-muted small text-uppercase fw-bold mb-3 opacity-75">
                    Billing Address
                  </h6>
                  <h6 className="fw-bold mb-2">Dianne Russell</h6>
                  <p className="text-muted small mb-2 lh-base">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                  <div className="small mb-1">
                    <span className="text-muted">Email:</span>{" "}
                    dianne.r@gmail.com
                  </div>
                  <div className="small mb-4">
                    <span className="text-muted">Phone:</span> (671) 555-0110
                  </div>
                  <Link
                    to="/edit-address"
                    className="text-success fw-bold text-decoration-none small hover-link"
                  >
                    Edit Address
                  </Link>
                </div>
              </div>

              <div className="col-12 mt-2">
                <div
                  className="card border-0 shadow-sm bg-white"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                    <h5 className="mb-0 fw-bold">Recent Order History</h5>
                    <Link
                      to="/all-orders"
                      className="text-success text-decoration-none small fw-bold"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light text-muted small text-uppercase">
                        <tr>
                          <th className="p-4 border-0">Order ID</th>
                          <th className="p-4 border-0">Date</th>
                          <th className="p-4 border-0">Total</th>
                          <th className="p-4 border-0">Status</th>
                          <th className="p-4 border-0 text-end">Action</th>
                        </tr>
                      </thead>
                      <tbody className="small">
                        {[
                          {
                            id: "#738",
                            date: "8 Sep, 2020",
                            total: "$135.00 (5 Items)",
                            status: "Processing",
                          },
                          {
                            id: "#703",
                            date: "24 May, 2020",
                            total: "$25.00 (1 Item)",
                            status: "On the way",
                          },
                          {
                            id: "#650",
                            date: "12 Feb, 2020",
                            total: "$450.00 (12 Items)",
                            status: "Completed",
                          },
                        ].map((order, idx) => (
                          <tr key={idx} className="align-middle">
                            <td className="p-4 fw-medium">{order.id}</td>
                            <td className="p-4 text-muted">{order.date}</td>
                            <td className="p-4 fw-bold text-dark">
                              {order.total}
                            </td>
                            <td className="p-4">
                              {getStatusBadge(order.status)}
                            </td>
                            <td className="p-4 text-end">
                              <Link
                                to={`/order/${order.id}`}
                                className="text-success text-decoration-none fw-bold"
                              >
                                View Details
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaTimes, FaStar, FaRegStar } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown, MdOutlineShoppingBag } from "react-icons/md";
import { motion } from "framer-motion"; // لإضافة حركات ناعمة

import bannerImg from "../assets/images/immg.jpg";
import defaultImg from "../assets/images/Product_Image.png";

export default function ItemsList() {
  const myItems = [
    {
      id: 1,
      itemName: "Green Apple",
      price: 14.99,
      oldPrice: 20.99,
      imgSrc: defaultImg,
      rating: 4,
    },
    {
      id: 2,
      itemName: "Fresh Orange",
      price: 10.0,
      oldPrice: null,
      imgSrc: defaultImg,
      rating: 5,
    },
    {
      id: 3,
      itemName: "Chinese Cabbage",
      price: 12.0,
      oldPrice: 15.0,
      imgSrc: defaultImg,
      rating: 4,
    },
    {
      id: 4,
      itemName: "Green Lettuce",
      price: 9.0,
      oldPrice: null,
      imgSrc: defaultImg,
      rating: 3,
    },
  ];

  // مكون فرعي للعداد التنازلي لسهولة التعديل
  const CountdownUnit = ({ value, label }) => (
    <div
      className="text-center bg-white bg-opacity-10 rounded-2 p-2 px-3 border border-white border-opacity-25"
      style={{ minWidth: "60px" }}
    >
      <div className="fs-4 fw-bold text-white line-height-1">{value}</div>
      <div className="text-white-50 small" style={{ fontSize: "10px" }}>
        {label}
      </div>
    </div>
  );

  return (
    <div className="container py-4">
      {/* Breadcrumbs */}
      <nav className="d-flex align-items-center gap-2 mb-4 text-muted small">
        <Link to="/" className="text-decoration-none text-muted">
          <GoHome size={18} />
        </Link>
        <IoIosArrowForward />
        <span className="fw-medium">Categories</span>
        <IoIosArrowForward />
        <span className="text-success fw-bold">Shop</span>
      </nav>

      {/* Modern Banner */}
      <div
        className="position-relative overflow-hidden rounded-4 mb-5 shadow-lg border-0"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%), url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "380px",
        }}
      >
        <div className="h-100 d-flex flex-column justify-content-center ps-md-5 ps-4 text-start">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-success text-uppercase mb-2 tracking-wider fw-bolder"
          >
            🔥 Best Deals
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white display-4 fw-bold mb-4"
          >
            Sale of the Month
          </motion.h1>

          <div className="d-flex align-items-center gap-2 mb-4">
            <CountdownUnit value="00" label="DAYS" />
            <span className="text-white fs-4">:</span>
            <CountdownUnit value="02" label="HOURS" />
            <span className="text-white fs-4">:</span>
            <CountdownUnit value="18" label="MINS" />
            <span className="text-white fs-4">:</span>
            <CountdownUnit value="46" label="SECS" />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-success rounded-pill px-5 py-3 fw-bold shadow-lg d-flex align-items-center gap-2 border-0"
            style={{ backgroundColor: "#00B207", width: "fit-content" }}
          >
            Shop Now <FaArrowRight />
          </motion.button>

          {/* Discount Badge */}
          <div
            className="position-absolute d-none d-md-block"
            style={{ top: "20%", right: "10%" }}
          >
            <div
              className="rounded-circle d-flex flex-column align-items-center justify-content-center shadow-lg border border-white border-3"
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#FF8A00",
                color: "white",
              }}
            >
              <span className="fw-bold fs-3 m-0">56%</span>
              <span className="small fw-bold">OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 bg-white p-3 rounded-3 shadow-sm border">
        <div className="d-flex flex-wrap gap-2">
          {["Category", "Price", "Rating"].map((filter) => (
            <div key={filter} className="dropdown">
              <button className="btn btn-light border bg-white d-flex align-items-center gap-4 px-3 py-2 rounded-2 small fw-medium text-secondary shadow-sm">
                Select {filter} <MdKeyboardArrowDown />
              </button>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center gap-3">
          <span className="text-muted small">Sort by:</span>
          <button className="btn btn-white border d-flex align-items-center gap-4 px-3 py-2 rounded-2 small fw-bold">
            Latest <MdKeyboardArrowDown />
          </button>
        </div>
      </div>

      {/* Results Count & Active Filters */}
      <div className="d-flex justify-content-between align-items-center py-3 border-bottom mb-4">
        <div className="d-flex align-items-center gap-3">
          <span className="text-muted small">Active Filters:</span>
          <span className="badge border bg-light text-dark fw-bold rounded-pill px-3 py-2">
            Vegetables{" "}
            <FaTimes
              className="ms-2 text-muted"
              style={{ cursor: "pointer" }}
            />
          </span>
        </div>
        <div className="small">
          <b>{myItems.length}</b>{" "}
          <span className="text-muted">Results found</span>
        </div>
      </div>

      {/* Items Grid */}
      <div className="row g-4 mb-5">
        {myItems.map((item) => (
          <div className="col-lg-3 col-md-4 col-6" key={item.id}>
            <motion.div
              whileHover={{ y: -8 }}
              className="card h-100 border border-light shadow-hover transition-all p-3 rounded-4 overflow-hidden"
            >
              <Link to={`/item/${item.id}`} className="text-decoration-none">
                <div className="text-center mb-3 bg-light rounded-3 p-2">
                  <img
                    src={item.imgSrc}
                    alt={item.itemName}
                    className="img-fluid"
                    style={{ height: "150px", objectFit: "contain" }}
                  />
                </div>
                <div className="text-start">
                  <h6 className="text-dark fw-bold mb-1 fs-6">
                    {item.itemName}
                  </h6>
                  <div className="d-flex gap-2 align-items-center mb-2">
                    <span className="fw-bold text-success fs-5">
                      ${item.price}
                    </span>
                    {item.oldPrice && (
                      <small className="text-muted text-decoration-line-through">
                        ${item.oldPrice}
                      </small>
                    )}
                  </div>
                  <div className="text-warning d-flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) =>
                      i < item.rating ? (
                        <FaStar key={i} size={12} />
                      ) : (
                        <FaRegStar
                          key={i}
                          size={12}
                          className="text-muted opacity-50"
                        />
                      ),
                    )}
                  </div>
                </div>
              </Link>
              <button
                className="btn btn-success w-100 rounded-pill d-flex align-items-center justify-content-center gap-2 py-2 shadow-sm border-0"
                style={{ backgroundColor: "#00B207" }}
                onClick={(e) => {
                  e.preventDefault();
                  alert("Added!");
                }}
              >
                Add to Cart <MdOutlineShoppingBag size={20} />
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center gap-2 mt-5">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`rounded-circle d-flex align-items-center justify-content-center fw-bold transition-all shadow-sm`}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              backgroundColor: num === 1 ? "#00B207" : "#fff",
              color: num === 1 ? "#fff" : "#333",
              border: num === 1 ? "none" : "1px solid #dee2e6",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { MdOutlineShoppingBag, MdFavoriteBorder } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion"; // للأنيميشن السلس

// افترضت أن الصور مستوردة بنفس الأسماء في الكود الأصلي
import bannerImg from "../assets/images/immg.jpg";
import group19Logo from "../assets/images/Group_19.png";
import img1 from "../assets/images/Product_Image_1.png";
import img2 from "../assets/images/Product_Image63.png";
import img3 from "../assets/images/Product_Image_Slider.png";
import videoImg from "../assets/images/Video_1.png";
import leafIcon from "../assets/images/Group22.png";
import tagIcon from "../assets/images/price-tag_1.png";
import related1 from "../assets/images/Image_3.png";
import related2 from "../assets/images/Image_4.png";
import related3 from "../assets/images/Image_5.png";
import related4 from "../assets/images/Image_8.png";

export default function ItemInfo() {
  const [mainImage, setMainImage] = useState(img1);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("descriptions");

  const itemName = "Chinese Cabbage";
  const itemPrice = 14.99;
  const itemOldPrice = 48.0;

  return (
    <div className="product-details-page bg-light min-vh-100 text-start pb-5">
      {/* Breadcrumb Navigation */}
      <nav className="py-3 bg-white border-bottom mb-4">
        <div className="container">
          <div className="d-flex align-items-center gap-2 text-muted small">
            <Link
              to="/"
              className="text-decoration-none text-muted d-flex align-items-center gap-1"
            >
              <GoHome size={18} /> Home
            </Link>
            <IoIosArrowForward />
            <span>Vegetables</span>
            <IoIosArrowForward />
            <span className="text-success fw-bold">{itemName}</span>
          </div>
        </div>
      </nav>

      <div className="container bg-white rounded-4 shadow-sm p-4 p-lg-5">
        <div className="row g-5">
          {/* Left Column: Image Gallery */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-2 d-flex flex-column gap-3">
                {[img1, img2, img3].map((img, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setMainImage(img)}
                    className={`rounded-3 overflow-hidden border-2 cursor-pointer ${
                      mainImage === img ? "border-success" : "border-light"
                    }`}
                    style={{ borderStyle: "solid", aspectRatio: "1/1" }}
                  >
                    <img src={img} className="img-fluid p-1" alt="thumb" />
                  </motion.div>
                ))}
              </div>
              <div className="col-10">
                <div className="border rounded-4 p-4 h-100 d-flex align-items-center justify-content-center bg-white overflow-hidden">
                  <motion.img
                    key={mainImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    src={mainImage}
                    className="img-fluid"
                    style={{ maxHeight: "450px", objectFit: "contain" }}
                    alt="main"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="col-lg-6">
            <div className="ps-lg-4">
              <div className="d-flex align-items-center gap-3 mb-2">
                <h1 className="fw-bolder display-6 m-0">{itemName}</h1>
                <span className="badge bg-success-subtle text-success border border-success px-3">
                  In Stock
                </span>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4 text-muted small">
                <div className="text-warning d-flex">
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <FaRegStar className="text-secondary opacity-50" />
                </div>
                <span className="fw-medium">4.0 (12 Reviews)</span>
                <span className="text-secondary">|</span>
                <span>
                  SKU: <b className="text-dark">2541</b>
                </span>
              </div>

              <div className="py-4 border-top border-bottom mb-4 d-flex align-items-baseline gap-3">
                <span className="h1 fw-bold text-success m-0">
                  ${itemPrice}
                </span>
                <span className="text-muted text-decoration-line-through fs-5">
                  ${itemOldPrice}
                </span>
                <span className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2">
                  64% OFF
                </span>
              </div>

              <p
                className="text-muted mb-4 lead fs-6"
                style={{ lineHeight: "1.8" }}
              >
                Experience the freshness of organic Chinese Cabbage, hand-picked
                from the best local farms. Rich in vitamins and perfect for your
                healthy diet.
              </p>

              {/* Action Area */}
              <div className="d-flex gap-3 align-items-center mb-5 flex-wrap">
                <div
                  className="d-flex align-items-center border rounded-pill bg-white px-2 shadow-sm"
                  style={{ height: "55px" }}
                >
                  <button
                    className="btn border-0 fw-bold px-3"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </button>
                  <span className="px-3 fw-bold fs-5">{quantity}</span>
                  <button
                    className="btn border-0 fw-bold px-3"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-success rounded-pill px-5 flex-grow-1 fw-bold shadow-lg d-flex align-items-center justify-content-center gap-3"
                  style={{ height: "55px", backgroundColor: "#00B207" }}
                >
                  Add to Cart <MdOutlineShoppingBag size={24} />
                </button>
                <button className="btn btn-outline-success rounded-circle p-3 d-flex align-items-center shadow-sm">
                  <MdFavoriteBorder size={24} />
                </button>
              </div>

              <div className="pt-3">
                <p className="mb-2 text-muted">
                  Category:{" "}
                  <Link
                    to="/shop"
                    className="text-dark fw-medium text-decoration-none"
                  >
                    Vegetables
                  </Link>
                </p>
                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="small fw-bold text-uppercase">Share:</span>
                  <div className="d-flex gap-3">
                    {[FaFacebookF, FaTwitter, FaPinterestP, FaInstagram].map(
                      (Icon, idx) => (
                        <Link
                          key={idx}
                          to="#"
                          className="text-muted hover-success transition-all"
                        >
                          <Icon size={18} />
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mt-5">
        <div className="bg-white rounded-4 shadow-sm p-4">
          <div className="d-flex justify-content-center gap-2 gap-md-5 border-bottom mb-4 overflow-auto">
            {["descriptions", "additional", "feedback"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`btn border-0 pb-3 rounded-0 px-4 fw-bold text-uppercase small tracking-wider ${
                  activeTab === tab
                    ? "border-bottom border-3 border-success text-dark"
                    : "text-muted"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="py-3 px-lg-5"
            >
              {activeTab === "descriptions" && (
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <p className="text-muted fs-6" style={{ lineHeight: "2" }}>
                      Our Chinese Cabbage is grown in 100% organic soil,
                      ensuring high nutritional value. It's packed with Vitamin
                      C and K, and provides a crunchy texture to your salads and
                      soups.
                    </p>
                    <ul className="list-unstyled d-flex flex-column gap-2 mt-4">
                      <li className="d-flex align-items-center gap-2">
                        <div
                          className="bg-success rounded-circle"
                          style={{ width: 8, height: 8 }}
                        ></div>{" "}
                        100% Freshness Guaranteed
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        <div
                          className="bg-success rounded-circle"
                          style={{ width: 8, height: 8 }}
                        ></div>{" "}
                        No artificial pesticides
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-5 mt-4 mt-md-0">
                    <div className="rounded-4 overflow-hidden shadow-sm">
                      <img src={videoImg} className="w-100" alt="details" />
                    </div>
                  </div>
                </div>
              )}
              {/* باقي التبويبات تتبع نفس النمط الفني */}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Related Products - Simplified & Elegant */}
      <div className="container mt-5 pt-4">
        <div className="d-flex justify-content-between align-items-end mb-4 px-2">
          <h2 className="fw-bolder m-0">Related Products</h2>
          <Link
            to="/shop"
            className="text-success fw-bold text-decoration-none"
          >
            View All →
          </Link>
        </div>
        <div className="row g-4">
          {[
            { img: related1, name: "Green Apple", price: 14.99, old: 20.99 },
            { img: related2, name: "Chinese Cabbage", price: 14.99 },
            { img: related3, name: "Green Capsicum", price: 14.99 },
            { img: related4, name: "Ladies Finger", price: 14.99 },
          ].map((prod, i) => (
            <div key={i} className="col-6 col-lg-3">
              <motion.div
                whileHover={{ y: -10 }}
                className="card h-100 border-0 shadow-hover transition-all p-3 rounded-4"
              >
                <div className="text-center mb-3">
                  <img
                    src={prod.img}
                    className="img-fluid"
                    style={{ height: "180px", objectFit: "contain" }}
                    alt={prod.name}
                  />
                </div>
                <h6 className="text-dark fw-bold mb-1">{prod.name}</h6>
                <div className="d-flex gap-2 align-items-center mb-2">
                  <span className="text-success fw-bolder">${prod.price}</span>
                  {prod.old && (
                    <small className="text-muted text-decoration-line-through">
                      ${prod.old}
                    </small>
                  )}
                </div>
                <button className="btn btn-light rounded-pill w-100 border-0 py-2 d-flex align-items-center justify-content-center gap-2 fw-medium text-dark shadow-sm">
                  <MdOutlineShoppingBag size={18} /> Add
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

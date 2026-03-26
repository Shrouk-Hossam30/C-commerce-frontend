import React, { useState } from "react";
import { motion } from "framer-motion"; // مكتبة الأنيميشن
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ecobazar.css";

// --- الأيقونات ---
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart, AiOutlineEye, AiOutlineApple } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {
  FaInstagram,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

// --- الصور ---
import img from "../assets/images/ceacf192f06daaf9ab6d0274ea45517b334ce6b1.png";
import img2 from "../assets/images/Image_2.png";
import img3 from "../assets/images/Image_2.png";
import img4 from "../assets/images/Image_3.png";
import img5 from "../assets/images/Image_4.png";
import img6 from "../assets/images/Image_5.png";
import headPhone from "../assets/images/headphones_1.png";
import delivery from "../assets/images/delivery-truck 1.png";
import shopping from "../assets/images/shopping-bag.png";
import cricl from "../assets/images/cricl.png";
import image6 from "../assets/images/Image_6.png";
import banner1 from "../assets/images/bluebanner.png";
import banner2 from "../assets/images/Rectangle_54.png";
import banner3 from "../assets/images/Bannar.png";
import insta1 from "../assets/images/Instagram_Post_2.png";
import insta2 from "../assets/images/Instagram_Post_2.png";
import insta3 from "../assets/images/Instagram_Post_3.png";
import insta4 from "../assets/images/Instagram_Post_4.png";
import insta5 from "../assets/images/Instagram_Post_5.png";
import insta6 from "../assets/images/Instagram_Post_6.png";
import user1 from "../assets/images/Image44.png";
import user2 from "../assets/images/Image9.png";
import user3 from "../assets/images/imag7.png";

const EcobazarHero = () => {
  // إعدادات الأنيميشن
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="ecobazar-wrapper overflow-hidden">
      {/* 1. Hero Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          backgroundColor: "#062b1a",
          minHeight: "700px",
          color: "white",
        }}
      >
        <div className="container h-100 position-relative z-1">
          <div className="row align-items-center h-100 mt-5">
            <motion.div
              className="col-lg-6 mb-5 mb-lg-0"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.span
                variants={fadeInUp}
                className="badge px-3 py-2 rounded-pill mb-3"
                style={{
                  backgroundColor: "rgba(0, 178, 7, 0.2)",
                  color: "#22c55e",
                }}
              >
                🌿 100% Organic & Fresh
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="display-2 fw-bolder mb-3 lh-sm"
              >
                Nourish Your Body <br />{" "}
                <span style={{ color: "#00B207" }}>Naturally</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="fs-5 mb-4 text-light opacity-75"
              >
                Fresh food from our farm directly to your door. Free shipping on
                all your orders.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="d-flex align-items-center gap-4"
              >
                <button
                  className="btn btn-lg px-5 py-3 fw-bold rounded-pill text-white shadow-lg btn-green-hover d-inline-flex align-items-center gap-3"
                  style={{ backgroundColor: "#00B207" }}
                >
                  Shop Collection <FaArrowRight />
                </button>
                <div className="d-flex flex-column">
                  <span className="fs-3 fw-bold text-warning">30% OFF</span>
                  <span className="text-light opacity-75 small text-uppercase">
                    Special Weekly Sale
                  </span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-lg-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={img}
                className="img-fluid floating-img"
                alt="Veggies"
                style={{ filter: "drop-shadow(0px 30px 50px rgba(0,0,0,0.5))" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Features Pill */}
      <div
        className="container"
        style={{ marginTop: "-60px", position: "relative", zIndex: "10" }}
      >
        <motion.div
          className="bg-white shadow-lg rounded-pill p-3 d-none d-lg-block border-0"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="d-flex justify-content-around align-items-center">
            <FeatureItem
              src={delivery}
              title="Free Shipping"
              desc="On orders over $50"
            />
            <div className="vr opacity-25" style={{ height: "40px" }}></div>
            <FeatureItem
              src={headPhone}
              title="Support 24/7"
              desc="Ready to assist you"
            />
            <div className="vr opacity-25" style={{ height: "40px" }}></div>
            <FeatureItem
              src={shopping}
              title="100% Secure"
              desc="Protected payments"
            />
            <div className="vr opacity-25" style={{ height: "40px" }}></div>
            <FeatureItem
              src={cricl}
              title="30 Days Return"
              desc="Money-back guarantee"
            />
          </div>
        </motion.div>
      </div>

      {/* 3. Featured Products */}
      <section className="container mt-5 pt-5">
        <div className="text-center mb-5">
          <p className="text-success fw-bold mb-1">TOP QUALITY</p>
          <h2 className="display-6 fw-bold text-dark">Featured Products</h2>
        </div>
        <motion.div
          className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <ProductCard image={img2} name="Green Apple" price="14.99" />
          <ProductCard
            image={img3}
            name="Chinese Cabbage"
            price="14.99"
            isActive={true}
          />
          <ProductCard image={img4} name="Green Lettuce" price="14.99" />
          <ProductCard image={img5} name="Green Chili" price="14.99" />
          <ProductCard image={img6} name="Fresh Corn" price="14.99" />
        </motion.div>
      </section>

      {/* 4. Hot Deals & Ads */}
      <section className="container mt-5 pt-5">
        <div className="row g-4">
          <motion.div
            className="col-lg-4 col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h5 className="fw-bold mb-4 border-bottom pb-2">Hot Deals</h5>
            <ListProductItem image={img2} name="Green Apple" price="14.99" />
            <ListProductItem
              image={img3}
              name="Chinese Cabbage"
              price="14.99"
            />
            <ListProductItem image={img4} name="Green Lettuce" price="14.99" />
          </motion.div>

          <motion.div
            className="col-lg-4 col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h5 className="fw-bold mb-4 border-bottom pb-2">Best Seller</h5>
            <ListProductItem image={img5} name="Eggplant" price="14.99" />
            <ListProductItem image={img6} name="Red Capsicum" price="14.99" />
            <ListProductItem image={img2} name="Red Tomatoes" price="14.99" />
          </motion.div>

          <motion.div
            className="col-lg-4"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-4 overflow-hidden position-relative shadow-sm h-100 text-white d-flex flex-column align-items-center justify-content-center p-5 text-center"
              style={{
                backgroundImage: `url(${image6})`,
                backgroundSize: "cover",
                minHeight: "350px",
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
              <div className="position-relative z-1">
                <p className="text-uppercase fw-bold small mb-2">Summer Sale</p>
                <h2 className="text-success fw-bold display-4 mb-3">75% OFF</h2>
                <button className="btn btn-success rounded-pill px-5 fw-bold shadow">
                  Shop Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Promotional Banners */}
      <div className="container mt-5 pt-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <BannerLarge bg={banner1} title="Sale of the Month" />
          </div>
          <div className="col-lg-6 d-flex flex-column gap-4">
            <BannerSmall bg={banner2} title="Low-Fat Meat" price="$79.99" />
            <BannerSmall
              bg={banner3}
              title="100% Fresh Fruit"
              subtitle="Summer Sale"
              darkText={true}
            />
          </div>
        </div>
      </div>

      {/* 6. Testimonials */}
      <section className="py-5 mt-5" style={{ backgroundColor: "#F3F4F6" }}>
        <div className="container py-4 text-center">
          <h2 className="display-6 fw-bold mb-5">What Our Clients Say</h2>
          <div className="row g-4">
            <TestimonialCard avatar={user1} name="Robert Fox" />
            <TestimonialCard avatar={user2} name="Dianne Russell" />
            <TestimonialCard avatar={user3} name="Eleanor Pena" />
          </div>
        </div>
      </section>

      {/* 7. Instagram */}
      <div className="container mt-5 pt-5 text-center mb-5">
        <h3 className="fw-bold mb-5">Follow us on Instagram</h3>
        <motion.div
          className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[insta1, insta2, insta3, insta4, insta5, insta6].map((img, i) => (
            <InstagramItem key={i} image={img} />
          ))}
        </motion.div>
      </div>

      {/* 8. Newsletter (تم تعديل الخلفية هنا) */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <motion.div
            className="row align-items-center bg-success text-white p-5 rounded-4 shadow-lg mx-0"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="col-lg-6">
              <h3 className="fw-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="opacity-75 mb-0">
                Get updates on latest organic products and offers.
              </p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="input-group bg-white rounded-pill p-1">
                <input
                  type="email"
                  className="form-control border-0 px-4"
                  placeholder="Your email address"
                  style={{ boxShadow: "none" }}
                />
                <button className="btn btn-dark rounded-pill px-5 fw-bold transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

/* --- المكونات المساعدة --- */

const FeatureItem = ({ src, title, desc }) => (
  <div className="d-flex align-items-center gap-3 px-3">
    <div
      className="bg-light rounded-circle d-flex align-items-center justify-content-center"
      style={{ width: "50px", height: "50px" }}
    >
      <img src={src} alt={title} style={{ width: "25px" }} />
    </div>
    <div>
      <h6 className="mb-0 fw-bold small">{title}</h6>
      <small className="text-muted" style={{ fontSize: "11px" }}>
        {desc}
      </small>
    </div>
  </div>
);

const ProductCard = ({ image, name, price, isActive }) => (
  <motion.div className="col" whileHover={{ y: -10 }}>
    <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm product-card-custom">
      <div className="p-4 text-center bg-light">
        <img
          src={image}
          className="img-fluid"
          alt={name}
          style={{ height: "150px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body text-center">
        <h6 className="fw-bold text-dark mb-2">{name}</h6>
        <div className="text-warning mb-2 small">
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-3 mt-2">
          <span className="fw-bold text-success">${price}</span>
          <button
            className={`btn rounded-circle p-2 d-flex align-items-center ${isActive ? "bg-success text-white" : "bg-light text-dark"}`}
          >
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ListProductItem = ({ image, name, price }) => (
  <motion.div
    className="d-flex align-items-center gap-3 mb-3 p-2 rounded-3 border-light border"
    whileHover={{ x: 5, backgroundColor: "#f9f9f9" }}
  >
    <img
      src={image}
      alt={name}
      style={{ width: "60px", height: "60px", objectFit: "contain" }}
    />
    <div>
      <p className="mb-0 small">{name}</p>
      <span className="fw-bold text-dark">${price}</span>
    </div>
  </motion.div>
);

const BannerLarge = ({ bg, title }) => (
  <motion.div
    className="rounded-4 d-flex flex-column justify-content-center p-5 position-relative overflow-hidden h-100 shadow-sm"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      minHeight: "400px",
    }}
    whileHover={{ scale: 1.01 }}
  >
    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
    <div className="position-relative z-1 text-white">
      <h2 className="display-5 fw-bold mb-3">{title}</h2>
      <button className="btn btn-light rounded-pill px-4 fw-bold text-success">
        Shop Deal <FaArrowRight />
      </button>
    </div>
  </motion.div>
);

const BannerSmall = ({ bg, title, price, subtitle, darkText }) => (
  <motion.div
    className="rounded-4 p-4 position-relative overflow-hidden shadow-sm d-flex flex-column justify-content-center"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      minHeight: "188px",
      color: darkText ? "#1A1A1A" : "white",
    }}
    whileHover={{ x: 10 }}
  >
    <div className="position-relative z-1">
      {subtitle && (
        <p className="text-uppercase small fw-bold mb-1">{subtitle}</p>
      )}
      <h4 className="fw-bold mb-2">{title}</h4>
      {price && (
        <p className="mb-2">
          From <span className="text-warning fw-bold">{price}</span>
        </p>
      )}
      <button
        className={`btn btn-sm rounded-pill px-3 ${darkText ? "btn-dark" : "btn-light text-success"}`}
      >
        Shop Now
      </button>
    </div>
  </motion.div>
);

const TestimonialCard = ({ avatar, name }) => (
  <motion.div className="col-lg-4" whileHover={{ y: -5 }}>
    <div className="card border-0 p-4 h-100 rounded-4 shadow-sm bg-white">
      <p className="text-muted small lh-lg mb-4">
        "The best organic food shop in town. Everything is fresh and delivered
        on time."
      </p>
      <div className="d-flex align-items-center gap-3 mt-auto">
        <img
          src={avatar}
          alt={name}
          className="rounded-circle border border-2 border-success p-1"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="text-start">
          <h6 className="mb-0 fw-bold text-dark">{name}</h6>
          <small className="text-success">Verified Client</small>
        </div>
      </div>
    </div>
  </motion.div>
);

const InstagramItem = ({ image }) => (
  <motion.div className="col" whileHover={{ scale: 1.05 }}>
    <div
      className="position-relative overflow-hidden rounded-4"
      style={{ height: "180px" }}
    >
      <img src={image} className="w-100 h-100 object-fit-cover" alt="Insta" />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 opacity-0 hover-opacity-100 transition">
        <FaInstagram size={30} color="white" />
      </div>
    </div>
  </motion.div>
);

const SocialIcon = ({ icon }) => (
  <motion.a
    href="#"
    className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
    style={{ width: "40px", height: "40px" }}
    whileHover={{ backgroundColor: "#00B207", borderColor: "#00B207" }}
  >
    {icon}
  </motion.a>
);

export default EcobazarHero;

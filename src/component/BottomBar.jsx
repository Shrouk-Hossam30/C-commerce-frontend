import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // أضفنا فريمير موشن للحركة الاحترافية
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import LogoImage from "../assets/images/cricl.png";

// 1. مكون زر التواصل الاجتماعي المطور
const SocialButton = ({ iconElem, linkUrl = "#" }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.1, rotate: 8 }}
    whileTap={{ scale: 0.9 }}
    href={linkUrl}
    className="d-flex align-items-center justify-content-center text-decoration-none shadow-sm"
    style={{
      width: "42px",
      height: "42px",
      backgroundColor: "rgba(255,255,255,0.03)",
      color: "#ffffff",
      borderRadius: "12px",
      border: "1px solid rgba(255,255,255,0.1)",
      transition: "all 0.3s ease",
    }}
  >
    {iconElem}
  </motion.a>
);

// 2. مكون الروابط مع أنيميشن عند الـ Hover
const FooterLinksGroup = ({ header, links }) => (
  <div className="col-lg-2 col-md-4 col-6 mb-4 mb-lg-0">
    <h6
      className="fw-bold text-white mb-4 text-uppercase"
      style={{ letterSpacing: "1px", fontSize: "14px" }}
    >
      {header}
      <div
        className="mt-2"
        style={{ width: "20px", height: "2px", backgroundColor: "#00B207" }}
      ></div>
    </h6>
    <ul className="list-unstyled mb-0">
      {links.map((link, index) => (
        <motion.li key={index} className="mb-2" whileHover={{ x: 5 }}>
          <Link
            to={link.path || "/"}
            className="text-decoration-none small transition-all"
            style={{
              color: "#808080",
              fontSize: "14px",
              display: "inline-block",
            }}
          >
            {link.name}
          </Link>
        </motion.li>
      ))}
    </ul>
  </div>
);

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#080808", color: "#808080" }}>
      {/* --- Newsletter Section --- */}
      <div className="container pt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="row align-items-center p-4 p-md-5 rounded-5 mb-5 mx-0"
          style={{
            background: "linear-gradient(145deg, #111111, #0a0a0a)",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div className="col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
            <h3 className="fw-bold text-white mb-2">Join Our Community</h3>
            <p className="small mb-0 opacity-50">
              Get 20% discount for your first order.
            </p>
          </div>
          <div className="col-lg-5 mb-4 mb-lg-0">
            <div className="position-relative">
              <input
                type="email"
                className="form-control border-0 ps-4 py-3 rounded-pill shadow-none"
                placeholder="Your Email Address..."
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#fff",
                }}
              />
              <button
                className="btn btn-success position-absolute end-0 top-0 bottom-0 m-1 px-4 rounded-pill fw-bold"
                style={{ backgroundColor: "#00B207", border: "none" }}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-center justify-content-lg-end gap-2">
            <SocialButton iconElem={<FaFacebookF />} />
            <SocialButton iconElem={<FaTwitter />} />
            <SocialButton iconElem={<FaInstagram />} />
            <SocialButton iconElem={<FaPinterestP />} />
          </div>
        </motion.div>
      </div>

      {/* --- Main Content --- */}
      <div className="container pb-5">
        <div className="row gy-5">
          <div className="col-lg-4 pe-lg-5">
            <div className="d-flex align-items-center gap-2 mb-4">
              <img src={LogoImage} alt="Logo" style={{ width: "35px" }} />
              <h2
                className="fw-bolder mb-0 text-white"
                style={{ letterSpacing: "-1.5px" }}
              >
                Ecobazar
              </h2>
            </div>
            <p className="small lh-lg mb-4" style={{ textAlign: "justify" }}>
              The most trusted platform for organic lifestyle. We connect you
              with nature's finest harvest, delivered fresh and sustainably to
              your doorstep.
            </p>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex align-items-center gap-3">
                <div className="small-icon rounded-circle bg-success bg-opacity-10 p-2 text-success">
                  <FaPhoneAlt size={14} />
                </div>
                <span className="text-white fw-bold">(219) 555-0114</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="small-icon rounded-circle bg-success bg-opacity-10 p-2 text-success">
                  <FaEnvelope size={14} />
                </div>
                <span className="small">support@ecobazar.com</span>
              </div>
            </div>
          </div>

          <FooterLinksGroup
            header="My Account"
            links={[
              { name: "Dashboard" },
              { name: "Orders" },
              { name: "Wishlist" },
              { name: "Settings" },
            ]}
          />
          <FooterLinksGroup
            header="Support"
            links={[
              { name: "Contact" },
              { name: "FAQs" },
              { name: "Shipping" },
              { name: "Returns" },
            ]}
          />

          <div className="col-lg-2">
            <h6
              className="fw-bold text-white mb-4 text-uppercase"
              style={{ letterSpacing: "1px", fontSize: "14px" }}
            >
              Download Our App
            </h6>
            <div className="d-flex flex-column gap-2">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="btn btn-dark d-flex align-items-center gap-2 py-2 px-3 border border-secondary border-opacity-25 rounded-3"
              >
                <AiOutlineApple size={24} />
                <div className="text-start">
                  <div style={{ fontSize: "9px", opacity: 0.6 }}>
                    Download on
                  </div>
                  <div className="fw-bold small">App Store</div>
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="btn btn-dark d-flex align-items-center gap-2 py-2 px-3 border border-secondary border-opacity-25 rounded-3"
              >
                <IoLogoGooglePlaystore size={22} />
                <div className="text-start">
                  <div style={{ fontSize: "9px", opacity: 0.6 }}>Get it on</div>
                  <div className="fw-bold small">Google Play</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div
        className="py-4"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          backgroundColor: "#050505",
        }}
      >
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="small mb-0">
            © {currentYear} <span className="text-white fw-bold">Ecobazar</span>
            . Designed with ❤️ for Organic Life.
          </p>
          <div className="d-flex gap-4 opacity-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              height="15"
              alt="visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              height="20"
              alt="mastercard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              height="18"
              alt="paypal"
            />
          </div>
        </div>
      </div>

      <style>{`
        .transition-all { transition: all 0.3s ease; }
        input::placeholder { color: rgba(255,255,255,0.3) !important; }
        .small-icon { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }
        .footer-link:hover { color: #00B207 !important; }
      `}</style>
    </footer>
  );
};

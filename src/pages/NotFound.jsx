import React from "react";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { motion } from "framer-motion"; // مكتبة الأنيميشن

export default function NotFound() {
  // إعدادات حركة العناصر
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* أنيميشن الرقم 404 بديل الصورة */}
        <div className="position-relative mb-5">
          <motion.h1
            style={{
              fontSize: "12rem",
              fontWeight: "900",
              color: "#f1f1f1",
              lineHeight: "1",
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>

          <motion.div
            className="position-absolute top-50 start-50 translate-middle w-100"
            variants={itemVariants}
          >
            <h2 className="fw-bold display-5 text-dark">
              Oops! Page Not Found
            </h2>
          </motion.div>
        </div>

        {/* النص الوصفي */}
        <motion.p
          className="text-muted fs-5 mb-5 mx-auto"
          style={{ maxWidth: "500px" }}
          variants={itemVariants}
        >
          ويبدو أنك ضللت الطريق! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </motion.p>

        {/* زرار العودة بتأثير Hover احترافي */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="btn btn-lg text-white px-5 py-3 fw-bold border-0 shadow"
            style={{
              backgroundColor: "#00B207",
              borderRadius: "50px",
              boxShadow: "0 10px 20px rgba(0, 178, 7, 0.3)",
            }}
          >
            <FiHome className="me-2" />
            Back to Home
          </Link>
        </motion.div>

        {/* دوائر خلفية للزينة (Animated Background Elements) */}
        <motion.div
          className="position-absolute rounded-circle opacity-25"
          style={{
            width: "300px",
            height: "300px",
            background: "#00B207",
            top: "10%",
            left: "5%",
            zIndex: -1,
            filter: "blur(80px)",
          }}
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

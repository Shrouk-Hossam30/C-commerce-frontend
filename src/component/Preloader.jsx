import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: "#ffffff",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="position-relative mb-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ fontSize: "80px" }}
            >
              🥦
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "-10px",
                left: "-10px",
                right: "-10px",
                bottom: "-10px",
                border: "4px solid #f3f3f3",
                borderTop: "4px solid #00B207",
                borderRadius: "50%",
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2
              className="fw-bold mb-1"
              style={{ color: "#003d29", letterSpacing: "1px" }}
            >
              Ecobazar
            </h2>
            <div className="d-flex align-items-center justify-content-center gap-1">
              <span className="small text-muted fw-medium">
                Freshness is coming
              </span>
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  times: [0, 0.5, 1],
                }}
                style={{ color: "#00B207", fontWeight: "bold" }}
              >
                ...
              </motion.span>
            </div>
          </motion.div>

          <div
            className="mt-4 rounded-pill overflow-hidden"
            style={{
              width: "200px",
              height: "4px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ height: "100%", backgroundColor: "#00B207" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

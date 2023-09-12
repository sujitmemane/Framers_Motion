import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariant = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    yoyo: Infinity,
    transition: {
      duration: 0.3,
    },
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    ease: "easeInOut",
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      animate="visible"
      initial="hidden"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          {" "}
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;

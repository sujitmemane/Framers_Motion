import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    ease: "easeInOut",
  },
};

const childVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal]);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="container order"
      exit="exit"
    >
      <motion.h2 variants={childVariant}>Thank you for your order :)</motion.h2>

      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;

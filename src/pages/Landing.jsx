import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const FeatureCard = ({ emoji, title, desc, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }
  };

  return (
    <motion.div
      className="relative bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      role="article"
      aria-labelledby={`feature-${index}`}
    >
      <span className="text-4xl block mb-4" aria-hidden="true">{emoji}</span>
      <h4 id={`feature-${index}`} className="text-xl font-semibold mb-3 text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed text-base">{desc}</p>
    </motion.div>
  );
};

const CTAButton = ({ children, to, className, ariaLabel }) => {
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95 }
  };

  return (
    <Link to={to}>
      <motion.button
        className={`flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        aria-label={ariaLabel}
      >
        {children}
      </motion.button>
    </Link>
  );
};

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 font-sans flex flex-col">
      {/* Header */}
      <motion.header
        className={`fixed w-full z-20 p-4 flex justify-between items-center border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        role="banner"
      >
        <h1 className="text-3xl font-extrabold text-green-600 tracking-tight" aria-label="PantryPal logo">
          PantryPal
        </h1>
        <CTAButton
          to="/dashboard"
          ariaLabel="Get started with PantryPal"
          className="text-base"
        >
          Get Started
          <ArrowRightIcon className="w-5 h-5 ml-2" />
        </CTAButton>
      </motion.header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-12">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          role="heading"
          aria-level="1"
        >
          Master Your Pantry
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Organize your inventory, reduce waste, and plan smarter with our intuitive, user-friendly app.
        </motion.p>
        <CTAButton
          to="/dashboard"
          className="px-8 py-4 text-lg"
          ariaLabel="Launch PantryPal application"
        >
          Launch PantryPal
        </CTAButton>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20 px-6" role="region" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            id="features-heading"
            className="text-3xl md:text-4xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose PantryPal?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "📦",
                title: "Smart Inventory",
                desc: "Effortlessly organize and track pantry items by category, quantity, and location."
              },
              {
                emoji: "⚠️",
                title: "Stock Alerts",
                desc: "Stay informed with timely notifications for low stock levels."
              },
              {
                emoji: "⏰",
                title: "Expiry Tracking",
                desc: "Prevent waste with proactive expiration date reminders."
              }
            ].map((feature, index) => (
              <FeatureCard
                key={feature.title}
                emoji={feature.emoji}
                title={feature.title}
                desc={feature.desc}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600 bg-gray-50 border-t border-gray-200" role="contentinfo">
        <p>© {new Date().getFullYear()} PantryPal. Crafted with 💚 by YourName</p>
      </footer>
    </div>
  );
};

export default Landing;
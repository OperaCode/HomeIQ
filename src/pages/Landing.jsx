import React, { useState } from "react";
import {
  CheckCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const features = [
  "Track pantry items in real time",
  "Smart expiry reminders",
  "Usage history and insights",
  "One-click shopping list generation",
];

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-white text-gray-800 scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-green-600">PantryPal</h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-green-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how")}
              className="hover:text-green-600"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-green-600"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="hover:text-green-600"
            >
              Testimonials
            </button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how")}
              className="block w-full text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left"
            >
              Testimonials
            </button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col items-center justify-center px-4 py-32 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-green-600">PantryPal</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-6">
          Never forget what's in your kitchen. Stay stocked, save money, and
          reduce waste with PantryPal.
        </p>
        <a href="/dashboard">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition">
            Get Started for Free
          </button>
        </a>
      </section>

      {/* How it Works */}
      <section id="how" className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Track what you have, when it expires, and what you need next in just a
          few taps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16">
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">1</div>
            <h3 className="font-semibold text-xl">Add Items</h3>
            <p className="text-gray-500">
              Scan or enter pantry items with quantity and expiry date.
            </p>
          </div>
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">2</div>
            <h3 className="font-semibold text-xl">Track Usage</h3>
            <p className="text-gray-500">
              Use items and reduce quantity as you cook or consume.
            </p>
          </div>
          <div>
            <div className="text-green-600 text-4xl font-bold mb-2">3</div>
            <h3 className="font-semibold text-xl">Restock Smartly</h3>
            <p className="text-gray-500">
              Get smart shopping suggestions based on what's running low.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Features</h2>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 text-lg"
            >
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-green-100 text-center">
        <h2 className="text-3xl font-bold mb-6">What Users Are Saying</h2>
        <p className="text-gray-700 italic">
          "PantryPal saved my groceries and my budget!" – Coming soon.
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white text-center">
        <h3 className="text-xl font-semibold mb-2">PantryPal</h3>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} PantryPal Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;

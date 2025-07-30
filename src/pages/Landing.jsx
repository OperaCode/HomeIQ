import React, { useState } from "react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Home from "../assets/home.png"



// Feature card design
const FeatureCard = ({ title, description }) => (
  <div className="bg-emerald-100 rounded-2xl p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-2 text-emerald-800">{title}</h3>
    <p className="text-slate-700 text-sm">{description}</p>
  </div>
);

// testimonials array
const testimonials = [
  { quote: "HomeIQ keeps my kitchen organized!", author: "Emma L." },
  { quote: "No more wasted food or overbuying!", author: "Liam R." },
];

const LandingPage = () => {
  // states
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="bg-white text-slate-800 font-sans scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-2xl font-bold text-teal-600 transition-transform hover:scale-105">
            HomeIQ
          </h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home", "How It Works", "Features", "Testimonials"].map(
              (item, idx) => (
                <a
                  key={item}
                  href={`#${["hero", "how", "features", "testimonials"][idx]}`}
                  className="text-slate-800 hover:text-teal-600 transition-colors"
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-slate-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-slate-800" />
            )}
          </button>
        </div>
        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-2 animate-slide-down">
            {["Home", "How It Works", "Features", "Testimonials"].map(
              (item, idx) => (
                <a
                  key={item}
                  href={`#${["hero", "how", "features", "testimonials"][idx]}`}
                  className="block text-slate-800 hover:text-teal-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label={`Navigate to ${item}`}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-br from-teal-100 to-lime-50 flex flex-col md:flex-row items-center justify-center px-6 pt-36 pb-20 text-center md:text-left"
      >
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-700 leading-tight">
            Smarter Household<br className="hidden md:block" /> Inventory with
            <span className="text-emerald-600"> HomeIQ</span>
          </h1>
          <p className="text-slate-600 text-lg md:text-xl">
            Organize, track, and manage everything from groceries to cleaning
            supplies — all in one place.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition shadow-lg text-lg"
          >
            Get Started <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-10 md:mt-0 md:ml-16">
          <img
            src={Home}
            alt="Household inventory illustration"
            className="w-[300px] md:w-[420px]"
          />
        </div>
      </section>

      {/* How it Works */}
      <section id="how" className="py-16 bg-slate-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-800">How It Works</h2>
        <p className="text-slate-600 mb-6 max-w-md mx-auto">
          Manage your household inventory in a few taps.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              step: "1",
              title: "Add Items",
              desc: "Enter or scan items with quantities and expiry dates.",
            },
            {
              step: "2",
              title: "Track Usage",
              desc: "Update stock as you use items daily.",
            },
            {
              step: "3",
              title: "Restock Smart",
              desc: "Get tailored suggestions for restocking.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-teal-600 text-4xl font-bold mb-2">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg text-slate-800">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why HomeIQ?</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-10">
          Simplify your home management with an intuitive inventory system
          designed for everyday households.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <FeatureCard
            title="Track Items Easily"
            description="Log groceries, pantry items, cleaning supplies, and more."
          />
          <FeatureCard
            title="Monitor Shelf Life"
            description="Get reminded before your products expire or run out."
          />
          <FeatureCard
            title="Smart Household Insights"
            description="Understand usage patterns to make smarter purchases."
          />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-amber-100 text-center">
        <h2 className="text-3xl font-bold mb-6 text-slate-800">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-slate-600 italic text-sm mb-2">
                "{testimonial.quote}"
              </p>
              <p className="text-teal-600 font-medium text-sm">
                – {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-white text-center">
        <h3 className="text-lg font-semibold mb-2">HomeIQ</h3>
        <p className=" mb-2">Built with ❤️ by Opera- for Homes</p>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} HomeIQ Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;

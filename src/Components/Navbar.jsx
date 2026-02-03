import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-white">

        {/* TOP BAR */}
        <div className="bg-slate-900 text-slate-200 text-sm">
          <div className="max-w-[1560px] mx-auto px- py-4 flex justify-between items-center">
            <span>📍Barasat, Kolkata</span>
            <span>📞 (+91) 9883804092</span>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)]">
          <div className="max-w-[1560px] mx-auto px-8 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 whitespace-nowrap text-blue-700 hover:text-blue-800 transition"
            >
              <img
                src="/img/logo.png"
                alt="Brand Logo"
                className="w-6 h-6 md:w-8 md:h-8 object-contain"
              />
              <span className="text-lg md:text-2xl font-bold tracking-wide">
                TaxoCare
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex gap-8 text-slate-600 font-medium">
              <a href="/#Home" className="nav-link">Home</a>
              <a href="/#about" className="nav-link">About Us</a>
              <a href="/#footer" className="nav-link">Service</a>
              <Link to="/contact" className="nav-link">Contact Us</Link>
            </div>

            {/* DESKTOP CTA */}
            <a
              href="/#home From"
              className="hidden lg:inline-block
                bg-blue-600 hover:bg-blue-700
                text-white px-6 py-2
                rounded-lg font-semibold
                shadow-md hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-[1px]"
            >
              Enquire Now
            </a>

            {/* HAMBURGER */}
            <button
              className="lg:hidden text-2xl text-blue-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>

          </div>

          {/* MOBILE MENU */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t shadow-md">
              <div className="flex flex-col px-8 py-6 gap-4 text-slate-700 font-medium">

                <a href="/#Home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="/#about" onClick={() => setIsOpen(false)}>About Us</a>
                <a href="/#footer" onClick={() => setIsOpen(false)}>Service</a>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>

                <a
                  href="/#home From"
                  onClick={() => setIsOpen(false)}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center"
                >
                  Enquire Now
                </a>

              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

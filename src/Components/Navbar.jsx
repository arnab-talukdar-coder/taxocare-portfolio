import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* FIXED NAVBAR WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-white">

        {/* TOP BAR */}
        <div className="bg-slate-900 text-slate-200 text-sm">
          <div className="max-w-[1560px] mx-auto px-8 py-2 flex justify-end gap-6">
            <span>📍 New York, NY</span>
            <span>📞 (123) 456-7890</span>
          </div>
        </div>

        {/* NAVBAR */}
        <nav className="bg-white shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)]">
          <div className="max-w-[1560px] mx-auto px-8 py-4 flex justify-between items-center">

            {/* LOGO */}
            <Link
              to="/"
              className="text-2xl font-bold text-blue-700 tracking-wide hover:text-blue-800 transition"
            >
              TaxoCare
            </Link>

            {/* MENU */}
            <div className="hidden md:flex gap-8 text-slate-600 font-medium">
              <a href="/#Home " className="nav-link">Home</a>
              <a href="/#about" className="nav-link">About Us</a>
              <a href="/#service" className="nav-link">Service</a>
              <Link to="/contact" className="nav-link">Contact us</Link>
            </div>

            {/* CTA */}
            <a
              href="/#home From"
              className="
                bg-blue-600 hover:bg-blue-700
                text-white px-6 py-2
                rounded-lg font-semibold
                shadow-md hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-[1px]
              "
            >
              Enquire Now
            </a>

          </div>
        </nav>
      </div>
    </>
  );
}

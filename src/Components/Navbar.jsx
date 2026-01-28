import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* TOP BAR */}
      <div className="bg-slate-900 text-slate-200 text-sm">
        <div className="max-w-[1560px] mx-auto px-8 py-2 flex justify-end gap-6">
          <span>📍 New York, NY</span>
          <span>📞 (123) 456-7890</span>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1560px] mx-auto px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-700">
            TaxoCare
          </Link>

          <div className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="/#home">Home</a>
            <a href="/#about">About Us</a>
            <a href="/#service">Service</a>
            <Link to="/contact">Contact Us</Link>
          </div>

          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Enquire Now
          </Link>
        </div>
      </nav>
    </>
  );
}

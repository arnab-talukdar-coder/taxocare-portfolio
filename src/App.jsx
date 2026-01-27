import React, { useEffect, useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function App() {
  const sendEmail = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    window.location.href =
      `mailto:consultant@email.com?subject=New Tax Enquiry from ${name}` +
      `&body=Name: ${name}%0APhone: ${phone}%0AQuery: ${message}`;
  };

  const heroImages = ["/img/hero1.jpg", "/img/hero2.jpg", "/img/hero3.jpg"];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 4000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-slate-100 text-slate-900 font-sans">
      {/* ================= TOP BAR ================= */}
      <div className="bg-slate-900 text-slate-200 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6">
          <span>📍 New York, NY</span>
          <span>📞 (123) 456-7890</span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">TaxoCare</h1>

          <div className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Location</a>
            <a href="#">Contact Us</a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
            Enquire Now
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative min-h-[88vh] overflow-visible">
        {/* Background image */}
        {/* HERO IMAGE CAROUSEL */}
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`
      absolute inset-0 bg-cover bg-left transition-opacity duration-4000
      ${index === activeImage ? "opacity-100 z-0" : "opacity-0 -z-10"}
    `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        {/* BLUE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-900/30 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pt-44 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT TEXT */}
          <div className="text-white flex flex-col justify-center">
            <h1 className="text-[48px] leading-[1.2] font-semibold max-w-xl">
              Expert Tax Consulting Services
              <br />
              for Your Financial Needs
            </h1>

            <p className="mt-6 text-[16px] text-blue-100 max-w-lg">
              We provide comprehensive solutions to minimize your tax burden
              with professional advice you can trust.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-blue-600 px-7 py-3 rounded-md font-medium">
                Enquire Now
              </button>
              <button className="bg-white text-blue-700 px-7 py-3 rounded-md font-medium">
                Our Services
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className="bg-white/95 backdrop-blur-xl rounded-2xl
                       shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                       p-8 max-w-md justify-self-end self-start relative top-24
                       max-h-[calc(100vh-120px)] overflow-auto"
          >
            <h3 className="text-lg font-semibold text-blue-700">
              Submit Your Query
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Please fill in the form below and we will get back to you soon.
            </p>

            <form onSubmit={sendEmail} className="space-y-4">
              <input
                name="name"
                required
                className="w-full border rounded-md px-4 py-3"
                placeholder="Your Name"
              />
              <input
                name="phone"
                required
                className="w-full border rounded-md px-4 py-3"
                placeholder="Contact Number"
              />
              <textarea
                name="message"
                required
                rows="4"
                className="w-full border rounded-md px-4 py-3"
                placeholder="Your Query"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Tax Planning & Advisory",
              "Business & Personal Tax Filing",
              "IRS Audit Assistance",
            ].map((service) => (
              <div
                key={service}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-3">
                  {service}
                </h3>
                <p className="text-slate-600 text-sm">
                  Strategic and compliant solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-slate-600 mb-6 max-w-md">
              Welcome to TaxoCare, your trusted partner for comprehensive tax
              consulting services. We help individuals and businesses navigate
              complex tax laws with ease and confidence.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Learn More About Us
            </button>
          </div>

          <img
            src="/img/hero2.jpg"
            alt="Consultation"
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">TaxoCare</h3>
            <p className="text-sm">
              Trusted Tax Consultant delivering reliable and compliant tax
              solutions for individuals and businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                <span>123 Example St, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-blue-400" />
                <span>contact@taxocare.com</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="w-full h-40 rounded-lg overflow-hidden border border-slate-700">
            <iframe
              title="TaxoCare Location"
              src="https://www.google.com/maps?q=New%20York%20City&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="border-t border-slate-700 text-center py-4 text-sm">
          © 2026 TaxoCare. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aboutBg from "./assets/about.jpeg";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import ConsultationForm from "./ConsultationForm";

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

  const heroImages = [
    "/img/hero1.jpg",
    "/img/carousel_1.PNG",
    "/img/carousel_2.PNG",
  ];

  const [activeImage, setActiveImage] = useState(0);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change image every 2 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div id="Home" className="bg-slate-100 text-slate-900 font-sans">
      {/* ================= TOP BAR ================= */}

      {/* ================= HERO ================= */}
    <section className="relative overflow-hidden">

        {/* ================= HERO IMAGE CAROUSEL ================= */}
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`
        absolute inset-0 bg-cover bg-left transition-opacity duration-1000
        ${index === activeImage ? "opacity-100 z-0" : "opacity-0 -z-10"}
      `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* ================= OVERLAY ================= */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/60 to-blue-900/30 z-10" />

        {/* ================= CONTENT ================= */}
        <div
          className="
      relative z-20 max-w-7xl mx-auto px-6
      pt-20 pb-20
      grid grid-cols-1 lg:grid-cols-2 gap-20
      items-start
    "
        >
          {/* ================= LEFT TEXT ================= */}
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
              <a
                href="/#home From"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Enquire Now
              </a>

              <a
                href="/#footer"
                className="bg-white text-blue-700 px-7 py-3 rounded-md font-medium"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* ================= RIGHT FORM ================= */}
          <div className="relative z-30 w-full max-w-md mx-auto lg:mx-55">
            <ConsultationForm />
          </div>
        </div>
      </section>
      {/* ================= WHY CHOOSE US ================= */}
      <section id="service" className="py-9 bg-slate-100">
        <div className="max-w-[1600px] mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Why Choose Us
          </h2>

          {/* <p className="text-slate-600 max-w-4xl mb-16 leading-relaxed">
            Our team of seasoned professionals, including{" "}
            <strong>chartered accountants, tax consultants,</strong> and{" "}
            <strong>legal advisors</strong>, bring deep domain expertise, a
            proactive approach, and personalized strategies to every case.
          </p> */}

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {/* 01 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">01</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Deep Expertise
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Our professionals possess in-depth knowledge of tax laws, legal
                frameworks, and compliance standards across industries.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">02</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Comprehensive Solutions
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                From registrations and filings to audits and litigation, we
                offer complete legal and tax support under one roof.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">03</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Client-Focused Approach
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                We prioritize understanding your needs and deliver tailored
                solutions that ensure clarity and confidence.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">04</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Startup Legal Services
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Complete assistance for business structuring, agreements,
                registrations, and intellectual property protection.
              </p>
            </div>

            {/* 05 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">05</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Licensing & Regulatory Approvals
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Expert handling of FSSAI, Trade License, MSME, IEC, and other
                mandatory government approvals.
              </p>
            </div>

            {/* 06 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl font-light text-blue-200">06</span>
              <h4 className="font-semibold text-slate-800 mt-4 text-lg">
                Legal Representation & Litigation
              </h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                Strong representation before tax authorities, tribunals, and
                courts with strategic and ethical advocacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative py-20 bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutBg})`,
          //  backgroundSize: "contain", // full image, no cut
        }}
      >
        {/* LIGHT OVERLAY */}
        <div className=" bg-white/70 " />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1650px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:transform lg:-translate-y-[30px]">
            <h2 className="text-3xl font-bold mb-5 text-slate-900">About Us</h2>

            <p className="text-slate-700 max-w-md leading-relaxed">
              Welcome to <strong>TaxoCare</strong>, your trusted partner for
              comprehensive tax consulting services. We help individuals and
              businesses navigate complex tax laws with ease and confidence.
            </p>

            {/* READ MORE CONTENT */}
            {readMore && (
              <p className="text-slate-700 mt-4 max-w-md leading-relaxed">
                Our experienced team provides expert assistance in income tax,
                GST compliance, company registration, MSME, trademark, FSSAI,
                and annual filings. We focus on accuracy, transparency, and
                long-term financial success for every client.
              </p>
            )}

            {/* BUTTONS */}
            <div className="mt-6 flex items-center gap-5">
              <button
                onClick={() => setReadMore(!readMore)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                {readMore ? "Read Less" : "Learn More About Us"}
              </button>

              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Learn More About Us
            </button> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* BLUE GLOW */}
            <div className="absolute inset-0 rounded-xl bg-blue-600/25 blur-3xl scale-105" />

            <img
              src="/img/hero2.PNG"
              alt="Consultation"
              className="
              relative z-10
              rounded-xl
              shadow-[0_35px_90px_-20px_rgba(37,99,235,0.75)]
              filter contrast-110 saturate-110
            "
            />
          </div>
        </div>
      </section>
    </div>
  );
}

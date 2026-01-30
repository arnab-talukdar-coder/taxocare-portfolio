import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="bg-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Have questions about company registration, GST, income tax,
            or compliance? Our experts are here to help you.
            Get in touch with us today.
          </p>

          <div className="space-y-4 text-slate-700">
            <p>
              📍 <strong>Address:</strong> Barasat,Kolkata
            </p>
            <p>
              📞 <strong>Phone:</strong> (+91) 9883804092
            </p>
            <p>
              ✉️ <strong>Email:</strong> consultant@email.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25)] p-8">
          <h3 className="text-xl font-semibold mb-6 text-slate-800">
            Send Us a Message
          </h3>

          <form className="space-y-5">
            {/* NAME */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full border rounded-md px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full border rounded-md px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full border rounded-md px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full border rounded-md px-4 py-2
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="
                w-full bg-blue-600 hover:bg-blue-700
                text-white font-semibold py-3 rounded-md
                transition shadow-md hover:shadow-lg
              "
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
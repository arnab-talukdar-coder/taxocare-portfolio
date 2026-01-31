import React from "react";
import ConsultationForm from "../ConsultationForm";

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
              📍 <strong>Address:</strong> Barasat, Kolkata
            </p>
            <p>
              📞 <strong>Phone:</strong> (+91) 9883804092
            </p>
            <p>
              ✉️ <strong>Email:</strong> consultant@email.com
            </p>
          </div>
        </div>

        {/* RIGHT FORM (REPLACED) */}
        <div className="flex justify-center">
          <ConsultationForm />
        </div>

      </div>
    </section>
  );
}
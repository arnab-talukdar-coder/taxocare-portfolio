import React from "react";

export default function TermsOfUse() {
  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Please read these Terms carefully before using the Taxocare website and services.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using Taxocare (taxocare.in), you agree to be bound by
              these Terms of Use and all applicable laws and regulations.
              If you do not agree with any part of these terms, please do not use this website.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              2. Use of Services
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Taxocare provides business registration, taxation, compliance,
              and consultancy-related services. You agree to use our services
              only for lawful purposes and provide accurate and complete information.
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              3. User Responsibilities
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Provide accurate and updated information.</li>
              <li>Do not misuse or attempt to hack the website.</li>
              <li>Do not reproduce or copy website content without permission.</li>
              <li>Comply with all applicable Indian laws and regulations.</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              4. Intellectual Property
            </h2>
            <p className="text-slate-700 leading-relaxed">
              All content on this website including text, logos, graphics,
              and design elements are the property of Taxocare and protected
              under applicable intellectual property laws.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              5. Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Taxocare shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of this website
              or services. Services are provided on an “as-is” basis.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              6. Governing Law
            </h2>
            <p className="text-slate-700 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes shall be subject to the
              jurisdiction of Indian courts.
            </p>
          </div>

          {/* 7 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              7. Contact Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions regarding these Terms of Use,
              please contact us at:
              <br /><br />
              <strong>Email:</strong> office@taxocare.in
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

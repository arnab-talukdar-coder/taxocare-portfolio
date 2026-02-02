import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            This Privacy Policy explains how your personal information is collected, used, and shared when you use our website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              1. Information We Collect
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may collect personal information when you use our website, including your name, email address, phone number, and any other details that you voluntarily provide when filling out forms or requesting services.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              The information we collect may be used to:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Deliver the services you request.</li>
              <li>Respond to your inquiries and communicate with you.</li>
              <li>Improve our website and customer experience.</li>
              <li>Send you updates, newsletters, and promotional information (if opted in).</li>
            </ul>
          </div>

          {/* 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              3. Cookies and Tracking
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We use cookies and similar tracking technologies to collect information about your activity on our website. Cookies help us improve your experience and analyze usage patterns. You can choose to disable cookies through your browser settings.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              4. Sharing Your Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our site and delivering services, subject to confidentiality obligations.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              5. Data Security
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We take reasonable precautions to protect your personal information. However, no online transmission or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 6 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              6. Third-Party Links
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to third-party sites. We are not responsible for the content, privacy practices, or policies of those sites. Please review the privacy policies of third-party websites before interacting with them.
            </p>
          </div>

          {/* 7 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              7. Children’s Privacy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Our services are not directed to individuals under 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected such information, we will take steps to delete it.
            </p>
          </div>

          {/* 8 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will post the updated policy on the website. Your continued use of the website after changes indicates acceptance.
            </p>
          </div>

          {/* 9 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              9. Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br /><br />
              <strong>Email:</strong> office@taxocare.in
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

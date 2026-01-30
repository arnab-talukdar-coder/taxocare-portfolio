import React from "react";

export default function PvtLtdRegistration() {
  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Private Limited Company Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Incorporate your Private Limited Company with full legal compliance and expert assistance.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          {/* 1 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is a Private Limited Company?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Private Limited Company is a separate legal entity under the
              Companies Act, 2013. It provides limited liability protection,
              better credibility, and easier fundraising opportunities.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Private Limited Company Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-blue-700">
              <li>Apply for Digital Signature Certificate (DSC).</li>
              <li>Apply for Director Identification Number (DIN).</li>
              <li>Reserve Company Name.</li>
              <li>File SPICe+ incorporation form.</li>
              <li>Receive Certificate of Incorporation.</li>
            </ol>
          </div>

          {/* 3 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Documents Required
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>PAN & Aadhaar of Directors</li>
              <li>Address Proof</li>
              <li>Registered Office Proof</li>
            </ul>
          </div>

          {/* 4 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Benefits of Private Limited Company
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Limited liability protection</li>
              <li>Separate legal identity</li>
              <li>Easy transfer of ownership</li>
              <li>Better credibility</li>
              <li>Scalable structure</li>
            </ul>
          </div>

          {/* 5 */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Time Required
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Registration usually takes{" "}
              <strong className="text-blue-800">
                7–12 working days
              </strong>, depending on approvals.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

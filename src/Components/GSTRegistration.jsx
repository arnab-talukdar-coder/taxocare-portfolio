import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function GSTRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is GST?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            GST (Goods and Services Tax) is an indirect tax applicable on the
            supply of goods and services in India. Businesses crossing the
            prescribed turnover threshold must register under GST.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is GST Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            GST Registration is the process of obtaining a GSTIN (GST
            Identification Number) from the GST department, enabling a business
            to legally collect and remit GST.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            GST Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹1,499/- INR</strong> (Exclude GST)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ GSTIN Allotment</li>
            <li>✓ Application Filing</li>
            <li>✓ ARN Generation</li>
            <li>✓ GST Portal Support</li>
          </ul>

          <button
            onClick={() =>
              formRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold"
          >
            BOOK NOW
          </button>

        </div>
      </section>

      {/* ================= FORM ================= */}
      <ConsultationForm ref={formRef} />

      {/* ================= COMPLETE CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              GST Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Submit basic business details</li>
              <li>Upload documents on GST portal</li>
              <li>OTP verification</li>
              <li>ARN generation</li>
              <li>GSTIN allotment</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for GST Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>PAN of business / proprietor</li>
              <li>Aadhaar Card</li>
              <li>Business address proof</li>
              <li>Bank account details</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of GST Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Legal recognition of business</li>
              <li>Input tax credit eligibility</li>
              <li>Inter-state trade allowed</li>
              <li>Increased business credibility</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

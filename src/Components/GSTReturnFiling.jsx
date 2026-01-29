import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function GSTReturnFiling() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is GST Return Filing?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            GST Return Filing is the process of reporting sales, purchases,
            output tax, and input tax credit to the GST department on a monthly
            or quarterly basis.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Who Needs to File GST Returns?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every GST-registered business is required to file GST returns,
            irrespective of turnover, unless exempted by law.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            GST Return Filing Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹499/- INR</strong> per return
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ GSTR-1 Filing</li>
            <li>✓ GSTR-3B Filing</li>
            <li>✓ Nil Return Filing</li>
            <li>✓ Compliance Support</li>
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
              Types of GST Returns
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>GSTR-1 – Outward supplies</li>
              <li>GSTR-3B – Summary return</li>
              <li>Nil Return – No transactions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Due Dates for GST Return Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>GSTR-1: Monthly / Quarterly</li>
              <li>GSTR-3B: Monthly</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Consequences of Late Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Late fees & penalties</li>
              <li>Interest on tax payable</li>
              <li>Blocking of GSTIN</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

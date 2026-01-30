import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function LLPAnnualFiling() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* QUESTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is LLP Annual Filing?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            LLP Annual Filing is a mandatory compliance under the LLP Act, 2008,
            requiring LLPs to file Form 8 and Form 11 every financial year.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Who Needs to File LLP Annual Returns?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every LLP registered in India must file annual returns, even if there
            is no business activity during the year.
          </p>

        </div>
      </section>

      {/* FEES */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            LLP Annual Filing Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹4,999/- INR</strong> (Exclude GST)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ Form 8 Filing</li>
            <li>✓ Form 11 Filing</li>
            <li>✓ LLP Compliance</li>
            <li>✓ Late Fee Prevention</li>
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

      {/* <ConsultationForm ref={formRef} /> */}

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Forms Covered Under LLP Annual Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Form 8 – Statement of Accounts</li>
              <li>Form 11 – Annual Return</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Due Dates for LLP Annual Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Form 11: 30th May</li>
              <li>Form 8: 30th October</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

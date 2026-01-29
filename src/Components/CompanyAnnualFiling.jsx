import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function CompanyAnnualFiling() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* QUESTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is Company Annual Filing?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            Company Annual Filing is a mandatory compliance under the Companies
            Act, 2013, where companies must file financial statements and annual
            returns with the Registrar of Companies (ROC).
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Who Needs to File Company Annual Returns?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Every Private Limited, Public Limited, and One Person Company
            registered in India is required to file annual returns, even if there
            is no business activity.
          </p>

        </div>
      </section>

      {/* FEES */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Company Annual Filing Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹6,999/- INR</strong> (Exclude GST)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ AOC-4 Filing</li>
            <li>✓ MGT-7 Filing</li>
            <li>✓ ROC Compliance</li>
            <li>✓ Late Fee Avoidance</li>
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

      <ConsultationForm ref={formRef} />

      {/* CONTENT */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Forms Covered Under Company Annual Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>AOC-4 – Financial Statements</li>
              <li>MGT-7 – Annual Return</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Due Dates for Company Annual Filing
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>AOC-4: Within 30 days of AGM</li>
              <li>MGT-7: Within 60 days of AGM</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

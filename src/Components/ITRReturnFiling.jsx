import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function ITRReturnFiling() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* QUESTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is Income Tax Return (ITR)?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            Income Tax Return (ITR) is a form through which taxpayers report their
            income, deductions, and tax liability to the Income Tax Department.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Who Needs to File ITR?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Individuals, businesses, and professionals earning income above the
            prescribed exemption limit must file ITR every financial year.
          </p>

        </div>
      </section>

      {/* FEES */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Income Tax Return Filing Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹999/- INR</strong>
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ ITR-1 / ITR-2 Filing</li>
            <li>✓ Business & Professional ITR</li>
            <li>✓ Tax Computation</li>
            <li>✓ E-Verification Support</li>
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
              Types of ITR Forms
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>ITR-1 – Salaried individuals</li>
              <li>ITR-2 – Capital gains & other income</li>
              <li>ITR-3 / ITR-4 – Business & professionals</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Due Date for ITR Filing
            </h2>
            <p>
              The due date for ITR filing is generally
              <strong> 31st July</strong> for individuals and
              <strong> 31st October</strong> for audit cases.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

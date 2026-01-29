import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function IECRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">What is IEC Code?</h2>
          <p className="text-slate-600 mb-10">
            IEC (Import Export Code) is a mandatory registration for businesses
            involved in import or export in India.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is IEC Registration?
          </h2>
          <p className="text-slate-600">
            IEC Registration allows businesses to legally trade internationally.
          </p>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            IEC Code Registration Fees
          </h2>
          <p className="mb-4">
            Pricing: <strong>₹2,999/- INR</strong>
          </p>
          <ul className="space-y-2 mb-8">
            <li>✓ DGFT Registration</li>
            <li>✓ Lifetime Validity</li>
            <li>✓ Export–Import Eligibility</li>
          </ul>

          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 px-6 py-3 rounded-md font-semibold"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      <ConsultationForm ref={formRef} />
    </div>
  );
}

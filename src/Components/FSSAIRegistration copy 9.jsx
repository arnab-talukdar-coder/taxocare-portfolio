import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function FSSAIRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">What is FSSAI?</h2>
          <p className="text-slate-600 mb-10">
            FSSAI Registration is mandatory for businesses involved in food
            manufacturing, storage, distribution, or sale.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is FSSAI Registration?
          </h2>
          <p className="text-slate-600">
            FSSAI Registration provides a 14-digit license number issued by FSSAI.
          </p>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            FSSAI Registration Fees
          </h2>
          <p className="mb-4">
            Pricing: <strong>₹2,499/- INR</strong>
          </p>
          <ul className="space-y-2 mb-8">
            <li>✓ Basic / State / Central License</li>
            <li>✓ Food Business Compliance</li>
            <li>✓ Legal Authorization</li>
          </ul>

          <button
            onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
            className="bg-orange-500 px-6 py-3 rounded-md font-semibold"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* <ConsultationForm ref={formRef} /> */}
    </div>
  );
}

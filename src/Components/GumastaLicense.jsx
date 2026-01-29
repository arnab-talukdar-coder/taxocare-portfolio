import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function GumastaLicense() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is Gumasta License?
          </h2>
          <p className="text-slate-600 mb-10">
            Gumasta License is a local municipal registration required to operate
            a business in certain states like Maharashtra.
          </p>
        </div>
      </section>

      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Gumasta License Fees
          </h2>
          <p className="mb-4">
            Pricing: <strong>₹2,499/- INR</strong>
          </p>
          <ul className="space-y-2 mb-8">
            <li>✓ Municipal Registration</li>
            <li>✓ Mandatory Local License</li>
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

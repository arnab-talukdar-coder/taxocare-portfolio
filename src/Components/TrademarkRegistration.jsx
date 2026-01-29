import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function TrademarkRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* QUESTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is a Trademark?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            A Trademark is a unique symbol, logo, word, or phrase that identifies
            and distinguishes your brand from others. It protects your brand
            identity and prevents unauthorized usage.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is Trademark Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Trademark Registration is the legal process of securing exclusive
            rights over a brand name or logo under the Trademarks Act, 1999.
          </p>

        </div>
      </section>

      {/* FEES */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Trademark Registration Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹6,999/- INR</strong> (Exclude Govt. Fees)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ Trademark Search</li>
            <li>✓ Application Filing (TM-A)</li>
            <li>✓ Acknowledgement Receipt</li>
            <li>✓ Trademark ™ Usage</li>
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
              Trademark Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Trademark availability search</li>
              <li>Application filing (TM-A)</li>
              <li>Examination by Trademark Office</li>
              <li>Publication in Trademark Journal</li>
              <li>Trademark registration certificate</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Trademark Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Exclusive ownership of brand</li>
              <li>Legal protection against misuse</li>
              <li>Brand recognition & trust</li>
              <li>Nationwide validity</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

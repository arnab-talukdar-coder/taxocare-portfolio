import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function PatentRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* QUESTIONS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is a Patent?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            A Patent is an exclusive right granted for an invention that provides
            a new technical solution or process. It prevents others from making,
            using, or selling the invention without permission.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is Patent Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Patent Registration is the legal process of protecting an invention
            under the Indian Patents Act, 1970.
          </p>

        </div>
      </section>

      {/* FEES */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Patent Registration Fees
          </h2>

          <p className="mb-4">
            Pricing starts from <strong>₹24,999/- INR</strong>
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ Patent Search & Consultation</li>
            <li>✓ Drafting of Patent Specification</li>
            <li>✓ Patent Application Filing</li>
            <li>✓ Government Liaison</li>
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
              Patent Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Patentability search</li>
              <li>Drafting of specification</li>
              <li>Filing patent application</li>
              <li>Examination request</li>
              <li>Grant of patent</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Patent Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Exclusive rights over invention</li>
              <li>Competitive business advantage</li>
              <li>Monetization opportunities</li>
              <li>Legal protection for 20 years</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

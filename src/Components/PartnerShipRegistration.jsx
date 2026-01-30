import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function PartnershipRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is a Partnership Firm?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            A Partnership Firm is a business structure where two or more persons
            agree to carry on a business and share profits as per the Partnership
            Deed. It is governed by the Indian Partnership Act, 1932.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is Partnership Firm Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Partnership Firm Registration is the process of legally registering
            a partnership with the Registrar of Firms. Though registration is
            optional, a registered partnership enjoys better legal recognition
            and rights.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Partnership Firm Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹4,999/- INR</strong> (Exclude GST | GST Extra if Applicable)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ Drafting of Partnership Deed</li>
            <li>✓ PAN of Partnership Firm</li>
            <li>✓ Registration with Registrar of Firms</li>
            <li>✓ Bank Account Assistance</li>
            <li>✓ MSME Registration (Free)</li>
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

      {/* ================= FORM SECTION ================= */}
      {/* <ConsultationForm ref={formRef} /> */}

      {/* ================= COMPLETE CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Partnership Firm Registration Online
            </h2>
            <p>
              Partnership Firm Registration can be completed online with the help
              of legal professionals. A properly drafted partnership deed is the
              backbone of the firm and defines rights, duties, and profit-sharing
              ratios of partners.
            </p>
          </div>

          {/* PROCESS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Partnership Firm Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Choose a unique partnership firm name.</li>
              <li>Draft the Partnership Deed.</li>
              <li>Execute deed on stamp paper.</li>
              <li>Apply for PAN of the firm.</li>
              <li>Register with Registrar of Firms.</li>
            </ol>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Partnership Registration
            </h2>

            <h4 className="font-semibold mt-4 mb-2">
              Partners’ Documents
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>PAN Card of all partners</li>
              <li>Aadhaar / Passport / Voter ID</li>
              <li>Passport size photographs</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">
              Business Address Proof
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Electricity Bill / Rent Agreement / NOC</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of Partnership Firm Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Easy to start and manage</li>
              <li>Minimal compliance requirements</li>
              <li>Cost-effective business structure</li>
              <li>Flexible profit sharing</li>
              <li>Ideal for small businesses</li>
            </ul>
          </div>

          {/* TIME */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Time Required for Partnership Registration
            </h2>
            <p>
              Partnership Firm Registration usually takes
              <strong> 5–8 working days</strong>, subject to document verification
              and state-wise procedures.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              FAQ on Partnership Firm Registration
            </h2>
            <ul className="space-y-2">
              <li>✔ Minimum 2 partners required</li>
              <li>✔ Registration is optional but recommended</li>
              <li>✔ No minimum capital required</li>
              <li>✔ Suitable for small & family businesses</li>
              <li>✔ GST applicable only after threshold</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

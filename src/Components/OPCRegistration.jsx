import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function OPCRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is One Person Company Meaning?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            One Person Company (OPC) is a type of company introduced under the
            Companies Act, 2013, which allows a single individual to form a
            corporate entity. OPC provides limited liability protection,
            separate legal identity, and full control to a solo entrepreneur.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is One Person Company Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            OPC registration allows one person to act as both shareholder and
            director. Unlike proprietorship, OPC has a separate legal identity
            and ensures better credibility, compliance, and scalability.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            OPC Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹9,999/- INR</strong> (Exclude GST | GST Credit Available)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ 1 Director DIN + DSC</li>
            <li>✓ Name Approval of Company</li>
            <li>✓ MOA & AOA Drafting</li>
            <li>✓ Certificate of Incorporation</li>
            <li>✓ PAN & TAN</li>
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
      <ConsultationForm ref={formRef} />

      {/* ================= COMPLETE OPC CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              One Person Company Registration Online
            </h2>
            <p>
              OPC Registration can be done through the MCA portal, but it
              requires Digital Signature attestation from a Chartered
              Accountant, Company Secretary, or Lawyer. Hence, professional
              assistance is mandatory to register an OPC in India.
            </p>
          </div>

          {/* PROCESS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              One Person Company Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Apply for Digital Signature Certificate (DSC).</li>
              <li>Apply for Director Identification Number (DIN).</li>
              <li>Check OPC name availability on MCA portal.</li>
              <li>File SPICe (INC-32) with e-MOA & e-AOA.</li>
              <li>Apply for PAN & TAN along with incorporation.</li>
            </ol>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for OPC Registration
            </h2>

            <h4 className="font-semibold mt-4 mb-2">
              Individual Documents
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>PAN Card</li>
              <li>Aadhaar / Passport / Driving License</li>
              <li>Passport size photograph</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">
              Business Address Proof
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Electricity Bill + Rent Agreement / NOC / Sale Deed
              </li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of One Person Company
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Limited liability protection</li>
              <li>Complete ownership and control</li>
              <li>Better credibility than proprietorship</li>
              <li>Separate legal entity</li>
              <li>Easy conversion to Pvt Ltd later</li>
            </ul>
          </div>

          {/* OTHER FORMS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Alternative Business Structures
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Proprietorship Firm</li>
              <li>Partnership Firm</li>
              <li>Private Limited Company</li>
              <li>LLP Registration</li>
            </ul>
          </div>

          {/* TIME */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Time Required for OPC Registration
            </h2>
            <p>
              OPC Registration generally takes
              <strong> 7–10 working days</strong>, depending on document
              submission and MCA approvals.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              FAQ on OPC Registration
            </h2>
            <ul className="space-y-2">
              <li>✔ Only one director & shareholder required</li>
              <li>✔ Residential address allowed</li>
              <li>✔ Minimum age 18+</li>
              <li>✔ GST optional till threshold</li>
              <li>✔ Lifetime validity with compliance</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

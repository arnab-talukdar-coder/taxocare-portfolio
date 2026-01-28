import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function LLPRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is LLP?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            LLP (Limited Liability Partnership) is a business structure governed
            by the LLP Act, 2008. It combines the benefits of a partnership firm
            with limited liability protection for partners.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is LLP Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            LLP Registration is the legal process of forming a Limited Liability
            Partnership under MCA. Once registered, LLP can open a current bank
            account and operate as a separate legal entity.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            LLP Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹8,999/- INR</strong> (Exclude GST | GST Credit Available)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ 2 Partners DIN + DSC</li>
            <li>✓ Name Approval of LLP</li>
            <li>✓ LLP Agreement Drafting</li>
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

      {/* ================= COMPLETE LLP CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              LLP Registration Online
            </h2>
            <p>
              LLP Registration can be completed through the MCA portal, but it
              requires Digital Signature attestation from a Chartered
              Accountant, Company Secretary, or Lawyer. Hence, professional
              assistance is mandatory for LLP incorporation in India.
            </p>
          </div>

          {/* PROCESS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              LLP Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Apply for Digital Signature Certificate (DSC).</li>
              <li>Apply for Designated Partner Identification Number (DPIN).</li>
              <li>Check LLP name availability on MCA portal.</li>
              <li>File FiLLiP Form for LLP incorporation.</li>
              <li>Draft and file LLP Agreement.</li>
            </ol>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for LLP Registration
            </h2>

            <h4 className="font-semibold mt-4 mb-2">
              Partners’ Documents
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>PAN Card of Partners</li>
              <li>Aadhaar / Passport / Driving License</li>
              <li>Passport size photograph</li>
            </ul>

            <h4 className="font-semibold mt-6 mb-2">
              Business Address Proof
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Electricity Bill + Rent Agreement / NOC / Sale Deed</li>
            </ul>
          </div>

          {/* BENEFITS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Benefits of LLP Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Limited liability protection for partners</li>
              <li>No minimum capital requirement</li>
              <li>Lower compliance compared to companies</li>
              <li>Separate legal entity</li>
              <li>Suitable for professionals & startups</li>
            </ul>
          </div>

          {/* TIME */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Time Required for LLP Registration
            </h2>
            <p>
              LLP Registration generally takes
              <strong> 7–12 working days</strong>, depending on document
              verification and MCA approval.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              FAQ on LLP Registration
            </h2>
            <ul className="space-y-2">
              <li>✔ Minimum 2 partners required</li>
              <li>✔ Residential address allowed</li>
              <li>✔ No minimum capital required</li>
              <li>✔ GST optional till threshold</li>
              <li>✔ Lifetime validity with annual compliance</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

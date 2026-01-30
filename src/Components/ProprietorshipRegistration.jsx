import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function ProprietorshipRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is a Sole Proprietorship?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            A Sole Proprietorship is the simplest form of business where a single
            individual owns, manages, and controls the business. There is no
            separate legal identity between the proprietor and the business.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is Proprietorship Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Proprietorship Registration is the process of obtaining basic
            business registrations such as GST, MSME, and Shop & Establishment
            to legally operate a sole proprietorship in India.
          </p>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Proprietorship Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹2,999/- INR</strong> (Exclude GST | GST Extra if Applicable)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ GST Registration (if applicable)</li>
            <li>✓ MSME (Udyam) Registration</li>
            <li>✓ Shop & Establishment Registration</li>
            <li>✓ Current Account Assistance</li>
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
              Proprietorship Registration Online
            </h2>
            <p>
              Proprietorship Registration can be completed online with minimal
              documentation. Since it is not governed by a separate Act, multiple
              registrations act as proof of business existence.
            </p>
          </div>

          {/* PROCESS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Proprietorship Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3">
              <li>Choose a business name.</li>
              <li>Apply for MSME (Udyam) Registration.</li>
              <li>Apply for GST Registration (if required).</li>
              <li>Register under Shop & Establishment Act.</li>
              <li>Open a current bank account.</li>
            </ol>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Documents Required for Proprietorship Registration
            </h2>

            <h4 className="font-semibold mt-4 mb-2">
              Proprietor’s Documents
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>PAN Card of Proprietor</li>
              <li>Aadhaar Card</li>
              <li>Passport size photograph</li>
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
              Benefits of Proprietorship Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Easy and fast to start</li>
              <li>Lowest compliance cost</li>
              <li>Complete control with proprietor</li>
              <li>Ideal for freelancers & small traders</li>
              <li>Minimal legal formalities</li>
            </ul>
          </div>

          {/* TIME */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Time Required for Proprietorship Registration
            </h2>
            <p>
              Proprietorship Registration generally takes
              <strong> 2–5 working days</strong>, depending on registrations
              selected and document verification.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              FAQ on Proprietorship Registration
            </h2>
            <ul className="space-y-2">
              <li>✔ Only one owner allowed</li>
              <li>✔ No separate legal entity</li>
              <li>✔ No minimum capital required</li>
              <li>✔ GST optional till threshold</li>
              <li>✔ Best for startups & freelancers</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

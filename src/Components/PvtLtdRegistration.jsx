import { useRef } from "react";
import ConsultationForm from "../ConsultationForm";

export default function PvtLtdRegistration() {
  const formRef = useRef(null);

  return (
    <div className="bg-white">

      {/* ================= QUESTIONS SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-4">
            What is Private Limited Company Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-10">
            Private Limited Company Registration is one of the most popular legal
            entity types in India. It provides limited liability protection,
            separate legal identity, and ease of doing business. After incorporation,
            the company receives a CIN and Certificate of Incorporation from MCA.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            What is Pvt Ltd Company Registration Rules?
          </h2>
          <ul className="list-disc ml-6 text-slate-600 space-y-2">
            <li>Minimum 2 directors are required</li>
            <li>At least 1 director must be an Indian resident</li>
            <li>Authorized share capital starts from ₹1 lakh</li>
          </ul>

        </div>
      </section>

      {/* ================= FEES SECTION ================= */}
      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-6">
            Pvt Ltd Company Registration Fees
          </h2>

          <p className="mb-4">
            Pricing: <strong>₹10,999/- INR</strong> (Exclude GST | GST Credit Available)
          </p>

          <ul className="space-y-2 mb-8">
            <li>✓ 2 Directors DIN + DSC</li>
            <li>✓ Name Approval of Company</li>
            <li>✓ MOA & AOA Drafting</li>
            <li>✓ Certificate of Incorporation</li>
            <li>✓ PAN & TAN</li>
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
      <ConsultationForm  ref={formRef}/>

      {/* ================= COMPLETE PRIVATE LTD CONTENT ================= */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 space-y-24 text-slate-700 leading-relaxed">

    {/* INTRO */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Pvt Ltd Company Registration Online
      </h2>
      <p>
        Pvt Ltd Company Registration Online is possible through the official MCA
        Government website. However, you cannot complete the Private Limited
        Company Registration yourself because it requires Digital Signature
        attestation from a Practicing Chartered Accountant, Company Secretary, or
        Lawyer. This means you must hire a professional CA to complete the Pvt
        Ltd Company Registration in India.
      </p>
    </div>

    {/* PROCESS */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Private Limited Company Registration Process
      </h2>
      <p className="mb-4">
        Simple 5 Steps Process to Register Your Private Limited Company in India
      </p>
      <ol className="list-decimal ml-6 space-y-3">
        <li>
          Apply for Digital Signature Certificate (DSC) for all proposed directors.
        </li>
        <li>
          Apply for Director Identification Number (DIN) for all directors.
        </li>
        <li>
          Check Private Limited Company name availability on the MCA portal and
          apply for name approval using the RUN Form.
        </li>
        <li>
          After name approval, proceed with SPICe (INC-32) incorporation along
          with e-MOA and e-AOA.
        </li>
        <li>
          Apply for PAN and TAN, which are issued with the Certificate of
          Incorporation.
        </li>
      </ol>
    </div>

    {/* DOCUMENTS */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Documents Required for Private Limited Company Registration
      </h2>

      <h4 className="font-semibold mt-4 mb-2">
        Directors’ Personal Documents
      </h4>
      <ul className="list-disc ml-6 space-y-2">
        <li>PAN Card copy of Directors</li>
        <li>
          Aadhaar Card / Voter ID / Passport / Driving License (any one)
        </li>
        <li>Passport size photograph</li>
      </ul>

      <h4 className="font-semibold mt-6 mb-2">
        Company Level Documents
      </h4>
      <ul className="list-disc ml-6 space-y-2">
        <li>
          Business address proof (Electricity Bill) with NOC / Rent Agreement /
          Sale Deed
        </li>
      </ul>
    </div>

    {/* BENEFITS */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Benefits of Private Limited Company Registration
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Easy to set up and recommended for growing startups</li>
        <li>Limited liability protection for members</li>
        <li>More credibility compared to other entities</li>
        <li>Easy to raise funds from investors</li>
        <li>ESOP options available for employees</li>
        <li>Company name protection</li>
      </ul>
    </div>

    {/* NAME AVAILABILITY */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Pvt Ltd Company Registration Name Availability
      </h2>
      <p>
        A Private Limited Company must have a unique name. Once registered with
        MCA, no other company can use the same name. You need to provide 3–4
        proposed names during the approval process, which are checked and
        approved as per MCA naming guidelines.
      </p>
    </div>

    {/* OTHER FORMS */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Different Forms of Online Pvt Ltd Company Registration
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Proprietorship Firm</li>
        <li>Partnership Firm</li>
        <li>OPC Registration</li>
        <li>LLP Registration</li>
      </ul>
    </div>

    {/* COST */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Cost Involved in Private Limited Company Registration
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>2 Digital Signatures (₹1000 × 2): ₹2000</li>
        <li>DIN (₹500 × 2): ₹1000</li>
        <li>Stamp Duty (Approx): ₹2500</li>
        <li>Notary Fees: ₹1000</li>
        <li>Government Fees (RUN + PAN + TAN): ₹1200</li>
        <li>Professional Fees: ₹3000–5000</li>
      </ul>
    </div>

    {/* TIME */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        How Much Time Does Pvt Ltd Registration Take?
      </h2>
      <p>
        There is no fixed timeline. DSC & DIN take 1–2 days, name approval takes
        2–3 days, and the overall registration process usually completes within
        <strong> 10–15 days</strong>.
      </p>
    </div>

    {/* FAQ */}
    <div>
      <h2 className="text-2xl font-semibold mb-6">
        FAQ on Private Limited Company Registration
      </h2>
      <ul className="space-y-2">
        <li>✔ Company can be registered at residential address</li>
        <li>✔ Family members can be directors</li>
        <li>✔ Minimum age to become director is 18+</li>
        <li>✔ GST registration optional till ₹20 lakh turnover</li>
        <li>✔ Lifetime validity subject to compliance</li>
        <li>✔ NRIs and foreign nationals allowed</li>
      </ul>
    </div>

    {/* STEPS */}
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        How to Register a Pvt Ltd Company in India
      </h2>
      <ol className="list-decimal ml-6 space-y-2">
        <li>Apply for DSC</li>
        <li>Apply for DIN</li>
        <li>Apply for Name Approval</li>
        <li>File eMOA and eAOA</li>
        <li>Apply for PAN and TAN</li>
        <li>Receive Certificate of Incorporation</li>
        <li>Open a Current Bank Account</li>
      </ol>
    </div>

  </div>
</section>


    </div>
  );
}


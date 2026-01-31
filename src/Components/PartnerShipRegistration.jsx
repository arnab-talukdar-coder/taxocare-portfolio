


export default function PartnershipRegistration() {


  return (
    <div className="bg-slate-100">

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Partnership Firm Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Start your partnership business with proper legal documentation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is a Partnership Firm?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Partnership Firm is formed when two or more persons agree to
              carry on a business and share profits as per a partnership deed.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-blue-700">
              <li>Draft Partnership Deed</li>
              <li>Execute on stamp paper</li>
              <li>Apply for PAN</li>
              <li>Register with Registrar (optional)</li>
            </ol>
          </div>

        </div>
      </section>
    </div>
  );
}

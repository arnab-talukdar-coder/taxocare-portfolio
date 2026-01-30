


export default function MSMERegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            MSME Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Get your Udyam Registration certificate and unlock government benefits.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is MSME Registration?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              MSME (Udyam) Registration is a government registration for micro,
              small, and medium enterprises to avail financial benefits, subsidies,
              and priority lending.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Benefits of MSME Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Government subsidies & schemes</li>
              <li>Collateral-free loans</li>
              <li>Lower interest rates</li>
              <li>Protection against delayed payments</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

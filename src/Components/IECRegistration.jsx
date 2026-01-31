


export default function IECRegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            IEC Code Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Start your import-export business legally with IEC registration.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is IEC Code?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              IEC (Import Export Code) is a mandatory 10-digit code issued by
              DGFT required for businesses engaged in international trade.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Benefits of IEC Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Global trade eligibility</li>
              <li>Access to export incentives</li>
              <li>Lifetime validity</li>
              <li>No return filing required</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

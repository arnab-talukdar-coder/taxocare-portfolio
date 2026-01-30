


export default function LLPAnnualFiling() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            LLP Annual Filing
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Complete your LLP compliance on time and avoid heavy penalties.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is LLP Annual Filing?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              LLPs must file Form 8 and Form 11 annually with the Ministry of
              Corporate Affairs under the LLP Act, 2008.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Forms Required
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Form 8 – Statement of Accounts</li>
              <li>Form 11 – Annual Return</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

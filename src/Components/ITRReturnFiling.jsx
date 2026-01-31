


export default function ITRReturnFiling() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Income Tax Return Filing
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            File your Income Tax Return accurately and on time.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is Income Tax Return?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Income Tax Return (ITR) is a form through which individuals and
              businesses report their income and tax liability to the Income Tax Department.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Types of ITR Forms
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>ITR-1 – Salaried Individuals</li>
              <li>ITR-2 – Capital Gains & Other Income</li>
              <li>ITR-3 / ITR-4 – Business & Professionals</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

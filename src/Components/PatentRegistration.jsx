


export default function PatentRegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Patent Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Secure exclusive rights over your invention with patent protection.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is a Patent?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Patent is an exclusive right granted for an invention that
              provides a new technical solution or innovation.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Benefits of Patent Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>20 years protection</li>
              <li>Exclusive commercial rights</li>
              <li>Prevents unauthorized use</li>
              <li>Competitive advantage</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

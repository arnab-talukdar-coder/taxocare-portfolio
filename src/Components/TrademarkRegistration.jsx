


export default function TrademarkRegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Trademark Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Protect your brand name and logo with legal trademark registration.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is a Trademark?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Trademark is a unique symbol, logo, or brand name that identifies
              and distinguishes your goods or services from others.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Benefits of Trademark Registration
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Exclusive ownership rights</li>
              <li>Legal protection</li>
              <li>Nationwide validity</li>
              <li>Brand value enhancement</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

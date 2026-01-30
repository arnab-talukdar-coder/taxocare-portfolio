


export default function GumastaLicense() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Gumasta License Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Obtain your municipal Gumasta license to operate legally in Maharashtra.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is Gumasta License?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Gumasta License is a local municipal registration required to operate
              a business in certain states like Maharashtra.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Benefits of Gumasta License
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Legal recognition of business</li>
              <li>Required for bank account opening</li>
              <li>Required for local compliance</li>
              <li>Business credibility</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

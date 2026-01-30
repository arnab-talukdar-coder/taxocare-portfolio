


export default function ShopRegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Shop & Establishment Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Register your shop or commercial establishment legally under state law.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is Shop Registration?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Shop & Establishment Registration is mandatory for businesses
              operating from a commercial or residential premise to regulate
              working hours, wages, and employment conditions.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Documents Required
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>PAN & Aadhaar of owner</li>
              <li>Address proof of business</li>
              <li>Rent agreement or property papers</li>
              <li>Passport size photo</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

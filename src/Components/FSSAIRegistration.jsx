


export default function FSSAIRegistration() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            FSSAI Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Obtain your FSSAI license and run your food business legally.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is FSSAI?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              FSSAI Registration is mandatory for food-related businesses to ensure
              food safety and compliance under the Food Safety Act.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Types of FSSAI License
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Basic Registration</li>
              <li>State License</li>
              <li>Central License</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

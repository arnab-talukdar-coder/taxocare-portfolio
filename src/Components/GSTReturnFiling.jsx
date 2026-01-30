


export default function GSTReturnFiling() {


  return (
    <div className="bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            GST Return Filing
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            File your GST returns accurately and avoid penalties.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is GST Return Filing?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              GST Return Filing is the process of reporting sales, purchases,
              tax collected, and tax paid to the GST department.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Types of GST Returns
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>GSTR-1 – Sales Return</li>
              <li>GSTR-3B – Monthly Summary</li>
              <li>Nil Return</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}

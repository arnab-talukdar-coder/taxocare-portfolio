


export default function ProprietorshipRegistration() {


  return (
    <div className="bg-slate-100">

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Proprietorship Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Start your sole proprietorship with simple registration support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is Proprietorship?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A Sole Proprietorship is the simplest business structure owned
              and managed by a single individual.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-blue-700">
              <li>Choose business name</li>
              <li>Apply for GST (if required)</li>
              <li>Apply for MSME</li>
              <li>Open current account</li>
            </ol>
          </div>

        </div>
      </section>
    </div>
  );
}

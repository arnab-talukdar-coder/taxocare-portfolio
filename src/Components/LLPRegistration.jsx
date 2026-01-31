


export default function LLPRegistration() {


  return (
    <div className="bg-slate-100">

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            LLP Registration
          </h1>
          <p className="text-blue-100 max-w-3xl mx-auto">
            Register your Limited Liability Partnership with expert compliance support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              What is LLP?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              LLP (Limited Liability Partnership) is a hybrid business structure
              combining partnership flexibility with limited liability protection.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              LLP Registration Process
            </h2>
            <ol className="list-decimal ml-6 space-y-3 text-slate-700 marker:text-blue-700">
              <li>Apply for DSC & DPIN</li>
              <li>Name Reservation (RUN-LLP)</li>
              <li>File FiLLiP form</li>
              <li>Draft LLP Agreement</li>
              <li>Receive Incorporation Certificate</li>
            </ol>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              Benefits of LLP
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li>Limited liability protection</li>
              <li>Lower compliance than Pvt Ltd</li>
              <li>Flexible profit sharing</li>
              <li>Separate legal entity</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
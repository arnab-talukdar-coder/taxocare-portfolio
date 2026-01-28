import React, { forwardRef, useRef } from "react";

const ConsultationForm = forwardRef((props, ref) => {
  const localRef = useRef(null);

  return (
    <div
      ref={(node) => {
        localRef.current = node;
        if (ref) ref.current = node;
      }}
      className="w-full max-w-md bg-white rounded-lg shadow-lg px-6 py-6"
    >
      <h2 className="text-center text-lg font-semibold mb-6">
        📅 Book Free Consultation
      </h2>

      <form className="space-y-4">
        {/* NAME */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Full name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Email address"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile number"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Support Category
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-slate-700">
            {[
              "Company Registration",
              "GST Related",
              "Income Tax Return",
              "MSME / Udyam",
              "Trademark",
              "FSSAI",
              "Annual Filing",
              "Others",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input type="radio" name="category" />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* QUERY */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Query
          </label>
          <textarea
            rows="3"
            className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="Your query (optional)"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md transition text-sm"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
});

export default ConsultationForm;




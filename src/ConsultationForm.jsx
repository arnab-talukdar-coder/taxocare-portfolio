import React, { forwardRef, useRef, useEffect, useState } from "react";

const ConsultationForm = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // trigger when 30% visible
      }
    );

    if (localRef.current) observer.observe(localRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={(node) => {
        localRef.current = node;
        if (ref) ref.current = node;
      }}
      className={`
        w-full max-w-md bg-white rounded-lg shadow-lg px-5 py-4
        transform transition-all duration-700 ease-out
        ${visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"}
      `}
    >
      <h2 className="text-center text-base font-semibold mb-4">
        📅 Book Free Consultation
      </h2>

      <form className="space-y-3 text-sm">
        {/* NAME */}
        <div>
          <label className="block font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="w-full border rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
            placeholder="Full name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            className="w-full border rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
            placeholder="Email address"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block font-medium mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            className="w-full border rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile number"
          />
        </div>

        {/* CATEGORY */}
        <div>
          <label className="block font-medium mb-1">
            Support Category
          </label>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-700">
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
          <label className="block font-medium mb-1">
            Query
          </label>
          <textarea
            rows="2"
            className="w-full border rounded-md px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
            placeholder="Your query (optional)"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
});

export default ConsultationForm;








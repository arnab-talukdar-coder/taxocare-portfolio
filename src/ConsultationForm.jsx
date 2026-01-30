import React, { forwardRef, useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const ConsultationForm = forwardRef((props, ref) => {
  const localRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("lGcpreracDnp5B7YE"); // Replace with your EmailJS public key
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (localRef.current) observer.observe(localRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(formRef.current);
      const category = formData.get("category") || "Not selected";

      await emailjs.send(
        "YOUR_SERVICE_ID_HERE", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your EmailJS template ID
        {
          to_email: "consultant@email.com", // Your business email
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          phone: formData.get("phone"),
          category: category,
          message: formData.get("query"),
        }
      );

      setMessage("✅ Consultation request sent successfully!");
      formRef.current.reset();
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Email error:", error);
      setMessage("❌ Failed to send. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="home From"
      ref={(node) => {
        localRef.current = node;
        if (ref) ref.current = node;
      }}
      className={`
        w-full max-w-md bg-white rounded-xl
        shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)]
        hover:shadow-[0_35px_90px_-20px_rgba(15,23,42,0.45)]
        px-5 py-4
        transform transition-all duration-700 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }
      `}
    >
      <h2 className="text-center text-base font-semibold mb-4">
         Book Free Consultation
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 text-sm">
        {/* NAME */}
        <div>
          <label className="block font-medium mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            required
            className="w-full border rounded-md px-3 py-1.5
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Full name"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="block font-medium mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full border rounded-md px-3 py-1.5
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email address"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="block font-medium mb-1">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            required
            className="w-full border rounded-md px-3 py-1.5
              focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                <input type="radio" name="category" value={item} />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* QUERY */}
        <div>
          <label className="block font-medium mb-1">Query</label>
          <textarea
            name="query"
            rows="2"
            className="w-full border rounded-md px-3 py-1.5
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your query (optional)"
          />
        </div>

        {/* STATUS MESSAGE */}
        {message && (
          <div className={`text-center text-sm py-2 rounded ${
            message.includes("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}>
            {message}
          </div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400
            text-white font-semibold py-2 rounded-md transition"
        >
          {loading ? "SENDING..." : "SUBMIT"}
        </button>
      </form>
    </div>
  );
});

ConsultationForm.displayName = "ConsultationForm";

export default ConsultationForm;
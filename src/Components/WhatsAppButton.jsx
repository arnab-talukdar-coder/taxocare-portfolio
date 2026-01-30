export default function WhatsAppButton() {
    const phoneNumber = "919883804092"; // <-- your WhatsApp number (with country code)
    const message = "Hi TaxoCare! I came across your website and would like to know more about your tax and business services.Please help me with the details.";
  
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999]
                   flex items-center gap-2
                   bg-green-500 hover:bg-green-600
                   text-white px-4 py-3 rounded-full
                   shadow-lg transition"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-5 h-5"
        />
        <span className="hidden sm:inline font-medium">
          WhatsApp Chat Here
        </span>
      </a>
    );
  }
  
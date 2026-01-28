export default function WhatsAppButton() {
    const phoneNumber = "919999999999"; // <-- your WhatsApp number (with country code)
    const message = "Hello, I want consultation for business registration";
  
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
  
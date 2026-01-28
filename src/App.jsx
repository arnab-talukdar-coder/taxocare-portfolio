import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import PvtLtdRegistration from "./Components/PvtLtdRegistration";
import OPCRegistration from "./Components/OPCRegistration";
import LLPRegistration from "./Components/LLPRegistration";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";

function AppLayout() {
  const location = useLocation();

  // ✅ show WhatsApp only on Home page
  const showWhatsApp = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/pvt-ltd-company-registration"
          element={<PvtLtdRegistration />}
        />
        <Route path="/opc-registration" element={<OPCRegistration />} />
        <Route path="/llp-registration" element={<LLPRegistration />} />
      </Routes>

      {showWhatsApp && <WhatsAppButton />}

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PvtLtdRegistration from "./Components/PvtLtdRegistration";
import OPCRegistration from "./Components/OPCRegistration";
import LLPRegistration from "./Components/LLPRegistration";
import PartnershipRegistration from "./Components/PartnershipRegistration";
import ProprietorshipRegistration from "./Components/ProprietorshipRegistration";

import MSMERegistration from "./Components/MSMERegistration";
import IECRegistration from "./Components/IECRegistration";
import FSSAIRegistration from "./Components/FSSAIRegistration";
import ShopRegistration from "./Components/ShopRegistration";
import GumastaLicense from "./Components/GumastaLicense";

import GSTRegistration from "./Components/GSTRegistration";
import GSTReturnFiling from "./Components/GSTReturnFiling";

import CompanyAnnualFiling from "./Components/CompanyAnnualFiling";
import LLPAnnualFiling from "./Components/LLPAnnualFiling";
import ITRReturnFiling from "./Components/ITRReturnFiling";

import TrademarkRegistration from "./Components/TrademarkRegistration";
import PatentRegistration from "./Components/PatentRegistration";
import TermsOfUse from "./Components/TermsOfUse";
import PrivacyPolicy from "./Components/PrivacyPolicy";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsAppButton from "./Components/WhatsAppButton";
import ContactUs from "./Components/ContactUs";

function AppLayout() {
  

  // ✅ show WhatsApp only on Home page
  const showWhatsApp = true;

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
        <Route
          path="/partnership-registration"
          element={<PartnershipRegistration />}
        />
        <Route
          path="/proprietorship-registration"
          element={<ProprietorshipRegistration />}
        />
        <Route path="/msme-registration" element={<MSMERegistration />} />
        <Route path="/iec-registration" element={<IECRegistration />} />
        <Route path="/fssai-registration" element={<FSSAIRegistration />} />
        <Route path="/shop-registration" element={<ShopRegistration />} />
        <Route path="/gumasta-license" element={<GumastaLicense />} />
        <Route path="/gst-registration" element={<GSTRegistration />} />
        <Route path="/gst-return-filing" element={<GSTReturnFiling />} />
        <Route
          path="/company-annual-filing"
          element={<CompanyAnnualFiling />}
        />
        <Route path="/llp-annual-filing" element={<LLPAnnualFiling />} />
        <Route path="/itr-return-filing" element={<ITRReturnFiling />} />
        <Route
          path="/trademark-registration"
          element={<TrademarkRegistration />}
        />
        <Route path="/patent-registration" element={<PatentRegistration />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
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

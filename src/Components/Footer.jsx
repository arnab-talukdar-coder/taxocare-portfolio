import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300">
      <div className="max-w-[1560px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* COLUMN 1 */}
        <div className="space-y-10">
          {" "}
          {/* BUSINESS REGISTRATION */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Business Registration
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/pvt-ltd-company-registration"
                  className="hover:text-white"
                >
                  › Pvt Ltd Company Registration
                </Link>
              </li>
              <li>
                <Link to="/opc-registration" className="hover:text-white">
                  › OPC Registration
                </Link>
              </li>
              <li>
                <Link to="/llp-registration" className="hover:text-white">
                  › LLP Registration
                </Link>
              </li>
              <li>
                <a
                  href="/partnership-registration"
                  className="hover:text-white"
                >
                  › Partnership Registration
                </a>
              </li>
              <li>
                <a
                  href="/proprietorship-registration"
                  className="hover:text-white"
                >
                  › Proprietorship Registration
                </a>
              </li>
            </ul>
          </div>
          {/* GST PORTAL */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              GST Portal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/gst-registration" className="hover:text-white">
                  › GST Registration
                </Link>
              </li>
              <li>
                <Link to="/gst-return-filing" className="hover:text-white">
                  › GST Return Filing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-10">
          {/* OTHER LEGAL REGISTRATION */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Other Legal Registration
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/msme-registration" className="hover:text-white">
                  › MSME Registration
                </Link>
              </li>
              <li>
                <Link to="/iec-registration" className="hover:text-white">
                  › IEC Code Registration
                </Link>
              </li>
              <li>
                <Link to="/fssai-registration" className="hover:text-white">
                  › FSSAI Registration
                </Link>
              </li>
              <li>
                <Link to="/shop-registration" className="hover:text-white">
                  › Shop Registration
                </Link>
              </li>
              <li>
                <Link to="/gumasta-license" className="hover:text-white">
                  › Gumasta License
                </Link>
              </li>
            </ul>
          </div>

          {/* ANNUAL SERVICE */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Annual Service
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company-annual-filing" className="hover:text-white">
                  › Company Annual Filing
                </Link>
              </li>
              <li>
                <Link to="/llp-annual-filing" className="hover:text-white">
                  › LLP Annual Filing
                </Link>
              </li>
              <li>
                <Link to="/itr-return-filing" className="hover:text-white">
                  › Income Tax Return
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-10">
          {/* SUPPORT */}
          {/* IPR SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              IPR Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/trademark-registration" className="hover:text-white">
                  › Trademark Registration
                </Link>
              </li>
              <li>
                <Link to="/patent-registration" className="hover:text-white">
                  › Patent Registration
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/contact" className="hover:text-white">
                  › Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Download the App
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Payment Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Blog Guide
                </a>
              </li>
            </ul>
          </div> */}

          {/* COMPANY */}
          {/* <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  › About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Join Us : Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Affiliate Programme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › MyOnlineCA Franchise Partner
                </a>
              </li>
            </ul>
          </div> */}
           {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms-of-use" className="hover:text-white">
                  › Terms of Use
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-white">
                  › Privacy Policy
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white">
                  › Refund Policy
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* COLUMN 4 */}
        <div className="space-y-10">
          {/* Map */}
          <div className="relative w-full h-66 rounded-lg overflow-hidden border border-slate-700">
            {/* CLICK OVERLAY */}
            <a
              href="https://www.google.com/maps?q=22.7079468,88.473587"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-27"
            >
              <span className="sr-only">Open map</span>
            </a>

            {/* MAP */}
            <iframe
              title="TaxoCare Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.3782968227646!2d88.4710121!3d22.7079468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzI4LjYiTiA4OMKwMjgnMjQuOSJF!5e0!3m2!1sen!2sin!4v1706530000000"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-700 text-center py-4 text-sm">
        © 2026 TaxoCare. All Rights Reserved.
      </div>
    </footer>
  );
}

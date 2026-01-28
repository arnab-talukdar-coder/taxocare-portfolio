import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-[1560px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* COLUMN 1 */}
        <div className="space-y-10">
          {" "}
          ` `{/* BUSINESS REGISTRATION */}
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
                <a href="#" className="hover:text-white">
                  › Partnership Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
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
                <a href="#" className="hover:text-white">
                  › GST Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › GST Return Filing
                </a>
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
                <a href="#" className="hover:text-white">
                  › MSME Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › IEC Code Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › FSSAI Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Shop Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Gumasta License
                </a>
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
                <a href="#" className="hover:text-white">
                  › Company Annual Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › LLP Annual Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Income Tax Return
                </a>
              </li>
            </ul>
          </div>

          {/* IPR SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              IPR Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  › Trademark Registration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Patent Registration
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-10">
          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
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
          </div>

          {/* COMPANY */}
          <div>
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
          </div>
        </div>

        {/* COLUMN 4 */}
        <div className="space-y-10">
          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold mb-3 uppercase text-sm">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  › Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  › Refund Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Map */}
          <div className="w-full h-56 rounded-lg overflow-hidden border border-slate-700">
            <iframe
              title="TaxoCare Location"
              src="https://www.google.com/maps?q=New%20York%20City&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h4 className="text-lg font-semibold mb-2">ByteBub</h4>
          <p className="text-gray-400 text-sm">Modern digital engineering & product teams.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-blue-600">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="hover:text-blue-600">Refund Policy</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-300 text-sm">
            📧 <a href="mailto:contact.bytebub@grtengg.co.in" className="hover:text-blue-600">contact.bytebub@grtengg.co.in</a>
          </p>
          <p className="text-gray-300 text-sm mt-2">📞 +91-8073343628</p>
          <p className="text-gray-300 text-sm mt-2">📍 Bengaluru, India</p>
        </div>
      </div>
      <div className="border-t border-gray-800/50 text-center py-4 text-sm">
        © 2025 ByteBub. All rights reserved.
      </div>
    </footer>
  );
}

import React from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { ShueLogoLight } from "@/assets/icons/Logo";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <ShueLogoLight size="lg" />
            <ul className="space-y-2 mt-10">
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  About Us
                  <ComingSoonBadge />
                </span>
              </li>
              <li>
                <a
                  href="#trust"
                  className="hover:text-brand-green transition-colors"
                >
                  Trust &amp; Safety
                </a>
              </li>
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  Privacy Policy
                  <ComingSoonBadge />
                </span>
              </li>
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  Terms of Service
                  <ComingSoonBadge />
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Marketplace</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#categories"
                  className="hover:text-brand-green transition-colors"
                >
                  Shop Shoes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-green transition-colors"
                >
                  Become a Seller
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-brand-green transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  Support
                  <ComingSoonBadge />
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  Blog
                  <ComingSoonBadge />
                </span>
              </li>
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  Help Center
                  <ComingSoonBadge />
                </span>
              </li>
              <li>
                <span
                  title="Coming soon"
                  className="text-white/50 cursor-not-allowed flex items-center"
                >
                  How We Verify Sellers
                  <ComingSoonBadge />
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <span
                title="Coming soon"
                className="text-white/30 cursor-not-allowed"
              >
                <MessageCircle size={24} />
              </span>
              <span
                title="Coming soon"
                className="text-white/30 cursor-not-allowed"
              >
                <Mail size={24} />
              </span>
              <span
                title="Coming soon"
                className="text-white/30 cursor-not-allowed"
              >
                <Phone size={24} />
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p>&copy; 2026 ShueApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

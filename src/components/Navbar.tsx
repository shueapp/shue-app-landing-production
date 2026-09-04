import { ShueLogo } from "@/assets/icons/Logo";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-brand-dark sticky top-0 z-50 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShueLogo size="md" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#categories"
                className="hover:text-brand-green transition-colors"
              >
                Shop Shoes
              </a>
              <a
                href="#how-it-works"
                className="hover:text-brand-green transition-colors"
              >
                How It Works
              </a>
              <a
                href="#trust"
                className="hover:text-brand-green transition-colors"
              >
                Trust &amp; Safety
              </a>
              <a
                href="#contact"
                className="hover:text-brand-green transition-colors"
              >
                Sell With Us
              </a>
              <a
                href="#contact"
                className="hover:text-brand-green transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <button
            type="button"
            title="Coming soon"
            className="bg-brand-green/60 text-brand-dark/70 px-4 py-2 rounded-full font-semibold cursor-not-allowed flex items-center"
          >
            Get Started
            <ComingSoonBadge />
          </button>
        </div>
      </div>
    </nav>
  );
};

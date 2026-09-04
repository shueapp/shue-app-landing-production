import React from "react";
import { CheckCircle, Phone, Mail } from "lucide-react";
import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const FinalCTA = () => {
  return (
    <section
      className="py-20 bg-brand-dark text-white border-t border-white/10"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Find Your Next Pair?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Join a growing community of shoe lovers buying and selling with
          verified, trustworthy people. No guesswork required.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">What You Get</h3>
            <ul
              className="space-y-2 mx-auto"
              style={{ display: "inline-block" }}
            >
              {[
                "Every seller is ID-verified before they can sell",
                "You're covered on every order",
                "Secure in-app payments, no transfers to strangers",
                "Delivery tracking wherever you are",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center justify-center">
                  <CheckCircle
                    className="text-brand-green mr-2 flex-shrink-0"
                    size={20}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Say Hi</h3>
            <div
              className="space-y-3 mx-auto"
              style={{ display: "inline-block" }}
            >
              <div className="flex items-center justify-center">
                <Phone className="mr-3" size={20} />
                <span>WhatsApp: +1 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-3" size={20} />
                <span>hello@shueapp.com</span>
              </div>
              <p className="mt-4">Got questions? We&apos;re happy to help!</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            title="Coming soon"
            className="bg-brand-green/60 text-brand-dark/70 px-6 py-3 rounded-full font-bold cursor-not-allowed flex items-center justify-center"
          >
            Start Shopping
            <ComingSoonBadge />
          </button>
          <button
            type="button"
            title="Coming soon"
            className="bg-transparent border-2 border-white/40 text-white/60 px-6 py-3 rounded-full font-bold cursor-not-allowed flex items-center justify-center"
          >
            Sell Your Shoes
            <ComingSoonBadge />
          </button>
        </div>
      </div>
    </section>
  );
};

"use client";

import { ComingSoonBadge } from "@/components/ComingSoonBadge";

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-brand-dark border-t border-white/10" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Getting Your Next Pair Is This Easy
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-brand-dark font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Browse Verified Sellers
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Every seller carries a verified badge</li>
                <li>• Filter by shoe type, size, brand, and price</li>
                <li>• See real photos and seller ratings up front</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">
                    Search Results
                  </div>
                  <div className="space-y-2">
                    <div className="bg-brand-green text-brand-dark px-4 py-2 rounded-lg font-medium flex items-center justify-between">
                      <span>Nike Air Max · Size 42</span>
                      <span className="text-xs">✓ Verified</span>
                    </div>
                    <div className="bg-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-between">
                      <span>Oxford Leather · Size 44</span>
                      <span className="text-xs">✓ Verified</span>
                    </div>
                    <div className="bg-white/10 text-white px-4 py-2 rounded-lg flex items-center justify-between">
                      <span>Adidas Slides · Size 40</span>
                      <span className="text-xs">✓ Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-brand-dark font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Pick Your Pair
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Add to cart or message the seller directly</li>
                <li>• Check size guides and the seller&apos;s return policy</li>
                <li>• Compare similar pairs across verified sellers</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Your Cart</div>
                  <div className="space-y-3">
                    <div className="bg-white/10 border border-white/10 rounded-lg p-3">
                      <div className="font-medium text-white">
                        Nike Air Max · Size 42
                      </div>
                      <div className="text-sm text-gray-400">₦85,000</div>
                      <div className="text-sm text-brand-green">
                        Sold by a Verified Seller
                      </div>
                    </div>
                    <div className="bg-white/10 border border-white/10 rounded-lg p-3">
                      <div className="font-medium text-white">
                        Adidas Slides · Size 40
                      </div>
                      <div className="text-sm text-gray-400">₦18,000</div>
                      <div className="text-sm text-brand-green">
                        Sold by a Verified Seller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center text-brand-dark font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Pay Safely &amp; Track Your Order
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li>• Pay in-app so your money&apos;s protected until it arrives</li>
                <li>• Track your order from the seller to your door</li>
                <li>• Confirm receipt or request a return in one tap</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">
                    Order #SHU-1042
                  </div>
                  <div className="space-y-2 text-white">
                    <div className="flex justify-between">
                      <span>Nike Air Max · Size 42</span>
                      <span>₦85,000</span>
                    </div>
                    <div className="border-t border-white/10 pt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₦85,000</span>
                      </div>
                    </div>
                    <button className="w-full bg-brand-green text-brand-dark py-2 rounded-full font-medium mt-3">
                      Pay Safely
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            type="button"
            title="Coming soon"
            className="bg-brand-green/60 text-brand-dark/70 px-6 py-3 rounded-full font-bold cursor-not-allowed inline-flex items-center"
          >
            Start Shopping
            <ComingSoonBadge />
          </button>
        </div>
      </div>
    </section>
  );
};

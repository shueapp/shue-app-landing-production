"use client";

import { useState } from "react";
import { CheckCircle, Footprints } from "lucide-react";

export const IndustrySpecific = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      title: "Sneakers",
      features: [
        "Authenticity checks on every listing",
        "Filter by brand, size, and colorway",
        "Limited-edition and everyday releases",
        "Verified seller ratings on every pair",
      ],
    },
    {
      title: "Formal & Office Shoes",
      features: [
        "Leather, suede, and synthetic options",
        "Sizes for men and women",
        "Bulk orders for offices and events",
        "Return window on wrong sizes",
      ],
    },
    {
      title: "Sports & Athletic",
      features: [
        "Running, football, and training shoes",
        "Verified sizing charts per seller",
        "Bundle deals from top-rated sellers",
        "Fast delivery tracking",
      ],
    },
    {
      title: "Sandals & Slides",
      features: [
        "Everyday and designer options",
        "Kids, men, and women sizes",
        "Budget-friendly verified sellers",
        "Easy swaps if the fit is off",
      ],
    },
  ];

  return (
    <section className="py-20 bg-brand-dark border-t border-white/10" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Whatever You&apos;re Into, We&apos;ve Got the Shoe
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center bg-white/5 border border-white/10 p-1 rounded-full gap-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeTab === index
                    ? "bg-brand-green text-brand-dark"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Card */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <div className="md:flex">
            {/* Features */}
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {categories[activeTab].title}
              </h3>
              <ul className="space-y-3">
                {categories[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle
                      className="text-brand-green mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <div className="md:w-1/2 relative h-80 md:h-auto bg-brand-green/10 flex items-center justify-center">
              <Footprints className="text-brand-green" size={96} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

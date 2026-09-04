import React from "react";
import { CheckCircle, ShieldCheck, BadgeCheck, Footprints } from "lucide-react";

export const Solution = () => {
  const columns = [
    {
      title: "Verified Sellers Only",
      icon: BadgeCheck,
      items: [
        "ID verification for every seller",
        "Business details checked before they can list",
        "Real ratings and reviews from real buyers",
        "Fakes and no-shows get delisted, fast",
      ],
    },
    {
      title: "Shop Without the Stress",
      icon: ShieldCheck,
      items: [
        "You're covered on every order",
        "Pay securely in-app, not through random bank transfers",
        "Real photos required for every listing",
        "Easy returns if something's off",
      ],
    },
    {
      title: "Just for Shoe Lovers",
      icon: Footprints,
      items: [
        "Sneakers, boots, heels, sandals, and more",
        "Filter by size, brand, and condition",
        "No digging through unrelated categories",
        "Built for people who actually love shoes",
      ],
    },
  ];

  return (
    <section className="py-20 bg-brand-dark border-t border-white/10" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {columns.map((column, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <div className="bg-brand-green/10 text-brand-green p-3 rounded-full inline-flex mb-4">
                <column.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle
                      className="mr-2 mt-1 flex-shrink-0 text-brand-green"
                      size={16}
                    />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#how-it-works"
            className="inline-block bg-brand-green text-brand-dark px-6 py-2.5 rounded-full font-semibold hover:bg-green-500 transition-colors"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

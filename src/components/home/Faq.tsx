import React from "react";

export const Faq = () => {
  const faqs = [
    {
      question: 'What does "verified" actually mean?',
      answer:
        "Every seller submits a valid ID and business details before they're approved to list shoes. Verified sellers carry a badge on their profile, so you always know who you're buying from.",
    },
    {
      question: "How do I start selling shoes?",
      answer:
        "Sign up, verify your ID and a few business details, and you're set. Once you're approved, you can start listing shoes right away.",
    },
    {
      question: "Is browsing and buying free?",
      answer:
        "Yes, always. Only sellers pay a small fee to list and sell on ShueApp. Shopping never costs you anything extra.",
    },
    {
      question: "How does payment protection work?",
      answer:
        "Your payment is held safely in-app and only released to the seller once your order is confirmed delivered, so you never have to send money directly to a stranger.",
    },
    {
      question: "Do you deliver nationwide?",
      answer:
        "Yes! Sellers ship across the country, and every order comes with delivery tracking from checkout to your doorstep.",
    },
  ];

  return (
    <section className="py-20 bg-brand-dark border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got Questions? We&apos;ve Got Answers
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10 pb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

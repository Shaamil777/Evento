import React from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How can I book the auditorium?",
      answer:
        "You can book the auditorium through our contact page or by calling our office directly. We recommend booking at least two weeks in advance to ensure availability.",
    },
    {
      question: "What facilities are included in the auditorium?",
      answer:
        "Our auditorium includes a high-quality sound system, LED screen, air conditioning, VIP seating area, and ample parking space.",
    },
    {
      question: "Is catering available for events?",
      answer:
        "Yes, we provide customizable catering options based on your event type and requirements. You can discuss menu details during booking.",
    },
    {
      question: "Do you provide event photography and videography?",
      answer:
        "Yes, professional event photography and videography services are available upon request.",
    },
  ];

  return (
    <section className="py-20 featureBackground" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl carousal-title font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 carousal-text">
            Find answers to the most common questions about our auditorium and services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 text-gray-900 font-medium hover:bg-gray-100 transition">
                <span>{faq.question}</span>
                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="px-5 pb-5 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

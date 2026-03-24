'use client';
import React, { useState } from 'react';

const ChatbotsFaq = () => {
  const faqs = [
    {
      question: "What makes modern chatbots different from older ones?",
      answer: [
        "Unlike scripted bots of the past, today's chatbots can hold natural conversations, remember context, complete real-life tasks, and even detect emotions.",
      ],
    },
    {
      question: "Where are chatbots commonly used in 2025?",
      answer: [
        "Chatbots are widely used in online shopping, customer service, healthcare, and banking to provide instant, personalized support.",
      ],
    },
    {
      question: "Can I build a chatbot without coding skills?",
      answer: [
        "Yes. With no-code platforms, anyone can create a chatbot using drag-and-drop tools, customize its personality, and launch it in minutes.",
      ],
    },
    {
      question: "What advanced features do today's chatbots offer?",
      answer: [
        "They support voice and image input, integrate with apps like calendars and email, adapt to emotions, and learn continuously from conversations.",
      ],
    },
    {
      question: "Are chatbots safe and trustworthy?",
      answer: [
        "Yes. Leading chatbot platforms prioritize privacy, ensure transparent interactions, and allow users to switch to a human agent when needed.",
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-secondary py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 drop-shadow-glow">
            Frequently Asked Questions
          </h3>
          <p className="text-primary/70 text-lg">
            Chatbots in 2025: Your Everyday AI Companion
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className="bg-secondary/80 border border-primary/30 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-secondary/10 transition-colors duration-200"
                onClick={() => toggle(idx)}
              >
                <span className="text-primary font-semibold text-left pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`h-6 w-6 text-primary/60 transform transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-primary/70 space-y-2 border-t border-primary/20">
                  {faq.answer.map((line, lineIdx) => (
                    <div key={lineIdx} className="leading-relaxed">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style jsx>{`
        .drop-shadow-glow {
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4), 0 0 2px rgba(0, 0, 0, 0.3);
        }
        .shadow-glow {
          box-shadow: 0 0 32px rgba(255, 255, 255, 0.12), 0 0 8px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default ChatbotsFaq;

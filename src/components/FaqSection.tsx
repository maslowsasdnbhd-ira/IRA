import React, { useState } from 'react';
import { FAQS } from '../data/trainingData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fef3e2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#d4621a]" />
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">School Planning & Logistics</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#2a1a0e] tracking-tight">
            Clear answers for school administrators & teachers.
          </h2>

          <p className="text-base text-[#645041] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about booking, HRD Corp claim procedures, curriculum customization, and delivery options.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fbf5ee] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-heading font-semibold text-base sm:text-lg text-[#2a1a0e]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#fef3e2] border border-[#ecdcc9] flex items-center justify-center text-[#d4621a] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#645041] leading-relaxed border-t border-[#ecdcc9]/60">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 bg-[#fbf5ee] rounded-2xl border border-[#ecdcc9] text-center space-y-3">
          <h4 className="font-serif-heading font-bold text-lg text-[#2a1a0e]">
            Have a custom requirement or multi-campus network inquiry?
          </h4>
          <p className="text-xs sm:text-sm text-[#645041] max-w-xl mx-auto">
            Our educational program directors are happy to schedule a virtual planning call or send you complete course specifications.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>Speak to our Training Directorate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

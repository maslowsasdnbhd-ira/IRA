import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/trainingData';
import { Quote, Star, ChevronLeft, ChevronRight, School, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#fbf5ee] border-b border-[#ecdcc9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <span>Educator Voices</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">Real Impact in School Communities</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1a0e] tracking-tight">
            Trusted by international school leaders & teachers.
          </h2>

          <p className="text-base sm:text-lg text-[#645041] leading-relaxed">
            Read how two decades of dedicated psychological training have helped international schools 
            reduce educator attrition, decontaminate crisis trauma, and build calm campus environments.
          </p>
        </div>

        {/* Featured Testimonial Showcase */}
        <div className="max-w-4xl mx-auto bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-12 shadow-sm relative">
          <div className="flex items-center justify-between pb-6 border-b border-[#ecdcc9]">
            <div className="flex items-center gap-2 text-[#d4621a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-[#d4621a]" />
              ))}
              <span className="text-xs font-bold text-[#2a1a0e] ml-1">
                Verified School Feedback
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                className="p-2 rounded-lg border border-[#ecdcc9] hover:bg-[#ecdcc9]/50 text-[#2a1a0e] transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#645041] font-mono px-1">
                {activeIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                type="button"
                onClick={nextTestimonial}
                className="p-2 rounded-lg border border-[#ecdcc9] hover:bg-[#ecdcc9]/50 text-[#2a1a0e] transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quote Body */}
          <div className="py-8 space-y-6">
            <Quote className="w-10 h-10 text-[#f4ae52]/40" />
            <blockquote className="font-serif-heading text-lg sm:text-2xl text-[#2a1a0e] leading-relaxed italic">
              "{current.quote}"
            </blockquote>

            <div className="p-3 bg-[#fef3e2] rounded-xl border border-[#ecdcc9] inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#d4621a]">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Measurable Result: {current.highlight}</span>
            </div>
          </div>

          {/* Author Meta */}
          <div className="pt-6 border-t border-[#ecdcc9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-[#2a1a0e]">
                {current.author}
              </h4>
              <p className="text-xs sm:text-sm text-[#645041]">
                {current.role} · <span className="font-medium text-[#2a1a0e]">{current.school}</span> ({current.location})
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'bg-[#d4621a] w-6' : 'bg-[#ecdcc9]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 3 Grid Previews Below */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                activeIndex === idx
                  ? 'bg-[#fffdf9] border-[#d4621a] shadow-xs'
                  : 'bg-[#fffdf9]/70 border-[#ecdcc9] hover:bg-[#fffdf9]'
              }`}
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4621a] block mb-1">
                {t.highlight}
              </span>
              <p className="text-xs text-[#2a1a0e] font-semibold line-clamp-1">{t.author}</p>
              <p className="text-[11px] text-[#645041] line-clamp-1">{t.school}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

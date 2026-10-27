import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { TRAINING_PROGRAMS } from '../data/trainingData';
import { TrainingProgram } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: TrainingProgram) => void;
  onRequestBooking: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onRequestBooking,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Teachers', 'Counselors', 'Leadership', 'Whole-School'];

  const filteredPrograms =
    selectedCategory === 'All'
      ? TRAINING_PROGRAMS
      : TRAINING_PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="py-20 sm:py-28 bg-[#fef3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <span>Specialized Curricula</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">Mental Health & Resilience Workshops</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1a0e] tracking-tight">
            Tailored for the reality of international schools.
          </h2>

          <p className="text-base sm:text-lg text-[#645041] leading-relaxed">
            Every module is crafted to respect the heavy schedules of academic professionals. 
            Delivered as full-day Insets, modular twilight sessions, or immersive campus retreats.
          </p>

          {/* Interactive Category Filter Tabs (Functional buttons per design constitution) */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#d4621a] text-white shadow-sm'
                    : 'bg-[#fffdf9] text-[#645041] border border-[#ecdcc9] hover:text-[#2a1a0e] hover:border-[#f4ae52]'
                }`}
              >
                {category === 'All' ? 'All Workshops (6)' : `${category} Track`}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#f4ae52] transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Meta details rendered as clean, unboxed text with typographic separators (anti-slop rule) */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#645041] font-medium">
                  <span className="text-[#d4621a] font-bold">{program.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#645041]" />
                    {program.duration.split('(')[0].trim()}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{program.format}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-heading font-bold text-xl text-[#2a1a0e] leading-snug group-hover:text-[#d4621a] transition-colors">
                  {program.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-[#645041] italic leading-relaxed">
                  "{program.tagline}"
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#2a1a0e]/85 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>

                {/* Preview 2 Key Outcomes */}
                <div className="pt-2 space-y-2 border-t border-[#ecdcc9]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#645041] block">
                    Key Competencies Developed
                  </span>
                  {program.coreOutcomes.slice(0, 2).map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#2a1a0e]/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d4621a] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 mt-6 border-t border-[#ecdcc9] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onSelectProgram(program)}
                  className="text-xs sm:text-sm font-semibold text-[#2a1a0e] hover:text-[#d4621a] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>View Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onRequestBooking(program.title)}
                  className="bg-[#fceee6] hover:bg-[#d4621a] text-[#d4621a] hover:text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Book for School
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Workshop Banner */}
        <div className="mt-14 bg-[#fbf5ee] rounded-2xl border border-[#ecdcc9] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif-heading font-bold text-lg sm:text-xl text-[#2a1a0e]">
              Need a tailored Inset for your specific campus term?
            </h4>
            <p className="text-xs sm:text-sm text-[#645041]">
              We adapt modules to your school's exact timeline, department structures, and pastoral priorities.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestBooking('Custom Bespoke Campus Inset')}
            className="flex-shrink-0 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg shadow-sm cursor-pointer"
          >
            Request Custom Campus Inset
          </button>
        </div>

      </div>
    </section>
  );
};

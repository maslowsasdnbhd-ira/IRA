import React from 'react';
import { ArrowRight, Sparkles, BookOpen, CheckCircle2, Shield, Users, HeartHandshake } from 'lucide-react';
import { STATS } from '../data/trainingData';

interface HeroProps {
  onExplorePrograms: () => void;
  onBookConsultation: () => void;
  onTakeSelfAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePrograms,
  onBookConsultation,
  onTakeSelfAssessment,
}) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle Sanctuary Background Atmospheric Elements */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#f4ae52]/15 rounded-full blur-3xl -z-10 pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute top-48 -left-20 w-80 h-80 bg-[#d4621a]/10 rounded-full blur-3xl -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Empathetic Copy & Primary Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Context kicker: clean unboxed text with typographic separators (anti-slop) */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#645041]">
              <span className="text-[#d4621a] uppercase tracking-wider font-bold">The Sanctuary of Growth</span>
              <span aria-hidden="true">·</span>
              <span>20+ Years Clinical & Pedagogical Expertise</span>
              <span aria-hidden="true">·</span>
              <span>International Schools Specialist</span>
            </div>

            {/* Empathetic Headline Addressing Teacher Burnout */}
            <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2a1a0e] font-bold tracking-tight leading-[1.12]">
              Where exhausted educators find <span className="text-[#d4621a] italic font-normal">sanctuary</span>, resilience, and renewal.
            </h1>

            {/* Subheading highlighting 20+ years and target audience */}
            <p className="text-base sm:text-lg md:text-xl text-[#645041] leading-relaxed max-w-2xl font-normal">
              International school teachers, counselors, and academic leaders carry immense pressure far from home.
              For over two decades, <strong className="font-semibold text-[#2a1a0e]">MASLOW SA SDN BHD</strong> has delivered specialized, 
              evidence-based mental health training and restorative insets that reverse burnout and protect classroom passion.
            </p>

            {/* Key Micro Trust Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2a1a0e]/90 font-medium pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4621a] flex-shrink-0" />
                <span>Tailored for IB, Cambridge & American curricula</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4621a] flex-shrink-0" />
                <span>HRD Corp (HRDF) claimable in Malaysia</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4621a] flex-shrink-0" />
                <span>Facilitated by licensed clinical psychologists</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4621a] flex-shrink-0" />
                <span>On-campus Insets, retreats & hybrid cohorts</span>
              </div>
            </div>

            {/* Dual Primary CTAs (Per PRD) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2.5 bg-[#d4621a] hover:bg-[#b84f10] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <span>Book School Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 bg-[#ecdcc9]/60 hover:bg-[#ecdcc9] text-[#2a1a0e] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-lg border border-[#ecdcc9] transition-all duration-200 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#d4621a]" />
                <span>Explore Training Programs</span>
              </button>
            </div>

            {/* Interactive Pulse Check Kicker */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#645041]">
              <Sparkles className="w-4 h-4 text-[#f4ae52]" />
              <span>Are you an educator feeling drained?</span>
              <button
                type="button"
                onClick={onTakeSelfAssessment}
                className="text-[#d4621a] underline hover:text-[#b84f10] font-semibold cursor-pointer ml-1"
              >
                Take our 2-min Burnout Self-Assessment →
              </button>
            </div>

          </div>

          {/* Right Column: Visual Narrative Card ("The Sanctuary of Growth") */}
          <div className="lg:col-span-5">
            <div className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-8 shadow-sm relative overflow-hidden">
              
              {/* Warm decorative badge */}
              <div className="flex items-center justify-between border-b border-[#ecdcc9] pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#fef3e2] border border-[#ecdcc9] flex items-center justify-center text-[#d4621a]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif-heading font-bold text-base text-[#2a1a0e]">
                      The Sanctuary Philosophy
                    </h3>
                    <p className="text-xs text-[#645041]">Founded on Maslow's Need Hierarchy</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#d4621a] bg-[#fceee6] px-2.5 py-1 rounded">
                    Est. 2004
                  </span>
                </div>
              </div>

              {/* Core Principle Insight */}
              <div className="space-y-4 text-sm text-[#2a1a0e]/85 leading-relaxed">
                <p className="italic text-base font-serif-heading text-[#2a1a0e]">
                  "You cannot pour from an empty vessel, nor can an anxious nervous system inspire joyful learning."
                </p>
                <p className="text-xs sm:text-sm text-[#645041]">
                  International school faculty often suffer in silence—navigating high expatriate expectations, 
                  multilingual student distress, and rigorous testing schedules.
                </p>
              </div>

              {/* Pillars of Support inside Sanctuary */}
              <div className="mt-6 space-y-3 pt-4 border-t border-[#ecdcc9]">
                <div className="p-3 bg-[#fef3e2] rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f4ae52]/40 text-[#2a1a0e] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2a1a0e]">Nervous System De-escalation</h4>
                    <p className="text-[11px] text-[#645041]">Somatic reset techniques for high-pressure assessment cycles</p>
                  </div>
                </div>

                <div className="p-3 bg-[#fef3e2] rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#d4621a]/20 text-[#d4621a] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2a1a0e]">Compassion Fatigue Containment</h4>
                    <p className="text-[11px] text-[#645041]">Clinical debriefing frameworks for counselors and homeroom tutors</p>
                  </div>
                </div>

                <div className="p-3 bg-[#fef3e2] rounded-xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2a1a0e]/15 text-[#2a1a0e] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2a1a0e]">Institutional Retention Culture</h4>
                    <p className="text-[11px] text-[#645041]">Equipping school leaders to lower turnover by 25–40%</p>
                  </div>
                </div>
              </div>

              {/* Consultation prompt mini bar */}
              <div className="mt-6 pt-4 border-t border-[#ecdcc9] flex items-center justify-between text-xs">
                <span className="text-[#645041]">Planning your next term Inset?</span>
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="font-semibold text-[#d4621a] hover:text-[#b84f10] inline-flex items-center gap-1 cursor-pointer"
                >
                  Request customized dates →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 20+ Years Legacy / Credibility Numbers Strip */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-[#ecdcc9]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-serif-heading text-3xl sm:text-4xl font-extrabold text-[#d4621a] tracking-tight">
                  {stat.value}
                </span>
                <span className="font-semibold text-sm sm:text-base text-[#2a1a0e] mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[#645041] mt-0.5">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

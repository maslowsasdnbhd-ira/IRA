import React from 'react';
import { Award, ShieldCheck, Clock, Users, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export const LegacyCredibility: React.FC = () => {
  const milestones = [
    {
      year: '2004',
      title: 'Foundation & Clinical Roots',
      desc: 'Established with the mission to bring evidence-based clinical psychology and stress resilience into professional organizations and educational institutions.'
    },
    {
      year: '2011',
      title: 'International School Specialization',
      desc: 'Formulated the first dedicated educator burnout prevention framework customized for the unique pressures of expatriate teachers and IB/Cambridge curricula.'
    },
    {
      year: '2018',
      title: 'HRD Corp Accreditation',
      desc: 'Official certification as a recognized training provider, enabling Malaysian educational entities and international schools to utilize training levy funds.'
    },
    {
      year: 'Today',
      title: 'The Sanctuary of Growth Platform',
      desc: 'Over 14,200 educators and 68+ campuses impacted across Malaysia, Singapore, Thailand, and Southeast Asia, with 98.7% recommendation rates.'
    }
  ];

  const pillars = [
    {
      icon: Award,
      title: '20+ Years of Hands-On Provenance',
      desc: 'Not a fly-by-night wellness trend. Two decades of deep immersion inside staff rooms, counseling suites, and administrative boards.'
    },
    {
      icon: ShieldCheck,
      title: 'HRD Corp Claimable (Malaysia)',
      desc: 'Fully registered corporate training provider (Sdn Bhd). Seamless claim processing for international school HR and finance departments.'
    },
    {
      icon: Users,
      title: 'Clinical & Pedagogical Mastery',
      desc: 'Our facilitators hold advanced degrees in clinical psychology, psychotherapy, and educational leadership with genuine classroom experience.'
    },
    {
      icon: BookOpen,
      title: 'International Curriculum Alignment',
      desc: 'Workshops tailored for IB (PYP/MYP/DP), Cambridge IGCSE, British, and American accredited schools, respecting reporting timelines.'
    }
  ];

  return (
    <section id="legacy" className="py-20 sm:py-28 bg-[#fef3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <span>Credibility & Heritage</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">MASLOW SA SDN BHD</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1a0e] tracking-tight">
            Over two decades of steady, empathetic expertise.
          </h2>

          <p className="text-base sm:text-lg text-[#645041] leading-relaxed">
            In an era of fleeting buzzwords and automated advice, our 20-year journey stands as proof that 
            sustainable education requires genuine human grounding. We have sat beside teachers in crisis and 
            guided school boards through transformative cultural turnarounds.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 space-y-3.5 shadow-sm hover:border-[#f4ae52] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#fceee6] flex items-center justify-center text-[#d4621a]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-heading font-bold text-lg text-[#2a1a0e] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#645041] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* The Maslow Educational Hierarchy & Timeline Showcase */}
        <div className="mt-16 bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: The Hierarchy Framework */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4621a] uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Our Core Methodology</span>
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#2a1a0e]">
                Maslow’s Hierarchy Adapted for Modern School Campuses
              </h3>
              <p className="text-sm text-[#645041] leading-relaxed">
                Just as students cannot learn when feeling unsafe, educators cannot teach with enthusiasm when 
                their nervous system is trapped in chronic fight-or-flight. Our training systematically restores the base:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 bg-[#fef3e2] rounded-xl border border-[#ecdcc9] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2a1a0e] block">Level 1: Nervous System & Physiological Regulation</span>
                    <span className="text-[11px] text-[#645041]">Somatic reset, circadian balance, sensory recovery</span>
                  </div>
                  <span className="text-xs font-semibold text-[#d4621a]">Foundation</span>
                </div>

                <div className="p-3 bg-[#fef3e2] rounded-xl border border-[#ecdcc9] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2a1a0e] level">Level 2: Psychological Safety & Emotional Containment</span>
                    <span className="text-[11px] text-[#645041]">Parent boundary protocols, non-punitive leadership</span>
                  </div>
                  <span className="text-xs font-semibold text-[#d4621a]">Safety</span>
                </div>

                <div className="p-3 bg-[#fef3e2] rounded-xl border border-[#ecdcc9] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#2a1a0e]">Level 3: Collegial Community & Shared Belonging</span>
                    <span className="text-[11px] text-[#645041]">Peer supervision circles, eradication of staffroom cynicism</span>
                  </div>
                  <span className="text-xs font-semibold text-[#d4621a]">Belonging</span>
                </div>

                <div className="p-3 bg-[#fceee6] rounded-xl border border-[#d4621a]/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#d4621a] block">Level 4: Pedagogical Flourishing & Self-Actualization</span>
                    <span className="text-[11px] text-[#645041]">Joyful classroom presence, high student outcomes, career longevity</span>
                  </div>
                  <span className="text-xs font-bold text-[#d4621a]">Peak Teaching</span>
                </div>
              </div>
            </div>

            {/* Right: Two-Decade Milestone Timeline */}
            <div className="lg:col-span-6 bg-[#fbf5ee] rounded-xl p-6 border border-[#ecdcc9] space-y-6">
              <div className="flex items-center justify-between border-b border-[#ecdcc9] pb-3">
                <span className="font-serif-heading font-bold text-base text-[#2a1a0e]">
                  Two Decades of Impact
                </span>
                <span className="text-xs font-semibold text-[#645041] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#d4621a]" />
                  2004 – Present
                </span>
              </div>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#ecdcc9]">
                {milestones.map((m, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full bg-[#d4621a] border-2 border-[#fffdf9]" />
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-xs text-[#d4621a] tracking-wider uppercase">
                        {m.year}
                      </span>
                      <h4 className="font-semibold text-sm text-[#2a1a0e]">
                        {m.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#645041] mt-1 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

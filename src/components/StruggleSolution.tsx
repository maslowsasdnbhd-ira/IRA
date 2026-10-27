import React, { useState } from 'react';
import { Compass, ShieldAlert, Sparkles, UserCheck, Flame, HeartCrack, RefreshCw, ArrowRight, Check } from 'lucide-react';

interface StruggleSolutionProps {
  onSelectProgramForStruggle: (programId: string) => void;
}

export const StruggleSolution: React.FC<StruggleSolutionProps> = ({ onSelectProgramForStruggle }) => {
  const [activePerspective, setActivePerspective] = useState<'teachers' | 'leaders'>('teachers');

  const strugglesData = [
    {
      id: 'expatriate-pressure',
      title: 'Expatriate Isolation & High-Stakes Curricula',
      audienceLabel: 'Teachers & Department Heads',
      icon: Flame,
      problemTitle: 'The Classroom Reality',
      teacherProblems: [
        'Navigating rigorous IB DP/MYP, Cambridge, or AP standards thousands of miles from personal family support networks.',
        'Intense, high-stakes parental scrutiny fueled by premium tuition expectations and 24/7 digital connectivity.',
        'Persistent Sunday evening dread and inability to mentally detach during weekends or school breaks.'
      ],
      leaderProblems: [
        'Faculty struggling to adapt to cross-cultural school norms, resulting in mid-contract resignations.',
        'High sickness rates and absent days during crucial midterm assessments and mock exams.',
        'Heavy burden on heads of department to continuously intervene in parent-teacher conflicts.'
      ],
      maslowSolutionTitle: 'The MASLOW SA Intervention',
      solutionHighlights: [
        'Micro-somatic reset protocols that down-regulate the nervous system within 90 seconds between classes.',
        'Linguistic boundary frameworks for asserting clear, professional cut-offs with demanding parents.',
        'Cultural grounding circles that foster peer belonging and eliminate expatriate isolation.'
      ],
      programId: 'resilient-educator',
      programCta: 'Explore The Resilient Educator Module'
    },
    {
      id: 'compassion-fatigue',
      title: 'Secondary Traumatic Stress & Pastoral Overload',
      audienceLabel: 'Counselors & Homeroom Advisors',
      icon: HeartCrack,
      problemTitle: 'The Emotional Burden',
      teacherProblems: [
        'Carrying student safeguarding disclosures, peer bullying crises, and adolescent distress home in your mind.',
        'Experiencing emotional numbness, detachment, or sudden cynicism despite a lifelong love for mentoring youth.',
        'Feeling completely depleted with zero structured emotional decompression at the end of the school day.'
      ],
      leaderProblems: [
        'School counselors operating at max capacity, facing severe burnout with no clinical supervision.',
        'Homeroom advisors overwhelmed by complex pastoral issues beyond their standard pedagogical training.',
        'Risk of critical safeguarding mishandling caused by exhausted, overwhelmed frontline staff.'
      ],
      maslowSolutionTitle: 'The MASLOW SA Intervention',
      solutionHighlights: [
        'Clinical secondary trauma containment models adapted specifically for international school counselors.',
        'Structured peer debriefing routines to decontaminate heavy cases before transitioning home.',
        'Compassion satisfaction restoration practices that revive joyful pedagogical connection.'
      ],
      programId: 'pastoral-counselor-care',
      programCta: 'Explore Counselor Support Module'
    },
    {
      id: 'retention-crisis',
      title: 'Turnover Churn & Institutional Cynicism',
      audienceLabel: 'Principals & Senior Leadership Teams',
      icon: RefreshCw,
      problemTitle: 'The Systemic Strain',
      teacherProblems: [
        'Superficial "wellness initiatives" (free fruit or yoga days) that ignore relentless timetable pressures.',
        'Fear of asking for help or admitting overwhelm due to fear of contract non-renewal.',
        'Feeling that leadership prioritizes marketing and accreditation metrics over staff humanity.'
      ],
      leaderProblems: [
        'Staggering international recruiting costs ($15,000–$25,000 USD per replacement teacher visa and relocation).',
        'Loss of institutional memory and curricular continuity with 20–35% annual teacher turnover.',
        'Leaders themselves suffering from isolation and executive burnout with board expectations.'
      ],
      maslowSolutionTitle: 'The MASLOW SA Intervention',
      solutionHighlights: [
        'Psychological safety audits and leadership coaching rooted in organizational neuroscience.',
        'Co-created campus well-being charters that eliminate performative tasks and restore educator autonomy.',
        'Measurable retention improvements: participating partner campuses demonstrate a 25–40% decrease in faculty turnover.'
      ],
      programId: 'mindful-educational-leadership',
      programCta: 'Explore Educational Leadership Module'
    }
  ];

  return (
    <section id="struggle-solution" className="py-20 sm:py-28 bg-[#fbf5ee] border-y border-[#ecdcc9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with clear anti-slop typography */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <span>Root Cause Analysis</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">The Struggle & The Solution</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1a0e] tracking-tight">
            Why international educators burn out differently.
          </h2>

          <p className="text-base sm:text-lg text-[#645041] leading-relaxed">
            International schooling is a uniquely high-pressure ecosystem. Generic corporate wellness fails here. 
            Over 20 years, MASLOW SA has designed precision clinical frameworks that address the specific human and systemic 
            roots of educator exhaustion.
          </p>

          {/* Perspective Selector (Functional Button Segmented Control) */}
          <div className="pt-4 flex items-center justify-center">
            <div className="inline-flex p-1 bg-[#ecdcc9]/60 rounded-xl border border-[#ecdcc9]">
              <button
                type="button"
                onClick={() => setActivePerspective('teachers')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  activePerspective === 'teachers'
                    ? 'bg-[#fffdf9] text-[#2a1a0e] shadow-sm'
                    : 'text-[#645041] hover:text-[#2a1a0e]'
                }`}
              >
                Classroom Teacher & Counselor Perspective
              </button>
              <button
                type="button"
                onClick={() => setActivePerspective('leaders')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                  activePerspective === 'leaders'
                    ? 'bg-[#fffdf9] text-[#2a1a0e] shadow-sm'
                    : 'text-[#645041] hover:text-[#2a1a0e]'
                }`}
              >
                Principal, Leadership & HR Perspective
              </button>
            </div>
          </div>
        </div>

        {/* 3-Column Empathy Grid Per PRD */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {strugglesData.map((item) => {
            const Icon = item.icon;
            const currentProblems =
              activePerspective === 'teachers' ? item.teacherProblems : item.leaderProblems;

            return (
              <div
                key={item.id}
                className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-6">
                  {/* Card Title & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#fceee6] flex items-center justify-center text-[#d4621a]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-[#645041]">
                        {item.audienceLabel}
                      </span>
                    </div>
                    <h3 className="font-serif-heading font-bold text-xl text-[#2a1a0e] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* The Struggle Side */}
                  <div className="bg-[#fef3e2] rounded-xl p-4 border border-[#ecdcc9]/80 space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d4621a] block">
                      {item.problemTitle}
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#645041]">
                      {currentProblems.map((prob, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#d4621a] font-bold mt-0.5">•</span>
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The MASLOW SA Solution Side */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] block">
                      {item.maslowSolutionTitle}
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#2a1a0e]/90">
                      {item.solutionHighlights.map((sol, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#d4621a] flex-shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-6 mt-6 border-t border-[#ecdcc9]">
                  <button
                    type="button"
                    onClick={() => onSelectProgramForStruggle(item.programId)}
                    className="w-full text-left font-semibold text-xs sm:text-sm text-[#d4621a] hover:text-[#b84f10] inline-flex items-center justify-between group cursor-pointer"
                  >
                    <span>{item.programCta}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy Quote Callout */}
        <div className="mt-12 bg-[#fffdf9] border border-[#ecdcc9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#f4ae52]/20 text-[#d4621a] flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif-heading font-semibold text-lg text-[#2a1a0e]">
                "Education is too important to be delivered by exhausted people."
              </p>
              <p className="text-xs sm:text-sm text-[#645041] mt-0.5">
                Our programs re-align school culture with Abraham Maslow’s foundational premise: physiological stability and emotional safety first.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-lg shadow-sm cursor-pointer"
          >
            Schedule a School Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

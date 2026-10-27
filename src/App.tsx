/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StruggleSolution } from './components/StruggleSolution';
import { LegacyCredibility } from './components/LegacyCredibility';
import { ProgramsSection } from './components/ProgramsSection';
import { ProgramModal } from './components/ProgramModal';
import { SelfAssessmentTool } from './components/SelfAssessmentTool';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationForm } from './components/ConsultationForm';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BreathingWidget } from './components/BreathingWidget';
import { TrainingProgram } from './types';
import { TRAINING_PROGRAMS } from './data/trainingData';
import { Sparkles, Wind } from 'lucide-react';

export default function App() {
  const [selectedProgramForModal, setSelectedProgramForModal] = useState<TrainingProgram | null>(null);
  const [selectedProgramForBooking, setSelectedProgramForBooking] = useState<string>('');
  const [isBreathingModalOpen, setIsBreathingModalOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    scrollToSection('#contact');
  };

  const handleExplorePrograms = () => {
    scrollToSection('#programs');
  };

  const handleTakeSelfAssessment = () => {
    scrollToSection('#self-assessment');
  };

  const handleRequestBooking = (programTitle: string) => {
    setSelectedProgramForBooking(programTitle);
    scrollToSection('#contact');
  };

  const handleSelectProgramForStruggle = (programId: string) => {
    const found = TRAINING_PROGRAMS.find((p) => p.id === programId);
    if (found) {
      setSelectedProgramForModal(found);
    } else {
      scrollToSection('#programs');
    }
  };

  return (
    <div className="min-h-screen bg-[#fef3e2] text-[#2a1a0e] flex flex-col font-sans selection:bg-[#f4ae52]/30 selection:text-[#2a1a0e] relative">
      {/* Cinematic Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] cinematic-hero-glow pointer-events-none -z-10 blur-3xl opacity-75" />

      {/* Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onBookConsultation={handleOpenConsultation}
          onTakeSelfAssessment={handleTakeSelfAssessment}
        />

        {/* Cinematic Quick Action Bar: Launch Vagal Reset */}
        <section className="py-6 bg-[#fbf5ee] border-y border-[#ecdcc9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4621a] text-white flex items-center justify-center shadow-md animate-glow">
                <Wind className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif-heading font-bold text-sm sm:text-base text-[#2a1a0e]">
                  Experience a Cinematic 90-Second Vagal Nerve Reset
                </h4>
                <p className="text-xs text-[#645041]">
                  Designed for educators and counselors needing an instant somatic pause between periods.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsBreathingModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer flex-shrink-0"
            >
              <Sparkles className="w-4 h-4 text-[#f4ae52]" />
              <span>Launch Breathing Sanctuary</span>
            </button>
          </div>
        </section>

        {/* The Struggle & Solution Section */}
        <StruggleSolution
          onSelectProgramForStruggle={handleSelectProgramForStruggle}
        />

        {/* 20+ Years Legacy & Credibility Section */}
        <LegacyCredibility />

        {/* Specialized Training Programs & Modules */}
        <ProgramsSection
          onSelectProgram={(program) => setSelectedProgramForModal(program)}
          onRequestBooking={handleRequestBooking}
        />

        {/* Interactive Educator Well-Being Check */}
        <SelfAssessmentTool
          onRecommendProgram={handleRequestBooking}
        />

        {/* School Testimonials & Real Outcomes */}
        <TestimonialsSection />

        {/* Primary Interactive Consultation & Booking Form */}
        <ConsultationForm
          initialProgramTitle={selectedProgramForBooking}
          onClearInitialProgram={() => setSelectedProgramForBooking('')}
        />

        {/* FAQ Section */}
        <FaqSection onContactClick={handleOpenConsultation} />
      </main>

      {/* Detailed Syllabus & Outcomes Modal */}
      <ProgramModal
        program={selectedProgramForModal}
        onClose={() => setSelectedProgramForModal(null)}
        onBookProgram={handleRequestBooking}
      />

      {/* Cinematic Breathing Widget Modal */}
      <BreathingWidget
        isOpen={isBreathingModalOpen}
        onClose={() => setIsBreathingModalOpen(false)}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

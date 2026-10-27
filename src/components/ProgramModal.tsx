import React from 'react';
import { X, Clock, MapPin, CheckCircle, ArrowRight, ShieldCheck, Download, Calendar } from 'lucide-react';
import { TrainingProgram } from '../types';

interface ProgramModalProps {
  program: TrainingProgram | null;
  onClose: () => void;
  onBookProgram: (programTitle: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onBookProgram,
}) => {
  if (!program) return null;

  const handleDownloadOverview = () => {
    // Generate an empathetic, clean text syllabus overview for offline review
    const content = `MASLOW SA SDN BHD - TRAINING OVERVIEW & SYLLABUS
=====================================================
Program: ${program.title}
Audience: ${program.audience}
Duration: ${program.duration}
Delivery Mode: ${program.format}
Accreditation: HRD Corp Claimable (Malaysia) / International School CPD Hours

TAGLINE:
${program.tagline}

DESCRIPTION:
${program.description}

CORE CHALLENGES ADDRESSED:
${program.strugglesAddressed.map((s, i) => `  ${i + 1}. ${s}`).join('\n')}

MEASURABLE LEARNING OUTCOMES:
${program.coreOutcomes.map((o, i) => `  ${i + 1}. ${o}`).join('\n')}

SYLLABUS & SESSION STRUCTURE:
${program.syllabus
  .map(
    (item) => `[${item.part}] ${item.title}\n${item.description}\n`
  )
  .join('\n')}

INQUIRIES & SCHOOL BOOKINGS:
MASLOW SA SDN BHD
Email: maslowsa.sdnbhd@gmail.com
Over 20 Years of Educational Mental Health Excellence
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `MASLOW_SA_${program.id}_Syllabus.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-3xl rounded-2xl border border-[#ecdcc9] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#fef3e2] border-b border-[#ecdcc9] relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-[#ecdcc9]/60 hover:bg-[#ecdcc9] text-[#2a1a0e] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-10">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#645041]">
              <span className="text-[#d4621a] uppercase">{program.category} Track</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#d4621a]" />
                {program.duration}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4621a]" />
                {program.format}
              </span>
            </div>

            <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#2a1a0e] leading-snug">
              {program.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#645041] italic">
              {program.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Overview Paragraph */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4621a] mb-2">
              Program Overview
            </h4>
            <p className="text-sm sm:text-base text-[#2a1a0e]/85 leading-relaxed">
              {program.description}
            </p>
          </div>

          {/* Target Audience & Accreditation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#fbf5ee] rounded-xl border border-[#ecdcc9]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#645041] block mb-1">
                Recommended Audience
              </span>
              <p className="text-xs sm:text-sm text-[#2a1a0e] font-medium">
                {program.audience}
              </p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#645041] block mb-1">
                Certification & Accreditation
              </span>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#d4621a] font-semibold">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>HRD Corp (HRDF) Claimable in Malaysia</span>
              </div>
            </div>
          </div>

          {/* Struggles Addressed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] mb-3">
              Pressures & Realities Addressed
            </h4>
            <div className="space-y-2">
              {program.strugglesAddressed.map((struggle, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#645041]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4621a] mt-2 flex-shrink-0" />
                  <span>{struggle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Measurable Outcomes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] mb-3">
              Measurable Key Takeaways
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.coreOutcomes.map((outcome, idx) => (
                <div key={idx} className="p-3 bg-[#fef3e2] rounded-lg border border-[#ecdcc9] flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#d4621a] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#2a1a0e] font-medium leading-relaxed">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Syllabus Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] mb-4">
              Curriculum & Session Architecture
            </h4>
            <div className="space-y-3">
              {program.syllabus.map((s, idx) => (
                <div key={idx} className="p-4 bg-[#fffdf9] rounded-xl border border-[#ecdcc9] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#d4621a] uppercase tracking-wider">
                      {s.part}
                    </span>
                  </div>
                  <h5 className="font-semibold text-sm text-[#2a1a0e]">
                    {s.title}
                  </h5>
                  <p className="text-xs text-[#645041] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#fef3e2] border-t border-[#ecdcc9] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDownloadOverview}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#ecdcc9] bg-[#fffdf9] text-xs font-semibold text-[#2a1a0e] hover:bg-[#ecdcc9]/30 transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#645041]" />
            <span>Download Syllabus Summary (.txt)</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-[#645041] hover:text-[#2a1a0e] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookProgram(program.title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm cursor-pointer"
            >
              <span>Request for Our School</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

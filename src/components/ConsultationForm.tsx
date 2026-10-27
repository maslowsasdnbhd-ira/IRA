import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, Building, Calendar, HelpCircle, ArrowRight, User } from 'lucide-react';
import { UserRole, ConsultationFormData } from '../types';

interface ConsultationFormProps {
  initialProgramTitle?: string;
  onClearInitialProgram?: () => void;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialProgramTitle,
  onClearInitialProgram,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    schoolName: '',
    workEmail: '',
    role: 'Teacher',
    selectedProgram: initialProgramTitle || '',
    cohortSize: '16–40 Faculty Members',
    preferredTimeline: 'Upcoming Term Inset / PD Day',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryReference, setInquiryReference] = useState('');

  useEffect(() => {
    if (initialProgramTitle) {
      setFormData((prev) => ({ ...prev, selectedProgram: initialProgramTitle }));
    }
  }, [initialProgramTitle]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'Please enter your school or institution name.';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please provide a valid work email address.';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your professional role.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your training goals or current school challenges.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters so we can prepare tailored recommendations.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending inquiry to MASLOW SA team
    setTimeout(() => {
      const refId = `MSA-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryReference(refId);

      // Save to localStorage for demo persistence
      try {
        const stored = JSON.parse(localStorage.getItem('maslow_inquiries') || '[]');
        stored.push({
          ...formData,
          id: refId,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('maslow_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage unavailable', err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      schoolName: '',
      workEmail: '',
      role: 'Teacher',
      selectedProgram: '',
      cohortSize: '16–40 Faculty Members',
      preferredTimeline: 'Upcoming Term Inset / PD Day',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    if (onClearInitialProgram) onClearInitialProgram();
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fef3e2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <span>Primary Consultation</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">Begin the Conversation</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a1a0e] tracking-tight">
            Schedule an educator wellness consultation.
          </h2>

          <p className="text-base sm:text-lg text-[#645041] leading-relaxed">
            Whether you are planning a campus-wide Inset, seeking specialized pastoral supervision, 
            or addressing faculty exhaustion, our senior consultants will prepare a confidential, tailored proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Why Choose MASLOW SA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif-heading font-bold text-xl text-[#2a1a0e]">
                Direct Contact & Inset Inquiries
              </h3>

              <div className="space-y-4 text-sm text-[#645041]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fceee6] flex items-center justify-center text-[#d4621a] flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] block">
                      Direct Inquiries Email
                    </span>
                    <a
                      href="mailto:maslowsa.sdnbhd@gmail.com"
                      className="text-sm font-semibold text-[#d4621a] hover:underline"
                    >
                      maslowsa.sdnbhd@gmail.com
                    </a>
                    <p className="text-xs text-[#645041] mt-0.5">
                      Monitored daily by our senior education consultants.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fceee6] flex items-center justify-center text-[#d4621a] flex-shrink-0 mt-0.5">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] block">
                      Corporate Headquarters
                    </span>
                    <p className="text-xs sm:text-sm text-[#2a1a0e] font-medium">
                      MASLOW SA SDN BHD
                    </p>
                    <p className="text-xs text-[#645041]">
                      Kuala Lumpur, Malaysia (Serving Southeast Asia & Global International Schools)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fceee6] flex items-center justify-center text-[#d4621a] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] block">
                      HRD Corp Registered
                    </span>
                    <p className="text-xs text-[#645041]">
                      Malaysian schools may claim full training expenditures under standard Human Resource Development Corporation frameworks.
                    </p>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="pt-4 border-t border-[#ecdcc9] space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2a1a0e] block">
                  What Happens After Submission?
                </span>
                <div className="space-y-2 text-xs text-[#645041]">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#d4621a]">1.</span>
                    <span>Initial review by a lead facilitator within 24 business hours.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#d4621a]">2.</span>
                    <span>A brief 20-minute discovery call to align with your school calendar.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-[#d4621a]">3.</span>
                    <span>A fully tailored workshop proposal and HRD Corp claim documentation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Safeguarding Guarantee */}
            <div className="p-4 bg-[#fbf5ee] rounded-xl border border-[#ecdcc9] text-xs text-[#645041] space-y-1">
              <span className="font-bold text-[#2a1a0e] block">Confidentiality Guarantee</span>
              <p>
                All communications and institutional details are held under strict clinical and academic confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-10 shadow-sm relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-serif-heading font-bold text-2xl text-[#2a1a0e]">
                      Request Training Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#645041] mt-1">
                      Fill out this brief form to discuss your school's professional development needs.
                    </p>
                  </div>

                  {/* Highlight pre-selected program if present */}
                  {formData.selectedProgram && (
                    <div className="p-3 bg-[#fceee6] rounded-xl border border-[#d4621a]/30 flex items-center justify-between">
                      <div className="text-xs">
                        <span className="text-[#645041] block">Selected Workshop of Interest:</span>
                        <strong className="text-[#d4621a] font-semibold">{formData.selectedProgram}</strong>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, selectedProgram: '' }));
                          if (onClearInitialProgram) onClearInitialProgram();
                        }}
                        className="text-xs text-[#645041] hover:text-[#2a1a0e] underline cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  )}

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        Full Name <span className="text-[#d4621a]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2a1a0e] placeholder-[#947e6f] focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-[#ecdcc9] bg-[#fffdf9] focus:border-[#d4621a]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* School / Institution Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="schoolName" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        School / Institution <span className="text-[#d4621a]">*</span>
                      </label>
                      <input
                        type="text"
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={(e) => {
                          setFormData({ ...formData, schoolName: e.target.value });
                          if (errors.schoolName) setErrors({ ...errors, schoolName: '' });
                        }}
                        placeholder="e.g. Fairview International School"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2a1a0e] placeholder-[#947e6f] focus:outline-none transition-colors ${
                          errors.schoolName
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-[#ecdcc9] bg-[#fffdf9] focus:border-[#d4621a]'
                        }`}
                      />
                      {errors.schoolName && (
                        <p className="text-xs text-red-600 mt-1">{errors.schoolName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Work Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        Work Email <span className="text-[#d4621a]">*</span>
                      </label>
                      <input
                        type="email"
                        id="workEmail"
                        value={formData.workEmail}
                        onChange={(e) => {
                          setFormData({ ...formData, workEmail: e.target.value });
                          if (errors.workEmail) setErrors({ ...errors, workEmail: '' });
                        }}
                        placeholder="name@internationalschool.edu"
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2a1a0e] placeholder-[#947e6f] focus:outline-none transition-colors ${
                          errors.workEmail
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-[#ecdcc9] bg-[#fffdf9] focus:border-[#d4621a]'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-xs text-red-600 mt-1">{errors.workEmail}</p>
                      )}
                    </div>

                    {/* Role Dropdown (Per PRD: Teacher, Counselor, Administrator, HR) */}
                    <div className="space-y-1.5">
                      <label htmlFor="role" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        Your Professional Role <span className="text-[#d4621a]">*</span>
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => {
                          setFormData({ ...formData, role: e.target.value as UserRole });
                          if (errors.role) setErrors({ ...errors, role: '' });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#ecdcc9] bg-[#fffdf9] text-sm text-[#2a1a0e] focus:outline-none focus:border-[#d4621a] transition-colors"
                      >
                        <option value="Teacher">Teacher (Primary / Secondary / IB / IGCSE)</option>
                        <option value="Counselor">School Counselor / Well-Being Lead</option>
                        <option value="Administrator">Administrator / Principal / Head of School</option>
                        <option value="HR">HR / Professional Development Director</option>
                        <option value="Other">Other Academic Staff</option>
                      </select>
                      {errors.role && (
                        <p className="text-xs text-red-600 mt-1">{errors.role}</p>
                      )}
                    </div>
                  </div>

                  {/* Cohort Size & Timeline helpers */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="cohortSize" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        Estimated Faculty Cohort
                      </label>
                      <select
                        id="cohortSize"
                        value={formData.cohortSize}
                        onChange={(e) => setFormData({ ...formData, cohortSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#ecdcc9] bg-[#fffdf9] text-sm text-[#2a1a0e] focus:outline-none focus:border-[#d4621a] transition-colors"
                      >
                        <option value="Small Department (5–15 Educators)">Small Department (5–15 Educators)</option>
                        <option value="16–40 Faculty Members">16–40 Faculty Members</option>
                        <option value="41–80 Educators">41–80 Educators</option>
                        <option value="Whole Campus (100+ Staff)">Whole Campus (100+ Staff)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="preferredTimeline" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                        Preferred Timeline
                      </label>
                      <select
                        id="preferredTimeline"
                        value={formData.preferredTimeline}
                        onChange={(e) => setFormData({ ...formData, preferredTimeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#ecdcc9] bg-[#fffdf9] text-sm text-[#2a1a0e] focus:outline-none focus:border-[#d4621a] transition-colors"
                      >
                        <option value="Upcoming Term Inset / PD Day">Upcoming Term Inset / PD Day</option>
                        <option value="Next 1–2 Months">Next 1–2 Months</option>
                        <option value="Next Academic Term">Next Academic Term</option>
                        <option value="Annual Staff Retreat">Annual Staff Retreat</option>
                        <option value="Urgent Pastoral Team Support">Urgent Pastoral Team Support</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Training Inquiry */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#2a1a0e]">
                      Message / Training Inquiry <span className="text-[#d4621a]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Share your school's current priorities (e.g. reporting season stress, secondary trauma for pastoral team, or planning for an upcoming Inset day)..."
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#2a1a0e] placeholder-[#947e6f] focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-[#ecdcc9] bg-[#fffdf9] focus:border-[#d4621a]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white font-semibold text-sm sm:text-base py-3.5 px-6 rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Inquiry to Facilitators...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Training Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-[#645041] text-center">
                    MASLOW SA SDN BHD respects your confidentiality. Your contact details are never shared with third parties.
                  </p>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-6 animate-fadeIn">
                  <div className="w-16 h-16 bg-[#fceee6] text-[#d4621a] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold text-[#d4621a] uppercase tracking-wider">
                      Inquiry Received Successfully
                    </span>
                    <h3 className="font-serif-heading font-bold text-2xl sm:text-3xl text-[#2a1a0e]">
                      Thank you, {formData.fullName}.
                    </h3>
                    <p className="text-sm text-[#645041] max-w-md mx-auto leading-relaxed">
                      We have logged your request for <strong>{formData.schoolName}</strong> under reference:
                    </p>
                    <div className="inline-block px-4 py-1.5 bg-[#fef3e2] border border-[#ecdcc9] rounded-lg font-mono text-sm font-bold text-[#d4621a]">
                      {inquiryReference}
                    </div>
                  </div>

                  <div className="bg-[#fbf5ee] p-5 rounded-xl border border-[#ecdcc9] text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm text-[#2a1a0e]">
                    <span className="font-bold text-xs uppercase tracking-wider text-[#645041] block">
                      Next Steps
                    </span>
                    <p className="text-xs text-[#645041]">
                      A senior MASLOW SA consultant will contact you at <strong>{formData.workEmail}</strong> within 24 business hours to arrange a discovery dialogue.
                    </p>
                    <p className="text-xs text-[#645041]">
                      If you require immediate urgent pastoral consultation, please email us directly at{' '}
                      <a href="mailto:maslowsa.sdnbhd@gmail.com" className="text-[#d4621a] underline font-semibold">
                        maslowsa.sdnbhd@gmail.com
                      </a>.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-lg border border-[#ecdcc9] bg-[#fffdf9] text-xs font-semibold text-[#2a1a0e] hover:bg-[#ecdcc9]/30 transition-colors cursor-pointer"
                    >
                      Submit Another School Inquiry
                    </button>
                    <a
                      href="#programs"
                      className="px-5 py-2.5 rounded-lg bg-[#d4621a] text-white text-xs font-semibold hover:bg-[#b84f10] transition-colors cursor-pointer"
                    >
                      Return to Programs
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

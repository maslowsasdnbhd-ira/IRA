import React, { useState } from 'react';
import { SELF_ASSESSMENT_QUESTIONS } from '../data/trainingData';
import { CheckCircle2, RotateCcw, ArrowRight, HeartHandshake, Sparkles, AlertCircle } from 'lucide-react';

interface SelfAssessmentToolProps {
  onRecommendProgram: (programTitle: string) => void;
}

export const SelfAssessmentTool: React.FC<SelfAssessmentToolProps> = ({ onRecommendProgram }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr, 0);
  const questionsAnsweredCount = Object.keys(answers).length;
  const isComplete = questionsAnsweredCount === SELF_ASSESSMENT_QUESTIONS.length;

  const handleSelectOption = (questionId: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  const getAssessmentResult = (score: number) => {
    if (score <= 4) {
      return {
        level: 'Sustained Vitality (Restorative Baseline)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        textColor: 'text-emerald-800',
        summary: 'Your energy reserves and psychological boundaries are holding well. You possess strong foundational resilience.',
        recommendation: 'The Resilient Educator: Nervous System Regulation & Classroom Vitality',
        advice: 'Maintain your restorative habits and consider mentoring junior colleagues who may be quietly struggling with expatriate adjustment.',
        programId: 'resilient-educator'
      };
    } else if (score <= 8) {
      return {
        level: 'Mild Strain & Emerging Compassion Drain',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        textColor: 'text-amber-900',
        summary: 'You are beginning to absorb workplace tension into your personal time. Early warning signs like Sunday evening anxiety are present.',
        recommendation: 'Empathetic & Boundary-Clear Parent-Teacher Dynamics',
        advice: 'Reinforce your evening digital cut-off times and implement 90-second somatic resets before transitions between classes.',
        programId: 'parent-teacher-boundaries'
      };
    } else if (score <= 11) {
      return {
        level: 'Elevated Burnout & Secondary Trauma Risk',
        color: 'text-orange-800 bg-orange-50 border-orange-200',
        textColor: 'text-orange-900',
        summary: 'Your emotional reserves are substantially depleted. You may be experiencing functional detachment, cynicism, and persistent fatigue.',
        recommendation: 'Burnout Reversal & Compassion Fatigue in International Schools',
        advice: 'This is not personal weakness—it is a physiological response to uncontained institutional demands. Your nervous system urgently needs decompression.',
        programId: 'burnout-prevention-compassion-fatigue'
      };
    } else {
      return {
        level: 'Acute Systemic Depletion (Critical Reserve Exhaustion)',
        color: 'text-red-800 bg-red-50 border-red-200',
        textColor: 'text-red-900',
        summary: 'You are operating on psychological emergency reserves. Chronic sleep disruption, detachment, or thoughts of leaving education are prominent.',
        recommendation: 'The Sanctuary of Growth: Whole-School Inset & Renewal Retreat',
        advice: 'We urge you to confide in a trusted health professional or counselor. School leadership must establish immediate supportive accommodations.',
        programId: 'school-wide-wellness-retreat'
      };
    }
  };

  const result = getAssessmentResult(totalScore);

  return (
    <section id="self-assessment" className="py-20 sm:py-28 bg-[#fbf5ee] border-y border-[#ecdcc9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#645041] uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4 text-[#d4621a]" />
            <span>Interactive Self-Reflection</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#d4621a]">Educator Vitality Check</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#2a1a0e] tracking-tight">
            How full is your emotional reserve today?
          </h2>

          <p className="text-base text-[#645041] max-w-2xl mx-auto leading-relaxed">
            Take this confidential 5-question pulse check. Developed by MASLOW SA clinicians to help teachers, 
            counselors, and school leaders recognize the subtle shift from ordinary tiredness into clinical burnout.
          </p>
        </div>

        {/* Assessment Card Container */}
        <div className="bg-[#fffdf9] rounded-2xl border border-[#ecdcc9] p-6 sm:p-10 shadow-sm">
          {!isSubmitted ? (
            <div className="space-y-8">
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs text-[#645041] pb-4 border-b border-[#ecdcc9]">
                <span>Answered {questionsAnsweredCount} of {SELF_ASSESSMENT_QUESTIONS.length} reflections</span>
                <span className="font-semibold text-[#d4621a]">
                  {Math.round((questionsAnsweredCount / SELF_ASSESSMENT_QUESTIONS.length) * 100)}% Completed
                </span>
              </div>

              {/* Questions List */}
              <div className="space-y-8">
                {SELF_ASSESSMENT_QUESTIONS.map((q, qIndex) => (
                  <div key={q.id} className="space-y-3">
                    <h3 className="font-serif-heading font-semibold text-base sm:text-lg text-[#2a1a0e]">
                      <span className="text-[#d4621a] font-sans mr-2 text-sm font-bold">
                        {qIndex + 1}.
                      </span>
                      {q.question}
                    </h3>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = answers[q.id] === opt.score;
                        return (
                          <button
                            key={oIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.score)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-[#fef3e2] border-[#d4621a] text-[#2a1a0e] shadow-xs'
                                : 'bg-[#fffdf9] border-[#ecdcc9] text-[#645041] hover:bg-[#fbf5ee] hover:text-[#2a1a0e]'
                            }`}
                          >
                            <span>{opt.text}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                                isSelected
                                  ? 'border-[#d4621a] bg-[#d4621a]'
                                  : 'border-[#ecdcc9]'
                              }`}
                            >
                              {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit Action */}
              <div className="pt-6 border-t border-[#ecdcc9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#645041]">
                  Your responses are evaluated privately and never stored or shared.
                </span>

                <button
                  type="button"
                  disabled={!isComplete}
                  onClick={() => setIsSubmitted(true)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isComplete
                      ? 'bg-[#d4621a] hover:bg-[#b84f10] text-white shadow-sm'
                      : 'bg-[#ecdcc9] text-[#645041] cursor-not-allowed'
                  }`}
                >
                  <span>View Diagnostic Insight</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-[#ecdcc9] pb-4">
                <div>
                  <span className="text-xs font-bold text-[#645041] uppercase tracking-wider block">
                    Confidential Reflection Result
                  </span>
                  <h3 className="font-serif-heading font-bold text-2xl text-[#2a1a0e] mt-1">
                    Your Energy Status
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#645041] hover:text-[#2a1a0e] cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Check</span>
                </button>
              </div>

              {/* Result Badge & Summary */}
              <div className={`p-5 rounded-xl border ${result.color} space-y-2`}>
                <div className="flex items-center justify-between">
                  <span className="font-serif-heading font-bold text-lg">
                    {result.level}
                  </span>
                  <span className="text-xs font-bold opacity-80">
                    Depletion Score: {totalScore} / 15
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {result.summary}
                </p>
              </div>

              {/* Clinical Advice */}
              <div className="p-4 bg-[#fef3e2] rounded-xl border border-[#ecdcc9] space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4621a] block">
                  Psychological Perspective
                </span>
                <p className="text-xs sm:text-sm text-[#2a1a0e] leading-relaxed">
                  {result.advice}
                </p>
              </div>

              {/* Tailored Training Program Recommendation */}
              <div className="p-5 bg-[#fffdf9] rounded-xl border border-[#d4621a]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#d4621a] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Recommended MASLOW SA Workshop</span>
                </div>
                <h4 className="font-serif-heading font-bold text-lg text-[#2a1a0e]">
                  {result.recommendation}
                </h4>
                <p className="text-xs text-[#645041]">
                  Specifically structured to restore autonomy, alleviate secondary trauma, and establish healthy boundary protocols.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onRecommendProgram(result.recommendation)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm cursor-pointer"
                  >
                    <span>Request This Module for Your School</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-medium text-[#645041] hover:text-[#2a1a0e] cursor-pointer"
                  >
                    Start over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

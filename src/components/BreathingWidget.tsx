import React, { useState, useEffect } from 'react';
import { Wind, X, Play, Pause, RefreshCw, HeartHandshake, Sparkles } from 'lucide-react';

interface BreathingWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BreathingWidget: React.FC<BreathingWidgetProps> = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Ready' | 'Inhale (4s)' | 'Hold (4s)' | 'Exhale (6s)' | 'Hold (2s)'>('Ready');
  const [secondsLeft, setSecondsLeft] = useState(90);
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      setPhase('Ready');
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft]);

  // Breathing cadence simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
      // 4s Inhale, 4s Hold, 6s Exhale, 2s Hold = 16s cycle
      const cycleTime = 16000;
      const runCycle = () => {
        setPhase('Inhale (4s)');
        setTimeout(() => {
          if (!isActive) return;
          setPhase('Hold (4s)');
        }, 4000);
        setTimeout(() => {
          if (!isActive) return;
          setPhase('Exhale (6s)');
        }, 8000);
        setTimeout(() => {
          if (!isActive) return;
          setPhase('Hold (2s)');
        }, 14000);
        setTimeout(() => {
          if (!isActive) return;
          setCycleCount((c) => c + 1);
        }, 16000);
      };

      runCycle();
      interval = setInterval(runCycle, cycleTime);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  if (!isOpen) return null;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-lg rounded-3xl border border-[#ecdcc9] shadow-2xl overflow-hidden relative p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => {
            setIsActive(false);
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#ecdcc9]/50 hover:bg-[#ecdcc9] text-[#2a1a0e] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fceee6] text-[#d4621a] rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Somatic Reset</span>
          </div>
          <h3 className="font-serif-heading font-bold text-2xl text-[#2a1a0e]">
            90-Second Vagal Nerve Sanctuary
          </h3>
          <p className="text-xs sm:text-sm text-[#645041]">
            Calm classroom anxiety, lower cortisol, and reset your autonomic nervous system between classes.
          </p>
        </div>

        {/* Cinematic Breathing Circle */}
        <div className="relative w-48 h-48 mx-auto my-8 flex items-center justify-center">
          {/* Outer Pulsing Glow */}
          <div 
            className={`absolute inset-0 rounded-full bg-[#f4ae52]/30 blur-xl transition-all duration-1000 ${
              isActive && phase.includes('Inhale') ? 'scale-125 opacity-90' : 'scale-95 opacity-40'
            }`}
          />
          
          {/* Expanding / Contracting Core Circle */}
          <div 
            className={`absolute inset-4 rounded-full bg-gradient-to-br from-[#d4621a] to-[#f4ae52] flex flex-col items-center justify-center text-white shadow-lg transition-transform duration-[4000ms] ease-in-out ${
              isActive && (phase.includes('Inhale') || phase.includes('Hold')) ? 'scale-110' : 'scale-90'
            }`}
          >
            <Wind className="w-8 h-8 mb-1 animate-pulse" />
            <span className="font-serif-heading font-bold text-lg">{phase}</span>
            <span className="text-[11px] opacity-90">Cycle: {cycleCount}</span>
          </div>
        </div>

        {/* Timer & Controls */}
        <div className="space-y-4">
          <div className="text-2xl font-mono font-bold text-[#2a1a0e]">
            {formatTime(secondsLeft)} <span className="text-xs font-sans text-[#645041]">remaining</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            {!isActive ? (
              <button
                type="button"
                onClick={() => setIsActive(true)}
                className="inline-flex items-center gap-2 bg-[#d4621a] hover:bg-[#b84f10] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start Breathing Reset</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsActive(false)}
                className="inline-flex items-center gap-2 bg-[#ecdcc9] hover:bg-[#ecdcc9]/80 text-[#2a1a0e] font-semibold text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                <Pause className="w-4 h-4 fill-current" />
                <span>Pause</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setIsActive(false);
                setSecondsLeft(90);
                setCycleCount(0);
                setPhase('Ready');
              }}
              className="p-3 rounded-xl border border-[#ecdcc9] hover:bg-[#fbf5ee] text-[#645041] transition-colors cursor-pointer"
              title="Reset"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#ecdcc9] text-[11px] text-[#645041]">
          "When the nervous system feels safe, patience and classroom vitality naturally return."
        </div>
      </div>
    </div>
  );
};

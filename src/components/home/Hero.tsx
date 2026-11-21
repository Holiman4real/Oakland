import React from 'react';
import { useSchool, heroStudentsImg } from '../../context/SchoolContext';
import { SchoolCrest } from '../common/SchoolCrest';
import { ArrowRight, Sparkles, GraduationCap, ShieldCheck, Users, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { config } = useSchool();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
      {/* Background Photography with Sophisticated Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroStudentsImg}
          alt={`${config.name} students learning happily in modern classroom`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.42] scale-105 transform animate-fade-in"
        />
        {/* Multilayer gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy & Announcements */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top Admission Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="uppercase tracking-wider font-bold">Admission is Ongoing</span>
              <span className="text-amber-200/60">|</span>
              <span className="text-stone-200 font-normal">{config.currentSession}</span>
            </div>

            {/* School Crest, Name & Motto Lockup */}
            <div className="flex items-center gap-3 pt-1">
              <SchoolCrest size="lg" variant="light" />
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-crest">
                  Founded {config.established} · Co-Educational Academy
                </p>
                <p className="text-sm sm:text-base text-stone-300 italic font-serif">
                  "{config.motto}"
                </p>
              </div>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif-academic text-balance">
              Give Your Child the Best Foundation for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-100">Bright, Global Future.</span>
            </h1>

            {/* Introductory Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              Welcome to <strong className="text-white font-semibold">{config.name}</strong>, where academic excellence meets moral discipline, creative innovation, and individualized mentorship. We prepare visionary leaders for top universities and purposeful global impact.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-6 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg hover:shadow-amber-400/25 transition-all duration-200 flex items-center gap-2 group active:scale-95"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all duration-200 active:scale-95"
              >
                Learn More
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-3.5 text-sm sm:text-base font-medium text-amber-300 hover:text-amber-200 hover:underline transition-colors"
              >
                Book a School Tour &rarr;
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Dual British & National Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>99.4% IGCSE & WAEC Distinction</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>1:10 Teacher-to-Student Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Safe 15-Acre Gated Campus</span>
              </div>
            </div>
          </div>

          {/* Quick Admission Callout Card on the Right */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div>
                  <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                    Admissions Desk
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif">
                    Entry Open: 2026/2027
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Target Classes:</span>
                  <span className="font-semibold text-white">Crèche, Nursery, Primary & College</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Next Entrance Exam:</span>
                  <span className="font-semibold text-amber-300">Saturday, October 17, 2026</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Scholarships:</span>
                  <span className="font-semibold text-emerald-400">Merit & STEM Awards Available</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-400">Direct Helpline:</span>
                  <span className="font-semibold text-white">{config.phone}</span>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <button
                  onClick={() => onNavigate('admissions')}
                  className="w-full py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-md active:scale-98"
                >
                  Start Online Application &rarr;
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Takes less than 5 minutes to submit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

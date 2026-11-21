import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { BookOpen, Cpu, HeartHandshake, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate: (sectionId: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const { config } = useSchool();

  const pillars = [
    {
      icon: BookOpen,
      title: 'Academic Excellence & Dual Curriculum',
      description: 'A seamlessly integrated British National Curriculum (Cambridge IGCSE & A-Levels) alongside rigorous national standards, yielding consecutive 99.4% distinction results.',
      points: [
        'Personalized academic learning plans',
        'Accelerated STEM & language tracks',
        'Continuous diagnostic assessments',
      ],
    },
    {
      icon: Cpu,
      title: 'Modern STEM & Applied Innovation',
      description: 'Hands-on experiential learning where students construct robotics, write software, conduct biochemical research, and solve real community challenges.',
      points: [
        'Dedicated 3D printing & coding labs',
        'Annual Science & Invention Fair',
        'Olympiad and robotics competition coaching',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'Moral Discipline, Character & Leadership',
      description: 'We believe intellect without integrity is hollow. We cultivate self-discipline, public eloquence, empathy, respect, and global civic responsibility.',
      points: [
        'Prefect council and peer mentor programs',
        'Community outreach & volunteer hours',
        'Daily character affirmation assemblies',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Serene, Secure & Holistic Environment',
      description: 'A gated 15-acre sanctuary equipped with biometric access, CCTV monitoring, modern sports arena, resident nurses, and healthy chef-prepared nutrition.',
      points: [
        '24/7 armed and biometric perimeter security',
        'Olympic turf, heated pool, and indoor gymnasium',
        'Comprehensive health clinic with resident doctor',
      ],
    },
  ];

  return (
    <section className="py-20 bg-stone-50 text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            The {config.shortName} Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-serif-academic tracking-tight">
            Why Discerning Parents Entrust Us With Their Children
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            At {config.name}, we do not merely teach students to pass exams—we cultivate resilient thinkers, ethical leaders, and lifelong innovators ready for the modern world.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-stone-100">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-4 border-t border-stone-100">
                  <button
                    onClick={() => onNavigate('about')}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read about our philosophy</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif tabular-nums">
                99.4%
              </p>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 uppercase tracking-wider">
                Exam Distinction Rate
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">IGCSE, WAEC & A-Levels</p>
            </div>

            <div className="p-2 pt-6 md:pt-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif tabular-nums">
                1 : 10
              </p>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 uppercase tracking-wider">
                Teacher to Student Ratio
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">Personalized attention</p>
            </div>

            <div className="p-2 pt-6 md:pt-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif tabular-nums">
                28+
              </p>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 uppercase tracking-wider">
                Clubs & Athletic Squads
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">Robotics, Arts, Swimming</p>
            </div>

            <div className="p-2 pt-6 md:pt-2">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-serif tabular-nums">
                100%
              </p>
              <p className="text-xs sm:text-sm text-stone-300 mt-1 uppercase tracking-wider">
                Global University Entry
              </p>
              <p className="text-[11px] text-stone-400 mt-0.5">UK, US, Canada & Global</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

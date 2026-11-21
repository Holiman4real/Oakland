import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { config } = useSchool();

  const testimonials = [
    {
      id: 1,
      quote: `${config.name} has provided our daughters with an extraordinary academic and moral foundation. The teachers don't just instruct; they mentor. Within two terms, our elder daughter's confidence in robotics and public speaking blossomed beyond our highest expectations.`,
      author: 'Mrs. Folake Solanke',
      role: 'Parent of Grade 4 & Year 8 Scholars',
      year: 'Enrolled 2021',
      rating: 5,
    },
    {
      id: 2,
      quote: `The dual Cambridge and national curriculum gave me a distinct edge when applying for Mechanical Engineering at Imperial College London. The laboratory exposure, analytical rigor, and character mentoring I received at ${config.shortName} prepared me completely for Ivy Plus and Russell Group universities.`,
      author: 'David O. Adeleke',
      role: 'Alumnus (Class of 2023) · Imperial College London',
      year: 'Valedictorian',
      rating: 5,
    },
    {
      id: 3,
      quote: "What sets this school apart is the zero tolerance for indiscipline coupled with genuine warmth. The campus is safe, the facilities are world-class, and parent communication is exemplary. Enrolling my son here was the best decision we ever made.",
      author: 'Dr. Chidi Nwosu',
      role: 'Consultant Neurosurgeon & Parent of Year 9 Student',
      year: 'Enrolled 2022',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-stone-100 text-slate-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            Voices of Trust & Success
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900 tracking-tight">
            What Parents and Alumni Say About {config.shortName}
          </h2>
          <p className="text-stone-600 text-base">
            Read authentic perspectives from families whose children have experienced the transformative power of our holistic education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-amber-400/80" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed italic font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 space-y-0.5">
                <h4 className="text-sm font-bold text-slate-900 font-sans">
                  {t.author}
                </h4>
                <p className="text-xs text-amber-800 font-medium">
                  {t.role}
                </p>
                <p className="text-[11px] text-stone-400">
                  {t.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

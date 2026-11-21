import React from 'react';
import { useSchool, campusExteriorImg } from '../../context/SchoolContext';
import { SchoolCrest } from '../common/SchoolCrest';
import { Check, Target, Compass, Award, Shield, Lightbulb, Users, Heart } from 'lucide-react';

interface AboutUsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onNavigate }) => {
  const { config } = useSchool();

  const coreValues = [
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Striving for mastery, critical inquiry, intellectual curiosity, and rigorous standards in every discipline.',
    },
    {
      icon: Shield,
      title: 'Moral Integrity & Discipline',
      description: 'Doing what is right even when unobserved. Fostering self-control, punctuality, and honorable sportsmanship.',
    },
    {
      icon: Lightbulb,
      title: 'Creativity & Innovation',
      description: 'Encouraging original thinking, entrepreneurial solutions, artistic flair, and fearless scientific discovery.',
    },
    {
      icon: Compass,
      title: 'Visionary Leadership',
      description: 'Empowering every student to step forward, communicate articulately, lead with conviction, and serve others.',
    },
    {
      icon: Heart,
      title: 'Empathy & Respect',
      description: 'Valuing diversity, showing genuine kindness, honoring teachers and peers, and actively supporting the community.',
    },
    {
      icon: Users,
      title: 'Global Citizenship',
      description: 'Instilling an awareness of world challenges, cross-cultural appreciation, and environmental stewardship.',
    },
  ];

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            About Our Institution
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            Nurturing Tomorrow's Visionaries Since {config.established}
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            {config.name} was established with a singular, unwavering mission: to provide an internationally competitive education anchored in timeless moral virtues and leadership.
          </p>
        </div>

        {/* Vision, Mission & Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Our Vision</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                To be recognized as a premier global beacon of holistic education, producing intellectually versatile, morally upright, and socially proactive leaders who positively transform their societies.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 text-xs text-amber-700 font-semibold uppercase tracking-wider">
              Aspiration for Excellence
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-amber-300">Our Mission</h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                To deliver a world-class, learner-centered education through an innovative dual curriculum, state-of-the-art facilities, dedicated educators, and an unyielding commitment to character formation.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800 text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Daily Institutional Purpose
            </div>
          </div>

          {/* Educational Philosophy */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-slate-900">Our Philosophy</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We believe every child possesses unique genius waiting to be unlocked. Education is not passive rote retention, but an inspiring journey of creative inquiry, physical vigor, and ethical maturity.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 text-xs text-amber-700 font-semibold uppercase tracking-wider">
              Child-Centred Foundation
            </div>
          </div>
        </div>

        {/* Message from the Proprietor & Executive Principal */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Principal / Campus Vignette */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <div className="relative mx-auto lg:mx-0 max-w-xs overflow-hidden rounded-2xl border-4 border-amber-400/40 shadow-xl">
                <img
                  src={campusExteriorImg}
                  alt="School Campus Principal Office"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 text-white">
                  <p className="font-bold text-sm">Dr. Elizabeth Adeleke, Ph.D.</p>
                  <p className="text-xs text-amber-300">Executive Principal & Founder</p>
                  <p className="text-[10px] text-stone-300">M.Ed. (Harvard), B.Sc. (Ed)</p>
                </div>
              </div>
              <div className="text-xs text-stone-500 italic">
                "Guiding generations of scholars since {config.established}."
              </div>
            </div>

            {/* Letter / Welcome Prose */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <SchoolCrest size="sm" />
                <span className="text-xs uppercase font-bold tracking-widest text-amber-700">
                  Welcome from the Principal's Desk
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-900 leading-snug">
                "We Build Confident Minds, Noble Hearts, and Inspiring Leaders for a Changing World."
              </h2>

              <div className="text-sm sm:text-base text-stone-700 space-y-4 leading-relaxed">
                <p>
                  Dear Prospective Parents, Students, and Honored Guests,
                </p>
                <p>
                  It is my absolute privilege to welcome you to <strong>{config.name}</strong>. Choosing the right school for your child is one of the most consequential decisions you will ever make as a parent. You seek an environment that is safe, intellectually demanding, emotionally supportive, and firmly rooted in moral discipline.
                </p>
                <p>
                  Here at {config.name}, we do not settle for superficial academics. From their first joyful steps in our Early Years Foundation Stage to the rigorous analytical discussions of our Senior Secondary and Cambridge A-Level seminars, our students are treated as unique individuals of immense potential.
                </p>
                <p>
                  With <strong className="text-slate-900">Admission Ongoing for the {config.currentSession}</strong>, my team of passionate educators and I warmly invite you to visit our campus, observe our vibrant classrooms, and discover how we can partner together to give your child an unbeatable academic foundation.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-serif italic font-bold text-slate-900 text-lg">Dr. Elizabeth Adeleke</p>
                  <p className="text-xs text-stone-500">Executive Principal, {config.name}</p>
                </div>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                >
                  Join Us – Apply for Admission
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
              Guiding Principles
            </p>
            <h2 className="text-3xl font-bold font-serif-academic text-slate-900">
              Our Six Core Institutional Values
            </h2>
            <p className="text-stone-600 text-sm">
              These six timeless virtues underpin every lesson, assembly, athletic contest, and interaction at {config.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 font-serif mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History & Heritage Section */}
        <div className="bg-stone-100 rounded-2xl p-8 sm:p-12 border border-stone-200 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">
              Our Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-900">
              A Legacy of Uncompromising Academic Excellence
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Founded in {config.established} with an inaugural class of just 28 students, {config.name} has grown into an internationally celebrated center of learning catering to over 1,200 scholars across Early Years, Primary, and Secondary College divisions.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Over the past two decades, our alumni have matriculated to prestigious universities worldwide—including Oxford, Cambridge, Harvard, MIT, Imperial College London, University of Toronto, and top national universities—distinguishing themselves as corporate executives, medical consultants, civic reformers, and technological innovators.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('academics')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
            >
              Explore Our Programmes
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
            >
              Schedule a Campus Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

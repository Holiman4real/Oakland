import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { SchoolCrest } from '../common/SchoolCrest';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { config, setIsAdminOpen } = useSchool();

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Academic Programmes', id: 'academics' },
    { label: 'Admission Portal', id: 'admissions' },
    { label: 'School Life & Clubs', id: 'school-life' },
    { label: 'Campus Facilities', id: 'facilities' },
    { label: 'Photo Gallery', id: 'gallery' },
    { label: 'News & Events', id: 'news' },
    { label: 'Contact & Directions', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Footer Top Marquee / Call to action */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 py-6 px-4 text-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wide">
              Admission is Ongoing – Apply Now
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-900">
              Give your child the best foundation for a bright future. Enrol for the {config.currentSession}.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admissions')}
            className="px-6 py-2.5 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold uppercase text-xs tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2 active:scale-95"
          >
            <span>Start Online Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Crest */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolCrest size="md" variant="light" />
              <div>
                <h3 className="text-xl font-bold font-serif-academic text-white">
                  {config.name}
                </h3>
                <p className="text-xs text-amber-400 italic">
                  "{config.motto}"
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              An internationally renowned co-educational academy committed to academic rigor, creative problem-solving, moral discipline, and nurturing future global leaders.
            </p>

            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p>Government Approved & Ministry of Education Certified</p>
              <p>Cambridge International School Center No. NG942</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-300">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-amber-500 text-xs">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Admissions & Programmes */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-400 text-left font-semibold text-white"
                >
                  Apply Online (Ongoing)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-400 text-left"
                >
                  Admission Requirements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-400 text-left"
                >
                  Entrance Examination
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admissions')}
                  className="hover:text-amber-400 text-left"
                >
                  Scholarships & Bursaries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-400 text-left"
                >
                  Book a Campus Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Admissions Office
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{config.address}, {config.cityState}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{config.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{config.admissionsEmail}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsAdminOpen(true)}
                className="text-[11px] text-stone-400 hover:text-amber-400 underline"
              >
                School Administrator & Customizer Portal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>Academic Excellence</span>
            <span>·</span>
            <span>Moral Discipline</span>
            <span>·</span>
            <span>Global Leadership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

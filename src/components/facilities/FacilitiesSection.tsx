import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Facility } from '../../types/school';
import { ShieldCheck, Check, Sparkles, Bus, HeartPulse, Utensils, Wifi } from 'lucide-react';

interface FacilitiesSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onNavigate }) => {
  const { facilities, config } = useSchool();
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { label: 'All Facilities', id: 'all' },
    { label: 'STEM & Tech', id: 'stem' },
    { label: 'Academic & Library', id: 'academic' },
    { label: 'Sports & Athletics', id: 'sports' },
    { label: 'Campus & Living', id: 'living' },
  ];

  const filtered = filter === 'all'
    ? facilities
    : facilities.filter((f) => f.category === filter);

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            World-Class Infrastructure
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            Designed for Discovery, Safety & Boundless Potential
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Our purpose-built campus seamlessly marries architectural aesthetics with cutting-edge academic technology to provide an inspiring atmosphere where children flourish.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-stone-200/80 rounded-xl max-w-2xl mx-auto overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                filter === c.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-slate-900'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={fac.imageUrl}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-amber-400 text-[11px] font-bold uppercase px-3 py-1 rounded-md">
                    {fac.capacity}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold font-serif text-slate-900 leading-snug">
                    {fac.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {fac.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Key Specifications:
                    </p>
                    <ul className="space-y-1">
                      {fac.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 text-stone-700 text-xs font-semibold rounded-lg transition-colors text-center"
                >
                  Schedule Tour to View Facility
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Campus Amenities Strip */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
              Complete Child Well-Being
            </span>
            <h3 className="text-2xl font-bold font-serif-academic text-slate-900">
              Essential Student Support & Campus Amenities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Bus className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">School Bus Fleet</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Air-conditioned modern buses with GPS tracking, seat belts, and trained bus chaperones serving all major residential routes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Infirmary & Medical Care</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Staffed by full-time registered nurses and an on-call physician for immediate first aid, medical checkups, and wellness monitoring.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Utensils className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Sanitized Dining & Cuisine</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nutritious hot meals, fresh fruits, and balanced dining cooked daily under strict hygiene protocols by professional catering staff.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                <Wifi className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">High-Speed Campus Fiber</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Secure, firewalled fiber internet across all academic wings, supporting one-to-one digital learning and cloud assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

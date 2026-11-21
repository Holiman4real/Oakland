import React from 'react';
import { useSchool } from '../../context/SchoolContext';
import { Calendar, ArrowRight, CheckCircle2, Clock, FileCheck } from 'lucide-react';

interface AdmissionBannerProps {
  onNavigate: (sectionId: string) => void;
}

export const AdmissionBanner: React.FC<AdmissionBannerProps> = ({ onNavigate }) => {
  const { config } = useSchool();

  return (
    <section className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 py-10 px-4 sm:px-6 lg:px-8 border-y-4 border-amber-600 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-amber-300/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 rounded-full text-xs font-black tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-pulse" />
                ADMISSION IS ONGOING
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-serif-academic leading-tight">
                Give Your Child the Best Foundation for a Bright Future.
              </h2>

              <p className="text-base sm:text-lg text-amber-100 font-medium">
                Applications are now open for the <span className="text-amber-300 font-bold">{config.currentSession}</span>. Enrol your child today into Nursery, Primary, or Secondary College.
              </p>

              {/* Checklist points for parents */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Immediate Online Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Flexible Assessment Dates</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Scholarships for Top Performers</span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:items-stretch lg:items-end">
              <button
                onClick={() => onNavigate('admissions')}
                className="w-full lg:w-auto px-8 py-4 text-center text-base sm:text-lg font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-xl hover:shadow-amber-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full lg:w-auto px-6 py-3 text-center text-xs sm:text-sm font-semibold text-amber-200 hover:text-white border border-amber-400/30 hover:border-amber-400 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book In-Person Campus Tour</span>
              </button>

              <p className="text-[12px] text-slate-400 text-center lg:text-right">
                Admission inquiries: <span className="text-white font-medium">{config.phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

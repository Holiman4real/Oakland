import React, { useState } from 'react';
import { useSchool, sportsImg, stemLabImg } from '../../context/SchoolContext';
import {
  Trophy,
  Users,
  Music,
  Compass,
  Award,
  Sparkles,
  Calendar,
  CheckCircle,
  Flag,
  ArrowRight
} from 'lucide-react';

interface SchoolLifeProps {
  onNavigate: (sectionId: string) => void;
}

export const SchoolLifeSection: React.FC<SchoolLifeProps> = ({ onNavigate }) => {
  const { schoolLife, config } = useSchool();
  const [activeTab, setActiveTab] = useState<string>('All');

  const tabs = ['All', 'Clubs', 'Sports', 'Cultural', 'Leadership', 'Excursions'];

  const filteredItems = activeTab === 'All'
    ? schoolLife
    : schoolLife.filter((item) => item.category === activeTab);

  const getIcon = (category: string) => {
    switch (category) {
      case 'Sports':
        return Trophy;
      case 'Clubs':
        return Sparkles;
      case 'Cultural':
        return Music;
      case 'Leadership':
        return Award;
      case 'Excursions':
        return Compass;
      default:
        return Users;
    }
  };

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            Vibrant Student Experience
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            Beyond the Classroom: Passion, Character & Teamwork
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            At {config.name}, school life is a rich tapestry of athletic competition, intellectual clubs, artistic expression, and leadership opportunities that mold well-rounded young adults.
          </p>
        </div>

        {/* Hero Visual Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg h-72 sm:h-96 relative">
            <img
              src={sportsImg}
              alt={`${config.name} student athletics and teamwork`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                  Athletic Championship
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif">
                  House Sports & Competitive Inter-School Leagues
                </h3>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase">
              <Flag className="w-3.5 h-3.5 text-amber-700" />
              Four Historic Houses
            </div>
            <h3 className="text-2xl font-bold font-serif-academic text-slate-900">
              The {config.shortName} House System
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every student belongs to one of four historic houses: <strong>Emerald Eagles</strong>, <strong>Sapphire Sharks</strong>, <strong>Ruby Rhinos</strong>, and <strong>Amber Lions</strong>.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Through friendly termly competitions in debate, chess, spelling bee, swimming, football, and academic quizzes, students develop lifelong bonds of loyalty, mutual accountability, and healthy competitive drive.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2"
              >
                <span>Enrol Your Child</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-slate-900 hover:bg-stone-300/60'
              }`}
            >
              {tab === 'All' ? 'All Activities' : tab}
            </button>
          ))}
        </div>

        {/* Activities & Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const Icon = getIcon(item.category);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5">
                    <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Key Highlights:
                    </p>
                    <ul className="space-y-1">
                      {item.keyHighlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-xs text-stone-600">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    {item.meetingSchedule}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leadership & Character Accent Callout */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Student Governance & Service
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-academic text-white">
                Empowering Voices: The {config.shortName} Prefect & Ambassador Council
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                From Year 6 through Year 12, students are elected by peers and faculty to assume authentic leadership roles: Head Boy, Head Girl, Chapel & Moral Prefect, Sports Captain, and STEM Ambassador. They lead school assemblies, spearhead community charity drives, and represent the student body at international youth summits.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <button
                onClick={() => onNavigate('admissions')}
                className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md active:scale-95"
              >
                Join Our School Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

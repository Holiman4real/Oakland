import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { NewsItem } from '../../types/school';
import { Bell, Calendar, Clock, ArrowRight, Tag, Bookmark } from 'lucide-react';

interface NewsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  const { news, config } = useSchool();
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Admission', 'Academic', 'Events', 'Sports', 'Holiday'];

  const filteredNews = activeCategory === 'All'
    ? news
    : news.filter((item) => item.category === activeCategory);

  const featured = news.find((item) => item.isFeatured) || news[0];

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            Campus Bulletins & Updates
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            News, Events & Official Announcements
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Stay informed with the latest happenings, academic deadlines, entrance test schedules, and student milestones across our academy.
          </p>
        </div>

        {/* Featured Urgent Announcement Card (ADMISSION IS ONGOING) */}
        {featured && (
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-amber-500/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-4xl space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-md flex items-center gap-1.5 animate-pulse">
                  <Bell className="w-3.5 h-3.5" />
                  {featured.importantBadge || 'FEATURED ANNOUNCEMENT'}
                </span>
                <span className="text-xs text-stone-400">
                  Published {featured.date} · {featured.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-serif-academic text-white leading-tight">
                {featured.title}
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
                {featured.summary}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedArticle(featured)}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  Read Full Notice
                </button>

                <button
                  onClick={() => onNavigate('admissions')}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors border border-white/20"
                >
                  Online Application Form &rarr;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-slate-900'
              }`}
            >
              {cat === 'All' ? 'All Bulletins' : cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-stone-200 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="font-semibold text-amber-700 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400">
                  {item.readTime}
                </span>

                <button
                  onClick={() => setSelectedArticle(item)}
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:underline"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Academic Calendar Summary */}
        <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                Session Schedule
              </span>
              <h3 className="text-xl font-bold font-serif text-slate-900">
                Key Academic & Examination Calendar Dates
              </h3>
            </div>
            <span className="text-xs font-medium text-stone-500 hidden sm:inline">
              Academic Year 2026/2027
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="text-xs font-bold text-amber-700 block">October 17, 2026</span>
              <h4 className="text-sm font-bold text-slate-900">Entrance Test Batch 2</h4>
              <p className="text-xs text-stone-600">Nursery, Primary & College applicants</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="text-xs font-bold text-amber-700 block">October 28, 2026</span>
              <h4 className="text-sm font-bold text-slate-900">Parent-Teacher Conference</h4>
              <p className="text-xs text-stone-600">Mid-term consultations & feedback</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="text-xs font-bold text-amber-700 block">November 14, 2026</span>
              <h4 className="text-sm font-bold text-slate-900">Annual STEM & Arts Expo</h4>
              <p className="text-xs text-stone-600">Student inventions & stage performances</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200/80 space-y-1">
              <span className="text-xs font-bold text-amber-700 block">December 11, 2026</span>
              <h4 className="text-sm font-bold text-slate-900">Carol Service & Vacation</h4>
              <p className="text-xs text-stone-600">First Term vacation begins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>{selectedArticle.category}</span>
                <span>·</span>
                <span className="text-stone-500 font-normal">{selectedArticle.date}</span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-stone-400 hover:text-stone-800 text-lg font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 leading-tight">
              {selectedArticle.title}
            </h2>

            <div className="text-stone-700 text-sm sm:text-base leading-relaxed space-y-4 border-t border-stone-100 pt-4">
              <p className="font-semibold text-stone-800">
                {selectedArticle.summary}
              </p>
              <p className="whitespace-pre-line">
                {selectedArticle.content}
              </p>
            </div>

            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                Issued by {config.name} Communications Office
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onNavigate('admissions');
                  }}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase rounded-lg"
                >
                  Apply For Admission
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium rounded-lg"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

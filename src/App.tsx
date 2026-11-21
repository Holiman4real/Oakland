import React, { useState, useEffect } from 'react';
import { SchoolProvider, useSchool } from './context/SchoolContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { AdmissionBanner } from './components/home/AdmissionBanner';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { Testimonials } from './components/home/Testimonials';
import { AboutUsSection } from './components/about/AboutUsSection';
import { AcademicsSection } from './components/academics/AcademicsSection';
import { AdmissionsSection } from './components/admissions/AdmissionsSection';
import { SchoolLifeSection } from './components/school-life/SchoolLifeSection';
import { FacilitiesSection } from './components/facilities/FacilitiesSection';
import { GallerySection } from './components/gallery/GallerySection';
import { NewsSection } from './components/news/NewsSection';
import { ContactSection } from './components/contact/ContactSection';
import { AdminCustomizerDrawer } from './components/admin/AdminCustomizerDrawer';
import { ArrowRight, BookOpen, Sparkles, Building2, Bell, CheckCircle } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { activeSection, setActiveSection, config, programs, news, facilities } = useSchool();

  // Scroll to top on navigation change
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Sticky Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Page Routing */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <div>
            {/* 1. Hero Section */}
            <Hero onNavigate={handleNavigate} />

            {/* 2. Prominent Admission Banner */}
            <AdmissionBanner onNavigate={handleNavigate} />

            {/* 3. Why Choose Us (4 Pillars & Quantitative rigor) */}
            <WhyChooseUs onNavigate={handleNavigate} />

            {/* 4. Programmes Preview Strip */}
            <section className="py-20 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                      Our Academic Structure
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900">
                      Tailored Pathways From Early Years to College
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">
                      Explore our age-appropriate curricula designed to ignite critical inquiry and global preparedness.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('academics')}
                    className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5 shrink-0 hover:underline"
                  >
                    <span>View All Programmes</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {programs.map((prog) => (
                    <div
                      key={prog.id}
                      className="bg-stone-50 rounded-2xl p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">
                          {prog.category}
                        </span>
                        <h3 className="text-lg font-bold font-serif text-slate-900 group-hover:text-amber-700 transition-colors">
                          {prog.name}
                        </h3>
                        <p className="text-xs text-stone-500 font-medium">
                          {prog.ageRange}
                        </p>
                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                          {prog.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-stone-200">
                        <button
                          onClick={() => handleNavigate('academics')}
                          className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:underline"
                        >
                          <span>Curriculum Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Campus Facilities Preview */}
            <section className="py-20 bg-stone-100 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-3">
                  <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                    Campus Life & Amenities
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900">
                    State-of-the-Art Educational Facilities
                  </h2>
                  <p className="text-stone-600 text-sm sm:text-base">
                    From 4K smart interactive classrooms and advanced STEM robotics laboratories to Olympic-grade sports fields, our campus is designed for holistic achievement.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {facilities.slice(0, 3).map((fac) => (
                    <div
                      key={fac.id}
                      className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-52 overflow-hidden relative">
                          <img
                            src={fac.imageUrl}
                            alt={fac.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded">
                            {fac.capacity}
                          </div>
                        </div>

                        <div className="p-6 space-y-2">
                          <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">
                            {fac.name}
                          </h3>
                          <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                            {fac.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <button
                          onClick={() => handleNavigate('facilities')}
                          className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group-hover:underline"
                        >
                          <span>Explore all facilities</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => handleNavigate('facilities')}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                  >
                    View Full Campus Tour & Infrastructure
                  </button>
                </div>
              </div>
            </section>

            {/* 6. Testimonials */}
            <Testimonials />

            {/* 7. Latest Announcements & News Preview */}
            <section className="py-20 bg-stone-50 border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <span className="text-xs uppercase tracking-widest text-amber-700 font-bold">
                      Campus Bulletins
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold font-serif-academic text-slate-900">
                      Latest News & Academic Announcements
                    </h2>
                    <p className="text-stone-600 text-sm sm:text-base">
                      Keep up with important term dates, entrance examinations, and academic milestones.
                    </p>
                  </div>

                  <button
                    onClick={() => handleNavigate('news')}
                    className="text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 flex items-center gap-1.5 shrink-0 hover:underline"
                  >
                    <span>View All Announcements</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {news.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-stone-500">
                          <span className="font-bold text-amber-700 uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span>{item.date}</span>
                        </div>

                        <h3 className="text-base font-bold font-serif text-slate-900 leading-snug">
                          {item.title}
                        </h3>

                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                        <span className="text-[11px] text-stone-400">{item.readTime}</span>
                        <button
                          onClick={() => handleNavigate('news')}
                          className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 8. Final Call to Action */}
            <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400 text-slate-950 rounded-full text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  ENROL YOUR CHILD TODAY
                </span>

                <h2 className="text-3xl sm:text-5xl font-bold font-serif-academic text-white">
                  Invest in an Education That Lasts a Lifetime
                </h2>

                <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                  Admission is ongoing for the {config.currentSession}. Secure your child's placement in our nurturing, internationally competitive academic community.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => handleNavigate('admissions')}
                    className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    APPLY NOW FOR ADMISSION
                  </button>

                  <button
                    onClick={() => handleNavigate('contact')}
                    className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm rounded-xl transition-all"
                  >
                    BOOK A CAMPUS TOUR
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'about' && (
          <AboutUsSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'academics' && (
          <AcademicsSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'admissions' && (
          <AdmissionsSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'school-life' && (
          <SchoolLifeSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'facilities' && (
          <FacilitiesSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'gallery' && (
          <GallerySection />
        )}

        {activeSection === 'news' && (
          <NewsSection onNavigate={handleNavigate} />
        )}

        {activeSection === 'contact' && (
          <ContactSection onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* School Administrator & Customizer Drawer */}
      <AdminCustomizerDrawer />
    </div>
  );
};

export default function App() {
  return (
    <SchoolProvider>
      <MainAppContent />
    </SchoolProvider>
  );
}

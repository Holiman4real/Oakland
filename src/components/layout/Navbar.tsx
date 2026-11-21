import React, { useState, useEffect } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { SchoolCrest } from '../common/SchoolCrest';
import { Menu, X, Phone, Calendar, Sliders, Bell } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const { config, setIsAdminOpen } = useSchool();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'School Life', id: 'school-life' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'News', id: 'news' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Topmost Prominent Admission Announcement Bar */}
      <div className="bg-amber-500 text-slate-950 text-xs sm:text-sm font-semibold tracking-wide py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-950 text-amber-300 text-[11px] font-bold uppercase rounded tracking-wider shrink-0 animate-pulse">
              <Bell className="w-3 h-3" />
              Admission Alert
            </span>
            <span className="truncate">
              <strong>ADMISSION IS ONGOING</strong> — Give your child the best foundation for a bright future. Enrol for the {config.currentSession}.
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 shrink-0 text-xs font-medium text-slate-900">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              {config.phone}
            </span>
            <button
              onClick={() => handleNavClick('admissions')}
              className="underline hover:text-black font-bold uppercase tracking-wider"
            >
              Apply Online &rarr;
            </button>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="flex items-center gap-1 text-slate-800 hover:text-slate-950 bg-amber-400/80 px-2 py-0.5 rounded transition-colors"
              title="Customize School Information"
            >
              <Sliders className="w-3 h-3" />
              <span>Admin / Customize</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/98 text-white shadow-lg backdrop-blur-md border-b border-slate-800'
            : 'bg-slate-900 text-white border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* School Brand Wordmark & Crest */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            >
              <SchoolCrest size="md" variant="light" />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors font-serif-academic">
                  {config.name}
                </span>
                <span className="text-[11px] sm:text-xs text-amber-200/80 font-normal tracking-wide italic line-clamp-1 max-w-xs sm:max-w-sm">
                  {config.motto}
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-[13px] font-medium text-slate-200 tracking-wide">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-colors py-1 relative whitespace-nowrap ${
                      isActive
                        ? 'text-amber-400 font-semibold'
                        : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA & Actions Area */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setIsAdminOpen(true)}
                className="xl:hidden p-2 text-slate-300 hover:text-amber-400 rounded-lg border border-slate-700 hover:border-slate-500 text-xs flex items-center gap-1.5 transition-colors"
                title="School Admin & Customizer"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Admin</span>
              </button>

              <button
                onClick={() => handleNavClick('admissions')}
                className="group relative inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <span className="relative flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Apply Now
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => handleNavClick('admissions')}
                className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase text-slate-950 bg-amber-400 rounded-md"
              >
                Apply
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950/98 border-t border-slate-800 px-4 pt-3 pb-6 space-y-1 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="p-3 mb-2 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Admission is Ongoing
              </p>
              <p className="text-xs text-slate-300 mt-0.5">
                Applications open for {config.currentSession}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 py-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('admissions');
                }}
                className="w-full py-2.5 text-center text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg"
              >
                Apply For Admission
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="w-full py-2 text-center text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5" />
                Customize School Info & Admin Portal
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

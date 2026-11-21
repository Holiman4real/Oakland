import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { AcademicProgram } from '../../types/school';
import { BookOpen, CheckCircle, Plus, Sparkles, User, Layers, ArrowRight } from 'lucide-react';

interface AcademicsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onNavigate }) => {
  const { programs, addProgram } = useSchool();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // New program form state
  const [newProgName, setNewProgName] = useState('');
  const [newProgCategory, setNewProgCategory] = useState<AcademicProgram['category']>('Primary');
  const [newProgAge, setNewProgAge] = useState('');
  const [newProgGrades, setNewProgGrades] = useState('');
  const [newProgDesc, setNewProgDesc] = useState('');
  const [newProgSubjects, setNewProgSubjects] = useState('');
  const [newProgFeatures, setNewProgFeatures] = useState('');
  const [newProgHead, setNewProgHead] = useState('');

  const categories = ['All', 'Nursery', 'Primary', 'Secondary', 'Sixth Form'];

  const filteredPrograms = selectedCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === selectedCategory);

  const handleCreateProgram = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProgName || !newProgDesc) return;

    addProgram({
      name: newProgName,
      category: newProgCategory,
      ageRange: newProgAge || 'Age range specified on inquiry',
      gradeLevels: newProgGrades || 'Standard grades',
      description: newProgDesc,
      keyLearningAreas: newProgSubjects ? newProgSubjects.split(',').map((s) => s.trim()) : ['Foundational Core', 'Inquiry Curriculum'],
      features: newProgFeatures ? newProgFeatures.split(',').map((f) => f.trim()) : ['Certified educators', 'Interactive smart classroom'],
      headOfDepartment: newProgHead || 'Department Dean',
    });

    // Reset form
    setNewProgName('');
    setNewProgAge('');
    setNewProgGrades('');
    setNewProgDesc('');
    setNewProgSubjects('');
    setNewProgFeatures('');
    setNewProgHead('');
    setShowAddModal(false);
  };

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
              Academics & Curricula
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
              Inspiring World-Class Scholarship at Every Level
            </h1>
            <p className="text-stone-600 text-base sm:text-lg">
              From our play-based early childhood stages through advanced Cambridge secondary credentials, our academic pathways foster intellectual courage, deep conceptual mastery, and ethical awareness.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add / Edit Programme</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-stone-200/80 rounded-xl overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-slate-900 hover:bg-stone-300/60'
              }`}
            >
              {cat === 'All' ? 'All Programmes' : cat}
            </button>
          ))}
        </div>

        {/* Programmes Grid */}
        <div className="space-y-12">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Corner badge indicating stage */}
              <div className="absolute top-0 right-0 bg-slate-900 text-amber-400 text-[11px] font-bold uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                {program.category} Division
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>{program.ageRange}</span>
                    <span>·</span>
                    <span className="text-stone-500 font-normal">{program.gradeLevels}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-900">
                    {program.name}
                  </h3>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlights / Features */}
                  <div className="pt-2 space-y-2">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-800">
                      Programme Distinctions
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {program.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Department Leadership */}
                  <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-600">
                    <User className="w-4 h-4 text-amber-700" />
                    <span>Academic Lead: <strong className="text-slate-800">{program.headOfDepartment}</strong></span>
                  </div>
                </div>

                {/* Right Key Learning Areas */}
                <div className="lg:col-span-5 bg-stone-50 rounded-xl p-6 border border-stone-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs uppercase font-bold tracking-wider text-slate-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-700" />
                      Key Learning Areas & Subjects
                    </h4>
                    <span className="text-[11px] text-amber-800 font-semibold bg-amber-100 px-2 py-0.5 rounded">
                      Curriculum Core
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {program.keyLearningAreas.map((area, aIdx) => (
                      <li
                        key={aIdx}
                        className="text-xs sm:text-sm text-stone-700 flex items-center justify-between p-2 bg-white rounded-lg border border-stone-200/70"
                      >
                        <span className="font-medium">{area}</span>
                        <span className="text-amber-600 text-xs font-bold">✓</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-xs text-stone-500">
                      Admission is ongoing for this stage
                    </span>
                    <button
                      onClick={() => onNavigate('admissions')}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 group"
                    >
                      <span>Enrol Today</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Curriculum Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-400 text-slate-950 text-xs font-bold uppercase rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Integrated Assessment System
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-academic text-white">
              Dual Global Recognition: Cambridge Assessment & WAEC Distinctions
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Our scholars graduate with prestigious international qualifications that open doors to premier universities in the United Kingdom, United States, Canada, Europe, and Nigeria.
            </p>
          </div>

          <button
            onClick={() => onNavigate('admissions')}
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0"
          >
            Apply for Admission
          </button>
        </div>
      </div>

      {/* Add New Programme Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  Add New Academic Programme
                </h3>
                <p className="text-xs text-stone-500">
                  Instantly publish an additional curriculum or specialized stage
                </p>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700 text-lg font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProgram} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Programme Name *
                </label>
                <input
                  type="text"
                  required
                  value={newProgName}
                  onChange={(e) => setNewProgName(e.target.value)}
                  placeholder="e.g. Cambridge IGCSE Intensive & Coding Honors"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category *</label>
                  <select
                    value={newProgCategory}
                    onChange={(e) => setNewProgCategory(e.target.value as any)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Nursery">Nursery / Early Years</option>
                    <option value="Primary">Primary / Elementary</option>
                    <option value="Secondary">Secondary / College</option>
                    <option value="Sixth Form">Sixth Form / Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Age Range</label>
                  <input
                    type="text"
                    value={newProgAge}
                    onChange={(e) => setNewProgAge(e.target.value)}
                    placeholder="e.g. Ages 11 – 15 Years"
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Grade Levels</label>
                <input
                  type="text"
                  value={newProgGrades}
                  onChange={(e) => setNewProgGrades(e.target.value)}
                  placeholder="e.g. Years 7, 8 & 9 (JSS 1-3)"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Description *</label>
                <textarea
                  required
                  rows={3}
                  value={newProgDesc}
                  onChange={(e) => setNewProgDesc(e.target.value)}
                  placeholder="Provide an overview of the curriculum and pedagogical approach..."
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Key Subjects / Learning Areas (comma separated)
                </label>
                <input
                  type="text"
                  value={newProgSubjects}
                  onChange={(e) => setNewProgSubjects(e.target.value)}
                  placeholder="e.g. Pure Physics, Advanced Calculus, Python Coding, Global Ethics"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Key Features / Distinctions (comma separated)
                </label>
                <input
                  type="text"
                  value={newProgFeatures}
                  onChange={(e) => setNewProgFeatures(e.target.value)}
                  placeholder="e.g. 1:12 class ratio, Weekly laboratory sessions, SAT prep"
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Head of Department / Director
                </label>
                <input
                  type="text"
                  value={newProgHead}
                  onChange={(e) => setNewProgHead(e.target.value)}
                  placeholder="e.g. Mr. Johnathan Ross, M.Ed."
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg"
                >
                  Save & Publish Programme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

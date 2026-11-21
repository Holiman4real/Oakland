import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import {
  X,
  Sliders,
  RotateCcw,
  Check,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
  BookOpen
} from 'lucide-react';

export const AdminCustomizerDrawer: React.FC = () => {
  const {
    config,
    updateConfig,
    resetConfig,
    applications,
    updateApplicationStatus,
    contactMessages,
    isAdminOpen,
    setIsAdminOpen,
  } = useSchool();

  const [activeTab, setActiveTab] = useState<'branding' | 'applications' | 'messages'>('branding');

  // Edit fields
  const [name, setName] = useState(config.name);
  const [shortName, setShortName] = useState(config.shortName);
  const [motto, setMotto] = useState(config.motto);
  const [established, setEstablished] = useState(config.established);
  const [address, setAddress] = useState(config.address);
  const [cityState, setCityState] = useState(config.cityState);
  const [phone, setPhone] = useState(config.phone);
  const [secondaryPhone, setSecondaryPhone] = useState(config.secondaryPhone);
  const [email, setEmail] = useState(config.email);
  const [admissionsEmail, setAdmissionsEmail] = useState(config.admissionsEmail);
  const [currentSession, setCurrentSession] = useState(config.currentSession);
  const [admissionStatusText, setAdmissionStatusText] = useState(config.admissionStatusText);

  const [savedSuccess, setSavedSuccess] = useState(false);

  React.useEffect(() => {
    setName(config.name);
    setShortName(config.shortName);
    setMotto(config.motto);
    setEstablished(config.established);
    setAddress(config.address);
    setCityState(config.cityState);
    setPhone(config.phone);
    setSecondaryPhone(config.secondaryPhone);
    setEmail(config.email);
    setAdmissionsEmail(config.admissionsEmail);
    setCurrentSession(config.currentSession);
    setAdmissionStatusText(config.admissionStatusText);
  }, [config]);

  // Preset themes
  const presets = [
    {
      label: 'Right Choice International School',
      name: 'Right Choice International School',
      short: 'Right Choice',
      motto: 'Excellence, Integrity, Discipline & Global Leadership',
      established: '1998',
      address: '24 Academic Boulevard, Victoria Crest Campus',
      phone: '+234 (0) 803 456 7890',
      email: 'admissions@rightchoiceschool.com',
    },
    {
      label: 'Crown Crest High School',
      name: 'Crown Crest High & Preparatory College',
      short: 'Crown Crest',
      motto: 'Knowledge, Character & Distinction',
      established: '2004',
      address: '12 Presidential Way, Asokoro District, Abuja',
      phone: '+234 (0) 809 112 3344',
      email: 'info@crowncrestcollege.edu',
    },
    {
      label: 'St. Augustine Model Academy',
      name: 'St. Augustine Model Academy',
      short: 'St. Augustine',
      motto: 'Faith, Diligence, Innovation & Service',
      established: '1992',
      address: '5 Cathedral Hill, Ikeja GRA, Lagos',
      phone: '+234 (0) 802 887 6655',
      email: 'admissions@staugustineacademy.sch.ng',
    },
  ];

  const handleApplyPreset = (preset: typeof presets[0]) => {
    setName(preset.name);
    setShortName(preset.short);
    setMotto(preset.motto);
    setEstablished(preset.established);
    setAddress(preset.address);
    setPhone(preset.phone);
    setEmail(preset.email);
    updateConfig({
      name: preset.name,
      shortName: preset.short,
      motto: preset.motto,
      established: preset.established,
      address: preset.address,
      phone: preset.phone,
      email: preset.email,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleSaveBranding = (e: React.FormEvent) => {
    e.preventDefault();
    updateConfig({
      name,
      shortName,
      motto,
      established,
      address,
      cityState,
      phone,
      secondaryPhone,
      email,
      admissionsEmail,
      currentSession,
      admissionStatusText,
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  if (!isAdminOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-lg">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold font-serif text-white">
                School Administrator & Live Customizer
              </h2>
              <p className="text-xs text-stone-400">
                Update school branding, review applications & inquiries
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 text-stone-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-stone-200 px-6 bg-stone-50 shrink-0">
          <button
            onClick={() => setActiveTab('branding')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'branding'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-slate-900'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>School Branding & Info</span>
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'applications'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Online Applications ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`py-3.5 px-4 text-xs font-bold uppercase tracking-wider border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'messages'
                ? 'border-amber-600 text-amber-700 bg-white'
                : 'border-transparent text-stone-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Inquiries & Tours ({contactMessages.length})</span>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: BRANDING & CUSTOMIZATION */}
          {activeTab === 'branding' && (
            <div className="space-y-6">
              {/* Presets Quick-load */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
                <span className="text-xs uppercase font-bold text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  Quick Presets (1-Click Switch)
                </span>
                <p className="text-xs text-amber-900">
                  Switch instantly between realistic school profiles:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {presets.map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(p)}
                      className="px-3 py-1.5 text-xs font-semibold bg-white hover:bg-amber-100 text-slate-800 border border-amber-300 rounded-lg transition-colors"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {savedSuccess && (
                <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Branding and School Details updated across the entire website!</span>
                </div>
              )}

              <form onSubmit={handleSaveBranding} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    School Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Short Name / Acronym
                    </label>
                    <input
                      type="text"
                      value={shortName}
                      onChange={(e) => setShortName(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Year Established
                    </label>
                    <input
                      type="text"
                      value={established}
                      onChange={(e) => setEstablished(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    School Motto *
                  </label>
                  <input
                    type="text"
                    required
                    value={motto}
                    onChange={(e) => setMotto(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Active Academic Session
                    </label>
                    <input
                      type="text"
                      value={currentSession}
                      onChange={(e) => setCurrentSession(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Admission Headline Banner
                    </label>
                    <input
                      type="text"
                      value={admissionStatusText}
                      onChange={(e) => setAdmissionStatusText(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100">
                  <h4 className="text-xs uppercase font-bold text-slate-900 tracking-wider mb-2">
                    Contact & Location Details
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Physical Campus Address
                      </label>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Primary Phone
                        </label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Admissions Desk Phone
                        </label>
                        <input
                          type="text"
                          value={secondaryPhone}
                          onChange={(e) => setSecondaryPhone(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          General Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">
                          Admissions Office Email
                        </label>
                        <input
                          type="email"
                          value={admissionsEmail}
                          onChange={(e) => setAdmissionsEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={resetConfig}
                    className="text-xs text-rose-700 hover:text-rose-900 font-semibold flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset All to Defaults</span>
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: APPLICATIONS REGISTRY */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                  Submitted Student Applications
                </span>
                <span className="text-xs text-stone-500">
                  {applications.length} total recorded
                </span>
              </div>

              {applications.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-sm">
                  No online applications have been submitted yet.
                </div>
              ) : (
                <div className="space-y-4">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className="p-5 bg-stone-50 border border-stone-200 rounded-xl space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200/80 pb-2">
                        <div>
                          <strong className="text-sm text-slate-900 block font-serif">
                            {app.studentFullName}
                          </strong>
                          <span className="text-xs text-amber-800 font-mono font-bold">
                            {app.referenceNumber}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={app.status}
                            onChange={(e) => updateApplicationStatus(app.id, e.target.value as any)}
                            className="text-xs font-semibold px-2.5 py-1 bg-white border border-stone-300 rounded-md focus:outline-none"
                          >
                            <option value="Received">Received</option>
                            <option value="Reviewing">Reviewing</option>
                            <option value="Assessment Scheduled">Assessment Scheduled</option>
                            <option value="Accepted">Accepted</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                        <div>
                          <span className="text-stone-400 block">Class:</span>
                          <strong>{app.classApplyingFor}</strong>
                        </div>
                        <div>
                          <span className="text-stone-400 block">DOB / Gender:</span>
                          <span>{app.dateOfBirth} ({app.gender})</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Parent Phone:</span>
                          <span>{app.parentPhone}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-stone-400 block">Parent Email & Address:</span>
                          <span>{app.parentEmail} · {app.homeAddress}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Date Submitted:</span>
                          <span>{app.submittedAt}</span>
                        </div>
                      </div>

                      {app.additionalInfo && (
                        <div className="pt-2 border-t border-stone-200 text-xs text-stone-600">
                          <span className="text-stone-400">Notes / Medical:</span> {app.additionalInfo}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CONTACT INQUIRIES & TOUR BOOKINGS */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold text-slate-700 tracking-wider">
                  Contact Messages & Campus Tour Requests
                </span>
                <span className="text-xs text-stone-500">
                  {contactMessages.length} total received
                </span>
              </div>

              {contactMessages.length === 0 ? (
                <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-200 text-stone-500 text-sm">
                  No contact messages or tour bookings yet. Try sending one from the Contact Us page!
                </div>
              ) : (
                <div className="space-y-3">
                  {contactMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <strong className="text-sm text-slate-900 font-serif">
                          {msg.name}
                        </strong>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          msg.type === 'tour_booking' ? 'bg-amber-100 text-amber-900' : 'bg-stone-200 text-stone-800'
                        }`}>
                          {msg.type === 'tour_booking' ? 'Campus Tour Booking' : 'General Inquiry'}
                        </span>
                      </div>

                      <div className="text-stone-600">
                        <span>{msg.phone}</span> · <span>{msg.email}</span>
                      </div>

                      {msg.preferredDate && (
                        <div className="font-semibold text-amber-800">
                          Requested Tour Date: {msg.preferredDate}
                        </div>
                      )}

                      <p className="text-stone-700 italic bg-white p-3 rounded border border-stone-200">
                        "{msg.message}"
                      </p>

                      <div className="text-[11px] text-stone-400 text-right">
                        Received: {new Date(msg.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 shrink-0">
          <span>{config.name} Management Suite</span>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-2 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800"
          >
            Done & Close
          </button>
        </div>
      </div>
    </div>
  );
};

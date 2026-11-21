import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import { AdmissionApplication } from '../../types/school';
import {
  Calendar,
  CheckCircle,
  FileText,
  Clock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Printer,
  ShieldCheck,
  Send,
  AlertCircle,
  Download
} from 'lucide-react';

interface AdmissionsSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onNavigate }) => {
  const { config, submitApplication } = useSchool();

  // Form State
  const [studentFullName, setStudentFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other'>('Male');
  const [classApplyingFor, setClassApplyingFor] = useState('Grade 1 (Primary)');
  const [entryYear, setEntryYear] = useState('2026/2027 Academic Session');
  const [parentFullName, setParentFullName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [previousSchool, setPreviousSchool] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<AdmissionApplication | null>(null);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const availableClasses = [
    { level: 'Early Years / Crèche', ages: '18 Months – 3 Years', seats: 'Limited Seats', badge: 'Enrolling Now' },
    { level: 'Nursery 1 & 2', ages: '3 – 5 Years', seats: 'Open', badge: 'Active' },
    { level: 'Primary Grades 1 – 5', ages: '5 – 10 Years', seats: 'Available', badge: 'Active' },
    { level: 'Year 7 (JSS 1 / Grade 6)', ages: '10 – 12 Years', seats: 'High Demand', badge: 'Entrance Exam Required' },
    { level: 'Years 8 – 9 (JSS 2 & 3)', ages: '12 – 14 Years', seats: 'Transfer Open', badge: 'Transfer Test' },
    { level: 'Years 10 – 11 (SSS 1 & 2 / IGCSE)', ages: '14 – 16 Years', seats: 'Subject Combinations', badge: 'Specialist Entry' },
    { level: 'Cambridge A-Levels / Sixth Form', ages: '16 – 18 Years', seats: 'Merit Scholarships', badge: 'Scholarship Track' },
  ];

  const admissionSteps = [
    {
      step: '01',
      title: 'Online Application & Registration',
      description: 'Complete the official online admission form below with accurate student and guardian details. You will receive an instant digital reference number and parent acknowledgment email.',
    },
    {
      step: '02',
      title: 'Entrance Assessment & Diagnostic Test',
      description: 'Applicants for Primary and Secondary college sit for our age-appropriate assessment evaluating numeracy, literacy, and logical reasoning. Early Years learners undergo an informal play-based developmental interaction.',
    },
    {
      step: '03',
      title: 'Parent & Scholar Interview',
      description: 'A warm, constructive 20-minute meeting with our Academic Leadership Team to understand the student’s interests, discuss special learning support, and ensure values alignment.',
    },
    {
      step: '04',
      title: 'Provisional Offer & Enrolment',
      description: 'Successful applicants receive an official Offer of Admission letter, invoice schedule, uniform fitting guide, and student orientation pack.',
    },
  ];

  const requirementsList = [
    `Completed ${config.name} Admission Application Form`,
    'Official Birth Certificate or statutory declaration of age',
    'Two (2) recent passport-sized photographs of the applicant',
    'Photocopy of previous two academic term report cards (for Primary & Secondary)',
    'Transfer Certificate or Recommendation Letter from previous school attended',
    'Certified Medical Fitness Form and Immunization Records',
  ];

  const faqs = [
    {
      q: `When does the admission process for the ${config.currentSession} close?`,
      a: 'Admissions are conducted on a rolling basis; however, due to strict class size limits (maximum 18 students per classroom), early application is strongly encouraged. Early bird assessments occur every second Saturday.',
    },
    {
      q: 'Do you offer entrance scholarships or tuition discounts?',
      a: `Yes! ${config.name} offers competitive Merit Scholarships (covering 25% to 50% tuition) for outstanding candidates entering Year 7 (JSS1) and Cambridge A-Levels based on top percentile scores in our National Entrance Examination.`,
    },
    {
      q: 'Is bus transportation and school lunch provided?',
      a: 'Yes. We operate a fleet of modern, air-conditioned school buses with GPS real-time tracking, seatbelts, and trained bus chaperones serving all major residential districts. Freshly prepared, three-course nutritious lunches are served daily in our sanitized dining hall.',
    },
    {
      q: `What curriculum does ${config.name} follow?`,
      a: 'We offer an enriched dual curriculum combining the Cambridge International Curriculum (Early Years EYFS, Primary Checkpoint, IGCSE & A-Levels) with the Nigerian National Educational Research and Development Council (NERDC/WAEC) standards.',
    },
    {
      q: 'Can parents schedule an in-person campus tour before submitting an application?',
      a: 'Absolutely! We encourage all prospective parents to visit. Tours are conducted Mondays through Fridays between 9:00 AM and 3:00 PM, and Saturdays 9:30 AM to 12:30 PM. You can book directly on this website or call our admissions desk.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newApp = submitApplication({
        studentFullName,
        dateOfBirth,
        gender,
        classApplyingFor,
        entryYear,
        parentFullName,
        parentPhone,
        parentEmail,
        homeAddress,
        previousSchool: previousSchool || 'None / First Time Enrolment',
        additionalInfo: additionalInfo || 'None provided',
      });

      setSubmittedApp(newApp);
      setIsSubmitting(false);

      // Scroll to confirmation
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="py-16 sm:py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Prominent Header Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-amber-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-400 text-slate-950 rounded-full text-xs font-black tracking-widest uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-950 animate-ping" />
              ADMISSION IS ONGOING
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-academic text-white leading-tight">
              Enrol Your Child for the <span className="text-amber-400">{config.currentSession}</span>
            </h1>

            <p className="text-stone-300 text-base sm:text-xl font-light leading-relaxed">
              Give your child the best foundation for a bright future. Our admissions portal is currently open for Nursery, Primary, and Secondary College classes. Fast-track your application online today.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-amber-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                Next Entrance Test: <strong>Saturday, October 17, 2026</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Merit Scholarships Available
              </span>
            </div>
          </div>
        </div>

        {/* 4-Step Admission Procedure */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
              Clear & Transparent Flow
            </p>
            <h2 className="text-3xl font-bold font-serif-academic text-slate-900">
              Our 4-Step Admission Procedure
            </h2>
            <p className="text-stone-600 text-sm">
              We make the admissions journey seamless, supportive, and informative for parents and students alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm relative flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-extrabold font-serif text-amber-600/30">
                    {stepItem.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 font-serif">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1 text-[11px] font-semibold text-amber-700">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Classes & Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Available Classes Table */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-7 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Available Classes & Entry Status
                </h3>
                <p className="text-xs text-stone-500">
                  Real-time enrolment status for {config.currentSession}
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Active Enrolment
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-stone-200 text-stone-500 text-[11px] uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Educational Level</th>
                    <th className="pb-3 font-semibold">Age Range</th>
                    <th className="pb-3 font-semibold">Capacity</th>
                    <th className="pb-3 font-semibold text-right">Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  {availableClasses.map((item, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-3 font-semibold text-slate-900">{item.level}</td>
                      <td className="py-3 text-stone-600">{item.ages}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {item.seats}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-[11px] px-2 py-0.5 bg-stone-100 text-stone-700 rounded font-medium">
                          {item.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Admission Requirements Card */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-7 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Checklist for Parents
              </span>
              <h3 className="text-xl font-bold font-serif text-white">
                Required Documentation
              </h3>
              <p className="text-xs text-stone-400">
                Please prepare the following credentials for verification:
              </p>
            </div>

            <ul className="space-y-3">
              {requirementsList.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 space-y-2 text-xs text-stone-300">
              <p className="font-semibold text-amber-300 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" />
                Important Note for Transferees:
              </p>
              <p className="text-stone-400 leading-relaxed">
                Candidates transferring into Year 8 (JSS 2) through Year 11 (SSS 2) must present transcripts or standardized terminal assessment sheets from their previous institution.
              </p>
            </div>
          </div>
        </div>

        {/* APPLICATION CONFIRMATION MODAL OR BANNER IF SUBMITTED */}
        {submittedApp && (
          <div className="bg-emerald-50 border-2 border-emerald-500 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6 animate-in zoom-in-95">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-200 pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-emerald-800">
                    Application Successfully Registered
                  </span>
                  <h3 className="text-2xl font-bold font-serif text-slate-900">
                    Congratulations, {submittedApp.parentFullName}!
                  </h3>
                  <p className="text-sm text-emerald-900 font-medium">
                    Application Reference Number:{' '}
                    <strong className="text-emerald-950 font-mono text-base px-2 py-0.5 bg-emerald-200 rounded">
                      {submittedApp.referenceNumber}
                    </strong>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintSlip}
                  className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={() => setSubmittedApp(null)}
                  className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
                >
                  Submit Another
                </button>
              </div>
            </div>

            {/* Application Summary Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white rounded-xl border border-emerald-200 text-xs text-stone-700">
              <div>
                <span className="text-stone-400 block">Student Name:</span>
                <strong className="text-slate-900 text-sm">{submittedApp.studentFullName}</strong>
              </div>
              <div>
                <span className="text-stone-400 block">Class Applied:</span>
                <strong className="text-slate-900 text-sm">{submittedApp.classApplyingFor}</strong>
              </div>
              <div>
                <span className="text-stone-400 block">Parent Contact:</span>
                <strong className="text-slate-900 text-sm">{submittedApp.parentPhone}</strong>
              </div>
              <div>
                <span className="text-stone-400 block">Application Status:</span>
                <span className="inline-block mt-0.5 px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded">
                  {submittedApp.status}
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-emerald-950 leading-relaxed">
              <p>
                <strong>What happens next?</strong>
              </p>
              <p>
                Our Admissions Secretary has received your submission and will review the details within 24 hours. A member of the admissions team will reach out via <strong>{submittedApp.parentEmail}</strong> and <strong>{submittedApp.parentPhone}</strong> to confirm your child's scheduled entrance assessment date and invite you for a personal tour.
              </p>
              <p className="text-xs text-stone-500">
                You can also view and track this submission anytime via the <strong>Admin Portal / Customize Drawer</strong>.
              </p>
            </div>
          </div>
        )}

        {/* OFFICIAL ONLINE ADMISSION APPLICATION FORM */}
        <div id="application-form" className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-amber-700 font-bold">
                <FileText className="w-4 h-4" />
                Official Application Form
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-academic text-slate-900">
                Student Admission Registration Form
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                Please complete all fields carefully. All submitted data is encrypted and confidential.
              </p>
            </div>

            <div className="px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
              Academic Session: <strong>{config.currentSession}</strong>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section A: Student Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-stone-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs">1</span>
                Section A: Student Biodata
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student's Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studentFullName}
                    onChange={(e) => setStudentFullName(e.target.value)}
                    placeholder="Surname, First Name, Middle Name"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value as any)}
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Class Applying For *
                  </label>
                  <select
                    value={classApplyingFor}
                    onChange={(e) => setClassApplyingFor(e.target.value)}
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <optgroup label="Early Years">
                      <option value="Crèche (18m - 2y)">Crèche (18m - 2y)</option>
                      <option value="Playgroup / Nursery 1">Playgroup / Nursery 1 (3y)</option>
                      <option value="Nursery 2 / Reception">Nursery 2 / Reception (4-5y)</option>
                    </optgroup>
                    <optgroup label="Primary Division">
                      <option value="Grade 1 (Primary)">Grade 1 (Primary)</option>
                      <option value="Grade 2 (Primary)">Grade 2 (Primary)</option>
                      <option value="Grade 3 (Primary)">Grade 3 (Primary)</option>
                      <option value="Grade 4 (Primary)">Grade 4 (Primary)</option>
                      <option value="Grade 5 (Primary)">Grade 5 (Primary)</option>
                    </optgroup>
                    <optgroup label="Secondary College">
                      <option value="Year 7 (JSS 1 / Grade 6)">Year 7 (JSS 1 / Grade 6)</option>
                      <option value="Year 8 (JSS 2)">Year 8 (JSS 2)</option>
                      <option value="Year 9 (JSS 3)">Year 9 (JSS 3)</option>
                      <option value="Year 10 (SSS 1 / IGCSE 1)">Year 10 (SSS 1 / IGCSE 1)</option>
                      <option value="Year 11 (SSS 2 / IGCSE 2)">Year 11 (SSS 2 / IGCSE 2)</option>
                      <option value="Cambridge A-Levels / Sixth Form">Cambridge A-Levels / Sixth Form</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Entry Session *
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={entryYear}
                    className="w-full px-4 py-2.5 text-sm border border-stone-200 bg-stone-100 rounded-xl text-stone-600"
                  />
                </div>
              </div>
            </div>

            {/* Section B: Parent / Guardian Information */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-stone-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs">2</span>
                Section B: Parent / Guardian Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={parentFullName}
                    onChange={(e) => setParentFullName(e.target.value)}
                    placeholder="e.g. Dr. & Mrs. O. Adeleke"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    placeholder="parent@example.com"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-3">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Home Residential Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={homeAddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    placeholder="Street Address, Estate / Area, City, State"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Section C: Educational Background & Notes */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-b border-stone-100 pb-2 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center text-xs">3</span>
                Section C: Academic History & Additional Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Previous School Attended (if applicable)
                  </label>
                  <input
                    type="text"
                    value={previousSchool}
                    onChange={(e) => setPreviousSchool(e.target.value)}
                    placeholder="Name of previous school and city"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Talents, Sports or Interests
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Violin, Swimming, Robotics, Chess"
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Information (Medical, Dietary, or Learning Support needs)
                  </label>
                  <textarea
                    rows={3}
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Please mention any allergies, special gifts, or circumstances our teachers should be aware of..."
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Block */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-500 text-center sm:text-left">
                By clicking <strong>SUBMIT APPLICATION</strong>, you certify that the information provided is accurate and agree to our admission policy.
              </p>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Application...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT APPLICATION</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold flex items-center justify-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              Parent Inquiries
            </span>
            <h2 className="text-3xl font-bold font-serif-academic text-slate-900">
              Frequently Asked Questions About Admissions
            </h2>
            <p className="text-stone-600 text-sm">
              Clear answers to the most common questions regarding our application procedures, entrance exams, and student life.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-stone-50"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-serif">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-700 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

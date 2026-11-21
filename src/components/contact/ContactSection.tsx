import React, { useState } from 'react';
import { useSchool } from '../../context/SchoolContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  MessageSquare,
  Building2,
  Navigation
} from 'lucide-react';

interface ContactSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const { config, submitContactMessage } = useSchool();

  const [activeTab, setActiveTab] = useState<'contact' | 'tour'>('contact');

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Admission Inquiry');
  const [message, setMessage] = useState('');
  const [preferredTourDate, setPreferredTourDate] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      submitContactMessage({
        name,
        email,
        phone,
        subject: activeTab === 'tour' ? `Campus Tour Request (${preferredTourDate})` : subject,
        message,
        type: activeTab === 'tour' ? 'tour_booking' : 'general',
        preferredDate: activeTab === 'tour' ? preferredTourDate : undefined,
      });

      setIsSubmitting(false);
      setSubmitted(true);

      // Reset fields
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setPreferredTourDate('');
    }, 500);
  };

  return (
    <div className="py-20 bg-stone-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-bold">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif-academic text-slate-900 tracking-tight">
            Connect with Our Admissions & Administration Team
          </h1>
          <p className="text-stone-600 text-base sm:text-lg">
            Have questions regarding enrolment, school fees, or academic pathways? We would love to hear from you. Visit our campus or send us a message below.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-serif text-slate-900">Campus Address</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {config.address}
            </p>
            <p className="text-xs text-amber-800 font-medium">
              {config.cityState}
            </p>
          </div>

          {/* Telephone */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-serif text-slate-900">Phone Numbers</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Hotline: <strong className="text-slate-900">{config.phone}</strong>
            </p>
            <p className="text-xs sm:text-sm text-stone-600">
              Admissions: <strong className="text-slate-900">{config.secondaryPhone}</strong>
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-serif text-slate-900">Official Emails</h3>
            <p className="text-xs sm:text-sm text-stone-600">
              General: <span className="text-amber-800 font-medium">{config.email}</span>
            </p>
            <p className="text-xs sm:text-sm text-stone-600">
              Admissions: <span className="text-amber-800 font-medium">{config.admissionsEmail}</span>
            </p>
          </div>

          {/* Opening Hours */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-serif text-slate-900">Working Hours</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {config.openingHours}
            </p>
            <p className="text-xs text-amber-800 font-medium">
              {config.saturdayHours}
            </p>
          </div>
        </div>

        {/* Contact Form and Interactive Map Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Area */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-8 sm:p-10 shadow-sm space-y-6">
            {/* Form Toggle: General Message vs Book Tour */}
            <div className="flex items-center gap-2 p-1.5 bg-stone-100 rounded-xl max-w-md">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('contact');
                  setSubmitted(false);
                }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'contact'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-stone-600 hover:text-slate-900'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('tour');
                  setSubmitted(false);
                }}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 ${
                  activeTab === 'tour'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-stone-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Campus Tour</span>
              </button>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-4 animate-in zoom-in-95">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900">
                  {activeTab === 'tour' ? 'Campus Tour Booked Successfully!' : 'Message Sent Successfully!'}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-900 max-w-md mx-auto">
                  Thank you for reaching out to {config.name}. An admissions advisor has received your request and will contact you within 1 business day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase rounded-lg transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mr. & Mrs. Adeleke"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {activeTab === 'tour' ? (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Tour Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={preferredTourDate}
                        onChange={(e) => setPreferredTourDate(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject *
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                      >
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="School Fees & Payment">School Fees & Payment</option>
                        <option value="Curriculum & Programmes">Curriculum & Programmes</option>
                        <option value="Transportation Route">Transportation Route</option>
                        <option value="General Information">General Information</option>
                      </select>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Notes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      activeTab === 'tour'
                        ? 'Please indicate child age, target grade level, and any specific facilities you want to inspect...'
                        : 'How can our administration assist your family today?'
                    }
                    className="w-full px-4 py-2.5 text-sm border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{activeTab === 'tour' ? 'CONFIRM TOUR RESERVATION' : 'SEND MESSAGE'}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Map Placeholder & Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs uppercase font-bold text-amber-400 tracking-wider">
                <Navigation className="w-4 h-4" />
                Finding Our Campus
              </div>

              <h3 className="text-xl font-bold font-serif text-white">
                Interactive Campus Location
              </h3>

              {/* Stylized Map Mockup Container */}
              <div className="w-full h-56 rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden relative flex flex-col items-center justify-center text-center p-6">
                <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-3 animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                <p className="font-bold text-sm text-white">{config.name} Main Gate</p>
                <p className="text-xs text-stone-300 mt-1">{config.address}</p>
                <div className="mt-3 px-3 py-1 bg-slate-950/80 rounded-full text-[11px] text-amber-300 border border-slate-700">
                  GPS: 6.4281° N, 3.4219° E · Ample Visitor Parking
                </div>
              </div>

              {/* Driving Directions */}
              <div className="space-y-3 pt-2 text-xs text-stone-300 leading-relaxed border-t border-slate-800">
                <p>
                  <strong>Directions for Visitors:</strong> Our main security gate is located along Academic Boulevard, 500 meters from the central roundabout.
                </p>
                <p>
                  Please announce yourself to the security protocol officers at the barrier to receive your visitor’s pass and dedicated parking slot in front of the Administration Pavilion.
                </p>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-amber-100 rounded-2xl p-6 border border-amber-300 space-y-2">
              <p className="text-xs uppercase font-bold text-amber-900 tracking-wider">
                Urgent Admission Assistance?
              </p>
              <p className="text-xs text-amber-950">
                Call our direct admissions desk directly at <strong>{config.phone}</strong> (7:30 AM – 5:00 PM).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

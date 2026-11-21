import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SchoolConfig,
  AcademicProgram,
  AdmissionApplication,
  Facility,
  GalleryItem,
  NewsItem,
  SchoolLifeItem,
  ContactMessage,
} from '../types/school';

// Import high-fidelity generated images
import heroStudentsImg from '../assets/images/hero_school_students_1790421135374.jpg';
import campusExteriorImg from '../assets/images/school_campus_building_1790421147790.jpg';
import stemLabImg from '../assets/images/school_stem_laboratory_1790421160802.jpg';
import sportsImg from '../assets/images/school_sports_athletics_1790421173396.jpg';
import libraryImg from '../assets/images/school_library_reading_1790421185766.jpg';

export { heroStudentsImg, campusExteriorImg, stemLabImg, sportsImg, libraryImg };

const DEFAULT_CONFIG: SchoolConfig = {
  name: 'Right Choice International School',
  shortName: 'Right Choice',
  motto: 'Excellence, Integrity, Discipline & Global Leadership',
  established: '1998',
  address: '24 Academic Boulevard, Victoria Crest Campus',
  cityState: 'Lagos & Abuja Campuses / International Registry',
  phone: '+234 (0) 803 456 7890',
  secondaryPhone: '+234 (0) 1 453 8899',
  email: 'info@rightchoiceschool.com',
  admissionsEmail: 'admissions@rightchoiceschool.com',
  openingHours: 'Monday – Friday: 7:30 AM – 5:00 PM',
  saturdayHours: 'Saturday: 9:00 AM – 1:00 PM (Admissions Office Open)',
  currentSession: '2026 / 2027 Academic Session',
  admissionStatusText: 'ADMISSION IS ONGOING FOR 2026/2027',
  isAdmissionActive: true,
  colorTheme: 'navy',
};

const DEFAULT_PROGRAMS: AcademicProgram[] = [
  {
    id: 'prog-1',
    name: 'Early Years & Nursery',
    category: 'Nursery',
    ageRange: 'Ages 18 Months – 5 Years',
    gradeLevels: 'Crèche, Playgroup, Nursery 1 & 2',
    description: 'A nurturing, play-based and inquiry-driven British Early Years Foundation Stage (EYFS) blended curriculum designed to stimulate curiosity, sensory development, phonics mastery, and emotional resilience in early childhood.',
    keyLearningAreas: [
      'Personal, Social & Emotional Development',
      'Early Phonics & Emergent Literacy',
      'Numeracy & Practical Math Discovery',
      'Sensory Exploration & Motor Skills',
      'Creative Arts, Music & Storytelling',
      'Introduction to Coding with Play-Robotics',
    ],
    features: [
      'Maximum 12 children per class with 2 certified teachers',
      'Dedicated indoor sensory play pod & secure outdoor turf',
      'Daily balanced child nutrition and resting suites',
      'Interactive Montessori-certified didactic materials',
    ],
    headOfDepartment: 'Mrs. Cynthia Adeleke, M.Ed. (Early Childhood)',
  },
  {
    id: 'prog-2',
    name: 'Primary / Elementary School',
    category: 'Primary',
    ageRange: 'Ages 5 – 11 Years',
    gradeLevels: 'Grades 1 through 6',
    description: 'A comprehensive curriculum combining the rigorous British National Curriculum with international STEAM enrichment. We cultivate disciplined study habits, articulate speech, mathematical fluency, and compassionate citizenship.',
    keyLearningAreas: [
      'Advanced Mathematics, Logic & Problem Solving',
      'English Language, Literature & Public Speaking',
      'Integrated Science & Hands-on Experimentation',
      'Digital Literacy, Coding & Applied Robotics',
      'Social Studies, History & Global Citizenship',
      'French, Spanish & Cultural Languages',
    ],
    features: [
      'Smart interactive classrooms with one-to-one tablet integration',
      'Annual Science & Innovation Invention Expo',
      'Mandatory physical education, swimming, and musical instrument training',
      'Accelerated reading and Oxford Reading Tree mentorship',
    ],
    headOfDepartment: 'Dr. Marcus Vance, Ph.D. (Curriculum & Instruction)',
  },
  {
    id: 'prog-3',
    name: 'Secondary & High School College',
    category: 'Secondary',
    ageRange: 'Ages 11 – 17 Years',
    gradeLevels: 'Junior Secondary (JSS1-3 / Years 7-9) & Senior Secondary (SSS1-3 / Years 10-12)',
    description: 'A world-class secondary education preparing students for dual certification: Cambridge IGCSE / Checkpoint alongside national WAEC/NECO distinctions. Emphasizes intellectual independence, leadership ethos, and university entrance excellence.',
    keyLearningAreas: [
      'Pure Sciences: Physics, Chemistry, Biology & Further Math',
      'Technology & Engineering: Robotics, Computer Science & AI',
      'Business & Humanities: Economics, Accounting, Literature & History',
      'Arts & Performing Media: Fine Art, Music Theory & Drama',
      'Global Perspectives & Critical Thinking Seminar',
      'Civic Education & Model United Nations Leadership',
    ],
    features: [
      'Dual British-National examination pathways with 99.4% pass record',
      'State-of-the-art university-grade STEM laboratories',
      'SAT, ACT, IELTS, and TOEFL comprehensive prep embedded',
      'Dedicated College Placement and Career Counseling Office',
    ],
    headOfDepartment: 'Engr. Sarah Nnamdi, M.Sc. (Academic Dean)',
  },
  {
    id: 'prog-4',
    name: 'Sixth Form & Advanced Placement',
    category: 'Sixth Form',
    ageRange: 'Ages 16 – 19 Years',
    gradeLevels: 'Cambridge A-Levels & University Foundation Program',
    description: 'Intensive pre-university foundation offering Cambridge International A-Levels, Advanced Placement (AP), and specialized Oxbridge / Ivy League university entrance mentoring for aspiring doctors, engineers, economists, and legal scholars.',
    keyLearningAreas: [
      'Cambridge A-Level Subject Combinations',
      'Critical Research Project & Extended Essay',
      'University Entrance Exam Coaching (UCAS & CommonApp)',
      'Leadership & Public Policy Colloquium',
      'Corporate Internship Placements during Summer',
    ],
    features: [
      'Over 90% direct admissions into UK Russell Group, US Ivy Plus, and Canadian universities',
      'Direct faculty-style tutorial system and seminar discussions',
      'Executive study suites and dedicated university admission counseling',
    ],
    headOfDepartment: 'Prof. Alistair Sterling, M.A. (Oxon)',
  },
];

const DEFAULT_FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    name: 'Advanced STEM & Robotics Laboratories',
    category: 'stem',
    description: 'Ultra-modern laboratories equipped with digital microscopes, 3D printers, IoT microcontrollers, fume hoods, and automated testing stations allowing students to conduct real university-grade experimental science.',
    capacity: '4 Specialized Labs (Physics, Chemistry, Biology, Robotics)',
    features: ['High-resolution digital projection', 'Certified chemical fume hoods', 'Laser cutting and 3D prototyping tools', 'Individual workbench gas & electrical safety taps'],
    imageUrl: stemLabImg,
  },
  {
    id: 'fac-2',
    name: 'Interactive Smart Classrooms',
    category: 'academic',
    description: 'Acoustically treated, ergonomically furnished air-conditioned classrooms outfitted with 4K touch display smartboards, high-speed Wi-Fi, and modular seating arrangements that adapt to collaborative group projects.',
    capacity: '48 Air-Conditioned Classrooms (Max 18-20 students/class)',
    features: ['Interactive 86-inch 4K touchscreen boards', 'Anti-glare natural day-lighting', 'Ergonomic lumbar-support student desks', 'Individual student storage lockers'],
    imageUrl: heroStudentsImg,
  },
  {
    id: 'fac-3',
    name: 'Olympic-Standard Sports Complex & Fields',
    category: 'sports',
    description: 'A comprehensive athletic complex boasting a FIFA-certified artificial turf soccer stadium, 8-lane all-weather running track, semi-Olympic heated swimming pool, and indoor gymnasium for basketball and badminton.',
    capacity: '1,200 Spectator Pavilion',
    features: ['FIFA-grade synthetic football turf', 'FIBA indoor hardwood basketball arena', 'Junior & Senior swimming pools with certified lifeguards', 'Floodlights for evening athletic meets'],
    imageUrl: sportsImg,
  },
  {
    id: 'fac-4',
    name: 'E-Library & Media Research Centre',
    category: 'academic',
    description: 'An expansive two-level sanctuary housing over 25,000 physical titles, 50,000 licensed e-books, private doctoral-style research cubicles, and an audio-visual recording suite for student podcasts and media production.',
    capacity: '200 Seated Readers simultaneously',
    features: ['JSTOR, EBSCO & Britannica digital access', 'Soundproof media production recording booth', 'Quiet contemplation & chess alcoves', 'Dedicated early years picture-book corner'],
    imageUrl: libraryImg,
  },
  {
    id: 'fac-5',
    name: 'Expansive 15-Acre Serene Green Campus',
    category: 'living',
    description: 'A secure, park-like academic sanctuary surrounded by manicured lawns, botanical walkways, outdoor reading amphitheaters, modern dining halls, and 24/7 security with full CCTV coverage.',
    capacity: 'Entire School Community',
    features: ['Biometric perimeter security & 24/7 armed patrols', 'Air-conditioned dining hall serving fresh chef-prepared meals', 'Solar-diesel hybrid uninterrupted 24/7 power', 'Fully equipped health clinic with resident medical doctor'],
    imageUrl: campusExteriorImg,
  },
];

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Collaborative Classroom Learning',
    category: 'Students',
    imageUrl: heroStudentsImg,
    caption: 'Students engaged in interactive small-group problem solving in modern smart classrooms.',
    date: 'Academic Term 2026',
  },
  {
    id: 'gal-2',
    title: 'Main Academic Campus & Quadrangle',
    category: 'Classrooms',
    imageUrl: campusExteriorImg,
    caption: 'The prestigious brick and glass architectural facade of Right Choice International School.',
    date: 'Campus Panorama',
  },
  {
    id: 'gal-3',
    title: 'Hands-on Chemistry & Biotechnology Lab',
    category: 'School Events',
    imageUrl: stemLabImg,
    caption: 'Senior science scholars performing quantitative titration and analytical research.',
    date: 'Annual STEM Week',
  },
  {
    id: 'gal-4',
    title: 'Inter-House Sports Festival & Athletics',
    category: 'Sports',
    imageUrl: sportsImg,
    caption: 'High-energy track athletes competing during the Annual Inter-House Championship.',
    date: 'Spring Games',
  },
  {
    id: 'gal-5',
    title: 'Quiet Study & Research in Main Library',
    category: 'Students',
    imageUrl: libraryImg,
    caption: 'Scholars accessing digital research journals and literature in the tranquil reading atrium.',
    date: 'Academic Term',
  },
  {
    id: 'gal-6',
    title: 'Annual Valedictory Service & Graduation',
    category: 'Graduation',
    imageUrl: campusExteriorImg,
    caption: 'Graduating seniors in ceremonial gowns celebrating acceptance into premier global universities.',
    date: 'Class of 2025/2026',
  },
];

const DEFAULT_NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'ADMISSION IS ONGOING FOR 2026/2027 ACADEMIC SESSION',
    category: 'Admission',
    date: 'September 2026',
    readTime: '2 min read',
    summary: 'Right Choice International School invites applications from prospective parents and students for Crèche, Nursery, Primary, and College classes. Entrance examination dates and application portals are now live.',
    content: 'We are thrilled to announce that applications for the 2026/2027 academic session are officially underway across all levels. Right Choice International School remains dedicated to offering unparalleled academic rigor, ethical grounding, and world-class extracurricular exposure. Parents can complete the online application form, schedule entrance tests, or book an in-person guided tour of our facilities. Early bird tuition concessions and merit academic scholarships are available for high-achieving applicants.',
    isFeatured: true,
    importantBadge: 'URGENT ANNOUNCEMENT',
  },
  {
    id: 'news-2',
    title: 'Right Choice Robotics Team Triumphs at National STEM Olympiad',
    category: 'Academic',
    date: 'September 18, 2026',
    readTime: '3 min read',
    summary: 'Our Junior Secondary robotics squad clinched 1st Place in the Autonomous Navigation category with their solar-powered flood detection device.',
    content: 'Demonstrating exceptional engineering prowess, our Grade 8 and 9 students competed against 45 schools nationwide, taking the golden trophy. The team will represent the region at the upcoming International Youth Robotics Championship in Singapore.',
  },
  {
    id: 'news-3',
    title: 'Annual Inter-House Sports & Track Festival Scheduled',
    category: 'Sports',
    date: 'October 12, 2026',
    readTime: '2 min read',
    summary: 'Four historic houses—Emerald Eagles, Sapphire Sharks, Ruby Rhinos, and Amber Lions—will clash in athletics, relays, swimming, and martial arts.',
    content: 'Parents, alumni, and friends of the school are cordially invited to witness our young athletes display sportsmanship, determination, and camaraderie at the Main Athletics Arena.',
  },
  {
    id: 'news-4',
    title: 'Mid-Term Break & Parent-Teacher Academic Conference Notice',
    category: 'Holiday',
    date: 'October 28, 2026',
    readTime: '2 min read',
    summary: 'Detailed schedule for our one-on-one parent consultations, report card reviews, and student goal-setting sessions.',
    content: 'Parents will receive digital invitations to book specific 15-minute consultations with class teachers and subject heads. Boarding students will resume on Sunday evening.',
  },
];

const DEFAULT_SCHOOL_LIFE: SchoolLifeItem[] = [
  {
    id: 'sl-1',
    category: 'Clubs',
    title: 'Robotics, AI & Software Engineering Club',
    description: 'Students design, solder, and program autonomous rovers, drones, and web applications using Python, Arduino, and Scratch.',
    meetingSchedule: 'Tuesdays & Thursdays, 3:30 PM - 5:00 PM',
    keyHighlights: ['VEX Robotics competitions', '3D CAD design certification', 'Annual Hackathon'],
    iconName: 'Cpu',
  },
  {
    id: 'sl-2',
    category: 'Leadership',
    title: 'Model United Nations & Debate Society',
    description: 'Training eloquent orators and diplomatic thinkers who tackle international geopolitics, economic policy, and parliamentary debates.',
    meetingSchedule: 'Wednesdays, 3:30 PM - 5:00 PM',
    keyHighlights: ['International MUN delegations', 'National Parliamentary Trophy', 'Oxford Union debating style'],
    iconName: 'Award',
  },
  {
    id: 'sl-3',
    category: 'Sports',
    title: 'Elite Football & Swimming Academy',
    description: 'Professional UEFA and FINA certified coaching providing physical stamina, tactical discipline, and competitive tournament matches.',
    meetingSchedule: 'Mondays, Wednesdays & Saturdays',
    keyHighlights: ['Inter-school sports league', 'Year-round heated pool training', 'Youth athletic scouting'],
    iconName: 'Trophy',
  },
  {
    id: 'sl-4',
    category: 'Cultural',
    title: 'Symphony Orchestra, Choir & Theatre Arts',
    description: 'From classical violin and brass to contemporary drama and stage design, nurturing expressive confidence and aesthetic appreciation.',
    meetingSchedule: 'Fridays, 3:00 PM - 5:30 PM',
    keyHighlights: ['Annual West End style musical', 'Royal Schools of Music (ABRSM) exams', 'Traditional cultural heritage gala'],
    iconName: 'Music',
  },
  {
    id: 'sl-5',
    category: 'Excursions',
    title: 'Global Educational Excursions & Field Expeditions',
    description: 'Annual cultural immersions, NASA space camp trips, conservation biology safaris, and visits to prestigious historical landmarks.',
    meetingSchedule: 'Termly & Summer Breaks',
    keyHighlights: ['NASA Kennedy Space Center tour', 'Wildlife conservation sanctuary trip', 'Historical museums & university tours'],
    iconName: 'Compass',
  },
  {
    id: 'sl-6',
    category: 'Leadership',
    title: 'Student Prefect Council & Peer Tutoring Guild',
    description: 'Empowering democratic student leadership, community service drives, charity fundraisers, and peer-to-peer academic support networks.',
    meetingSchedule: 'Bi-weekly Assemblies',
    keyHighlights: ['Elected Head Boy & Head Girl cabinet', 'Community outreach charity drives', 'Anti-bullying peer support'],
    iconName: 'Users',
  },
];

const DEFAULT_APPLICATIONS: AdmissionApplication[] = [
  {
    id: 'app-1001',
    referenceNumber: 'ADM-2026-8819',
    studentFullName: 'Timi David Adeleke',
    dateOfBirth: '2015-04-12',
    gender: 'Male',
    classApplyingFor: 'Grade 5 (Primary)',
    entryYear: '2026/2027',
    parentFullName: 'Engr. & Mrs. Oladipo Adeleke',
    parentPhone: '+234 802 334 5566',
    parentEmail: 'o.adeleke@example.com',
    homeAddress: '15 Admiralty Way, Lekki Phase 1',
    previousSchool: 'Corona School Victoria Island',
    additionalInfo: 'Passionate about mathematics and plays classical piano.',
    status: 'Assessment Scheduled',
    submittedAt: '2026-09-20 09:30 AM',
  },
  {
    id: 'app-1002',
    referenceNumber: 'ADM-2026-9042',
    studentFullName: 'Chioma Grace Okafor',
    dateOfBirth: '2012-11-03',
    gender: 'Female',
    classApplyingFor: 'Year 7 (JSS 1 / Secondary)',
    entryYear: '2026/2027',
    parentFullName: 'Barrister Nkem Okafor',
    parentPhone: '+234 803 998 7711',
    parentEmail: 'nkem.okafor@example.com',
    homeAddress: '8 Maitama Avenue, Abuja',
    previousSchool: 'Loyola Preparatory School',
    additionalInfo: 'Excellent swimmer and debate club captain in previous school.',
    status: 'Reviewing',
    submittedAt: '2026-09-22 02:15 PM',
  },
];

interface SchoolContextType {
  config: SchoolConfig;
  updateConfig: (newConfig: Partial<SchoolConfig>) => void;
  resetConfig: () => void;
  programs: AcademicProgram[];
  addProgram: (program: Omit<AcademicProgram, 'id'>) => void;
  facilities: Facility[];
  gallery: GalleryItem[];
  news: NewsItem[];
  addNews: (news: Omit<NewsItem, 'id'>) => void;
  schoolLife: SchoolLifeItem[];
  applications: AdmissionApplication[];
  submitApplication: (appData: Omit<AdmissionApplication, 'id' | 'referenceNumber' | 'status' | 'submittedAt'>) => AdmissionApplication;
  updateApplicationStatus: (id: string, status: AdmissionApplication['status']) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SchoolConfig>(() => {
    try {
      const saved = localStorage.getItem('school_web_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.name || parsed.name.includes('Oakridge')) {
          const updated = {
            ...DEFAULT_CONFIG,
            ...parsed,
            name: 'Right Choice International School',
            shortName: 'Right Choice',
            email: 'info@rightchoiceschool.com',
            admissionsEmail: 'admissions@rightchoiceschool.com',
          };
          localStorage.setItem('school_web_config', JSON.stringify(updated));
          return updated;
        }
        return { ...DEFAULT_CONFIG, ...parsed };
      }
      return DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });

  const [programs, setPrograms] = useState<AcademicProgram[]>(() => {
    try {
      const saved = localStorage.getItem('school_web_programs');
      return saved ? JSON.parse(saved) : DEFAULT_PROGRAMS;
    } catch {
      return DEFAULT_PROGRAMS;
    }
  });

  const [facilities] = useState<Facility[]>(DEFAULT_FACILITIES);
  const [gallery] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      const saved = localStorage.getItem('school_web_news');
      return saved ? JSON.parse(saved) : DEFAULT_NEWS;
    } catch {
      return DEFAULT_NEWS;
    }
  });
  const [schoolLife] = useState<SchoolLifeItem[]>(DEFAULT_SCHOOL_LIFE);

  const [applications, setApplications] = useState<AdmissionApplication[]>(() => {
    try {
      const saved = localStorage.getItem('school_web_applications');
      return saved ? JSON.parse(saved) : DEFAULT_APPLICATIONS;
    } catch {
      return DEFAULT_APPLICATIONS;
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = localStorage.getItem('school_web_contacts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Persistence
  useEffect(() => {
    try {
      localStorage.setItem('school_web_config', JSON.stringify(config));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem('school_web_programs', JSON.stringify(programs));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [programs]);

  useEffect(() => {
    try {
      localStorage.setItem('school_web_news', JSON.stringify(news));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [news]);

  useEffect(() => {
    try {
      localStorage.setItem('school_web_applications', JSON.stringify(applications));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [applications]);

  useEffect(() => {
    try {
      localStorage.setItem('school_web_contacts', JSON.stringify(contactMessages));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }, [contactMessages]);

  const updateConfig = (newConfig: Partial<SchoolConfig>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    setPrograms(DEFAULT_PROGRAMS);
    setNews(DEFAULT_NEWS);
    setApplications(DEFAULT_APPLICATIONS);
    try {
      localStorage.removeItem('school_web_config');
      localStorage.removeItem('school_web_programs');
      localStorage.removeItem('school_web_news');
      localStorage.removeItem('school_web_applications');
      localStorage.removeItem('school_web_contacts');
    } catch (e) {
      console.warn(e);
    }
  };

  const addProgram = (progData: Omit<AcademicProgram, 'id'>) => {
    const newProg: AcademicProgram = {
      ...progData,
      id: `prog-${Date.now()}`,
    };
    setPrograms((prev) => [...prev, newProg]);
  };

  const addNews = (newsData: Omit<NewsItem, 'id'>) => {
    const newItem: NewsItem = {
      ...newsData,
      id: `news-${Date.now()}`,
    };
    setNews((prev) => [newItem, ...prev]);
  };

  const submitApplication = (appData: Omit<AdmissionApplication, 'id' | 'referenceNumber' | 'status' | 'submittedAt'>): AdmissionApplication => {
    const refNum = `ADM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();
    const dateFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const newApp: AdmissionApplication = {
      ...appData,
      id: `app-${Date.now()}`,
      referenceNumber: refNum,
      status: 'Received',
      submittedAt: dateFormatted,
    };

    setApplications((prev) => [newApp, ...prev]);
    return newApp;
  };

  const updateApplicationStatus = (id: string, status: AdmissionApplication['status']) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  const submitContactMessage = (msgData: Omit<ContactMessage, 'id' | 'createdAt'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setContactMessages((prev) => [newMsg, ...prev]);
  };

  return (
    <SchoolContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        programs,
        addProgram,
        facilities,
        gallery,
        news,
        addNews,
        schoolLife,
        applications,
        submitApplication,
        updateApplicationStatus,
        contactMessages,
        submitContactMessage,
        activeSection,
        setActiveSection,
        isAdminOpen,
        setIsAdminOpen,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};

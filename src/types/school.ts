export interface SchoolConfig {
  name: string;
  shortName: string;
  motto: string;
  established: string;
  address: string;
  cityState: string;
  phone: string;
  secondaryPhone: string;
  email: string;
  admissionsEmail: string;
  openingHours: string;
  saturdayHours: string;
  currentSession: string;
  admissionStatusText: string;
  isAdmissionActive: boolean;
  colorTheme: 'navy' | 'emerald' | 'burgundy' | 'sapphire' | 'slate';
  customPrimaryColor?: string;
  customSecondaryColor?: string;
}

export interface AcademicProgram {
  id: string;
  name: string;
  category: 'Nursery' | 'Primary' | 'Secondary' | 'Sixth Form';
  ageRange: string;
  gradeLevels: string;
  description: string;
  keyLearningAreas: string[];
  features: string[];
  headOfDepartment: string;
}

export interface AdmissionApplication {
  id: string;
  referenceNumber: string;
  studentFullName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  classApplyingFor: string;
  entryYear: string;
  parentFullName: string;
  parentPhone: string;
  parentEmail: string;
  homeAddress: string;
  previousSchool: string;
  additionalInfo: string;
  status: 'Received' | 'Reviewing' | 'Assessment Scheduled' | 'Accepted';
  submittedAt: string;
}

export interface Facility {
  id: string;
  name: string;
  category: 'academic' | 'stem' | 'sports' | 'creative' | 'living';
  description: string;
  capacity: string;
  features: string[];
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Students' | 'Classrooms' | 'School Events' | 'Sports' | 'Cultural' | 'Graduation' | 'Excursions';
  imageUrl: string;
  caption: string;
  date: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: 'Admission' | 'Academic' | 'Events' | 'Holiday' | 'Sports';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  isFeatured?: boolean;
  importantBadge?: string;
}

export interface SchoolLifeItem {
  id: string;
  category: 'Clubs' | 'Sports' | 'Cultural' | 'Leadership' | 'Excursions';
  title: string;
  description: string;
  meetingSchedule: string;
  keyHighlights: string[];
  iconName: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'general' | 'tour_booking' | 'admission_inquiry';
  preferredDate?: string;
  createdAt: string;
}

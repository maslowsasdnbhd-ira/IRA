export type UserRole = 'Teacher' | 'Counselor' | 'Administrator' | 'HR' | 'Other';

export interface TrainingProgram {
  id: string;
  title: string;
  tagline: string;
  category: 'Teachers' | 'Counselors' | 'Leadership' | 'Whole-School';
  duration: string;
  format: 'On-Campus Inset' | 'Virtual Intensive' | 'Hybrid Cohort' | 'Weekend Retreat';
  description: string;
  strugglesAddressed: string[];
  coreOutcomes: string[];
  syllabus: {
    part: string;
    title: string;
    description: string;
  }[];
  audience: string;
  claimable: boolean;
  featured?: boolean;
}

export interface ConsultationFormData {
  fullName: string;
  schoolName: string;
  workEmail: string;
  role: UserRole;
  selectedProgram?: string;
  cohortSize?: string;
  preferredTimeline?: string;
  message: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  school: string;
  location: string;
  highlight: string;
}

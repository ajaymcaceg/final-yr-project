interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: Date;
  currentAddress?: string;
  permanentAddress?: string;
  photo?: string;
}

interface Education {
  universities: {
    type: "UG" | "PG" | "PHD";
    university: string;
    certificate: string;
  }[];
  portfolioURL?: string;
}

interface Experience {
  hasExperience: boolean;
  experiences: {
    appointmentOrder?: string;
    experienceCertificate?: string;
    joiningDate?: Date;
    leavingDate?: Date;
    experience?: string;
  }[];
}

interface Designation {
  designation?: string;
  academicYear?: number;
  semester?: string;
  courseTeaching?: {
    theory?: string;
    laboratory?: string;
  };
  additionalResponsibilities?: {
    order?: number;
    details?: string;
  };
}

interface FacultyPublication {
  booksPublished?: number;
  chaptersPublishedAndReferences?: number;
  internationalJournals?: number;
  nationalJournals?: number;
  internationalConferences?: number;
  nationalConferences?: number;
  patents?: number;
}

interface ResearchProject {
  name?: string;
  fundingAgency?: string;
  type?: string;
  year?: number;
  duration?: number;
  fundsProvided?: number;
  relevantDocuments?: string;
  details?: string;
}

interface AwardsRecognition {
  name?: string;
  receivedFrom?: string;
  recognizedUnder?: string;
  level?: string;
  year?: number;
  incentivesReceived?: string;
  relevantDocuments?: string;
  details?: string;
}

interface EContent {
  title?: string;
  domain?: string;
  developedFor?: string;
  uploadedDate?: Date;
  duration?: number;
  relevantDocumentsUsed?: string;
  link?: string;
}

interface FormData {
  personalInfo: PersonalInfo;
  education: Education;
  experience: Experience;
  designation: Designation;
  facultyPublication: FacultyPublication[];
  researchProjects: ResearchProject[];
  awardsRecognition: AwardsRecognition[];
  eContent: EContent;
}

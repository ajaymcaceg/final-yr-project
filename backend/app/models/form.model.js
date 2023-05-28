const mongoose = require("mongoose");

// Define schema for personal information
const personalInfoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  gender: { type: String },
  dateOfBirth: { type: Date },
  currentAddress: { type: String },
  permanentAddress: { type: String },
  photo: { type: String },
});

const educationSchema = new mongoose.Schema({
  universities: [
    {
      type: { type: String, enum: ["UG", "PG", "PHD"] },
      university: { type: String },
      certificate: { type: String },
    },
  ],
  portfolioURL: { type: String },
});

// Define schema for previous work experience
const experienceSchema = new mongoose.Schema({
  hasExperience: { type: Boolean, required: true },
  experiences: [
    {
      appointmentOrder: { type: String },
      experienceCertificate: { type: String },
      joiningDate: { type: Date },
      leavingDate: { type: Date },
      experience: { type: String },
    },
  ],
});

// Define schema for designation
const designationSchema = new mongoose.Schema({
  designation: { type: String },
  academicYear: { type: Number },
  semester: { type: String },
  courseTeaching: {
    theory: { type: String },
    laboratory: { type: String },
  },
  additionalResponsibilities: {
    order: { type: Number },
    details: { type: String },
  },
});

// Define schema for faculty publication
const facultyPublicationSchema = new mongoose.Schema({
  booksPublished: { type: String },
  chaptersPublishedAndReferences: { type: String },
  internationalJournals: { type: String },
  nationalJournals: { type: String },
  internationalConferences: { type: String },
  nationalConferences: { type: String },
  patents: { type: String },
});

// Define schema for research projects
const researchProjectSchema = new mongoose.Schema({
  name: { type: String },
  fundingAgency: { type: String },
  type: { type: String },
  year: { type: Number },
  duration: { type: Number },
  fundsProvided: { type: Number },
  relevantDocuments: { type: String },
  details: { type: String },
});

// Define schema for awards and recognition
const awardsRecognitionSchema = new mongoose.Schema({
  name: { type: String },
  receivedFrom: { type: String },
  recognizedUnder: { type: String },
  level: { type: String },
  year: { type: Number },
  incentivesReceived: { type: String },
  relevantDocuments: { type: String },
  details: { type: String },
});

// Define schema for e-content
const eContentSchema = new mongoose.Schema({
  title: { type: String },
  domain: { type: String },
  developedFor: { type: String },
  uploadedDate: { type: Date },
  duration: { type: Number },
  relevantDocumentsUsed: { type: String },
  link: { type: String },
});

// Define main schema for the entire document
const mainSchema = new mongoose.Schema({
  personalInfo: personalInfoSchema,
  education: educationSchema,
  experience: experienceSchema,
  designation: designationSchema,
  facultyPublication: [facultyPublicationSchema],
  researchProjects: [researchProjectSchema],
  awardsRecognition: [awardsRecognitionSchema],
  eContent: eContentSchema,
});

// Create a model using the main schema
const Form = mongoose.model("Form", mainSchema);

module.exports = Form;

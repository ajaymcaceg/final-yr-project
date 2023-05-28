import { message } from "antd";

export const validateForm = (formData: FormData) => {
  // Validate personalInfo

  if (!formData.personalInfo.firstName) {
    message.warning("First Name is missing");
    return false;
  }
  if (!formData.personalInfo.lastName) {
    message.warning("Last Name is missing");
    return false;
  }
  if (!formData.personalInfo.email) {
    message.warning("Email is missing");
    return false;
  }

  // Validate education
  if (formData.education.universities.length === 0) {
    message.warning("At least one University is required");
    return false;
  }

  for (const university of formData.education.universities) {
    if (!university.type) {
      message.warning("University Type is missing");
      return false;
    }
    if (!university.university) {
      message.warning("University Name is missing");
      return false;
    }
    if (!university.certificate) {
      message.warning("Certificate Name is missing");
      return false;
    }
  }

  // Validate experience
  if (formData.experience.hasExperience) {
    for (const experience of formData.experience.experiences) {
      if (!experience.appointmentOrder) {
        message.warning("Appointment Order is missing");
        return false;
      }
      if (!experience.joiningDate) {
        message.warning("Joining Date is missing");
        return false;
      }
      if (!experience.leavingDate) {
        message.warning("Leaving Date is missing");
        return false;
      }
      if (!experience.experience) {
        message.warning("Experience details are missing");
        return false;
      }
    }
  }

  // Validate designation
  if (formData.designation.additionalResponsibilities) {
    if (!formData.designation.additionalResponsibilities.order) {
      message.warning("Additional Responsibilities Order is missing");
      return false;
    }
    if (!formData.designation.additionalResponsibilities.details) {
      message.warning("Additional Responsibilities Details are missing");
      return false;
    }
  }

  // Validate facultyPublication
  if (formData.facultyPublication)
    for (const publication of formData.facultyPublication) {
      if (!publication.booksPublished) {
        message.warning("Number of Books Published is missing");
        return false;
      }
      if (!publication.chaptersPublishedAndReferences) {
        message.warning(
          "Number of Chapters Published and References is missing"
        );
        return false;
      }
      if (!publication.internationalJournals) {
        message.warning("Number of International Journals is missing");
        return false;
      }
      if (!publication.nationalJournals) {
        message.warning("Number of National Journals is missing");
        return false;
      }
      if (!publication.internationalConferences) {
        message.warning("Number of International Conferences is missing");
        return false;
      }
      if (!publication.nationalConferences) {
        message.warning("Number of National Conferences is missing");
        return false;
      }
      if (!publication.patents) {
        message.warning("Number of Patents is missing");
        return false;
      }
    }
  if (formData.researchProjects)
    // Validate researchProjects
    for (const project of formData.researchProjects) {
      if (!project.name) {
        message.warning("Research Project Name is missing");
        return false;
      }
      if (!project.fundingAgency) {
        message.warning("Funding Agency is missing");
        return false;
      }
      if (!project.type) {
        message.warning("Project Type is missing");
        return false;
      }
      if (!project.year) {
        message.warning("Project Year is missing");
        return false;
      }
      if (!project.duration) {
        message.warning("Project Duration is missing");
        return false;
      }
      if (!project.fundsProvided) {
        message.warning("Funds Provided is missing");
        return false;
      }
      if (!project.relevantDocuments) {
        message.warning("Relevant Documents are missing");
        return false;
      }
      if (!project.details) {
        message.warning("Project Details are missing");
        return false;
      }
    }
  if (formData.awardsRecognition)
    // Validate awardsRecognition
    for (const award of formData.awardsRecognition) {
      if (!award.name) {
        message.warning("Award Name is missing");
        return false;
      }
      if (!award.receivedFrom) {
        message.warning("Received From is missing");
        return false;
      }
      if (!award.recognizedUnder) {
        message.warning("Recognized Under is missing");
        return false;
      }
      if (!award.level) {
        message.warning("Award Level is missing");
        return false;
      }
      if (!award.year) {
        message.warning("Award Year is missing");
        return false;
      }
      if (!award.incentivesReceived) {
        message.warning("Incentives Received is missing");
        return false;
      }
      if (!award.relevantDocuments) {
        message.warning("Relevant Documents are missing");
        return false;
      }
      if (!award.details) {
        message.warning("Award Details are missing");
        return false;
      }
    }

  if (formData.eContent) {
    // Validate eContent
    if (!formData.eContent.title) {
      message.warning("E-Content Title is missing");
      return false;
    }
    if (!formData.eContent.domain) {
      message.warning("E-Content Domain is missing");
      return false;
    }
    if (!formData.eContent.developedFor) {
      message.warning("Developed For is missing");
      return false;
    }
  }

  return true;
};

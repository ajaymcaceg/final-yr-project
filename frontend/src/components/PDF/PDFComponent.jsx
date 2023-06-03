import { Descriptions } from "antd";

const MyComponent = ({ data }) => {
  return (
    <div>
      {/* Personal Information */}
      <Descriptions
        title="Personal Information"
        bordered
        column={1}
        layout="horizontal"
      >
        <Descriptions.Item label="First Name">
          {data.personalInfo?.firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">
          {data.personalInfo?.lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email">
          {data.personalInfo?.email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone Number">
          {data.personalInfo?.phoneNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">
          {data.personalInfo?.gender}
        </Descriptions.Item>
        <Descriptions.Item label="Date of Birth">
          {data.personalInfo?.dateOfBirth}
        </Descriptions.Item>
        <Descriptions.Item label="Current Address">
          {data.personalInfo?.currentAddress}
        </Descriptions.Item>
        <Descriptions.Item label="Permanent Address">
          {data.personalInfo?.permanentAddress}
        </Descriptions.Item>
      </Descriptions>

      {/* Education */}
      <Descriptions title="Education" bordered column={1} layout="horizontal">
        <Descriptions.Item label="Undergraduate Name">
          {data.education?.ugName}
        </Descriptions.Item>
        <Descriptions.Item label="Undergraduate University">
          {data.education?.ugUniversity}
        </Descriptions.Item>
        <Descriptions.Item label="Postgraduate Name">
          {data.education?.pgName}
        </Descriptions.Item>
        <Descriptions.Item label="Postgraduate University">
          {data.education?.pgUniversity}
        </Descriptions.Item>
        <Descriptions.Item label="PhD Name">
          {data.education?.phdName}
        </Descriptions.Item>
        <Descriptions.Item label="PhD University">
          {data.education?.phdUniversity}
        </Descriptions.Item>
        <Descriptions.Item label="Portfolio URL">
          {data.education?.portfolioURL}
        </Descriptions.Item>
      </Descriptions>

      {/* Experience */}
      <Descriptions title="Experience" bordered column={1} layout="horizontal">
        <Descriptions.Item label="Has Experience">
          {data.experience?.hasExperience ? "Yes" : "No"}
        </Descriptions.Item>
        {data.experience?.experiences?.map((exp, index) => (
          <Descriptions.Item key={index} label={`Experience ${index + 1}`}>
            <p>Joining Date: {exp.joiningDate}</p>
            <p>Leaving Date: {exp.leavingDate}</p>
            <p>Experience: {exp.experience}</p>
          </Descriptions.Item>
        ))}
      </Descriptions>

      {/* Designation */}
      <Descriptions title="Designation" bordered column={1} layout="horizontal">
        <Descriptions.Item label="Designation">
          {data.designation?.designation}
        </Descriptions.Item>
        <Descriptions.Item label="Academic Year">
          {data.designation?.academicYear}
        </Descriptions.Item>
        <Descriptions.Item label="Semester">
          {data.designation?.semester}
        </Descriptions.Item>
        <Descriptions.Item label="Course Teaching">
          {data.designation?.courseTeaching}
        </Descriptions.Item>
        <Descriptions.Item label="Additional Responsibilities">
          {data.designation?.additionalResponsibilities?.details}
        </Descriptions.Item>
      </Descriptions>

      {/* Faculty Publication */}
      <Descriptions
        title="Faculty Publication"
        bordered
        column={1}
        layout="horizontal"
      >
        {data.facultyPublication?.map((publication, index) => (
          <Descriptions.Item key={index} label={`Publication ${index + 1}`}>
            <p>Books Published: {publication.booksPublished}</p>
            <p>
              Chapters Published and References:{" "}
              {publication.chaptersPublishedAndReferences}
            </p>
            <p>
              International or National Conferences:{" "}
              {publication.internationalOrNationalConferences}
            </p>
            <p>
              International or National Journals:{" "}
              {publication.internationalOrNationalJournals}
            </p>
            <p>Patents: {publication.patents}</p>
          </Descriptions.Item>
        ))}
      </Descriptions>

      {/* Research Projects */}
      <Descriptions
        title="Research Projects"
        bordered
        column={1}
        layout="horizontal"
      >
        {data.researchProjects?.map((project, index) => (
          <Descriptions.Item key={index} label={`Project ${index + 1}`}>
            <p>Name: {project.name}</p>
            <p>Funding Agency: {project.fundingAgency}</p>
            <p>Type: {project.type}</p>
            <p>Year: {project.year}</p>
            <p>Duration: {project.duration}</p>
            <p>Funds Provided: {project.fundsProvided}</p>
          </Descriptions.Item>
        ))}
      </Descriptions>

      {/* Awards and Recognition */}
      <Descriptions
        title="Awards and Recognition"
        bordered
        column={1}
        layout="horizontal"
      >
        {data.awardsRecognition?.map((award, index) => (
          <Descriptions.Item key={index} label={`Award ${index + 1}`}>
            <p>Name: {award.name}</p>
            <p>Received From: {award.receivedFrom}</p>
            <p>Recognized Under: {award.recognizedUnder}</p>
            <p>Year: {award.year}</p>
            <p>Incentives Received: {award.incentivesReceived}</p>
          </Descriptions.Item>
        ))}
      </Descriptions>

      {/* E-Content */}
      <Descriptions title="E-Content" bordered column={1} layout="horizontal">
        <Descriptions.Item label="Title">
          {data.eContent?.title}
        </Descriptions.Item>
        <Descriptions.Item label="Domain">
          {data.eContent?.domain}
        </Descriptions.Item>
        <Descriptions.Item label="Developed For">
          {data.eContent?.developedFor}
        </Descriptions.Item>
        <Descriptions.Item label="Uploaded Date">
          {data.eContent?.uploadedDate}
        </Descriptions.Item>
        <Descriptions.Item label="Duration">
          {data.eContent?.duration}
        </Descriptions.Item>
        <Descriptions.Item label="Content Link">
          {data.eContent?.contentLink}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default MyComponent;

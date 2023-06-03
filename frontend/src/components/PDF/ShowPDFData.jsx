import React, { useRef } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { Button, Descriptions, Image } from "antd";

const generatePDF = async (data, imgData, imgData1) => {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Load the logo image
  // const logoUrl = "/icon/Logo.png";
  // const logoImageBytes = await fetch(logoUrl).then((res) => res.arrayBuffer());
  // const logoImage = await pdfDoc.embedPng(logoImageBytes);

  // Set up the PDF page
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const margin = 10;

  // Add the logo and header
  const logoWidth = 50;
  const logoHeight = 50;
  const headerText = "NAAC Data";
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  // page.drawImage(logoImage, {
  //   x: margin,
  //   y: height - margin - logoHeight,
  //   width: logoWidth,
  //   height: logoHeight,
  // });
  page.setFont(helveticaFont);
  // page.drawText(headerText, {
  //   x: margin + logoWidth + 10,
  //   y: height - margin - logoHeight + logoHeight / 2 + 5,
  //   size: 20,
  // });

  // Add the data
  // const dataText = JSON.stringify(data, null, 2);
  // page.drawText(dataText, {
  //   x: margin,
  //   y: height - margin - logoHeight - 50,
  //   size: 12,
  //   font: helveticaFont,
  // });

  // Add the image data
  const image = await pdfDoc.embedPng(imgData);
  const imageDims = image.scale(0.5);
  page.drawImage(image, {
    x: 10,
    y: 0,
    width: imageDims.width,
    height: imageDims.height,
  });
  const page2 = pdfDoc.addPage();
  const image1 = await pdfDoc.embedPng(imgData1);
  const imageDims1 = image1.scale(0.5);
  page2.drawImage(image1, {
    x: 10,
    y: 400,
    width: imageDims1.width,
    height: imageDims1.height,
  });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  saveAs(new Blob([pdfBytes], { type: "application/pdf" }), "form.pdf");
};

const FormPDFGenerator = ({ data }) => {
  const containerRef = useRef();
  const containerRef2 = useRef();

  const handleGeneratePDF = async () => {
    try {
      const canvas = await html2canvas(containerRef.current);
      const imgData = canvas.toDataURL("image/png");

      const canvas1 = await html2canvas(containerRef2.current);
      const imgData1 = canvas1.toDataURL("image/png");
      await generatePDF(data, imgData, imgData1);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div>
      <div className="p-3 flex justify-end">
        <Button onClick={handleGeneratePDF} type="primary">
          Generate PDF
        </Button>
      </div>
      <div ref={containerRef}>
        <div
          // className="mt-10"
          style={{
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <div className="flex items-center mb-10  justify-between">
            <div>
              <Image src="/icon/Logo.png" width={100} />
            </div>
            <div className="ml-10 flex justify-center flex-col items-center">
              <h1 className="text-2xl">NAAC form</h1>
              <h1 className="text-xl">Anna University, Chennai</h1>
            </div>
            <div>
              <p className="text-xs">Phone : 2235 7078, 2235 7081</p>
              <p className="text-xs">Fax : 91-44-2235-1956</p>
              <p className="text-xs">Gram : ANNATECH</p>
              <p className="text-xs">Email : registrar@annauniv.edu</p>
            </div>
          </div>

          {/* Personal Information */}
          <div
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <h3>Personal Information</h3>
            <Descriptions bordered column={1} className="mt-5">
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
              {/* <Descriptions.Item label="Photo">
      {data.personalInfo?.photo}
    </Descriptions.Item> */}
            </Descriptions>
          </div>

          {/* Education */}
          <div
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>Education</h2>
            <p>
              <strong>Undergraduate Name:</strong> {data.education?.ugName}
            </p>
            <p>
              <strong>Undergraduate University:</strong>{" "}
              {data.education?.ugUniversity}
            </p>
            {/* <p>
            <strong>Undergraduate Certificate:</strong>{" "}
            {data.education?.ugCertificate}
          </p> */}
            <p>
              <strong>Postgraduate Name:</strong> {data.education?.pgName}
            </p>
            <p>
              <strong>Postgraduate University:</strong>{" "}
              {data.education?.pgUniversity}
            </p>
            {/* <p>
            <strong>Postgraduate Certificate:</strong>{" "}
            {data.education?.pgCertificate}
          </p> */}
            <p>
              <strong>PhD Name:</strong> {data.education?.phdName}
            </p>
            <p>
              <strong>PhD University:</strong> {data.education?.phdUniversity}
            </p>
            <p>
              <strong>Portfolio URL:</strong> {data.education?.portfolioURL}
            </p>
          </div>

          {/* Experience */}
          <div
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>Experience</h2>
            <p>
              <strong>Has Experience:</strong>{" "}
              {data.experience?.hasExperience ? "Yes" : "No"}
            </p>
            {data.experience?.experiences &&
              data.experience.experiences.map((exp, index) => (
                <div key={index}>
                  <h3>Experience {index + 1}</h3>
                  {/* <p>
                  <strong>Appointment Order:</strong> {exp.appointmentOrder}
                </p> */}
                  {/* <p>
                  <strong>Experience Certificate:</strong>{" "}
                  {exp.experienceCertificate}
                </p> */}
                  <p>
                    <strong>Joining Date:</strong> {exp.joiningDate}
                  </p>
                  <p>
                    <strong>Leaving Date:</strong> {exp.leavingDate}
                  </p>
                  <p>
                    <strong>Experience:</strong> {exp.experience}
                  </p>
                </div>
              ))}
          </div>

          {/* Designation */}
          <div
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>Designation</h2>
            <p>
              <strong>Designation:</strong> {data.designation?.designation}
            </p>
            <p>
              <strong>Academic Year:</strong> {data.designation?.academicYear}
            </p>
            <p>
              <strong>Semester:</strong> {data.designation?.semester}
            </p>
            <p>
              <strong>Course Teaching:</strong>{" "}
              {data.designation?.courseTeaching}
            </p>
            <p>
              <strong>Additional Responsibilities:</strong>{" "}
              {data.designation?.additionalResponsibilities?.details}
            </p>
          </div>

          {/* Faculty Publication */}
          <div
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>Faculty Publication</h2>
            {data.facultyPublication &&
              data.facultyPublication.map((publication, index) => (
                <div key={index}>
                  <h3>Publication {index + 1}</h3>
                  <p>
                    <strong>Books Published:</strong>{" "}
                    {publication.booksPublished}
                  </p>
                  <p>
                    <strong>Chapters Published and References:</strong>{" "}
                    {publication.chaptersPublishedAndReferences}
                  </p>
                  <p>
                    <strong>International or National Conferences:</strong>{" "}
                    {publication.internationalOrNationalConferences}
                  </p>
                  <p>
                    <strong>International or National Journals:</strong>{" "}
                    {publication.internationalOrNationalJournals}
                  </p>
                  <p>
                    <strong>Patents:</strong> {publication.patents}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div ref={containerRef2}>
        {/* Research Projects */}
        <div
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>Research Projects</h2>
          {data.researchProjects &&
            data.researchProjects.map((project, index) => (
              <div key={index}>
                <h3>Project {index + 1}</h3>
                <p>
                  <strong>Name:</strong> {project.name}
                </p>
                <p>
                  <strong>Funding Agency:</strong> {project.fundingAgency}
                </p>
                <p>
                  <strong>Type:</strong> {project.type}
                </p>
                <p>
                  <strong>Year:</strong> {project.year}
                </p>
                <p>
                  <strong>Duration:</strong> {project.duration}
                </p>
                <p>
                  <strong>Funds Provided:</strong> {project.fundsProvided}
                </p>
                {/* <p>
                  <strong>Relevant Documents:</strong>{" "}
                  {project.relevantDocuments}
                </p> */}
              </div>
            ))}
        </div>

        {/* Awards and Recognition */}
        <div
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>Awards and Recognition</h2>
          {data.awardsRecognition &&
            data.awardsRecognition.map((award, index) => (
              <div key={index}>
                <h3>Award {index + 1}</h3>
                <p>
                  <strong>Name:</strong> {award.name}
                </p>
                <p>
                  <strong>Received From:</strong> {award.receivedFrom}
                </p>
                <p>
                  <strong>Recognized Under:</strong> {award.recognizedUnder}
                </p>
                <p>
                  <strong>Year:</strong> {award.year}
                </p>
                <p>
                  <strong>Incentives Received:</strong>{" "}
                  {award.incentivesReceived}
                </p>
                {/* <p>
                  <strong>Relevant Documents:</strong> {award.relevantDocuments}
                </p> */}
              </div>
            ))}
        </div>

        {/* E-Content */}
        <div
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>E-Content</h2>
          <p>
            <strong>Title:</strong> {data.eContent?.title}
          </p>
          <p>
            <strong>Domain:</strong> {data.eContent?.domain}
          </p>
          <p>
            <strong>Developed For:</strong> {data.eContent?.developedFor}
          </p>
          <p>
            <strong>Uploaded Date:</strong> {data.eContent?.uploadedDate}
          </p>
          <p>
            <strong>Duration:</strong> {data.eContent?.duration}
          </p>
          {/* <p>
            <strong>Relevant Documents Used:</strong>{" "}
            {data.eContent?.relevantDocumentsUsed}
          </p> */}
          <p>
            <strong>Content Link:</strong> {data.eContent?.contentLink}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormPDFGenerator;

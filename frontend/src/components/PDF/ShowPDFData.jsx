import React, { useRef } from "react";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { Button, Descriptions, Image } from "antd";

const generatePDF = async (data, imgData, imgData1, imgData2) => {
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
    y: 100,
    width: imageDims.width,
    height: imageDims.height,
  });
  const page2 = pdfDoc.addPage();
  const image1 = await pdfDoc.embedPng(imgData1);
  const imageDims1 = image1.scale(0.5);
  page2.drawImage(image1, {
    x: 10,
    y: 300,
    width: imageDims1.width,
    height: imageDims1.height,
  });

  const page3 = pdfDoc.addPage();
  const image2 = await pdfDoc.embedPng(imgData2);
  const imageDims2 = image1.scale(0.5);
  page3.drawImage(image2, {
    x: 10,
    y: 300,
    width: imageDims2.width,
    height: imageDims2.height,
  });
  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  saveAs(new Blob([pdfBytes], { type: "application/pdf" }), "form.pdf");
};

const FormPDFGenerator = ({ data }) => {
  const containerRef = useRef();
  const containerRef2 = useRef();
  const containerRef3 = useRef();

  const handleGeneratePDF = async () => {
    try {
      const canvas = await html2canvas(containerRef.current);
      const imgData = canvas.toDataURL("image/png");

      const canvas1 = await html2canvas(containerRef2.current);
      const imgData1 = canvas1.toDataURL("image/png");

      const canvas2 = await html2canvas(containerRef3.current);
      const imgData2 = canvas2.toDataURL("image/png");
      await generatePDF(data, imgData, imgData1, imgData2);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="w-[900px] ml-[200px]">
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
              {/* <p className="text-xs">Phone : 2235 7078, 2235 7081</p>
              <p className="text-xs">Fax : 91-44-2235-1956</p>
              <p className="text-xs">Gram : ANNATECH</p>
              <p className="text-xs">Email : registrar@annauniv.edu</p> */}
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
            <Descriptions
              title="Education"
              bordered
              column={1}
              layout="horizontal"
            >
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
          </div>

          {/* Experience */}
        </div>
      </div>
      <div ref={containerRef2}>
        <Descriptions
          title="Experience"
          bordered
          column={1}
          layout="horizontal"
          className="mt-4"
        >
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
        <Descriptions
          title="Designation"
          bordered
          column={1}
          layout="horizontal"
          className="mt-4"
        >
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
          className="mt-4"
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
      </div>
      <div ref={containerRef3}>
        {/* Research Projects */}
        <Descriptions
          title="Research Projects"
          bordered
          column={1}
          layout="horizontal"
          className="mt-4"
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
          className="mt-4"
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
    </div>
  );
};

export default FormPDFGenerator;

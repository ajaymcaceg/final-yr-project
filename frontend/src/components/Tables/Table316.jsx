import React from "react";
import { Table } from "antd";

const MyTableComponent = ({ data }) => {
  const columns = [
    {
      title: "Name of the Scheme/Project/Endowments/Chairs",
      dataIndex: "researchProjects",
      key: "name",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].name : "NA",
    },
    {
      title:
        "Name of the Principal Investigator/Co Investigator (if applicable)",
      dataIndex: "designation",
      key: "principalInvestigator",
      render: (designation) =>
        designation && designation.length > 0
          ? designation[0].additionalResponsibilities &&
            designation[0].additionalResponsibilities.details
            ? designation[0].additionalResponsibilities.details
            : "NA"
          : "NA",
    },
    {
      title: "Name of the Funding agency",
      dataIndex: "researchProjects",
      key: "fundingAgency",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].fundingAgency : "NA",
    },
    {
      title: "Type (Government/Non-Government)",
      dataIndex: "researchProjects",
      key: "type",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].type : "NA",
    },
    {
      title: "Department",
      dataIndex: "designation",
      key: "department",
      render: (designation) =>
        designation && designation.length > 0
          ? designation[0].courseTeaching
          : "NA",
    },
    {
      title: "Year of Award",
      dataIndex: "researchProjects",
      key: "year",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].year : "NA",
    },
    {
      title: "Funds provided (INR in lakhs)",
      dataIndex: "researchProjects",
      key: "fundsProvided",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].fundsProvided : "NA",
    },
    {
      title: "Duration of the project",
      dataIndex: "researchProjects",
      key: "duration",
      render: (projects) =>
        projects && projects.length > 0 ? projects[0].duration : "NA",
    },
  ];

  return <Table dataSource={[data]} columns={columns} />;
};

export default MyTableComponent;

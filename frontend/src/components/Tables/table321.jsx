import React from "react";
import { Table, Input } from "antd";

const { Search } = Input;

const MyTableComponent2 = ({ data }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
      width: 150,
    },
    {
      title: "Name of the Funding agency",
      dataIndex: "researchProjects",
      key: "fundingAgency",
      render: (projects) => {
        console.log(projects, "11");
        return projects && projects.length > 0
          ? projects.map((project) => project.fundingAgency).join(", ")
          : "NA";
      },
      ellipsis: true,
    },
    {
      title: "Type (Government/Non-Government)",
      dataIndex: "researchProjects",
      key: "type",
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.type).join(", ")
          : "NA",
      ellipsis: true,
    },
    {
      title: "Department",
      dataIndex: "designation",
      key: "department",
      render: (designation) =>
        designation && designation.length > 0
          ? designation
              .map((designation) => designation.courseTeaching)
              .join(", ")
          : "NA",
      ellipsis: true,
    },
    {
      title: "Year of Award",
      dataIndex: "researchProjects",
      key: "year",
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.year).join(", ")
          : "NA",
      ellipsis: true,
    },
    {
      title: "Funds provided (INR in lakhs)",
      dataIndex: "researchProjects",
      key: "fundsProvided",
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.fundsProvided).join(", ")
          : "NA",
      ellipsis: true,
    },
    {
      title: "Duration of the project",
      dataIndex: "researchProjects",
      key: "duration",
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.duration).join(", ")
          : "NA",
      ellipsis: true,
    },
  ];

  const searchTable = (value) => {
    // Implement search logic here
    // You can filter the data based on the search value
    // and update the table's data source
    console.log("Search value:", value);
  };

  return (
    <>
      <Search
        placeholder="Search"
        onSearch={searchTable}
        style={{ marginBottom: 16 }}
      />
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default MyTableComponent2;

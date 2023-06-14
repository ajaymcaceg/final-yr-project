import React, { useState } from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const MyTableComponent3 = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex, columnName) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${columnName}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={() => handleReset(clearFilters)}
            style={{ padding: "0 8px" }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ padding: "0 8px" }}
          >
            Search
          </button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          // This delay is necessary for the input field to be focused properly.
          document.getElementById(`${columnName}-search-input`).focus();
        }, 0);
      }
    },
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "id",
      ...getColumnSearchProps("_id", "ID"),
    },
    {
      title: "Name of the Scheme/Project/Endowments/Chairs",
      dataIndex: "researchProjects",
      key: "name",
      ...getColumnSearchProps(
        "researchProjects",
        "Name of the Scheme/Project/Endowments/Chairs"
      ),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.name).join(", ")
          : "NA",
    },
    {
      title:
        "Name of the Principal Investigator/Co Investigator (if applicable)",
      dataIndex: "designation",
      key: "principalInvestigator",
      ...getColumnSearchProps(
        "designation",
        "Name of the Principal Investigator/Co Investigator"
      ),
      render: (designation) =>
        designation && designation.length > 0
          ? designation.map((d) => d.designation).join(", ")
          : "NA",
    },
    {
      title: "Name of the Funding agency",
      dataIndex: "researchProjects",
      key: "fundingAgency",
      ...getColumnSearchProps("researchProjects", "Name of the Funding agency"),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.fundingAgency).join(", ")
          : "NA",
    },
    {
      title: "Type (Government/Non-Government)",
      dataIndex: "researchProjects",
      key: "type",
      ...getColumnSearchProps(
        "researchProjects",
        "Type (Government/Non-Government)"
      ),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.type).join(", ")
          : "NA",
    },
    {
      title: "Department",
      dataIndex: "designation",
      key: "department",
      ...getColumnSearchProps("designation", "Department"),
      render: (designation) =>
        designation && designation.length > 0
          ? designation.map((d) => d.courseTeaching).join(", ")
          : "NA",
    },
    {
      title: "Year of Award",
      dataIndex: "researchProjects",
      key: "year",
      ...getColumnSearchProps("researchProjects", "Year of Award"),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.year).join(", ")
          : "NA",
    },
    {
      title: "Funds provided (INR in lakhs)",
      dataIndex: "researchProjects",
      key: "fundsProvided",
      ...getColumnSearchProps(
        "researchProjects",
        "Funds provided (INR in lakhs)"
      ),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.fundsProvided).join(", ")
          : "NA",
    },
    {
      title: "Duration of the project",
      dataIndex: "researchProjects",
      key: "duration",
      ...getColumnSearchProps("researchProjects", "Duration of the project"),
      render: (projects) =>
        projects && projects.length > 0
          ? projects.map((project) => project.duration).join(", ")
          : "NA",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default MyTableComponent3;

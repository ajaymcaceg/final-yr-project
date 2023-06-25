import React from "react";
import { Table } from "antd";

const PatentTable = ({ data }) => {
  const columns = [
    {
      title: "Name of the Teacher",
      dataIndex: "teacherName",
      key: "teacherName",
    },
    {
      title: "Patent Number",
      dataIndex: "patentNumber",
      key: "patentNumber",
    },
    {
      title: "Title of the Patent",
      dataIndex: "patentTitle",
      key: "patentTitle",
    },
    {
      title: "Year of Award/Publish",
      dataIndex: "patentawardYear",
      key: "year",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default PatentTable;

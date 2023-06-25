import React from "react";
import { Table } from "antd";

const AwardsTable = ({ data }) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Year of Award",
      dataIndex: "awardYear",
      key: "year",
    },
    {
      title: "Title of the Innovation",
      dataIndex: "innovationTitle",
      key: "name",
    },
    {
      title: "Name of the Awardee",
      dataIndex: "awardeeName",
      key: "receivedFrom",
    },
    {
      title: "Name of the Awarding Agency",
      dataIndex: "awardingAgency",
      key: "recognizedUnder",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "incentivesReceived",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default AwardsTable;

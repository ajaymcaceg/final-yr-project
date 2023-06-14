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
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Title of the Innovation",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Name of the Awardee",
      dataIndex: "receivedFrom",
      key: "receivedFrom",
    },
    {
      title: "Name of the Awarding Agency",
      dataIndex: "recognizedUnder",
      key: "recognizedUnder",
    },
    {
      title: "Category",
      dataIndex: "incentivesReceived",
      key: "incentivesReceived",
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default AwardsTable;

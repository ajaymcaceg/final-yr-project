import React, { useState } from "react";
import { Table, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;

const WorkshopTable = ({ data }) => {
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
        <Search
          placeholder={`Search ${columnName}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onSearch={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <button
          type="button"
          onClick={() => handleReset(clearFilters)}
          style={{ width: 90, marginRight: 8 }}
        >
          Reset
        </button>
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
          document.getElementById(`search-input-${columnName}`).select();
        });
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
console.log("Workship,",data)
  const columns = [
    // {
    //   title: "ID",
    //   dataIndex: "ID",
    //   key: "ID",
    //   ...getColumnSearchProps("ID", "ID"),
    // },
    {
      title: "Year",
      dataIndex: "workshopYear",
      key: "Year",
      ...getColumnSearchProps("Year", "Year"),
    },
    {
      title: "Name of the workshop/seminar",
      dataIndex: "workshopName",
      key: "workshopName",
      ...getColumnSearchProps("workshopName", "Workshop Name"),
    },
    {
      title: "Number of Participants",
      dataIndex: "participantCount",
      key: "participants",
      ...getColumnSearchProps("participants", "Participants"),
    },
    {
      title: "Date From – To",
      dataIndex: "workshopDateRange",
      key: "date",
      ...getColumnSearchProps("date", "Date"),
      render:(date)=>{

        if(date){
          if(date.length && date.length>1){

            // return date[0]?.toISOString()+" - "+date[1]?.toISOString()

          }
        }
        return "No data"

      }
    },
    {
      title: "Link to the Activity report on the website",
      dataIndex: "activityReportLink",
      key: "activityReportLink",
      ...getColumnSearchProps("activityReportLink", "Activity Report Link"),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default WorkshopTable;

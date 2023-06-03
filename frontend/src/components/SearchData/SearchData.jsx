import React, { useState, useEffect } from "react";
import { Table, Input, Button, Space, Descriptions, InputNumber } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL } from "../../env";
export const SearchData = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const [data, setdata] = useState([]);

  const [filters, setFilters] = useState({ patents: null });

  const handleFilterChange = (value) => {
    setFilters({ patents: value });
  };

  const filteredData =
    filters.patents !== null
      ? data.filter((item) => item.patents > filters.patents)
      : data;

  useEffect(() => {
    axios
      .get(URL + "/form")
      .then((res) => {
        console.log(res);
        let personalData = res.data.map((d) => ({
          ...{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
          },
          ...d.personalInfo,
          ...d.facultyPublication[0],
        }));
        setdata(personalData);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
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
        : false,
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          const searchInput = document.getElementById(`search-${dataIndex}`);
          if (searchInput) {
            searchInput.select();
          }
        }, 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (text ? text.toString() : "") : text,
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",

      ...getColumnSearchProps("firstName"),
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      ...getColumnSearchProps("lastName"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      ...getColumnSearchProps("phoneNumber"),
    },

    {
      title: "Books Published",
      dataIndex: "booksPublished",
      key: "booksPublished",
    },
    {
      title: "Chapters Published and References",
      dataIndex: "chaptersPublishedAndReferences",
      key: "chaptersPublishedAndReferences",
    },
    // {
    //   title: "International Journals",
    //   dataIndex: "internationalJournals",
    //   key: "internationalJournals",
    // },
    // {
    //   title: "National Journals",
    //   dataIndex: "nationalJournals",
    //   key: "nationalJournals",
    // },
    // {
    //   title: "International Conferences",
    //   dataIndex: "internationalConferences",
    //   key: "internationalConferences",
    // },
    // {
    //   title: "National Conferences",
    //   dataIndex: "nationalConferences",
    //   key: "nationalConferences",
    // },
    {
      title: "Patents",
      dataIndex: "patents",
      key: "patents",
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <InputNumber
            placeholder="Greater than"
            value={filters.patents}
            onChange={handleFilterChange}
          />
          <div style={{ marginTop: 8 }}>
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Filter
            </Button>
            <Button
              onClick={(e) => {
                clearFilters(e);
                setFilters({ patents: null });
              }}
              size="small"
              style={{ width: 90 }}
            >
              Reset
            </Button>
          </div>
        </div>
      ),
      onFilter: (value, record) => parseInt(record.patents) > value,
      filterIcon: (filtered) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
    },
    // {
    //   title: "Publications",
    //   dataIndex: "publication",
    //   render: (publication) => {
    //     console.log(publication);

    //     return (
    //       <>
    //         {publication ? (
    //           publication.map((fp) => (
    //             <Descriptions title="Faculty Publication" bordered>
    //               <Descriptions.Item label="Books Published">
    //                 {fp?.booksPublished}
    //               </Descriptions.Item>
    //               <Descriptions.Item label="Chapters Published and References">
    //                 {fp?.chaptersPublishedAndReferences}
    //               </Descriptions.Item>
    //               <Descriptions.Item label="International or National Conferences">
    //                 {fp?.internationalOrNationalConferences}
    //               </Descriptions.Item>
    //               <Descriptions.Item label="International or National Journals">
    //                 {fp?.internationalOrNationalJournals}
    //               </Descriptions.Item>
    //               <Descriptions.Item label="Patents">
    //                 {fp?.patents}
    //               </Descriptions.Item>
    //             </Descriptions>
    //           ))
    //         ) : (
    //           <>No Publication data to show</>
    //         )}
    //       </>
    //     );
    //   },
    // },
  ];

  return <Table dataSource={filteredData} columns={columns} />;
};

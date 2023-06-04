import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Descriptions,
  InputNumber,
  Typography,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL } from "../../env";
import { searchInData } from "../../constants/search";
import { Link } from "react-router-dom";
export const SearchData = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const [data, setdata] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const [filters, setFilters] = useState({ patents: null });

  const handleFilterChange = (value) => {
    setFilters({ patents: value });
  };

  useEffect(() => {
    if (filters.patents !== null)
      setfilteredData(data.filter((item) => item.patents > filters.patents));
    else setfilteredData(data);
  }, [data, filters]);

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
          _id: d._id,
          name: d.personalInfo.firstName + " " + d.personalInfo.lastName,
          ...d.personalInfo,
          facultyPublication: d.facultyPublication,
          researchProjects: d.researchProjects,
          ...d.designation,
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
      title: "Name",
      dataIndex: "name",
      key: "firstName",

      ...getColumnSearchProps("firstName"),
    },
    // {
    //   title: "Last Name",
    //   dataIndex: "lastName",
    //   key: "lastName",
    //   ...getColumnSearchProps("lastName"),
    // },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps("email"),
    },
    // {
    //   title: "Phone Number",
    //   dataIndex: "phoneNumber",
    //   key: "phoneNumber",
    //   ...getColumnSearchProps("phoneNumber"),
    // },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
      ...getColumnSearchProps("designation"),
    },
    {
      title: "Books and Chapters Published",
      dataIndex: "booksPublished",
      key: "booksPublished",
      render: (_, datau) => {
        console.log(_, datau);

        return (
          <>
            {datau.facultyPublication.map((data) => (
              <div>
                <div>
                  <span className="font-semibold">Books published : </span>{" "}
                  <span>{data.booksPublished}</span>
                </div>
                <span className="font-bold">Chapters published : </span>{" "}
                <span>{data.chaptersPublishedAndReferences}</span>
              </div>
            ))}
          </>
        );
      },
    },

    {
      title: "Research Projects",
      dataIndex: "researchProjects",
      key: "researchProjects",
      render: (_, datau) => {
        console.log(_, datau);

        return (
          <>
            {datau.researchProjects.map((data) => (
              <div>
                <div>
                  <span className="font-semibold">Name : </span>{" "}
                  <span>{data.name}</span>
                </div>
                <span className="font-bold">Year : </span>{" "}
                <span>{data.year}</span>
                <div>
                  <span className="font-bold">Funds Provided : </span>{" "}
                  <span>{data.fundsProvided}</span>
                </div>
              </div>
            ))}
          </>
        );
      },
    },
    // {
    //   title: "Chapters Published and References",
    //   dataIndex: "chaptersPublishedAndReferences",
    //   key: "chaptersPublishedAndReferences",
    // },
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
    {
      title: "View",
      dataIndex: "publication",
      key: "view_data",
      render: (_, datau) => {
        console.log(datau);
        return (
          <div>
            <Link to={"/view" + "#" + datau._id}>
              <Typography.Link
                onClick={() => {
                  // setTimeout(() => {
                  //   const tempLink = document.createElement("a");
                  //   tempLink.href = "#" + datau._id;
                  //   tempLink.dispatchEvent(new MouseEvent("click"));
                  // }, 0);
                }}
              >
                View
              </Typography.Link>
            </Link>
          </div>
        );
      },
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

  return (
    <div className="mt-5 p-2">
      <div className=" mb-4">
        <Input.Search
          size="large"
          onChange={(e) => {
            if (!e.target.value) {
              setfilteredData(data);
            }
          }}
          onSearch={(value) => {
            if (value) {
              let ids = searchInData(filteredData, value);
              console.log(ids);
              setfilteredData((dataTmp) =>
                dataTmp.filter((d) => ids.includes(d._id))
              );
            } else {
              setfilteredData(data);
            }
          }}
        ></Input.Search>
      </div>
      <Table dataSource={filteredData} columns={columns} />
    </div>
  );
};

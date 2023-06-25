import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Button,
  Space,
  Descriptions,
  InputNumber,
  Typography,
  Tabs,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { URL } from "../../env";
import { searchInData } from "../../constants/search";
import { Link } from "react-router-dom";
import MyTableComponent from "../Tables/Table316";
import MyTableComponent2 from "../Tables/table321";
import MyTableComponent3 from "../Tables/Table323";
import WorkshopTable from "../Tables/Table332";
import AwardsTable from "../Tables/Table333";
import PatentTable from "../Tables/Table343";
import TeacherTable from "../TabView/Extras/Teacher/TeacherTable";
import FellowshipTable from "../TabView/Extras/Fellowship/FellowshipTable";
import ResearchFellowTable from "../TabView/Extras/ResearchFellow/ResearchFellow";
import PhDTable from "../TabView/Extras/PhdScholar/PhdScholar";
const { TabPane } = Tabs;

export const SearchData = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const [data, setdata] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const [filters, setFilters] = useState({ patents: null });

  const handleFilterChange = (value) => {
    setFilters({ patents: value });
  };
console.log("Main data",data)
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
          dataId: d._id,
          name: d.personalInfo.firstName + " " + d.personalInfo.lastName,
          ...d.personalInfo,
          personalInfo: {
            name: d.personalInfo.firstName + " " + d.personalInfo.lastName,
            ...d.personalInfo,
          },
          facultyPublication: d.facultyPublication,
          researchProjects: d.researchProjects,
          ...d.designation,
          awardsRecognition: d.awardsRecognition,
          extras:d.extras
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

    {
      title: "Awards",
      dataIndex: "awardsRecognition",
      key: "awardsRecognition",
      render: (_, datau) => {

        return (
          <>
            {datau.awardsRecognition.map((data) => (
              <div>
                <div>
                  <span className="font-semibold">Received from : </span>{" "}
                  <span>{data.receivedFrom}</span>
                </div>
                <span className="font-bold">Year : </span>{" "}
                <span>{data.year}</span>
                <div>
                  <span className="font-bold">Recognized Under : </span>{" "}
                  <span>{data.recognizedUnder}</span>
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
        return (
          <div>
            <Link to={"/view" + "#" + datau.dataId}>
              <Typography.Link
                onClick={() => {
                  // setTimeout(() => {
                  //   const tempLink = document.createElement("a");
                  //   tempLink.href = "#" + datau.dataId;
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
      <Tabs defaultActiveKey="1">
        {/* <TabPane tab="Tab 1" key="1"></TabPane> */}
        <TabPane tab="Default" key="2">
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
                  
                  setfilteredData((dataTmp) =>
                    data.filter((d) => ids.includes(d.dataId))
                  );
                } else {
                  setfilteredData(data);
                }
              }}
            ></Input.Search>
          </div>
          <Table dataSource={filteredData} columns={columns} />
        </TabPane>
        
        <TabPane tab="Funding (3.2.1)" key="3">
          <MyTableComponent2 data={data} />
        </TabPane>
        <TabPane tab="Research Projects (3.2.3)" key="4">
          <MyTableComponent3 data={data} />
        </TabPane>
        <TabPane tab="Workshop (3.3.2)" key="5">
          <WorkshopTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />{" "}
        </TabPane>
        <TabPane tab="Awards" key="6">
          <AwardsTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />{" "}
        </TabPane>
        <TabPane tab="Patents" key="7">
          <PatentTable
            data={data.map((d, index) => ({
              key: index,
              teacherName:
                d?.personalInfo?.firstName + " " + d?.personalInfo?.lastName,
              patentNumber: d.facultyPublication.length
                ? d.facultyPublication[0].patents
                : "NA",
              patentTitle: "NA",
              year: "NA",
            }))}
          />{" "}
        </TabPane>

        <TabPane tab="Teacher" key="8">
          <TeacherTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />
        </TabPane>
        <TabPane tab="Fellowship Award" key="9">
          <FellowshipTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />
        </TabPane>
        {/* <TabPane tab="Awards" key="10">
          <AwardsTable data={data.map((d)=>d?.extras||[])} />
        </TabPane> */}
        <TabPane tab="Research Fellow" key="11">
          <ResearchFellowTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />
        </TabPane>
        <TabPane tab="PHD Table" key="12">
          <PhDTable data={data.filter((d) => d.extras!=undefined).map((d)=>({...d.extras}))} />
        </TabPane>
      </Tabs>

      {/* <MyTableComponent data={data} /> */}
    </div>
  );
};

import React, { useState } from 'react';
import { Table, Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
const { Search } = Input;


const columns = [
  {
    title: 'Sl.No.',
    dataIndex: 'slNo',
    key: 'slNo',
  },
  {
    title: 'Name of the Research Fellow',
    dataIndex: 'researchFellowName',
    key: 'researchFellowName',
  },
  {
    title: 'Year of Enrolment',
    dataIndex: 'yearOfEnrolment',
    key: 'yearOfEnrolment',
  },
  {
    title: 'Duration of Fellowship',
    dataIndex: 'fellowshipDuration',
    key: 'fellowshipDuration',
  },
  {
    title: 'Type of the Fellowship',
    dataIndex: 'fellowshipType',
    key: 'fellowshipType',
  },
  {
    title: 'Granting Agency',
    dataIndex: 'grantingAgency',
    key: 'grantingAgency',
  },
  {
    title: 'Qualifying Exam',
    dataIndex: 'qualifyingExam',
    key: 'qualifyingExam',
  },
];

const ResearchFellowTable = ({data}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={() => handleReset(clearFilters)} style={{ marginRight: 8 }}>
            Reset
          </button>
          <button type="primary" onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}>
            Search
          </button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
  });

  const columnsWithSearch = columns.map((column) => ({
    ...column,
    ...getColumnSearchProps(column.dataIndex),
  }));

  return (
    <Table
      dataSource={data}
      columns={columnsWithSearch}
      pagination={false}
      bordered
      size="small"
    />
  );
};

export default ResearchFellowTable;

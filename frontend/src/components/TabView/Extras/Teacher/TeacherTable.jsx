import React, { useState } from 'react';
import { Table, Input, Typography } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
const { Search } = Input;

const TeacherTable = ({data}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');



  const columns = [
    {
      title: 'Name of the teacher provided with seed money',
      dataIndex: 'seedTeacherName',
      key: 'name',
    },
    {
      title: 'The amount of seed money (INR in Lakhs)',
      dataIndex: 'seedamount',
      key: 'amount',
    },
    {
      title: 'Year of receiving',
      dataIndex: 'seedyear',
      key: 'year',
    },
    {
      title: 'Link to the policy document for Sanction of seed money / grants for research from the institution',
      dataIndex: 'link',
      key: 'link',
      render: (text) => <a href={text}>{text}</a>,
    },
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex, columnTitle) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={`Search ${columnTitle}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={() => handleReset(clearFilters)}
            style={{ marginRight: 8 }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginRight: 8 }}
          >
            Search
          </button>
        </div>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
  });

  const columnsWithSearch = columns.map((column) => ({
    ...column,
    ...getColumnSearchProps(column.dataIndex, column.title),
  }));

  return <>
  <Typography.Title level={5}>
    The institution provides seed money to its teachers for research (average per year INR in Lakhs) (3)
  </Typography.Title>
  <Table dataSource={data} columns={columnsWithSearch} /></>;
};

export default TeacherTable;

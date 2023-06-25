import React, { useState } from 'react';
import { Table, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const FellowshipTable = ({data}) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');


  const columns = [
    {
      title: 'Sl.No.',
      dataIndex: 'slNo',
      key: 'slNo',
    },
    {
      title: 'Name of the teacher awarded national/ international fellowship/financial support',
      dataIndex: 'fellowShipteacherName',
      key: 'teacherName',
    },
    {
      title: 'Name of the award/fellowship',
      dataIndex: 'fellowshipName',
      key: 'fellowshipName',
    },
    {
      title: 'Year of the Award',
      dataIndex: 'fellowshipAwardYear',
      key: 'year',
    },
    {
      title: 'Awarding Agency',
      dataIndex: 'fellowshipAwardingAgency',
      key: 'awardingAgency',
    },
    {
      title: 'Link to certificates',
      dataIndex: 'fellowShipLink',
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

  return <Table dataSource={data} columns={columnsWithSearch} />;
};

export default FellowshipTable;

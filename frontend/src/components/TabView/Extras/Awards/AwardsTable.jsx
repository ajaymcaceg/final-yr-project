import React, { useState } from 'react';
import { Table, Input } from 'antd';

const { Search } = Input;



const columns = [
  {
    title: 'Sl.No.',
    dataIndex: 'slNo',
    key: 'slNo',
  },
  {
    title: 'Name of the Teacher',
    dataIndex: 'teacherName',
    key: 'teacherName',
  },
  {
    title: 'Name of the Award/Fellowship',
    dataIndex: 'fellowshipName',
    key: 'fellowshipName',
  },
  {
    title: 'Year of the Award',
    dataIndex: 'awardYear',
    key: 'awardYear',
  },
  {
    title: 'Awarding Agency',
    dataIndex: 'awardingAgency',
    key: 'awardingAgency',
  },
  {
    title: 'Link to Certificates',
    dataIndex: 'certificateLink',
    key: 'certificateLink',
    render: (link) => (
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Certificate
      </a>
    ),
  },
];

const AwardsTable = ({data}) => {
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

  const columnsWithSearch = columns.map((column) => {
    if (column.dataIndex === 'teacherName' || column.dataIndex === 'fellowshipName') {
      return {
        ...column,
        ...getColumnSearchProps(column.dataIndex),
      };
    }
    return column;
  });

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

export default AwardsTable;

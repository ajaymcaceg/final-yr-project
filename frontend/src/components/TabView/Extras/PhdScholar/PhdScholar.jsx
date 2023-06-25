import React, { useState } from 'react';
import { Table, Input } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
const { Search } = Input;



const columns = [
  {
    title: 'Name of the PhD Scholar',
    dataIndex: 'phdScholarName',
    key: 'phdScholarName',
  },
  {
    title: 'Name of the Department',
    dataIndex: 'departmentName',
    key: 'departmentName',
  },
  {
    title: 'Name of the Guide/s',
    dataIndex: 'guideName',
    key: 'guideName',
  },
  {
    title: 'Title of the Thesis',
    dataIndex: 'thesisTitle',
    key: 'thesisTitle',
  },
  {
    title: 'Year of Registration',
    dataIndex: 'registrationYear',
    key: 'registrationYear',
  },
  {
    title: 'Year of PhD Awarded',
    dataIndex: 'phdYear',
    key: 'phdYear',
  },
  {
    title: 'Research Guide Recognition (Y/N)',
    dataIndex: 'researchGuideRecognition',
    key: 'researchGuideRecognition',
  },
  {
    title: 'Year of Recognition as a Research Guide',
    dataIndex: 'recognitionYear',
    key: 'recognitionYear',
  },
];

const PhDTable = ({data}) => {
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

export default PhDTable;

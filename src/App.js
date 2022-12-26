import React, { useState } from 'react';
import './App.css';
import { Input, Table } from 'antd';


function App() {
  const [searchedText, setSearchedText] = useState("");
  return (
    <div classname="App">
    <header className="App-header" style={{backgroundColor: "white"}}>
      <h6>Cari Data Disini!</h6>
      <Input.Search placeholder='cari disini cokk..' 
      style={{marginBottom: 8,
      width: 300}} 
      onSearch={(value)=>{
        setSearchedText(value)
      }}
      />
      <Table
      columns={[
        {
          title: "Name",
          dataIndex: "name",
          filteredValue: [searchedText],
          onFilter: (value, record) => {
            return (
            String(record.name)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
            String(record.age)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
            String(record.address)
            .toLowerCase()
            .includes(value.toLowerCase())
            );
          },
        },
        {
          title: "Age",
          dataIndex: "age",
        },
        {
          title: "Address",
          dataIndex: "address",
        },
      ]}
      dataSource={[
        {
        key:1,
        name: 'Ahmad',
        age:10,
        address:'Bengkulu'
        },
        {
        key:2,
        name: 'Indri',
        age:19,
        address:'Bandung'
        },
        {
        key:3,
        name: 'Sella',
        age:16,
        address:'Pematang'
        },
      ]}
      ></Table>

    </header>

    </div>
  )
}


export default App;
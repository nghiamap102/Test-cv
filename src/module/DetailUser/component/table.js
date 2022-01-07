import { Col, Popconfirm, Row, Table } from "antd";
import { useState } from "react";








const TableUserDetail = (props)=>{

    const dataSource = [{
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
      }, {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
      }];
      
      const columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      }];

    return (
<>


<Table columns={columns} dataSource={dataSource} />
</>
    )
}


export default TableUserDetail





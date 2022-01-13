import { Popconfirm, Table } from "antd";
import { useState } from "react";








const TableUser = (props)=>{

    var firstSubArr = props.arrUser.map(function(s) {
        return {
            'key': s.id,
            'id' : s.id,
            'avatar' : s.avatar,
            'name': s.name,
            'department': s.department,
            'position' : s.position,
            'email' : s.email,
            'action' : <a href={`/employee/${s.id}`}>Detail</a>,
          }
    })
 
      
    const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Employee ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
    ];
     
   
    return (
<>
<Table rowSelection={props.rowSelection} columns={columns} dataSource={firstSubArr} />
</>
    )
}


export default TableUser





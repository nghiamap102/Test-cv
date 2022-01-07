import { Popconfirm, Table } from "antd";
import { useState } from "react";








const TableUser = (props)=>{

    var firstSubArr = props.arrUser.map(function(s) {
        return {
            'key': s.id,
            'id' : s.id,
            'avatar' : s.avatar,
            'first_name': s.first_name,
            'last_name': s.last_name,
            'email' : s.email,
            'action' : <div>
                <button onClick={props.onClick} id={s.id} className="btn ant-btn-primary">Delete</button>
                <a href={`/user/${s.id}`} className="btn ant-btn-primary">Detail</a>
            </div>
          }
    })
 
      
    const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
    },
    {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
    },
    // { title: 'Action', dataIndex: '', key: 'x', render: () => <button onClick={props.onClick}>Delete</button> },
     
    ];
     
   
    return (
<>
<Table rowSelection={props.rowSelection} columns={columns} dataSource={firstSubArr} />
</>
    )
}


export default TableUser





import { Button, Col, Empty, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser, filterUser } from "../reducer/action";
import * as Type from '../reducer/constant'
import 'antd/dist/antd.css'
import { RestFilled, SearchOutlined } from '@ant-design/icons';
import $ from 'jquery'
import TableUser from "../component/Table";
import { toast, ToastContainer } from "react-toastify";
import ModalConfirm from "../component/modal";
import { CSVDownload, CSVLink } from "react-csv";


const { Option } = Select;


export default function HomePage(props){
    const history = useHistory()
    const [arrUserToDel , setArrUserToDel ]  = useState(null)
    const [defaultValue , setDefaultValue]  = useState('select column')

    const [arrID , setArrID] = useState(null)
    const {arrUser  ,loading ,error} = useSelector(state => state.HomeReducer)
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])


    const onFinish =(value)=>{
        dispatch({type : Type.FILTER_EMPLOY_BYNAME , first_name : value.first_name })
    }
   
    const handleChange = value =>{
        dispatch({type : Type.FILTER_EMPLOY_BYID , id : Number(value)  })
        console.log(value)
    } 

    const handleChangeEmail = value =>{
        dispatch({type : Type.FILTER_EMPLOY_BYEMAIL , email : value})
    }
    const handleDel = (value) =>{
        if(value == 1){
            console.log(value)
        }

        else if(value == 2){
            setIsModalVisible(true);
           
        }
       
    }
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
        //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        setArrUserToDel(selectedRows)
        }
    }
    const handleOk = () => {
        try{
            for(let  i=  0 ; i < arrUserToDel.length ; i ++){
                dispatch({type : Type.DEL_EMPLOY , id : arrUserToDel[i].id})
            }
        }catch(er){
            toast.warn('Chưa có gì để xóa!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setIsModalVisible(false);

    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onClick = (e) =>{
        dispatch({type : Type.DEL_EMPLOY , id :Number(e.target.id) })
    }

    var a = ''
    if(arrUserToDel !== null && arrUserToDel !== undefined){
        a = <CSVLink data={arrUserToDel}>Download me</CSVLink>
    }else{
        a =  <div>
            Có gì đâu mà download
        </div>
    }
    

 

    if(loading) return  <Empty/>
   
    if(error != null )return <div>ABc</div>
    if(arrUser  == undefined) return <Empty description="no user"/>

    return (
<>  
<div className="container">
<ToastContainer></ToastContainer>
<ModalConfirm isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} ></ModalConfirm>

<div>
   <Form name="filter" onFinish={onFinish}>
        <Form.Item name='first_name'>
            <div className="">
                <h3 className="">Search first name</h3>
                <Input placeholder="Search"></Input>
            </div>
        </Form.Item>
        <Select defaultValue="Chọn ID" style={{ width: 120 }} onChange={handleChange}>
            {arrUser.map((u) => (
            <Option key={u.id}>{u.id}</Option>
            ))}
        </Select>
        <Select defaultValue="Chọn email" style={{ width: 120 }} onChange={handleChangeEmail}>
            {arrUser.map((u) => (
            <Option key={u.email}>{u.email}</Option>
            ))}
        </Select>
        <Select defaultValue={defaultValue} style={{ width: 120 }} onChange={handleDel}>
            <Option key={1}>{a}
            </Option>
            <Option key={2}>Xóa
            </Option>
        </Select>
        <Form.Item>
            <Row justify='center'>
                <Button htmlType='submit' icon={<SearchOutlined />}>Search</Button>
            </Row>
        </Form.Item>
    </Form>
    <TableUser arrUser = {arrUser} onClick={onClick} rowSelection={rowSelection}/>
</div>
</div>

</>
    ) 
}










// const stateSelector = createSelector(makeSelector , (user) =>({user}))






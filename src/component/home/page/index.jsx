import { Button, Col, Empty, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUser } from "../reducer/action";
import * as Type from '../reducer/constant'
import TableUser from "../../../module/table/Table";
import { toast, ToastContainer } from "react-toastify";
import { SideBar } from "../../../module/sidebar/Sidebar";
import ModalConfirm from "../../../module/modal/Modal";
import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { CSVDownload, CSVLink } from "react-csv";
import { NavDropdown } from "react-bootstrap";

const { Option } = Select;


export default function HomePage(props){
    const [arrUserToDel , setArrUserToDel ]  = useState(null)
    const {arrUser ,arrDepartment,arrPosition ,loading ,error} = useSelector(state => state.HomeReducer)
    const dispatch = useDispatch()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [rowSelectionstate , setRowselection] = useState(null)



    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])

    const onClickSelectRow = ()=>{
        setRowselection(rowSelection)
    }

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
        //   console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        setArrUserToDel(selectedRows)
        }
    }

    const handleDel = ()=>{
        setIsModalVisible(true);
    }

    const handleOk = () => {
        try{
            for(let  i=  0 ; i < arrUserToDel.length ; i ++){
                dispatch({type : Type.DEL_EMPLOY , id : arrUserToDel[i].id})
            }
            setArrUserToDel(null)
            toast('succes')
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

    const handleDownload =()=>{
        toast.warn('k có gì để download')
    }

    // var a = <NavDropdown.Item> <div onClick={handleDownload}>
    //      Download employee
    // </div></NavDropdown.Item>

    var a = ''
    if(arrUserToDel !== null && arrUserToDel !== undefined){
        a= <div style={{padding  : '0.25rem 1rem'}}> 
            <CSVLink data={arrUserToDel} style={{textDecoration : 'none' , color:'black'}}>
            DownLoad CSV
        </CSVLink>
    </div>

    }else{
        a = <NavDropdown.Item> <div onClick={handleDownload}>
        Download employee
    </div></NavDropdown.Item>
    }

    if(loading) return  <Empty/>
    if(error != null )return <div>ABc</div>
    if(arrUser.length === 0 ) return  <Empty/>  


    return (
<>  
<ToastContainer/>
<ModalConfirm isModalVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} ></ModalConfirm>


<SideBar handleDel={handleDel} downloadItem={a} handleDownload={handleDownload} onClickSelectRow={onClickSelectRow}/>
<TableUser arrUser = {arrUser}  rowSelection={rowSelectionstate}/>

</>
    ) 
}










// const stateSelector = createSelector(makeSelector , (user) =>({user}))






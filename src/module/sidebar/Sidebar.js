
import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as Type from '../../component/home/reducer/constant'

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE

// STYLES
import "./sidebar.css";
import { Button, Empty, Form, Input, Row, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons/lib/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavDropdown } from "react-bootstrap";


const { Option } = Select;



export const SideBar =(props)=>{


    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const dispatch = useDispatch()

    const onFinish =(value)=>{
        dispatch({type : Type.FILTER_EMPLOY_BYNAME , name : value.name })
    }
    const {arrUser ,arrDepartment,arrPosition ,loading ,error} = useSelector(state => state.HomeReducer)


    const handleChangeID = value =>{
        dispatch({type : Type.FILTER_EMPLOY_BYID , id : Number(value)  })
    } 
    const handleChangePosition= value =>{
        dispatch({type : Type.FILTER_EMPLOY_BYPOSIION , position : value  })
    } 
    const handleChangeDepartment= value =>{
        dispatch({type : Type.FILTER_EMPLOY_BYDEPARTMENT , department : value  })
    } 



    return(
<>
<IconContext.Provider value={{ color: "#9b046db2" }}>
    {/* All the icons now are white */}
    <div className="navbar">
        <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div>
            NORTH STAR MOTORS 
            <span style={{verticalAlign: 'middle'}} className="material-icons-outlined">
            expand_more
            </span>
        </div>
        <div className="" style={{marginRight : '10px'}}>
            <span className="circle">
                NH
            </span>
            Nghia Hoang 
            <span style={{verticalAlign: 'middle'}} className="material-icons-outlined">
            expand_more
            </span>
        </div>
    </div>
    <div className="navbar" style={{backgroundColor : "#9b046db2" ,color :'white'}}>
        <div className="" style={{marginLeft  :'20px'}}>
            {/* Employee  */}
            <span style={{margin  :'20px'}}>{arrUser.length}</span>employees
        </div>
        <div className="" style={{marginRight : '20px',display: 'flex' ,alignItems : 'center'}}>
            <NavDropdown
            id="nav-dropdown-dark-example"
            title={ <span style={{color:'white'}} className="material-icons-outlined">
            filter_alt
            </span>}
            menuVariant="light"
            >
                <NavDropdown.Item onClick={props.onClickSelectRow}>Select Column</NavDropdown.Item>
                {props.downloadItem}
                <NavDropdown.Item onClick={props.handleDel}>Delete employee</NavDropdown.Item>
            </NavDropdown>
         
            <span className="material-icons-outlined">
            more_vert
            </span>
        </div>
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"} style={{zIndex : '999'}}>
        <ul className="nav-menu-items" >
            <li className="navbar-toggle" onClick={showSidebar}>
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
            <li className="item">
                <h4>Filters</h4>
            </li>
            <li className="item">
                <Form name="filter" onFinish={onFinish}>
                    <label>Name</label>
                    <Form.Item name='name'>
                        <Input placeholder="Search"></Input>
                    </Form.Item>
                
                    {/* <Form.Item>
                        <Row justify='center'>
                            <Button htmlType='submit' icon={<SearchOutlined style={{verticalAlign: 'top'}}/>} >Search</Button>
                        </Row>
                    </Form.Item> */}
                </Form>
            </li>
            <li className="item">
                <Form.Item >
                    <label>ID</label>
                    <Select defaultValue="ID" onChange={handleChangeID}>
                        {arrUser.map((u,index) => (
                        <Select.Option key={u.id} value={u.id}>{u.id}</Select.Option>
                        ))}
                    </Select>
                    
                </Form.Item>
            </li>
            <li className="item">
                <Form.Item >
                    <label>Position</label>
                    <Select defaultValue="Postion" onChange={handleChangePosition}>
                        {arrPosition.map((u,index) => (
                            <Select.Option key={u}>{u}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>    
            </li>
            <li className="item">
                <Form.Item >
                    <label>Department</label>
                    <Select defaultValue="Department" onChange={handleChangeDepartment}>
                        {arrDepartment.map((u,index) => (
                        <Select.Option key={u}>{u}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </li>
        </ul>
    </nav>

</IconContext.Provider>

</>
    )
}











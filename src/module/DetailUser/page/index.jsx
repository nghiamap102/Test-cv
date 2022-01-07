import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled  from "styled-components";
import { getUserById } from "../reducer/action";
import { Avatar, Card, Col, Divider, Empty, Input, Row, Select } from "antd";
import TableUserDetail from "../component/table";





export default function UserPage(props){

    const {userID}  = useParams()
    const {user , loading , err} = useSelector(state=> state.UserReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserById(userID))
    },[dispatch])

    console.log(loading, user )

    if(loading) return <Empty/>
    if(err != null ) return <div>ABc</div>
    if(user  == undefined) return <Empty description="no user"/>

    const style = { background: '#0092ff', padding: '8px 0' };
    return (
<>
<div className="container">
    <Row gutter={16}>
        <Col className="gutter-row" span={12}>
            <div className="site-card-border-less-wrapper">
                <Card title={`${user.first_name}${user.last_name}`} bordered={false} style={{ width: '100%' }}>
                    <Avatar src={user.avatar} style={{height : '120px' ,width : '120px'}}/>
                </Card>
            </div>
            <Row>
                <Col span={6}>
                    <h6>total inspection</h6>
                    <p>230</p>
                </Col>
                <Col span={6}>
                    <h6>Open issues</h6>
                        <p>230</p>
                    </Col>
                <Col span={6}>
                    <h6>Last login</h6>
                    <p></p>    
                </Col>
                <Col span={6}>
                    <h6>Site</h6>
                    <p>230</p>
                </Col>
            </Row>
        </Col>
        <Col className="gutter-row" span={12} >
            <div className="site-card-border-less-wrapper">
                <Card title='Detail' bordered={false} style={{ width: '100%' }}>
                    <Row>
                        <Col span={7}>
                            <Input value={user.first_name}></Input>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Input value={user.first_name}></Input>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Select defaultValue={user.email}></Select>
                        </Col>
                        <Divider></Divider>
                        <Col span={7}>
                            <Input value={user.first_name}></Input>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Input value={user.first_name}></Input>
                        </Col>
                        <Col span={1}></Col>
                        <Col span={7}>
                            <Select defaultValue={user.email}></Select>
                        </Col>
                    </Row>              
                </Card>
            </div>
           
        </Col>
    </Row>
   <TableUserDetail></TableUserDetail>
</div>
</>
    )
}













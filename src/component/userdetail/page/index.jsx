import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getListInspection, getUserById } from "../reducer/action";
import { Avatar, Button, Card, Col, Divider, Empty, Input, Row, Select } from "antd";
import { SideBar } from "../../../module/sidebar/Sidebar";
import TableUser from "../../../module/table/Table";
import styles from './index.module.scss'
import avatar from '../../../images/e42192b0682ede9d80d92260fb5e17cd.jpg'
import { Column } from "@ant-design/plots";
import Moment from "react-moment";


export default function UserPage(props){

    const {employeeID}  = useParams()
    const {user ,listInspection, loading , err} = useSelector(state=> state.UserReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserById(employeeID))
        dispatch(getListInspection())
    },[dispatch])


    if(loading || listInspection == null || user  == undefined) return <Empty/>
    if(err != null ) return <div>ABc</div>


    const data = [
        {
            type: 'Jan',
            sales: 6,
        },
        {
            type: 'Feb',
            sales: 12,
        },
        {
            type: 'Mar',
            sales: 10,
        },
        {
            type: 'Apr',
            sales: 15,
        },
        {
            type: 'May',
            sales: 5,
        },
        {
            type: 'Jun',
            sales: 3,
        },
       
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
            position: 'middle',
            style: {
            fill: '#FFFFFF',
            opacity: 0.6,
            },
        },
        xAxis: {
            label: {
            autoHide: true,
            autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: 'inspection',
            },
            sales: {
                alias: 'inspection',
            },
        },
    };
    var a  = <Column height={200} {...config}/>

    return (
<>
    <SideBar/>
    <div className="container">
        <div className="py-3">
            <Row gutter={16} style={{marginBottom : '15px'}}>
                <Col className="gutter-row" span={12}>
                    <div className={styles.detail} style={{height : '100%'}}>
                        <div className={styles.wrapper}>
                            <h4 className={styles.item}>Details</h4>
                           
                            <Row style={{marginBottom : '40px'}}>
                                <Col className="" span={8} >
                                    <p className={styles.p}>Employee Avatar</p>
                                    {/* <img src={user.avatar} alt=""/> */}
                                    <div className={styles.avatar_wrapper}>
                                        <div className={styles.img_wrapper}>
                                            <img src={avatar} alt="" className={styles.avatar}/>
                                        </div>
                                        <div className={styles.circle}>
                                            <span className={`material-icons-outlined ${styles.icon_plus}`}>
                                            add
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="" span={16} style={{paddingLeft : '15px'}}>
                                    <p className={styles.p}>Inspections Completed</p>
                                    {a}
                                </Col>
                            </Row>
                            <Row >
                               
                                <Col className="" span={6}>
                                    <p className={styles.p_}>Total inspection</p>
                                    <p className={styles.p}>230</p>
                                </Col>
                                <Col className="" span={6}>
                                    <p className={styles.p_}>Total inspection</p>
                                    <p className={styles.p}>230</p>
                                </Col>
                                <Col className="" span={6}>
                                    <p className={styles.p_}>Total inspection</p>
                                    <p className={styles.p}>230</p>
                                </Col>
                                <Col className="" span={6}>
                                    <p className={styles.p_}>Total inspection</p>
                                    <p className={styles.p}>230</p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={12} >
                    <div className={styles.detail}>
                        <div className={styles.wrapper}>
                            <h4 className={styles.item}>Details</h4>
                            <Row className="" style={{marginBottom :'25px' , justifyContent : 'space-between'}}>
                                <Col className="gutter-row" span={7}>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Department</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                              
                            </Row>
                            <Row className="" style={{marginBottom :'25px' , justifyContent : 'space-between'}}>
                                <Col className="gutter-row" span={7}>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={styles.detail}>
                        <div className={styles.wrapper}>
                            <h4 className={styles.item}>Credentials</h4>
                            <Row className="" style={{display : 'flex' , justifyContent :'space-between'}}>
                                <Col className="gutter-row" span={7}>
                                    <div>
                                        <h6 className={styles.h5}>Portal and ChekMate</h6>
                                    </div>
                                </Col>
                                <Col></Col>
                                <Col className="gutter-row" span={7}>
                                    <div>
                                        <h6 className={styles.h5}>ChekRite Application</h6>
                                    </div>
                                </Col>
                           </Row>
                            <Row className="" style={{marginBottom :'25px' , justifyContent : 'space-between'}}>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Department</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                              
                            </Row>
                            <Row className="" style={{marginBottom :'25px' , justifyContent : 'space-between'}}>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <label  className={styles.label}>Position</label>
                                    <Input value={user.name} className={styles.input}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                
            </Row>          
            <Row>
                <Col className="gutter-row"  span={24} >
                    <div className={styles.detail}>
                        <div className={styles.wrapper}>
                            <h4 className={styles.item}>Details</h4>
                            <div className="">
                                <div style={{textAlign : 'left'}}>
                                    <Button type="button" className={styles.button}>Primary Button</Button>
                                    <Button type="button" className={`${styles.inactive} ${styles.button}`}>Primary Button</Button>
                                </div>
                                <table className="table">
                                    <thead>
                                        <tr className="text-start">
                                            <th>#</th>
                                            <th>CheckList</th>
                                            <th>Date</th>
                                            <th>Duration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listInspection.map((u,index)=>
                                            <tr key={index} className="text-start">
                                                <td>{u.PN}</td>
                                                <td>{u.checklist}</td>
                                                <td><Moment format="ddd DD-MMM-YYYY, hh:mm A" date={u.date} /></td>
                                                <td><Moment date={u.duration} fromNow/></td>
                                            </tr>
                                        )}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Col>  
            </Row>
                   
        </div>
    </div>
</>
    )
}













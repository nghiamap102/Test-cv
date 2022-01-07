import { Button, Col, Empty, Form, Input, Modal, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Type from '../reducer/constant'
import 'antd/dist/antd.css'


const { Option } = Select;


export default function ModalConfirm(props){

  

  return (
    <>
    
      <Modal title="Basic Modal" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
        <p>Do you want to remove it?</p>
      </Modal>
    </>
  ); 
}










// const stateSelector = createSelector(makeSelector , (user) =>({user}))






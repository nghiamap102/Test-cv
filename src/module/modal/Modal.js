import { Modal} from "antd";



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






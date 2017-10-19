import React, { Component } from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';
import CampusForm from '../containers/CampusForm';

class ModalForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  render() {

    const { header, Form, type } = this.props; 
    console.log("MODALS");
    console.log(this.props);


    const iconType = type === 'edit' ? 
          <Icon onClick={this.openModal} style={buttonStyle} name='edit' /> :
          <Icon onClick={this.openModal} name='add circle' size='big' style={buttonStyle}/>
    return(
      <Modal 
        open={this.state.modalOpen}
        trigger={iconType}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        <Form closeModal={this.closeModal} {...this.props}/>
      </Modal.Content>
    </Modal>
    )
  }
}

export default ModalForm;

const buttonStyle = {
      float: 'right'
    }

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
    return(
      <Modal 
        open={this.state.modalOpen}
        trigger={<Icon onClick={this.openModal} name='add circle' size='big' style={buttonStyle}/>}>
      <Modal.Header>Add a campus</Modal.Header>
      <Modal.Content image>
       
        <CampusForm closeModal={this.closeModal}/>

      </Modal.Content>
    </Modal>
    )
  }
}

export default ModalForm;

const buttonStyle = {
      float: 'right'
    }

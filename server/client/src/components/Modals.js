import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';

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
    const iconType = type === 'edit' ? 
          <Icon onClick={this.openModal} style={{float: 'right'}} name='edit' /> :
          <Icon onClick={this.openModal} name='add circle' size='big' style={{float: 'right'}}/>
    return(
      <Modal 
        open={this.state.modalOpen}
        trigger={iconType}
        closeIcon
        >
      <Modal.Header>{header}</Modal.Header>
      <Modal.Content image>
        <Form closeModal={this.closeModal} {...this.props}/>
      </Modal.Content>
    </Modal>
    )
  }
}

export default ModalForm;

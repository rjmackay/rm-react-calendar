import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import categories from '../categories';


export const CategoryModal = (props) => {
  return <Modal isOpen={props.isOpen} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>This date is a...</ModalHeader>
    <ModalBody>
      <Form>
      { Object.keys(categories).map(category => (
        <FormGroup key={category} check>
          <Label check>
            <Input type="radio" name="radio-category" value={category} onChange={props.onChange} checked={props.currentCategory === category} />
            { category !== '' ? category : 'None' }
          </Label>
        </FormGroup>
      ))}
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={props.toggle}>Done</Button>
    </ModalFooter>
  </Modal>
}

export const EmptyDay = (props) => {
  return <td className="bg-light"></td>
}

export class NormalDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      category: this.props.category || ''
    };

    this.toggle = this.toggle.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  toggle(event) {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  changeCategory(event) {
    this.setState({
      category: event.target.value
    });
  }

  render() {
    return <td className={categories[this.state.category]}>
      <a onClick={this.toggle} >{this.props.date}</a>
      <CategoryModal toggle={this.toggle} onChange={this.changeCategory} isOpen={this.state.modalOpen} currentCategory={this.state.category} />
    </td>
  }
}

class Day extends Component {
  render() {
    if (this.props.date) {
      return <NormalDay {...this.props} />
    } else {
      return <EmptyDay {...this.props} />
    }
  }
}

export default Day;

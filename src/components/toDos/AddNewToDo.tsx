import React from 'react';
import { Button, InputGroup, FormControl, Modal } from 'react-bootstrap';
import Description from './Description';
import Switch from 'react-switch';

interface Props {
  getToDo: (nameToDo: string, descriptionToDo: string | null) => void;
  onButtonClose: () => void;
}

export default class AddNewToDo extends React.Component<Props> {
  state = {
    showDescription: false,
    nameToDo: '',
    descriptionToDo: '',
  };

  toggleChange = () => {
    this.setState({ showDescription: !this.state.showDescription });
  };

  handleGetToDo = () => {
    this.props.getToDo(
      this.state.nameToDo,
      this.state.showDescription ? this.state.descriptionToDo : null
    );
    this.props.onButtonClose();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    return (
      <div className='addNewToDo'>
        <Modal.Dialog>
          <div className='toDoModalForm'>
            <Modal.Header>
              <Modal.Title>Create a new To Do</Modal.Title>
            </Modal.Header>

            <div className='toDoForm'>
              <InputGroup className='mb-3'>
                <InputGroup.Prepend>
                  <InputGroup.Text id='inputGroup-sizing-default'>
                    Name of To Do:
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.handleChange}
                  name='nameToDo'
                  aria-label='Write your To Do...'
                  aria-describedby='inputGroup-sizing-default'
                />
              </InputGroup>

              {this.state.showDescription ? (
                <Description handleChange={this.handleChange} />
              ) : null}

              <div className='switch'>
                <Switch
                  className='toDoFormCheck'
                  name='description'
                  checked={this.state.showDescription}
                  onChange={this.toggleChange}
                />
                <div>Show description</div>
              </div>
            </div>

            <Modal.Footer>
              <Button variant='secondary' onClick={this.props.onButtonClose}>
                Close
              </Button>
              <Button variant='primary' onClick={this.handleGetToDo}>
                Save To Do
              </Button>
            </Modal.Footer>
          </div>
        </Modal.Dialog>

        <div className='opacityDiv'></div>
      </div>
    );
  }
}

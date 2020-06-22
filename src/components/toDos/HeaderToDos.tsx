import React from 'react';
import {
  Button,
  ButtonGroup,
  ToggleButton,
  FormControl,
  Form,
} from 'react-bootstrap';

interface Props {
  allToDoList: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showDone: (event: React.MouseEvent<HTMLButtonElement>) => void;
  showImportant: (event: React.MouseEvent<HTMLButtonElement>) => void;
  returnToDoList: (event: React.MouseEvent<HTMLButtonElement>) => void;
  searchTitle: (value: string) => void;
}

export default class HeaderToDos extends React.Component<Props> {
  state = {
    value: '',
  };

  handleSearchTitle = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.props.searchTitle(this.state.value);
    this.setState({ value: '' });
  };

  onChangeInput = (event: { currentTarget: { value: string } }) => {
    this.setState({ value: event.currentTarget.value });
  };

  render() {
    return (
      <div className='headerToDos'>
        <div>
          <Button variant='primary' disabled>
            Filter:
          </Button>{' '}
          <ButtonGroup toggle>
            <ToggleButton
              type='radio'
              name='radio'
              value='1'
              onClick={this.props.allToDoList}
            >
              All
            </ToggleButton>
            <ToggleButton
              type='radio'
              name='radio'
              value='2'
              onClick={this.props.showDone}
            >
              Done
            </ToggleButton>
            <ToggleButton
              type='radio'
              name='radio'
              value='3'
              onClick={this.props.showImportant}
            >
              Important
            </ToggleButton>
          </ButtonGroup>
        </div>
        <Form inline className='search'>
          <FormControl
            type='text'
            placeholder='Search...'
            className=' mr-sm-2'
            onChange={this.onChangeInput}
            value={this.state.value}
          />
          <Button type='submit' onClick={this.handleSearchTitle}>
            Search
          </Button>
          <Button
            variant='dark'
            className='reset'
            onClick={this.props.returnToDoList}
          >
            Reset
          </Button>{' '}
        </Form>
      </div>
    );
  }
}

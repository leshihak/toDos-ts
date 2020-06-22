import React from 'react';
import { Form, Button } from 'react-bootstrap';

const validEmailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6})$/;

export default class SignUpForm extends React.Component {
  state = {
    nameValue: '',
    surnameValue: '',
    passwordValue: '',
    emailValue: '',
    errors: {
      email: '',
      password: '',
    },
    sendData: {
      email: '',
      password: '',
      name: '',
      surname: '',
    },
  };

  handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    let errors = this.state.errors;

    switch (name) {
      case 'emailValue':
        errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
        break;
      case 'passwordValue':
        errors.password =
          value.length > 6 ? '' : 'Password must be 6 characters long!';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { emailValue, passwordValue, nameValue, surnameValue } = this.state;
    this.setState({
      passwordValue: '',
      emailValue: '',
      nameValue: '',
      surnameValue: '',
      errors: {
        email: '',
        password: '',
      },
      sendData: {
        email: emailValue,
        password: passwordValue,
        name: nameValue,
        surname: surnameValue,
      },
    });
  };

  render() {
    const {
      nameValue,
      surnameValue,
      passwordValue,
      emailValue,
      errors,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className='widthInput'>
          <Form.Label>Your name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            value={nameValue}
            name='nameValue'
            onChange={this.handleChangeValue}
            className='border-success'
            required
          />
        </Form.Group>
        <Form.Group className='widthInput'>
          <Form.Label>Your surname</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your surname'
            value={surnameValue}
            name='surnameValue'
            onChange={this.handleChangeValue}
            className='border-success'
            required
          />
        </Form.Group>
        <Form.Group className='widthInput'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email'
            value={emailValue}
            name='emailValue'
            onChange={this.handleChangeValue}
            className={
              errors.email.length !== 0 ? 'border-danger' : 'border-success'
            }
            required
          />
          <br />
          {errors.email.length > 0 && (
            <div className='error'>{errors.email}</div>
          )}
        </Form.Group>
        <Form.Group className='widthInput'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={passwordValue}
            name='passwordValue'
            onChange={this.handleChangeValue}
            className={
              errors.password.length !== 0 ? 'border-danger' : 'border-success'
            }
            required
          />
          <br />
          {errors.password.length > 0 && (
            <div className='error'>{errors.password}</div>
          )}
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

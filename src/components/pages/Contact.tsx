import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from 'mdbreact';
import SimpleMap from './SimpleMap';

export default class Contact extends React.Component {
  state = {
    nameValue: '',
    emailValue: '',
    subjectValue: '',
    messageValue: '',
    sendData: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  };

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const { nameValue, emailValue, subjectValue, messageValue } = this.state;
    this.setState({
      nameValue: '',
      emailValue: '',
      subjectValue: '',
      messageValue: '',
      sendData: {
        name: nameValue,
        email: emailValue,
        subject: subjectValue,
        message: messageValue,
      },
    });
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    const { nameValue, emailValue, subjectValue, messageValue } = this.state;

    return (
      <MDBContainer>
        <p className='text-center w-responsive mx-auto pb-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow>
          <MDBCol md='9' className='md-0 mb-5'>
            <form onSubmit={this.handleSubmit}>
              <MDBRow>
                <MDBCol md='6'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='text'
                      name='nameValue'
                      value={nameValue}
                      required
                      label='Your name'
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
                <MDBCol md='6'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='email'
                      name='emailValue'
                      value={emailValue}
                      required
                      label='Your email'
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='text'
                      name='subjectValue'
                      value={subjectValue}
                      required
                      label='Subject'
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className='md-form mb-0'>
                    <MDBInput
                      type='textarea'
                      name='messageValue'
                      value={messageValue}
                      label='Your message'
                      required
                      onChange={this.handleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <div className='text-center text-md-left'>
                <MDBBtn color='primary' size='sm' type='submit'>
                  Send
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md='3' className='text-center'>
            <ul className='list-unstyled mb-0'>
              <li>
                <MDBIcon
                  icon='map-marker-alt'
                  size='2x'
                  className='blue-text'
                />
                <p>Lviv, Ukraine</p>
              </li>
              <li>
                <MDBIcon icon='phone' size='2x' className='blue-text mt-4' />
                <p>+38 095 336 18 89</p>
              </li>
              <li>
                <MDBIcon icon='envelope' size='2x' className='blue-text mt-4' />
                <p>nat.leshchak@gmail.com</p>
              </li>
              <li>
                <img
                  className='contactImg'
                  src='https://sun9-41.userapi.com/c844216/v844216274/14370d/NbMkBefAG1U.jpg'
                  alt=''
                />
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <SimpleMap />
      </MDBContainer>
    );
  }
}

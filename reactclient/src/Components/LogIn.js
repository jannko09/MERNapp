import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Row, Col, Container } from 'react-bootstrap'

export default class LogIn extends Component {

  state = { email: "", password: "" }

  handleInputChange = (e) => {
    const { value, name} = e.target;
    this.setState({
      [name]: value
    })
  }


  onSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:8080/api/authenticate', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {'Content-Type': 'Application/json'}
    })
    .then (res =>{
      if (res.status === 200) {
        return res.json();
        //this.props.history.push('/');
      }else{
        const error = new Error(res.error);  
        throw error;
      }
    }).then(json=>{
      console.dir(json);
      sessionStorage.token=json.token;
      this.props.history.push('/home');
    })
    // .catch(err => {
    //   console.error(err);
    //   alert('Wrong password or username or user or service. Please be patient...')
    // })
     //alert('Authenticating...')
  }

  render() {
    return (
      <div>
        <Container>
          <h2>Login Below!</h2>
          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col>
                <Form.Control type="email" name="email" placeholder="Enter your Email" value={this.state.email} onChange={this.handleInputChange} required />
              </Col>
              <Col>
                <Form.Control type="password" name="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleInputChange} required/>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Button type="submit" variant="primary" value="Submit">Login</Button>
              </Col>
            </Row>
          </Form>
          <br></br>
          <p>Want to sign up?</p>
          <a href="/signup">Sign up</a>
        </Container>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Form, Row, Col, Container } from 'react-bootstrap'

export default class LogIn extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>Placeholder for SIGNUP</h1>
          <Form action="/signup" method="POST">
            <Row>
              <Col>
                <Form.Control placeholder="Username" name="username" />
              </Col>
              <Col>
                <Form.Control placeholder="Password" name="password" />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <Button type="submit" variant="primary">Sign Up</Button>
              </Col>
            </Row>
          </Form>
          <br></br>
          <p>Do you already have an account?</p>
          <a href="/">Log In</a>


        </div>
      </Container>

    )
  }
}

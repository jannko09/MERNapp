import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class SubjectForm extends Component {

  state = { id: "", kommentti: "", created_at:""}
  handleNewComment = (e) => {
  
    const newValue = e.target.value;
    this.setState({ kommentti: newValue, created_at: Date.now() });
  }
  handleCreateClick = (e) => {
    e.preventDefault();
    this.props.sendComment(this.state);
    console.log(this.state)
    this.setState({ id: "", kommentti: "", created_at: "" })
  }
  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group>
                <Form.Control as="textarea" rows="3" type="text" placeholder="Insert your comment here..." value={this.state.kommentti} onChange={this.handleNewComment} required="required"></Form.Control>
                {console.log(this.state.created_at)}
                {console.log(this.state.kommentti)}
                <br/>
                <Button variant="primary" value="Lähetä" onClick={this.handleCreateClick}>Send</Button>
            </Form.Group>
          </Form>
        </Container>

      </div>
    )
  }
}

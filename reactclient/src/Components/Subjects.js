import React, { Component } from 'react'
import Subject from './Subject'
import { Table, Container, Row, Col } from 'react-bootstrap'


export default class Subjects extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
        active: false,
    };

    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState({
        active: !this.state.active
    });
}
  render() {
    let displayData = this.props.comment.map((value) => {
      return <Subject comment={value} created_at={value.created_at} key={value.created_at}></Subject>    
    })
    return (
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div onClick={this.handleClick}>Hows your day going?</div>
            </Col>
          </Row>
        </Container>
        <Container>
        {this.state.active &&<Table className="tab" striped bordered hover variant="dark" size="m">
            <thead>
              <tr>
                <th>Comment</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
            {displayData}
            </tbody>
          </Table>}
        </Container>

      </div>

    )
  }
}

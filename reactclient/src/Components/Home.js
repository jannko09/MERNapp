import React, { Component } from 'react'
import getComments from '../serviceclient';
import { createComment } from '../serviceclient';
import Subjects from './Subjects';
import SubjectForm from './SubjectForm';
import { Container } from 'react-bootstrap';
import Navibar from './Navibar';
import NewsClient from '../NewsClient'

export default class Home extends Component {
  state = { data: [], comment: "", }

  componentDidMount() {
    this.update();
  }

  newComment = (comment) => {
    createComment(comment).then(data =>{
      this.setState({ comment: data })
      this.update();
    });
  }
  update() {
    getComments(myJson =>
      this.setState({ data: myJson }))
  }

  render() {
    const subjects = this.state.data;
    // console.log(subjects)

    return (
      <div className="Home">
      <Navibar />
      
        <Container>
          <h2>Welcome to Acme message board.
          </h2>
        </Container>
        <Subjects comment={subjects} />
        <SubjectForm sendComment={this.newComment} />
        <NewsClient />
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import logo1 from '../logo1.svg'
import logo2 from '../logo2.svg'
import logo3 from '../logo3.svg'

export default class Contact extends Component {
  render() {
    return (
      <Container>
        <div>
          <h2>Acme Company, Contact information</h2>
          <p><span><img src={logo2} className="App-logo" alt="logo" width="64" /></span>Maria</p>
          <p>050-1234567, maria@malli.fi</p>
          <hr></hr>

          <p><span><img src={logo1} className="App-logo" alt="logo"  width="64"/></span>Janne</p>
          <p>050-1234567, janne@malli.fi</p>
          <hr></hr>
          <p><span><img src={logo3} className="App-logo" alt="logo" width="64" /></span>Mikko</p>
          <p>050-1234567, mikko@malli.fi</p>
          <hr></hr>


        </div>
      </Container>


    )
  }
}

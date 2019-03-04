import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Container} from 'react-bootstrap';
import WeatherClient from '../WeatherClient'

export default class Navibar extends Component {
  state = {username: " "}

  logout() {
    //localStorage.token.clear();
    window.location.href = '/logout';
}

  render() {
    return (
      // <div id="navbar">
      //   <NavLink to='/' activeClassName="active">Etusivu</NavLink>
      //   <NavLink to='yhteystiedot' activeClassName="active">Yhteystiedot</NavLink>
      // </div>

      <Navbar bg="dark" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><WeatherClient />
          </Navbar.Brand>
          <Navbar.Brand href="/home">Subjects</Navbar.Brand>
          <Navbar.Brand href="/contact">Contact</Navbar.Brand>
          <Navbar.Brand href="/logout" onSubmit={this.logout} >Log Out
          </Navbar.Brand>
        </Container >
        {/* <Navbar.Toggle /> */}
        {/* <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Anna Malli</a>
            </Navbar.Text>
          </Navbar.Collapse> */}
      </Navbar>

    )
  }
}

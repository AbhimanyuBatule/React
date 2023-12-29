import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class NavBar extends Component {
  static propTypes = {};

  render() {
    const subCategoryStyle = { color: '#dde' };

    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">NewsMonkey</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/general" style={subCategoryStyle}>
                General
              </Nav.Link>
              <Nav.Link href="/business" style={subCategoryStyle}>
                Business
              </Nav.Link>
              <Nav.Link href="/health" style={subCategoryStyle}>
                Health
              </Nav.Link>
              <Nav.Link href="/entertainment" style={subCategoryStyle}>
                Entertainment
              </Nav.Link>
              <Nav.Link href="/sports" style={subCategoryStyle}>
                Sports
              </Nav.Link>
              <Nav.Link href="/technology" style={subCategoryStyle}>
                Technology
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;

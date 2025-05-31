import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export default function MyNavbar() {
  return (
    <Navbar bg="black" expand="lg" sticky="top" className="shadow-sm">
      <Navbar.Brand as={Link} to="/" className="d-flex justify-content-center align-items-center">
        MyPortfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link"   
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link"   
          >
            My Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link"   
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link"   
          >
            Contact
          </ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

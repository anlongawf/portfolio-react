import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function MyNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollOrNavigate = (targetId) => (e) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/?scrollTo=${targetId}`);
    } else {
      scroller.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  };

  const handleComingSoon = (e) => {
    e.preventDefault();
    alert("The 'Story' function has been updated, please come back later!");
  };

  return (
    <Navbar bg="black" expand="lg" sticky="top" className="shadow-sm">
      <Navbar.Brand as={Link} to="/" className="d-flex justify-content-center align-items-center text-white">
        Ans's Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" onClick={scrollOrNavigate('home')} className="text-white">
            Home
          </Nav.Link>
          <Nav.Link href="#skills" onClick={scrollOrNavigate('skills')} className="text-white">
            My Skills
          </Nav.Link>
          <Nav.Link href="#projects" onClick={scrollOrNavigate('projects')} className="text-white">
            Projects
          </Nav.Link>
          <Nav.Link href="#stories" onClick={handleComingSoon} className="text-white">
            Stories
          </Nav.Link>
          <Nav.Link href="#contact" onClick={scrollOrNavigate('contact')} className="text-white">
            Contact
          </Nav.Link>
          <Link to="/donate" className="nav-link text-white">Donate</Link>
          <Link to="/review" className="nav-link text-white">Reviews</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

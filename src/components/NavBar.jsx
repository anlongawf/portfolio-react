import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollOrNavigate = (targetId) => (e) => {
    // Đóng menu sau khi click (mobile)
    setExpanded(false);
    
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
    setExpanded(false); // Đóng menu
    alert("The 'Story' function has been updated, please come back later!");
  };

  const handleLinkClick = () => {
    setExpanded(false); // Đóng menu khi click vào link
  };

  return (
    <Navbar 
      bg="black" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm px-3"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Navbar.Brand 
        as={Link} 
        to="/" 
        className="d-flex align-items-center text-white fw-bold fs-4"
        onClick={handleLinkClick}
        style={{ textDecoration: 'none' }}
      >
        <span className="me-2">💼</span>
        Ans's Portfolio
      </Navbar.Brand>
      
      {/* Custom toggle button với icon sáng hơn */}
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav"
        className="border-0 p-1"
        style={{ 
          backgroundColor: 'transparent',
          boxShadow: 'none',
          outline: 'none'
        }}
      >
        <span 
          className={`navbar-toggler-icon ${expanded ? 'open' : ''}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.9%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='m4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`,
            filter: 'brightness(1.2) contrast(1.1)'
          }}
        />
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link 
            href="#home" 
            onClick={scrollOrNavigate('home')} 
            className="text-white nav-link-hover px-3"
          >
            <span className="me-1">🏠</span>
            Home
          </Nav.Link>
          
          <Nav.Link 
            href="#skills" 
            onClick={scrollOrNavigate('skills')} 
            className="text-white nav-link-hover px-3"
          >
            <span className="me-1">🚀</span>
            My Skills
          </Nav.Link>
          
          <Nav.Link 
            href="#projects" 
            onClick={scrollOrNavigate('projects')} 
            className="text-white nav-link-hover px-3"
          >
            <span className="me-1">💻</span>
            Projects
          </Nav.Link>
          
          <Nav.Link 
            href="#stories" 
            onClick={handleComingSoon} 
            className="text-white nav-link-hover px-3"
          >
            <span className="me-1">📖</span>
            Stories
          </Nav.Link>
          
          <Nav.Link 
            href="#contact" 
            onClick={scrollOrNavigate('contact')} 
            className="text-white nav-link-hover px-3"
          >
            <span className="me-1">📧</span>
            Contact
          </Nav.Link>
          
          <Link 
            to="/donate" 
            className="nav-link text-white nav-link-hover px-3"
            onClick={handleLinkClick}
          >
            <span className="me-1">💝</span>
            Donate
          </Link>
          
          <Link 
            to="/review" 
            className="nav-link text-white nav-link-hover px-3"
            onClick={handleLinkClick}
          >
            <span className="me-1">⭐</span>
            Reviews
          </Link>
        </Nav>
      </Navbar.Collapse>

      {/* Custom CSS cho hover effects */}
      <style jsx>{`
        .nav-link-hover {
          transition: all 0.3s ease;
          border-radius: 8px;
          position: relative;
        }
        
        .nav-link-hover:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff !important;
          transform: translateY(-1px);
        }
        
        .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        .navbar-toggler-icon.open {
          transform: rotate(90deg);
          transition: transform 0.3s ease;
        }
        
        @media (max-width: 991.98px) {
          .navbar-collapse {
            background-color: rgba(0, 0, 0, 0.95);
            border-radius: 10px;
            margin-top: 10px;
            padding: 15px;
            backdrop-filter: blur(10px);
          }
          
          .nav-link-hover {
            margin: 5px 0;
            padding: 10px 15px !important;
          }
        }
        
        .navbar-brand:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </Navbar>
  );
}
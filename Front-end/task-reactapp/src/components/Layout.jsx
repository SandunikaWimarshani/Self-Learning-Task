import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import background from '../assets/Images/background.jpg';

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ background: 'linear-gradient(45deg, #ff6b6b, #3a1c71)' }} variant="dark" fixed="top">
        <Container>
          <Navbar.Brand style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>User Registration System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/all-user" style={{ color: 'white', marginRight: '1rem' }}>View User List</Nav.Link>
              <Nav.Link as={Link} to="/add-user" style={{ color: 'white', marginRight: '1rem' }}>Add User </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ background: isHomePage ? `url(${background}) no-repeat center center fixed` : 'linear-gradient(45deg, #ff6b6b, #3a1c71)', paddingTop: '56px', minHeight: '100vh', position: 'relative', backgroundSize: isHomePage ? 'cover' : 'auto' }}>
        {isHomePage && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '8px' }}>
            <h3>Welcome to the User Registration System</h3>
          </div>
        )}
        <Container style={{ position: 'relative', zIndex: 1 }}>
          <div>
            {children}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Layout;

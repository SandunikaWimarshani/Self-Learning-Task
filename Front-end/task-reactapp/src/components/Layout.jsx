import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>User Registration System</Navbar.Brand>
    </Navbar>
    <Container>{children}</Container>
    
    </>
  )
}

export default Layout
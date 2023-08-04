import React from 'react';
import { Container, Form, Nav, NavDropdown, Navbar, Button } from 'react-bootstrap';
import cart from '../../Images/cart.png'
import logo5 from '../../Images/logo5.png'
const NavBar = () => {
    return (
         <Navbar bg="light" expand="lg">
      <Container>
                <Navbar.Brand >
                    <a href='/'>
              <img src={logo5} className='logo' />
                 <span className='YUMMY'>YummY!</span>
              
                       
                    </a>
                </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/" className='fw-bold' style={{color:'#f6edd8' }}>Home</Nav.Link>
            <Nav.Link href="/login" className='fw-bold' style={{color:'#b0664d' }}>Login</Nav.Link>
            <Nav.Link href="/products" className='fw-bold' style={{ color: '#b0664d' }}>Categories</Nav.Link>
            <Nav.Link href="/cart"> <img src={cart} className="login-img" /></Nav.Link>
           
            </Nav>
             
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn-new'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;

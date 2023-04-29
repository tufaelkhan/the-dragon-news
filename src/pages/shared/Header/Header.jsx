import React from 'react';
import logo from '../../../../src/assets/logo.png'
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import { Container, Nav,Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className='text-center'>
            <img src={logo} alt="" />
            <p className='text-secondary'>Jurnalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex'>
            <Button variant="danger">latest</Button>{' '}
            <Marquee speed={100} className='text-danger'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="secondary">Login</Button>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;
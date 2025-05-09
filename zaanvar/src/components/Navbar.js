import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb"; 
import "./Navbar.css";
import "./Breadcrumb.css";

const Header = () => {
  const breadcrumbItems = ["Adoption", "Home", "My posts"]; 

  return (
    <div>
      <Navbar expand="lg" className="py-3 custom-navbar" bg="white">
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/your-logo-path/logo.png"
              alt="Zaanvar Logo"
              height="45"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="gap-4 fw-semibold">
              <Nav.Link href="#home" className="text-dark">Home</Nav.Link>
              <Nav.Link href="#services" className="text-dark">Services</Nav.Link>
              <Nav.Link href="#book" className="text-dark">Book a Vet</Nav.Link>
              <Nav.Link href="#shop" className="text-dark">Shopping</Nav.Link>
              <Nav.Link href="#about" className="text-dark">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Button variant="outline-info" className="rounded-pill fw-bold px-4 custom-login-btn">
            LOG IN
          </Button>
        </Container>
      </Navbar>

     
      <Container>
        <Breadcrumb items={breadcrumbItems} />
      </Container>
    </div>
  );
};

export default Header;
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function NavBar(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="p-0 m-0" href="/dashboard">
          <Image
            src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
            width={70}
            height={50}
          ></Image>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end pr-4"></Navbar.Collapse>
        <div>
          <Button href="/" variant="danger">
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

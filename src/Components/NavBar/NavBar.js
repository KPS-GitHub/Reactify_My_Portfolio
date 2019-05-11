import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  var whiteText = {
    color: "white"
  }

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#about" style={whiteText}>About</Nav.Link>
          <Nav.Link href="#portfolio" style={whiteText}>Portfolio</Nav.Link>
          <Nav.Link href="#contact" style={whiteText}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavBar() {
  var whiteText = {
    color: "white"
  }

  // replace this with an image file or text that will be consistent across fonts (ex: "l" could be a line, loop, etc; that's bad)
  var logoText = "l<"

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="#home"><b>{logoText}</b>ennanSmith.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#about" style={whiteText}>About</Nav.Link>
          <Nav.Link href="#portfolio" style={whiteText}>Portfolio</Nav.Link>
          <Nav.Link href="#contact" style={whiteText}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

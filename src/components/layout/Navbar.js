import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand>
          {/* <img src={logo} width="40px" height="40px" />  */}
          <NavLink className="p-3 navbar-link" to={"/"}>
            Restaurant
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className=" border-1"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" justify-content-end"
        >
          <Nav className=" float-end">
            <ul className=" d-sm-flex  ">
              <li>
                <NavLink className="p-3 navbar-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 navbar-link" to={"/products"}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 navbar-link" to={"/about"}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="p-3 navbar-link" to={"/contact"}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

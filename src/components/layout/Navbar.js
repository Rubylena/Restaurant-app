import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
import cupicon from './icons/icon.png'

const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand>
          <img
            // src="https://www.transparentpng.com/thumb/drink/5GybSc-drink-photos.png"
            src = {cupicon}
            width="40px"
            height="40px"
            alt="Logo"
          />
          <NavLink className="py-3 navbar-link" to={"/"} style={{fontFamily: 'PoppinsMeduim, sans-serif'}}>
            La Dope Delish
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
          <Nav className=" text-center pt-1">
            <ul className=" d-md-flex  " style={{fontFamily: 'PoppinsMeduim, sans-serif'}}>
              <li className="pt-2">
                <NavLink className="p-3 navbar-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="pt-2">
                <NavLink className="p-3 navbar-link" to={"/products"}>
                  Products
                </NavLink>
              </li>
              <li className="pt-2">
                <NavLink className="p-3 navbar-link" to={"/about"}>
                  About Us
                </NavLink>
              </li>
              <li className="pt-2">
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

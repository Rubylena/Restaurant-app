import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          {/* <img src={logo} width="40px" height="40px" /> */}
          <NavLink className="p-2 navbar-link" to={"/"}>
            Restaurant
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse className=" justify-content-end">
          <div className=" d-flex flex-row ">
            <NavLink className="p-2 navbar-link" to={"/"}>
              Home
            </NavLink>
            <NavLink className="p-2 navbar-link" to={"/products"}>
              Products
            </NavLink>
            <NavLink className="p-2 navbar-link" to={"/about"}>
              About Us
            </NavLink>
            <NavLink className="p-2 navbar-link" to={"/contact"}>
              Contact Us
            </NavLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;

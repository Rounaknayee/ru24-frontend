import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    {/* Only render Profile tab if user is logged in */}
    <AuthenticatedProfileNav />
    <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
    >
      External API
    </Nav.Link>
  </Nav>
);

const AuthenticatedProfileNav = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Nav.Link
      as={RouterNavLink}
      to="/shop"
      exact
      activeClassName="router-link-exact-active"
    >
      Shop
    </Nav.Link>
  ) : null;
};

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;

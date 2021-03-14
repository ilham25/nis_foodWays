import { useContext, useState, useEffect } from "react";
import { Nav, Navbar, Button, Container, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

// SVGs
import brandLogo from "../assets/svg/brand.svg";

import { UserContext } from "../contexts/userContext";

import ProfileButton from "./ProfileButton";
import NavButton from "./NavButton";

export default function Header({ handleShowLogin, handleShowRegister }) {
  const LOCAL_KEY = "ways-food-user";

  const { state: userState, dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const getUser = localStorage.getItem(`${LOCAL_KEY}-login`);
    if (getUser) {
      userDispatch({
        type: "LOGIN",
        payload: JSON.parse(getUser),
      });
    }
  }, []);

  return (
    <Navbar bg="warning" variant="light">
      <Container fluid className="px-3">
        <Navbar.Brand as={Link} to="/" className="brand-text font-weight-bold">
          <img src={brandLogo} alt="brandLogo" height="40" className="ml-2" />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>

        {userState.isLogin ? (
          <ProfileButton />
        ) : (
          <NavButton
            handleShowLogin={handleShowLogin}
            handleShowRegister={handleShowRegister}
          />
        )}
      </Container>
    </Navbar>
  );
}

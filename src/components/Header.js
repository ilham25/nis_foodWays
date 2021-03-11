import { Nav, Navbar, Button, Container, Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
// SVGs
import brandLogo from "../assets/svg/brand.svg";
import iconProfile from "../assets/svg/profile.svg";
import iconAddProduct from "../assets/svg/addproduct.svg";
import iconLogout from "../assets/svg/logout.svg";
import iconCart from "../assets/svg/cart.svg";

// img
import imgProfile from "../assets/img/profile.png";
import bensu from "../assets/img/restaurant/bensu.png";

import { isLogin, logout } from "../utils/auth";

export default function Header({
  handleShowLogin,
  handleShowRegister,
  isUser,
  cartCounter,
  checkLogin,
  setCheckLogin,
}) {
  const history = useHistory();

  const currentUser = JSON.parse(localStorage.getItem("ways-food-user-login"));

  const [cek, setCek] = useState("njir");
  const handleNavButton = () => {
    return (
      <>
        <Button variant="brown mr-2 px-4 py-1" onClick={handleShowLogin}>
          Login
        </Button>
        <Button variant="brown px-4 py-1" onClick={handleShowRegister}>
          Register
        </Button>
      </>
    );
  };

  useEffect(() => {
    console.log("header state");
  });

  const handleLogout = () => {
    setCek("oawkeok");
    logout();
    setCheckLogin(isLogin());
    history.push("/");
  };
  const handleProfileButton = () => {
    return (
      <>
        <Link to="/cart">
          <div style={{ width: "40px", height: "40px", position: "relative" }}>
            {cartCounter > 0 && (
              <div
                className="cart-badge"
                style={{
                  width: "15px",
                  height: "15px",
                  position: "absolute",
                  right: "0px",
                  top: "8px",
                  borderRadius: "10px",
                }}
                className="bg-danger d-flex align-item-center justify-content-center"
              >
                <small
                  style={{
                    fontSize: "12px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {cartCounter}
                </small>
              </div>
            )}
            <img src={iconCart} alt="cart" width="40" />
          </div>
        </Link>
        <Dropdown className="ml-2">
          <Dropdown.Toggle
            variant="warning"
            style={{
              backgroundColor: "transparent",
              border: "none",
              outlineWidth: "0px",
            }}
          >
            <img
              src={currentUser.userrole == 1 ? bensu : imgProfile}
              alt="photo"
              width="64"
              height="64"
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{ position: "absolute", left: "-100px", fontSize: "1.2em" }}
          >
            <Dropdown.Item as={Link} to="/profile" className="py-2">
              <img src={iconProfile} alt="icon" width="30" className="mr-2" />{" "}
              Profile
            </Dropdown.Item>
            {currentUser.userrole == 1 && (
              <Dropdown.Item as={Link} to="/add" className="py-2">
                <img
                  src={iconAddProduct}
                  alt="add product icon"
                  width="30"
                  className="mr-2"
                />{" "}
                Add Product
              </Dropdown.Item>
            )}
            <Dropdown.Divider />
            <Dropdown.Item href="#!" onClick={handleLogout} className="py-2">
              <img
                src={iconLogout}
                alt="logout icon"
                className="mr-2"
                width="30"
                style={{ objectFit: "cover" }}
              />{" "}
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };
  return (
    <Navbar bg="warning" variant="light">
      <Container fluid className="px-3">
        <Navbar.Brand as={Link} to="/" className="brand-text font-weight-bold">
          <img src={brandLogo} alt="brandLogo" height="40" className="ml-2" />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>

        {checkLogin ? handleProfileButton() : handleNavButton()}
      </Container>
    </Navbar>
  );
}

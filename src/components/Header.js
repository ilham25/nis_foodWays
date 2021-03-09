import { Nav, Navbar, Button, Container, Dropdown } from "react-bootstrap";
// SVGs
import deliverer from "../assets/svg/deliver.svg";
import iconProfile from "../assets/svg/profile.svg";
import iconAddProduct from "../assets/svg/addproduct.svg";
import iconLogout from "../assets/svg/logout.svg";
import iconCart from "../assets/svg/cart.svg";

// img
import imgProfile from "../assets/img/profile.png";

export default function Header({
  handleShowLogin,
  handleShowRegister,
  isLogin,
  isUser,
  cartCounter,
  setIsLogin,
  setFakeRoute,
}) {
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

  const handleProfileButton = () => {
    const handleLogout = () => {
      setIsLogin(false);
    };

    const handleCart = () => {
      setFakeRoute("cart");
    };
    return (
      <>
        <a href="#!" onClick={handleCart}>
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
        </a>
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
              src={imgProfile}
              alt="photo"
              width="60"
              style={{ border: "4px solid black", borderRadius: "50%" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ position: "absolute", left: "-50px" }}>
            <Dropdown.Item href="#!">
              <img src={iconProfile} alt="profile icon" width="20" /> Profile
            </Dropdown.Item>
            {!isUser && (
              <Dropdown.Item href="#!">
                <img src={iconAddProduct} alt="profile icon" width="20" /> Add
                Product
              </Dropdown.Item>
            )}
            <Dropdown.Divider />
            <Dropdown.Item href="#!" onClick={handleLogout}>
              <img src={iconLogout} alt="profile icon" width="20" /> Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  };
  return (
    <Navbar bg="warning" variant="light">
      <Container fluid className="px-3">
        <Navbar.Brand href="/" className="brand-text mr-2 font-weight-bold">
          WaysFood
        </Navbar.Brand>
        <img src={deliverer} alt="deliverer" width="40" />
        <Nav className="mr-auto"></Nav>

        {isLogin ? handleProfileButton() : handleNavButton()}
      </Container>
    </Navbar>
  );
}

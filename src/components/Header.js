import { Nav, Navbar, Button, Container } from "react-bootstrap";
import deliverer from "../assets/svg/deliver.svg";
export default function Header({
  handleShowLogin,
  handleShowRegister,
  isLogin,
}) {
  const handleNavButton = () => {
    return (
      <>
        <Button variant="secondary mr-2 px-4 py-1" onClick={handleShowLogin}>
          Login
        </Button>
        <Button variant="secondary px-4 py-1" onClick={handleShowRegister}>
          Register
        </Button>
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
        {isLogin ? <p>login</p> : handleNavButton()}
      </Container>
    </Navbar>
  );
}

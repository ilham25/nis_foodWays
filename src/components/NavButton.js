import { Button } from "react-bootstrap";

const NavButton = ({ handleShowLogin, handleShowRegister }) => {
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

export default NavButton;

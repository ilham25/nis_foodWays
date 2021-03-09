import { Button } from "react-bootstrap";
import { useState } from "react";

import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
function App() {
  // Login modal stuff
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  // Register modal stuff
  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <>
      <Button variant="primary" onClick={handleShowLogin}>
        Login
      </Button>
      <Button variant="success" onClick={handleShowRegister}>
        Register
      </Button>
      <LoginModal
        handleCloseLogin={handleCloseLogin}
        showLogin={showLogin}
        handleShowRegister={handleShowRegister}
      />
      <RegisterModal
        handleCloseRegister={handleCloseRegister}
        showRegister={showRegister}
      />
    </>
  );
}

export default App;

import { Button } from "react-bootstrap";
import { useState } from "react";

import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";

function App() {
  // isLogin
  const [isLogin, setIsLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);
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
      <Header
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
        isLogin={isLogin}
        isUser={isUser}
      />
      <LandingPage handleShowLogin={handleShowLogin} isLogin={isLogin} />
      <LoginModal
        handleCloseLogin={handleCloseLogin}
        handleShowRegister={handleShowRegister}
        showLogin={showLogin}
      />
      <RegisterModal
        handleCloseRegister={handleCloseRegister}
        handleShowLogin={handleShowLogin}
        showRegister={showRegister}
      />
    </>
  );
}

export default App;

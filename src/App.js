import { Button } from "react-bootstrap";
import { useState } from "react";

import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";
import DetailProductPage from "./components/pages/DetailProductPage";
import CartPage from "./components/pages/CartPage";

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

  // Cart stuff
  const [cartCounter, setCartCounter] = useState(0);

  // Fake router
  const [fakeRoute, setFakeRoute] = useState("landing");
  const fakeRouter = () => {
    switch (fakeRoute) {
      case "landing":
        return (
          <LandingPage
            handleShowLogin={handleShowLogin}
            isLogin={isLogin}
            setFakeRoute={setFakeRoute}
          />
        );
        break;
      case "detail":
        return (
          <DetailProductPage
            setCartCounter={setCartCounter}
            cartCounter={cartCounter}
          />
        );
        break;
      case "cart":
        return <CartPage />;
        break;
      default:
        return (
          <LandingPage
            handleShowLogin={handleShowLogin}
            isLogin={isLogin}
            setFakeRoute={setFakeRoute}
          />
        );
        break;
    }
  };

  return (
    <>
      <Header
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
        isLogin={isLogin}
        isUser={isUser}
        cartCounter={cartCounter}
        setIsLogin={setIsLogin}
        setFakeRoute={setFakeRoute}
      />
      {fakeRouter()}
      <LoginModal
        handleCloseLogin={handleCloseLogin}
        handleShowRegister={handleShowRegister}
        showLogin={showLogin}
        setIsLogin={setIsLogin}
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

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";
import DetailProductPage from "./components/pages/DetailProductPage";
import CartPage from "./components/pages/CartPage";
import ProfilePage from "./components/pages/ProfilePage";

function App() {
  // isLogin
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

  return (
    <Router>
      <Header
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
        isUser={isUser}
        cartCounter={cartCounter}
      />
      <Switch>
        <Route exact path="/">
          <LandingPage handleShowLogin={handleShowLogin} />
        </Route>
        <Route exact path="/detail/:id">
          <DetailProductPage
            setCartCounter={setCartCounter}
            cartCounter={cartCounter}
          />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
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
    </Router>
  );
}

export default App;

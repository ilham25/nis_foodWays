import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginModal from "./components/Modal/LoginModal";
import RegisterModal from "./components/Modal/RegisterModal";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/Header";
import DetailProductPage from "./components/pages/DetailProductPage";
import CartPage from "./components/pages/CartPage";
import ProfilePage from "./components/pages/ProfilePage";
import AddProductPage from "./components/pages/AddProductPage";
import IncomePage from "./components/pages/IncomePage";
import EditProfilePage from "./components/pages/EditProfilePage";

import { isLogin } from "./utils/auth";

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

  // Fake login
  const [checkLogin, setCheckLogin] = useState(isLogin());

  useEffect(() => {
    console.log("app state");
  });
  return (
    <Router>
      <Header
        handleShowLogin={handleShowLogin}
        handleShowRegister={handleShowRegister}
        isUser={isUser}
        cartCounter={cartCounter}
        checkLogin={checkLogin}
        setCheckLogin={setCheckLogin}
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

        <Route exact path="/profile/edit">
          <EditProfilePage />
        </Route>
        <Route exact path="/add">
          <AddProductPage />
        </Route>
        <Route exact path="/income">
          <IncomePage />
        </Route>
      </Switch>
      <LoginModal
        handleCloseLogin={handleCloseLogin}
        handleShowRegister={handleShowRegister}
        showLogin={showLogin}
        setCheckLogin={setCheckLogin}
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

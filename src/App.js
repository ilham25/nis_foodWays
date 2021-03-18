import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// State Management
import { UserContextProvider } from "./contexts/userContext";
import { CartContextProvider } from "./contexts/cartContext";

// Components
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";
import LandingPage from "./components/pages/LandingPage";
import Header from "./components/reusable/Header";
import DetailProductPage from "./components/pages/DetailProductPage";
import CartPage from "./components/pages/CartPage";
import ProfilePage from "./components/pages/ProfilePage";
import AddProductPage from "./components/pages/AddProductPage";
import IncomePage from "./components/pages/IncomePage";
import EditProfilePage from "./components/pages/EditProfilePage";
import PrivateRoute from "./components/routes/PrivateRoute";

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
    <CartContextProvider>
      <UserContextProvider>
        <Router>
          <Header
            handleShowLogin={handleShowLogin}
            handleShowRegister={handleShowRegister}
          />
          <Switch>
            <Route exact path="/">
              <LandingPage handleShowLogin={handleShowLogin} />
            </Route>
            <Route exact path="/detail/:id">
              <DetailProductPage />
            </Route>
            <PrivateRoute exact path="/cart" component={CartPage} />

            <PrivateRoute exact path="/profile" component={ProfilePage} />

            <PrivateRoute
              exact
              path="/profile/edit"
              component={EditProfilePage}
            />

            <PrivateRoute exact path="/add" component={AddProductPage} />

            <PrivateRoute exact path="/income" component={IncomePage} />
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
      </UserContextProvider>
    </CartContextProvider>
  );
}

export default App;

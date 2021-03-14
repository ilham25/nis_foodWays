import { useContext, useState, useEffect } from "react";

import { Dropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

//SVGs
import iconProfile from "../assets/svg/profile.svg";
import iconAddProduct from "../assets/svg/addproduct.svg";
import iconLogout from "../assets/svg/logout.svg";
import iconCart from "../assets/svg/cart.svg";

// img
import imgProfile from "../assets/img/profile.png";
import bensu from "../assets/img/restaurant/bensu.png";

const ProfileButton = () => {
  const history = useHistory();

  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

  const handleLogout = () => {
    cartDispatch({
      type: "EMPTY_CART",
    });
    userDispatch({
      type: "LOGOUT",
    });

    history.push("/");
  };

  return (
    <>
      <Link to={userState.loggedUser.userrole == 1 ? "/income" : "/cart"}>
        <div style={{ width: "40px", height: "40px", position: "relative" }}>
          {cartState.carts.length > 0 && (
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
                {cartState.carts.length}
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
            outline: "none",
            boxShadow: "none",
          }}
        >
          <img
            src={userState.loggedUser.userrole == 1 ? bensu : imgProfile}
            alt="photo"
            width="64"
            height="64"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{
            position: "absolute",
            left: userState.loggedUser.userrole == 1 ? "-100px" : "-50px",
            fontSize: "1.2em",
          }}
        >
          <Dropdown.Item as={Link} to="/profile" className="py-2">
            <img src={iconProfile} alt="icon" width="30" className="mr-2" />{" "}
            Profile
          </Dropdown.Item>
          {userState.loggedUser.userrole == 1 && (
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

export default ProfileButton;

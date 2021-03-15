import { useContext } from "react";

import { Container, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// State Management
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

export default function PopularCard({ data, handleShowLogin }) {
  const history = useHistory();
  const { id, logo, title } = data;
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const handleClick = () => {
    if (userState.isLogin) {
      if (cartState.carts.length == 0) {
        cartDispatch({
          type: "CURRENT_RESTAURANT",
          payload: {
            id,
            title,
          },
        });
        history.push(`/detail/${id}`);
      } else {
        if (
          cartState.carts.length == 0 &&
          cartState.currentRestaurant !== null
        ) {
          cartDispatch({
            type: "CURRENT_RESTAURANT",
            payload: {
              id,
              title,
            },
          });
          history.push(`/detail/${id}`);
        } else {
          if (cartState.currentRestaurant.title === title) {
            cartDispatch({
              type: "CURRENT_RESTAURANT",
              payload: {
                id,
                title,
              },
            });
            history.push(`/detail/${id}`);
          } else {
            alert("oaewkok");
          }
        }
      }
    } else {
      handleShowLogin();
    }
  };
  return (
    <Col xs={12} md={6} lg={3} className="mb-3">
      <Container>
        <Row
          className="bg-white py-3"
          style={{ borderRadius: 5, cursor: "pointer" }}
          onClick={handleClick}
        >
          <Col xs={3} className="text-center">
            <img
              src={logo}
              style={{ width: "65px", height: "65px", objectFit: "cover" }}
              alt={title}
            />
          </Col>
          <Col xs={9} className="my-auto text-center">
            <h3 className="heading my-0 font-weight-bold">{title}</h3>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

import { useContext } from "react";

import { Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// State Management
import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

export default function RestaurantCard({ handleShowLogin, data }) {
  const history = useHistory();
  const { id, title, range, photo } = data;
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  const handleClick = () => {
    /**
     * NOTE!!
     * List Pengecekan :
     * 1. Belum login > tampilkan modal login > (RESTRICTED)
     * 2. Sudah Login > jumlah cart = 0 > masuk > (ACCEPTED)
     * 3. Sudah Login > jumlah cart = 0 dan nama restaurant tidak kosong > masuk > (ACCEPTED)
     * 4. Sudah Login > jumlah cart != 0 (berisi), tapi restaurant pilihan sama > masuk > (ACCEPTED)
     * 5. Diluar kondisi diatas > tolak > tampilkan modal tidak bisa masuk ke restaurant lain sebelum cart kosong > (RESTRICTED)
     */

    if (userState.isLogin) {
      if (cartState.carts.length == 0) {
        cartDispatch({
          type: "CURRENT_RESTAURANT",
          payload: title,
        });
        history.push(`/detail/${id}`);
      } else {
        if (
          cartState.carts.length == 0 &&
          cartState.currentRestaurant !== null
        ) {
          cartDispatch({
            type: "CURRENT_RESTAURANT",
            payload: title,
          });
          history.push(`/detail/${id}`);
        } else {
          if (cartState.currentRestaurant === title) {
            cartDispatch({
              type: "CURRENT_RESTAURANT",
              payload: title,
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
    <Col xs={12} md={6} lg={3} className="mb-4">
      <Card style={{ border: "none", cursor: "pointer" }} onClick={handleClick}>
        <Card.Img
          variant="top"
          src={photo}
          height="134"
          className="p-2"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="heading font-weight-bolder">
            {title}
          </Card.Title>
          <Card.Text className="heading">{range} KM</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

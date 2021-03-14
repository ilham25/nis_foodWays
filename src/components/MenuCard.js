import { useContext } from "react";

import { Col, Card, Button } from "react-bootstrap";

// State Management
import { CartContext } from "../contexts/cartContext";

export default function MenuCard({ data }) {
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

  const { title, price, photo } = data;
  const handleOrder = () => {
    cartDispatch({
      type: "ADD_CART",
      payload: data,
    });
  };
  return (
    <Col xs={12} md={4} lg={3} className="mb-4">
      <Card style={{ border: "none" }}>
        <Card.Img
          variant="top"
          src={photo}
          height="134"
          className="p-2"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title
            className="heading font-weight-bolder"
            style={{ height: "40px" }}
          >
            {title}
          </Card.Title>
          <Card.Text className="heading text-danger">
            Rp. {price.toLocaleString()}
          </Card.Text>
          <Button
            variant="warning"
            size="sm"
            className="w-100"
            onClick={handleOrder}
          >
            Order
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

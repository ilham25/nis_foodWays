import { Col, Card, Button } from "react-bootstrap";

export default function MenuCard({
  title,
  price,
  photo,
  setCartCounter,
  cartCounter,
}) {
  const handleOrder = () => {
    setCartCounter(cartCounter + 1);
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
          <Card.Text className="heading text-danger">Rp. {price}</Card.Text>
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

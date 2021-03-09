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
    <Col md={3} className="mb-4">
      <Card style={{ border: "none" }}>
        <Card.Img variant="top" src={photo} height="134" className="p-2" />
        <Card.Body>
          <Card.Title className="heading font-weight-bolder">
            {title}
          </Card.Title>
          <Card.Text className="heading text-danger">Rp. {price}</Card.Text>
          <Button
            variant="brown"
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

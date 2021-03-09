import { Col, Card } from "react-bootstrap";

export default function RestaurantCard({
  handleShowLogin,
  isLogin,
  title,
  range,
  photo,
}) {
  const handleClick = () => {
    if (isLogin) {
      alert("login");
    } else {
      handleShowLogin();
    }
  };
  return (
    <Col md={3}>
      <a
        href="#!"
        style={{ textDecoration: "none", color: "black" }}
        onClick={handleClick}
      >
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={photo} height="134" />
          <Card.Body>
            <Card.Title className="heading font-weight-bolder">
              {title}
            </Card.Title>
            <Card.Text className="heading">{range}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </Col>
  );
}

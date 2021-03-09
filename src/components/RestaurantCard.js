import { Col, Card } from "react-bootstrap";

export default function RestaurantCard({
  handleShowLogin,
  isLogin,
  title,
  range,
  photo,
  setFakeRoute,
}) {
  const handleClick = () => {
    if (isLogin) {
      // alert("login");
      setFakeRoute("detail");
    } else {
      handleShowLogin();
    }
  };
  return (
    <Col md={3} className="mb-4">
      <a
        href="#!"
        style={{ textDecoration: "none", color: "black" }}
        onClick={handleClick}
      >
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={photo} height="134" className="p-2" />
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

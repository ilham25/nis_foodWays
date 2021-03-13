import { useContext } from "react";

import { Col, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { UserContext } from "../contexts/userContext";

export default function RestaurantCard({
  handleShowLogin,
  id,
  title,
  range,
  photo,
}) {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const handleClick = () => {
    if (state.isLogin) {
      // alert("login");
      history.push(`/detail/${id}`);
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

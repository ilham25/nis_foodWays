import { useContext } from "react";

import { useHistory } from "react-router-dom";

import { Container, Col, Row } from "react-bootstrap";

import { UserContext } from "../contexts/userContext";

export default function PopularCard({ id, logo, title, handleShowLogin }) {
  const history = useHistory();
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const handleClick = () => {
    if (userState.isLogin) {
      // alert("login");
      history.push(`/detail/${id}`);
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

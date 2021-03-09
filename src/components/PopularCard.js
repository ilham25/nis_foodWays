import { Container, Col, Row } from "react-bootstrap";

export default function PopularCard({ logo, title }) {
  return (
    <Col md={3}>
      <Container>
        <Row className="bg-white py-3" style={{ borderRadius: 5 }}>
          <Col md={3}>
            <img src={logo} alt="burger king" width="65" />
          </Col>
          <Col md={9} className="my-auto text-center">
            <h3 className="heading my-0 font-weight-bold">{title}</h3>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

import { Container, Col, Row } from "react-bootstrap";

export default function PopularCard({ logo, title }) {
  return (
    <Col xs={12} md={6} lg={3} className="mb-3">
      <Container>
        <Row className="bg-white py-3" style={{ borderRadius: 5 }}>
          <Col xs={3} className="text-center">
            <img src={logo} alt="burger king" />
          </Col>
          <Col xs={9} className="my-auto text-center">
            <h3 className="heading my-0 font-weight-bold">{title}</h3>
          </Col>
        </Row>
      </Container>
    </Col>
  );
}

import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

export default function CartPage() {
  return (
    <div className="bg-grey py-5">
      <Container>
        <Row className="mb-4">
          <h1 className="heading font-weight-bold">Geprek Bensu</h1>
        </Row>
        <Row>
          <h5 className="text-brown font-weight-normal">Deliver Location</h5>
        </Row>
        <Row className="mb-4">
          <Col md={8} className="pl-0">
            <InputGroup>
              <FormControl value="Harbour Building" size="lg" />
            </InputGroup>
          </Col>
          <Col md={4}>
            <Button variant="brown" className="w-100" size="lg">
              Select On Map
            </Button>
          </Col>
        </Row>
        <Row>
          <h5 className="text-brown font-weight-normal">Deliver Location</h5>
        </Row>
        <Row>
          <Col md={7} className="pl-0">
            <hr className="divider" />

            <hr className="divider" />
          </Col>
          <Col md={5}>
            <hr className="divider" />
            <Row>
              <Col md={6}>
                <p>Subtotal</p>
              </Col>
              <Col md={6}>
                <p className="text-right text-danger">Rp. 35.000</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>Qty</p>
              </Col>
              <Col md={6}>
                <p className="text-right">2</p>
              </Col>
            </Row>
            <Row className="pb-0">
              <Col md={6}>
                <p className="mb-0">Ongkir</p>
              </Col>
              <Col md={6}>
                <p className="text-right text-danger mb-0">Rp. 10.000</p>
              </Col>
            </Row>
            <hr className="divider" />
            <Row className="pb-0">
              <Col md={6}>
                <p className="mb-0 text-danger font-weight-bold">Total</p>
              </Col>
              <Col md={6}>
                <p className="text-right text-danger font-weight-bold mb-0">
                  Rp. 45.000
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

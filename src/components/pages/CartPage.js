import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { useState, useRef, useEffect } from "react";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
import CartOrder from "../CartOrder";

import geprek1 from "../../assets/img/restaurant/bensu.png";
import geprek2 from "../../assets/img/menu/geprek2.png";

import iconMap from "../../assets/svg/map.svg";

export default function CartPage() {
  const dummyOrder = [
    {
      id: 1,
      title: "Paket Geprek",
      price: "15.000",
      photo: geprek1,
    },
    {
      id: 2,
      title: "Paket Geprek Keju",
      price: "20.000",
      photo: geprek2,
    },
  ];

  // Modal Handler
  const [show, setShow] = useState(false);
  const handleMapClose = () => setShow(false);
  const handleMapShow = () => setShow(true);

  const [quantity, setQuantity] = useState(0);

  // Mapbox
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const mapContainer = useRef(null);
  mapboxgl.accessToken =
    "pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yNWdmeGsxOTRtMm9wNDc5NTkwMjI1In0.jWvuSHLeb9ANACprq2cwwg";

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);

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
            <Button
              variant="brown"
              className="w-100"
              size="lg"
              onClick={handleMapShow}
            >
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

            {dummyOrder.map((order) => (
              <CartOrder
                photo={order.photo}
                title={order.title}
                price={order.price}
                key={order.id}
              />
            ))}
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
                <p className="text-right">{quantity}</p>
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
            <Row className="mt-5">
              <Col className="text-right mt-5">
                <Button variant="brown" className="px-5">
                  See How Far ?
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleMapClose} size="lg">
        <Modal.Body>
          <div className="map-container" ref={mapContainer}></div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

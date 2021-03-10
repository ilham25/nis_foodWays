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
import { useHistory } from "react-router-dom";
import { isLogin } from "../../utils/auth";

import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";

import CartOrder from "../CartOrder";

import geprek1 from "../../assets/img/restaurant/bensu.png";
import geprek2 from "../../assets/img/menu/geprek2.png";

import iconMap from "../../assets/svg/map.svg";

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWxoYW0yNSIsImEiOiJja20yczc0dm0zOWczMndwMzVmdmJ1bjI4In0.1l2Zgxjy5R0iW2SlySO_fQ";

function MapRender() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    return () => map.remove();
  }, []);
  return <div className="map-container" ref={mapContainer}></div>;
}

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

  const history = useHistory();
  if (!isLogin()) {
    history.push("/");
    return null;
  }

  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <h1 className="heading font-weight-bold">Geprek Bensu</h1>
        </Row>
        <Row>
          <h5 className="text-brown font-weight-normal">Deliver Location</h5>
        </Row>
        <Row className="mb-4">
          <Col md={9} className="pl-0">
            <InputGroup>
              <FormControl
                value="Harbour Building"
                size="lg"
                style={{ fontSize: "0.9em" }}
              />
            </InputGroup>
          </Col>
          <Col md={3}>
            <Button
              variant="brown"
              className="w-100"
              size="lg"
              onClick={handleMapShow}
            >
              Select On Map
              <img src={iconMap} alt="map icon" className="ml-2" />
            </Button>
          </Col>
        </Row>
        <Row>
          <h5 className="text-brown font-weight-normal">Review your order</h5>
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
              <Col className="text-right mt-5 pl-5">
                <Button variant="brown" className="w-75">
                  See How Far ?
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleMapClose} size="lg">
        <Modal.Body style={{ position: "relative" }}>
          <MapRender />
          <div
            style={{
              width: "500px",
              height: "300px",
              position: "absolute",
              left: "50%",
              bottom: "0",
              backgroundColor: "white",
              transform: "translateX(-50%)",
            }}
          ></div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

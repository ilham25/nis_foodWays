import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { isLogin } from "../../utils/auth";

import CartOrder from "../CartOrder";

import geprek1 from "../../assets/img/restaurant/bensu.png";
import geprek2 from "../../assets/img/menu/geprek2.png";

import iconMap from "../../assets/svg/map.svg";
import iconMapPointer from "../../assets/svg/map-pointer.svg";

import MapModal from "../Modal/MapModal";

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

  // Modal Handler
  const [showDelivery, setShowDelivery] = useState(false);
  const handleMapDeliveryClose = () => setShowDelivery(false);
  const handleMapDeliveryShow = () => setShowDelivery(true);

  const [quantity, setQuantity] = useState(0);

  const [isFinished, setIsFinished] = useState(true);

  const history = useHistory();
  if (!isLogin()) {
    history.push("/");
    return null;
  }

  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <Col sm={12}>
            <h1 className="heading font-weight-bold">Geprek Bensu</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h5 className="text-brown font-weight-normal">Deliver Location</h5>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col sm={12} lg={9} className="mb-2">
            <InputGroup>
              <FormControl
                value="Harbour Building"
                size="lg"
                style={{ fontSize: "0.9em" }}
              />
            </InputGroup>
          </Col>
          <Col sm={12} lg={3}>
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
          <Col sm={12}>
            <h5 className="text-brown font-weight-normal">Review your order</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={7}>
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
          <Col lg={5}>
            <hr className="divider d-none d-lg-block" />
            <Row>
              <Col xs={6} lg={6}>
                <p>Subtotal</p>
              </Col>
              <Col xs={6} lg={6}>
                <p className="text-right text-danger">Rp. 35.000</p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} lg={6}>
                <p>Qty</p>
              </Col>
              <Col xs={6} lg={6}>
                <p className="text-right">{quantity}</p>
              </Col>
            </Row>
            <Row className="pb-0">
              <Col xs={6} lg={6}>
                <p className="mb-0">Ongkir</p>
              </Col>
              <Col xs={6} lg={6}>
                <p className="text-right text-danger mb-0">Rp. 10.000</p>
              </Col>
            </Row>
            <hr className="divider" />
            <Row className="pb-0">
              <Col xs={6} lg={6}>
                <p className="mb-0 text-danger font-weight-bold">Total</p>
              </Col>
              <Col xs={6} lg={6}>
                <p className="text-right text-danger font-weight-bold mb-0">
                  Rp. 45.000
                </p>
              </Col>
            </Row>
            <Row className="mt-5 justify-content-end">
              <Col sm={8} className="text-right mt-5">
                <Button
                  variant="brown"
                  className="w-100 "
                  onClick={handleMapDeliveryShow}
                >
                  Order
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <MapModal show={show} handleMapClose={handleMapClose}>
        <div
          className="shadow p-3 overflow-auto"
          style={{
            width: "400px",
            height: "200px",
            position: "absolute",
            left: "50%",
            bottom: "0",
            backgroundColor: "white",
            transform: "translateX(-50%)",
            borderRadius: "5px",
          }}
        >
          <Row className="mb-2">
            <Col>
              <h5 className="font-weight-bold mb-0">
                Select delivery location
              </h5>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={2}>
              <img src={iconMapPointer} alt="map pointer" width="55" />
            </Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <small className="font-weight-bold">Harbour Building</small>
                </Col>

                <Col lg={12} style={{ lineHeight: "1" }}>
                  <small className="text-sm">
                    Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
                    Selatan, Banten 15413, Indonesia
                  </small>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="brown" className="w-100">
                Confirm Location
              </Button>
            </Col>
          </Row>
        </div>
      </MapModal>
      <MapModal show={showDelivery} handleMapClose={handleMapDeliveryClose}>
        <div
          className="shadow p-3 overflow-auto"
          style={{
            width: "500px",
            height: "350px",
            position: "absolute",
            right: "30px",
            top: "30px",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        >
          <Row className="mb-4">
            <Col>
              <h5 className="font-weight-bold mb-0">
                Waiting for the transaction to be approved
              </h5>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col lg={2}>
              <img src={iconMapPointer} alt="map pointer" width="55" />
            </Col>
            <Col lg={10}>
              <Row>
                <Col lg={12}>
                  <small className="font-weight-bold">Harbour Building</small>
                </Col>

                <Col lg={12} style={{ lineHeight: "1" }}>
                  <small className="text-sm">
                    Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota Tangerang
                    Selatan, Banten 15413, Indonesia
                  </small>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="mb-4">
              <h5 className="font-weight-bold mb-0">Delivery Time</h5>
            </Col>
            <Col>
              <p>10 - 15 minutes</p>
            </Col>
          </Row>
          {isFinished && (
            <Row className="mt-4">
              <Col lg={12}>
                <Button variant="brown" className="w-100">
                  Finished Order
                </Button>
              </Col>
            </Row>
          )}
        </div>
      </MapModal>
    </div>
  );
}

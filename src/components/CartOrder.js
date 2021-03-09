import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import iconRemove from "../assets/svg/remove.svg";

export default function CartOrder({ photo, title, price }) {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <Row>
      <Col>
        <Row>
          <Col md={2}>
            <img
              src={photo}
              alt="order 1"
              style={{
                width: "80px",
                height: "80px",
                backgroundSize: "cover",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Col>
          <Col md={10} className="pl-0 py-2">
            <Row>
              <Col md={6}>
                <p className="heading font-weight-bold">{title}</p>
              </Col>
              <Col md={6}>
                <p className="text-danger text-right">Rp. {price}</p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="d-flex align-items-center ">
                <Button
                  variant="light"
                  className="font-weight-bold h3 mb-0 text-brown"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={handleDecrement}
                >
                  -
                </Button>
                <p
                  className="mb-0 px-3 mx-2"
                  style={{
                    backgroundColor: "#F6E6DA",
                    borderRadius: "5px",
                  }}
                >
                  {counter}
                </p>
                <Button
                  variant="light"
                  className="font-weight-bold h3 mb-0 text-brown"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={handleIncrement}
                >
                  +
                </Button>
              </Col>
              <Col md={6} className="text-right my-auto">
                <a href="#!">
                  <img src={iconRemove} alt="remove icon" height="20" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className="divider" />
      </Col>
    </Row>
  );
}

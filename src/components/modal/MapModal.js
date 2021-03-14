import { useState, useEffect, useContext } from "react";
import { Modal, Col, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import iconMapPointer from "../../assets/svg/map-pointer.svg";

import MapRender from "../MapRender";

import { CartContext } from "../../contexts/cartContext";
function MapModal({ show, handleMapClose, from, data }) {
  const history = useHistory();
  const [isFinished, setIsFinished] = useState(false);
  const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

  const renderDialog = () => {
    switch (from) {
      case "delivery":
        return (
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
                      Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota
                      Tangerang Selatan, Banten 15413, Indonesia
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
        );
        break;
      case "order":
        return (
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
                      Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota
                      Tangerang Selatan, Banten 15413, Indonesia
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
                  <Button
                    variant="brown"
                    className="w-100"
                    onClick={handleFinished}
                  >
                    Finished Order
                  </Button>
                </Col>
              </Row>
            )}
          </div>
        );
        break;
      case "user":
        return (
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
                <h5 className="font-weight-bold mb-0">Select my location</h5>
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
                      Jl. Elang IV No.48, Sawah Lama, Kec. Ciputat, Kota
                      Tangerang Selatan, Banten 15413, Indonesia
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
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    from === "order" &&
      setTimeout(() => {
        setIsFinished(true);
      }, 5000);
  }, []);

  const handleFinished = () => {
    cartDispatch({
      type: "ADD_TRANSACTION",
      payload: data,
    });
    cartDispatch({
      type: "EMPTY_CART",
    });
    history.push("/");
    handleMapClose();
  };
  return (
    <Modal show={show} dialogClassName="custom-modal" onHide={handleMapClose}>
      <Modal.Body style={{ position: "relative" }}>
        <MapRender />
        {renderDialog()}
      </Modal.Body>
    </Modal>
  );
}

export default MapModal;

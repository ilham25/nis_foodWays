import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import iconMap from "../../assets/svg/map.svg";
import iconMapPointer from "../../assets/svg/map-pointer.svg";

import MapModal from "../Modal/MapModal";

function EditProfilePage() {
  const history = useHistory();
  const currentUser = JSON.parse(localStorage.getItem("ways-food-user-login"));

  // Modal Handler
  const [show, setShow] = useState(false);
  const handleMapClose = () => setShow(false);
  const handleMapShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/profile");
  };
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <h1 className="heading font-weight-bold">
            Edit Profile {currentUser.userrole == 1 && "Partner"}
          </h1>
        </Row>
        <Row>
          <Col className="pl-0">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={9}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>
                <Col className="pl-0">
                  <Form.Group>
                    <Form.File label="Attach image" data-browse="📎" custom />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={9}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                </Col>
                <Col>
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
              <Row className="mt-5">
                <Col md={12} className="text-right">
                  <Button variant="brown" className="w-25" type="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
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
              <h5 className="font-weight-bold mb-0">Select my location</h5>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={2}>
              <img src={iconMapPointer} alt="map pointer" width="55" />
            </Col>
            <Col md={10}>
              <Row>
                <Col md={12}>
                  <small className="font-weight-bold">Harbour Building</small>
                </Col>

                <Col md={12} style={{ lineHeight: "1" }}>
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
    </div>
  );
}

export default EditProfilePage;

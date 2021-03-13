import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import iconMap from "../../assets/svg/map.svg";

import MapModal from "../modal/MapModal";

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
          <Col xs={12}>
            <h1 className="heading font-weight-bold">
              Edit Profile {currentUser.userrole == 1 && "Partner"}
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} lg={9}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={3}>
                  <Form.Group>
                    <Form.File label="Attach image" data-browse="📎" custom />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} lg={12}>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={12}>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} lg={9}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Location" />
                  </Form.Group>
                </Col>
                <Col xs={12} lg={3}>
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
                <Col lg={12} className="text-right">
                  <Button variant="brown" className="w-25" type="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <MapModal show={show} handleMapClose={handleMapClose} from="user" />
    </div>
  );
}

export default EditProfilePage;

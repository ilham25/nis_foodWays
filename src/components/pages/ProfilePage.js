import { Container, Row, Col, Card, Button } from "react-bootstrap";

import imgProfileBig from "../../assets/img/profile-big.png";

import HistoryCard from "../HistoryCard";

function ProfilePage() {
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row className="mb-4">
          <Col md={7}>
            <Row className="mb-4">
              <Col>
                <h1 className="heading font-weight-bold">My Profile</h1>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col md={4}>
                <Row>
                  <Col>
                    <img
                      src={imgProfileBig}
                      alt="profile photo"
                      className="w-100"
                      style={{ borderRadius: "5px" }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={8}>
                <Row className="mb-2">
                  <Col md={12}>
                    <h5 className="text-brown">Full Name</h5>
                  </Col>
                  <Col md={12}>
                    <p>Andi</p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <h5 className="text-brown">Email</h5>
                  </Col>
                  <Col md={12}>
                    <p>andigans@gmail.com</p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <h5 className="text-brown">Phone</h5>
                  </Col>
                  <Col md={12}>
                    <p>083896833122</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Button variant="brown" className="w-100" size="lg">
                  Edit Profile
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row className="mb-4">
              <Col>
                <h1 className="heading font-weight-bold">
                  History Transaction
                </h1>
              </Col>
            </Row>
            <Row>
              <HistoryCard />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;

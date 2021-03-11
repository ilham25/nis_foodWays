import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import imgProfileBig from "../../assets/img/profile-big.png";
import bensu from "../../assets/img/restaurant/bensu.png";

import HistoryCard from "../HistoryCard";

function ProfilePage() {
  const currentUser = JSON.parse(localStorage.getItem("ways-food-user-login"));
  const {
    id,
    email,
    password,
    fullname,
    gender,
    phone,
    userrole,
  } = currentUser;

  console.log(currentUser);
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
                      src={userrole ? bensu : imgProfileBig}
                      alt="profile photo"
                      className="w-100"
                      height="222"
                      style={{ borderRadius: "5px", objectFit: "cover" }}
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
                    <p>{fullname}</p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <h5 className="text-brown">Email</h5>
                  </Col>
                  <Col md={12}>
                    <p>{email}</p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col md={12}>
                    <h5 className="text-brown">Phone</h5>
                  </Col>
                  <Col md={12}>
                    <p>{phone}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Button
                  as={Link}
                  to="/profile/edit"
                  variant="brown"
                  className="w-100"
                  size="lg"
                >
                  Edit Profile
                </Button>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row className="mb-4">
              <Col>
                <h1 className="heading font-weight-bold">
                  History {userrole ? "Order" : "Transaction"}
                </h1>
              </Col>
            </Row>
            <Row>
              <HistoryCard userrole={userrole} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfilePage;

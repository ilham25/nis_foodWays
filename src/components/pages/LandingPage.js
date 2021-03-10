import { Container, Col, Row, Card, Button } from "react-bootstrap";
import HeroSection from "./HeroSection";

import PopularCard from "../PopularCard";
import RestaurantCard from "../RestaurantCard";

import { dummyPopular, dummyRestaurant } from "../../utils/data";

export default function LandingPage({
  handleShowLogin,
  isLogin,
  setFakeRoute,
}) {
  return (
    <>
      <HeroSection />
      <div className="bg-grey">
        <Container className="py-5">
          <Row>
            <Col>
              <h2 className="heading font-weight-bold mb-4">
                Popular Restaurant
              </h2>
            </Col>
          </Row>
          <Row className="mb-5 py-0">
            {dummyPopular.map((popular) => (
              <PopularCard
                logo={popular.logo}
                title={popular.title}
                key={popular.id}
              />
            ))}
          </Row>
          <Row>
            <Col>
              <h2 className="heading font-weight-bold mb-4">
                Restaurant Near You
              </h2>
            </Col>
          </Row>
          <Row>
            {dummyRestaurant.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                handleShowLogin={handleShowLogin}
                isLogin={isLogin}
                id={restaurant.id}
                title={restaurant.title}
                photo={restaurant.photo}
                range={restaurant.range}
                setFakeRoute={setFakeRoute}
              />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

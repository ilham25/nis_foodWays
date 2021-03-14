import { useEffect, useState, useContext } from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";

// State Management
import { UserContext } from "../../contexts/userContext";

// Components
import HeroSection from "./HeroSection";
import PopularCard from "../PopularCard";
import RestaurantCard from "../RestaurantCard";

// Dummy data
import { dummyRestaurant } from "../../utils/data";

export default function LandingPage({ handleShowLogin }) {
  const [popularRestaurant, setPopularRestaurant] = useState([]);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const handlePopularRestaurant = () => {
    const sortedVisitRestaurant = dummyRestaurant
      .sort((a, b) => parseFloat(b.totalvisited) - parseFloat(a.totalvisited))
      .slice(0, 4);
    setPopularRestaurant(sortedVisitRestaurant);
  };

  useEffect(() => {
    handlePopularRestaurant();
  }, []);

  return (
    <>
      <HeroSection />
      <div className="bg-grey">
        <Container className="py-5">
          <Row>
            <Col sm={12}>
              <h2 className="heading font-weight-bold mb-4">
                Popular Restaurant
              </h2>
            </Col>
          </Row>
          <Row className="mb-5 py-0">
            {popularRestaurant.map((popular) => (
              <PopularCard
                data={popular}
                key={popular.id}
                handleShowLogin={handleShowLogin}
              />
            ))}
          </Row>
          <Row>
            <Col sm={12}>
              <h2 className="heading font-weight-bold mb-4">
                Restaurant Near You
              </h2>
            </Col>
          </Row>
          <Row>
            {dummyRestaurant.map(
              (restaurant) =>
                restaurant.range <= 2 && (
                  <RestaurantCard
                    key={restaurant.id}
                    handleShowLogin={handleShowLogin}
                    data={restaurant}
                  />
                )
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

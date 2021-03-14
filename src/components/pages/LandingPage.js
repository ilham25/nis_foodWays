import { useEffect, useState, useContext } from "react";

import { Container, Col, Row, Card, Button } from "react-bootstrap";
import HeroSection from "./HeroSection";

import PopularCard from "../PopularCard";
import RestaurantCard from "../RestaurantCard";

import { dummyRestaurant } from "../../utils/data";

import { UserContext } from "../../contexts/userContext";

export default function LandingPage({
  handleShowLogin,
  isLogin,
  setFakeRoute,
}) {
  const [popularRestaurant, setPopularRestaurant] = useState([]);
  const { state: userState, dispatch: userDispatch } = useContext(UserContext);
  const handlePopularRestaurant = () => {
    const sortedVisitRestaurant = dummyRestaurant
      .sort((a, b) => parseFloat(b.totalvisited) - parseFloat(a.totalvisited))
      .slice(0, 4);
    // console.log("sorted ", sortedVisitRestaurant);
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
                logo={popular.logo}
                title={popular.title}
                id={popular.id}
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
                restaurant.near && (
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
                )
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

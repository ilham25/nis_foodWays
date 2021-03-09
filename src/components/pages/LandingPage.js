import { Container, Col, Row, Card, Button } from "react-bootstrap";
import HeroSection from "./HeroSection";

// Brand Logo
import burgerKing from "../../assets/img/burger-king.png";
import starbucks from "../../assets/img/starbucks.png";
import kfc from "../../assets/img/kfc.png";
import jco from "../../assets/img/jco.png";

// Restaurant image
import geprek from "../../assets/img/restaurant/bensu.png";
import kopi from "../../assets/img/restaurant/kopi.png";
import nasgor from "../../assets/img/restaurant/nasgor.png";
import pecel from "../../assets/img/restaurant/pecel.png";

import PopularCard from "../PopularCard";
import RestaurantCard from "../RestaurantCard";

export default function LandingPage({ handleShowLogin, isLogin }) {
  return (
    <>
      <HeroSection />
      <div className="bg-grey">
        <Container className="py-5">
          <Row>
            <h2 className="heading font-weight-bold mb-4">
              Popular Restaurant
            </h2>
          </Row>
          <Row className="mb-5">
            <PopularCard logo={burgerKing} title="Burger King" />
            <PopularCard logo={starbucks} title="Starbucks" />
            <PopularCard logo={kfc} title="KFC" />
            <PopularCard logo={jco} title="JCO" />
          </Row>
          <Row>
            <h2 className="heading font-weight-bold mb-4">
              Restaurant Near You
            </h2>
          </Row>
          <Row>
            <RestaurantCard
              handleShowLogin={handleShowLogin}
              isLogin={isLogin}
              title="Geprek Bensu"
              photo={geprek}
              range="0.2 KM"
            />
            <RestaurantCard
              handleShowLogin={handleShowLogin}
              isLogin={isLogin}
              title="Nasi Goreng Mas Rony"
              photo={nasgor}
              range="0.6 KM"
            />
            <RestaurantCard
              handleShowLogin={handleShowLogin}
              isLogin={isLogin}
              title="Pecel Ayam Prambanan"
              photo={pecel}
              range="0.6 KM"
            />
            <RestaurantCard
              handleShowLogin={handleShowLogin}
              isLogin={isLogin}
              title="Kopi Kenangan"
              photo={kopi}
              range="1.6 KM"
            />
          </Row>
        </Container>
      </div>
    </>
  );
}

import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuCard from "../MenuCard";

import { dummyRestaurant } from "../../utils/data";

export default function DetailProductPage({ setCartCounter, cartCounter }) {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();

  const menuById = () => {
    const filteredMenu = dummyRestaurant.find((menu) => menu.id == id);
    setMenu(filteredMenu);
  };

  useEffect(() => {
    menuById();
  }, []);
  return (
    <div className="bg-grey py-5 mt-4">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="heading font-weight-bold mb-4">
              {menu && menu.title}, Menus
            </h1>
          </Col>
        </Row>
        <Row>
          {menu &&
            menu.menu.map((menu) => <MenuCard key={menu.id} data={menu} />)}
        </Row>
      </Container>
    </div>
  );
}

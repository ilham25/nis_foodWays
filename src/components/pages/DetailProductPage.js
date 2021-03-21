import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import MenuCard from "../reusable/MenuCard";

// Dummy data
import { dummyRestaurant } from "../../utils/data";
import HeroDetail from "../reusable/HeroDetail";

export default function DetailProductPage() {
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
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <HeroDetail data={menu} />
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
    </motion.div>
  );
}

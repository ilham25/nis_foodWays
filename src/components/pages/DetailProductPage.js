import { Container, Col, Row } from "react-bootstrap";
import MenuCard from "../MenuCard";

// img
import geprek1 from "../../assets/img/restaurant/bensu.png";
import geprek2 from "../../assets/img/menu/geprek2.png";
import geprek3 from "../../assets/img/menu/geprek3.png";
import geprek4 from "../../assets/img/menu/geprek4.png";
import geprek5 from "../../assets/img/menu/geprek5.png";
import geprek6 from "../../assets/img/menu/geprek6.png";
import geprek7 from "../../assets/img/menu/geprek7.png";
import geprek8 from "../../assets/img/menu/geprek8.png";

export default function DetailProductPage({ setCartCounter, cartCounter }) {
  const dummyMenu = [
    {
      id: 1,
      title: "Paket Geprek",
      price: "15.000",
      photo: geprek1,
    },
    {
      id: 2,
      title: "Paket Geprek Keju",
      price: "20.000",
      photo: geprek2,
    },
    {
      id: 3,
      title: "Paket Geprek Leleh",
      price: "25.000",
      photo: geprek3,
    },
    {
      id: 4,
      title: "Paket Sambel Matah",
      price: "15.000",
      photo: geprek4,
    },
    {
      id: 5,
      title: "Mie Ayam Geprek",
      price: "17.000",
      photo: geprek5,
    },
    {
      id: 6,
      title: "Mie Ayam Geprek Keju",
      price: "22.000",
      photo: geprek6,
    },
    {
      id: 7,
      title: "Mie Ayam Leleh",
      price: "27.000",
      photo: geprek7,
    },
    {
      id: 8,
      title: "Mie Ayam Sambel Telur Asin",
      price: "22.000",
      photo: geprek8,
    },
  ];
  return (
    <div className="bg-grey py-5">
      <Container>
        <Row>
          {dummyMenu.map((menu) => (
            <MenuCard
              key={menu.id}
              title={menu.title}
              price={menu.price}
              photo={menu.photo}
              setCartCounter={setCartCounter}
              cartCounter={cartCounter}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

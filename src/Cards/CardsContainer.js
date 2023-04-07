import React from "react";
import { Card, Col, Text } from "@nextui-org/react";


const Card1 = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Sofa-Delicious
        </Text>
        <Text h4 color="white">
          Stream Movies At Your Comfort
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);


const Card3 = () => (
  <Card css={{  w: "80%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Supercharged
        </Text>
        <Text h4 color="white">
          Create Memories From Within The Cellars
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/1454805/pexels-photo-1454805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);


const CardsContainer = () => (
  <>
    <div style={{ fontSize: "1rem", lineHeight: "1.2", marginBottom: "50px", marginTop: "100px", marginLeft: "60px", color: "#0f3257" }}>
      <h1>Unleashing the Power Of Innovate and Create</h1>
    </div>

    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: '60px' }}>
      <Card1 />
      <div style={{ width: "20px" }}></div>
      
      <div style={{ width: "20px" }}></div>
      <Card3 />
    </div>
  </>
);

export default CardsContainer;


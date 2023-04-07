import React from "react";
import { Card, Col, Text } from "@nextui-org/react";


const Card1 = () => (
  <Card>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Dev-E-Loper
        </Text>
        <Text h4 color="white">
          Become a leading tech maker
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/7710140/pexels-photo-7710140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          Making a Change in the world
        </Text>
        <Text h4 color="white">
          Create Lasting Memories 
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);


const CardsContainer = () => (
  <>
    <div style={{ fontSize: "1rem", lineHeight: "1.2", marginBottom: "50px", marginTop: "100px", marginLeft: "60px", color: "#43570f" }}>
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


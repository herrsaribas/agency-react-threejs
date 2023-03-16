import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";
import PartnerCard from "./cards/PartnerCard";
import { partners } from "../constants";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  font-family: new-hero, sans-serif;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 74px;
  line-height: 78px;
  font-family: new-hero, sans-serif;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  font-family: new-hero, sans-serif;
`;

const Span = styled.span`
  font-size: 74px;
  font-weight: 200;
  font-family: new-hero, sans-serif;
`;

const Button = styled.button`
  background-color: #da4ea3;
  color: white;
  font-weight: 500;
  width: 180px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-family: new-hero, sans-serif;
`;

const Card = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10;
  justify-content: space-evenly;
`;

export default function Who() {
  return (
    <Section className="about">
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>
            H A F E N X . <br /> <Span>Ihre Digital Branding Crew.</Span>
          </Title>
          <Desc>
            eine kreative Gruppe von Designern und Entwicklern mit einer
            Leidenschaft für die Kunst.
          </Desc>
          <Button>Unsere Arbeiten sehen</Button>
          <Card>
            {partners.map((partner, index) => (
              <PartnerCard key={partner.title} index={index} {...partner} />
            ))}
          </Card>
        </Right>
      </Container>
    </Section>
  );
}

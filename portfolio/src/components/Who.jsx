import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
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
            H A F E N X. <br /> Ihre Digital Branding Crew.
          </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Wer sind wir?</Subtitle>
          </WhatWeDo>
          <Desc>
            Wir sind diejenigen, die Kunden verstehen und Chancen erkennen. Die
            Klarheit im Chaos schaffen und mit mutigen Ideen Veränderungen
            anstoßen. Wir visualisieren Ziele und gehen mit euch die ganze
            Strecke. Nicht irgendeine Agentur, sondern die Crew an eurer Seite.
          </Desc>
          <Button>Unsere Arbeiten sehen</Button>
        </Right>
      </Container>
    </Section>
  );
}

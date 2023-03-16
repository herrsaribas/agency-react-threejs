import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import astronout from "../assets/img/astronout.png";

import { motion } from "framer-motion";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: new-hero, sans-serif;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 74px;
  line-height: 84px;
  font-family: new-hero, sans-serif;
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
  color: #10cab0;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  font-family: new-hero, sans-serif;
`;

const Button = styled.button`
  background-color: #da4ea3;
  color: white;
  font-weight: 500;
  width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Scroll = styled.div`
  width: 20px;
  height: 40px;
  border-radius: 24px;
  border: 4px solid #a9a6c3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
`;

const Motion = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 9999px;
  margin-bottom: 4px;
  background-color: #a9a6c3;
`;

export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Full Service Agentur für Marketing & Design</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Was wir machen</Subtitle>
          </WhatWeDo>
          <Desc>
            Wir entwickeln Webseiten und Onlineshops, die aus Besuchern Kunden
            machen und bei Google auf Seite 1 stehen.
          </Desc>
          <Button>Unsere Leistungen</Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#772399"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={astronout} />
        </Right>
        <ScrollContainer>
          <a href="#about">
            <Scroll>
              <Motion
                as={motion.div}
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </Scroll>
          </a>
        </ScrollContainer>
      </Container>
    </Section>
  );
}

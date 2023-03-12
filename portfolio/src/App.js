import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/Stars";

const Container = styled.div`
  height: 100vh;
  background: url("./img/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Part = styled.div`
  position: relative;
  z-index: 0;
`;

function App() {
  return (
    <Container>
      <Part>
        <Hero />
        <Who />
        <StarsCanvas />
      </Part>
      <Works />
      <Contact />
    </Container>
  );
}

export default App;

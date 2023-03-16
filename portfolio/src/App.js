import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/Stars";
import Project from "./components/Project";

const Container = styled.div`
  height: 100vh;
  background-color: #050816;
  /* background: url("./img/bg.jpg"); */
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

const Stars = styled.div`
  position: relative;
  z-index: 0;
`;

function App() {
  return (
    <Container>
      <Stars>
        <Hero />
        <Who />
        <Works />
        <Project />
        <Contact />
        <StarsCanvas />
      </Stars>
    </Container>
  );
}

export default App;

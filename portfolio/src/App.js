import React from "react"
import styled from "styled-components"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"
import Contact from "./components/Contact"

const Container = styled.div`
height: 100vh;
background: url("./img/bg.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
color: white;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
&::-webkit-scrollbar {
  display:none;
}
`

  


  
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      
    </Container>
  );
}

export default App;

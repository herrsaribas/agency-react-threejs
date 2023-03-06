import React, { useState } from "react";
import styled from "styled-components";
import Animation from "./Animation";
import Branding from "./Branding";
import Development from "./Development";
import Film from "./Film";
import Seo from "./Seo";
import SocialMedia from "./SocialMedia";
import UiUx from "./UiUx";
import WebDesign from "./WebDesign";

const data = [
  "Web Design",
  "Development",
  "UI/UX Design",
  "Branding",
  "Social Media",
  "SEO",
  "Film/Fotografie",
  "Animation",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  white-space: nowrap;
  position: relative;

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after{
      animation moveText 0.5s linear both;
      
      @keyframes moveText {
        to{
          width: 100%;
        }
        
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

export default function Works() {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : work === "UI/UX Design" ? (
            <UiUx />
          ) : work === "Branding" ? (
            <Branding />
          ) : work === "Social Media" ? (
            <SocialMedia />
          ) : work === "SEO" ? (
            <Seo />
          ) : work === "Film/Fotografie" ? (
            <Film />
          ) : (
            <Animation />
          )}
        </Right>
      </Container>
    </Section>
  );
}

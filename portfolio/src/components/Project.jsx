import React from "react";
import styled from "styled-components";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../constants";

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
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
`;

const Title = styled.h1`
  font-size: 74px;
  line-height: 78px;
  font-family: new-hero, sans-serif;
`;

const Desc = styled.p`
  font-size: 24px;
  color: #aaa6c3;
  font-family: new-hero, sans-serif;
  margin-top: 20px;
  width: 800px;
  font-family: new-hero, sans-serif;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 140px;
  width: 100%;
`;

export default function Project() {
  return (
    <Section>
      <Container>
        <Title>Die Projekte.</Title>
        <Desc>
          Die folgenden Projekte zeigen unsere Fähigkeiten und Erfahrungen
          anhand realer Beispiele unserer Arbeit. Jedes Projekt ist kurz
          beschrieben und mit Links zu Live-Demos versehen. Sie zeigen unsere
          Fähigkeit, komplexe Probleme zu lösen, mit verschiedenen Technologien
          zu arbeiten und Projekte effizient zu managen.
        </Desc>
        <ProjectContainer>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </ProjectContainer>
      </Container>
    </Section>
  );
}

import React from "react";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import search from "../assets/img/search.png";

const Section = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: #050816;
  width: 100%;
  z-index: 10;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export default function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src={logo} />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Kompetenzen</ListItem>
            <ListItem>Projekte</ListItem>
            <ListItem>Über uns</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src={search} />
          <Button>Kontakt</Button>
        </Icons>
      </Container>
    </Section>
  );
}

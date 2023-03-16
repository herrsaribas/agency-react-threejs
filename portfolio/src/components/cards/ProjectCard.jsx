import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import link from "../../assets/img/link.png";

const Motion = styled(motion.div)`
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  position: relative;
  padding: 1px;
  border-radius: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 33%;
`;

const Card = styled.div`
  width: 100%;
  background-color: #151030;
  border-radius: 20px;
  padding: 5px, 12px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  height: 230px;
  padding: 16px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: end;
  margin: 12px;
`;

const IconSphere = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
`;

const Icon = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
`;

const Text = styled.div`
  margin-top: 4px;
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: white;
  font-family: new-hero, sans-serif;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #aaa6c3;
  margin-top: 8px;
  font-family: new-hero, sans-serif;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8;
  margin-top: 16px;
  padding: 16px;
`;

const Tag = styled.p`
  font-size: 14px;
  margin: 4px;
  color: #fff;
`;

const ProjectCard = ({
  name,
  index,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Motion>
      <Card options={{ max: 45, scale: 1, speed: 450 }}>
        <Content>
          <Img src={image} alt="name" />
        </Content>
        <IconContainer>
          <IconSphere onClick={() => window.open(source_code_link, "_blank")}>
            <Icon
              src={link}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </IconSphere>
        </IconContainer>
        <Text>
          <Title>{name}</Title>
          <Desc>{description}</Desc>
        </Text>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag.name} style={{ color: `${tag.color}` }}>
              #{tag.name}
            </Tag>
          ))}
        </Tags>
      </Card>
    </Motion>
  );
};

export default ProjectCard;

import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Motion = styled(motion.div)`
  background: "#00cea8";
  background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  background: -webkit-linear-gradient(-90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
  padding: 1px;
  border-radius: 20px;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Card = styled.div`
  background-color: #151030;
  border-radius: 20px;
  padding: 5px, 12px;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
`;

const Img = styled.img`
  width: 128px;
  height: 64px;
  object-fit: contain;
  padding: 10px;
`;

const PartnerCard = ({ index, title, icon }) => {
  return (
    <Motion>
      <Card
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <Img src={icon} alt="title" />
      </Card>
    </Motion>
  );
};

export default PartnerCard;

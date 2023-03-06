import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import WebDesignIcon from "./WebDesignIcon";

export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <WebDesignIcon />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

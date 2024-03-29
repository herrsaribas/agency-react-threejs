/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 development.gltf --transform
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("./img/development-transformed.glb");
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        position={[0, 0.01, -0.19]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.Torus002.geometry}
        material={materials["Material.001"]}
        position={[0, 0.01, -0.19]}
        rotation={[-Math.PI / 2, 1.04, -1.98]}
        scale={0.27}
      />
    </group>
  );
}

useGLTF.preload("./img/development-transformed.glb");

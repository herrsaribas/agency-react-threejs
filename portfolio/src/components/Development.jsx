import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactIcon from "./ReactIcon";

export default function Development() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ReactIcon />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

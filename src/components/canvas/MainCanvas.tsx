"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Character from "./Character";
import Lighting from "./Lighting";
import Desk from "./desk/Desk";

export default function MainCanvas() {
  return (
    <Canvas
      style={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Lighting />
      <OrbitControls />
      <Desk position={[0, -0.1, 0.75]} scale={[0.6, 0.6, 0.6]} />
      <Character position={[0, -0.5, 0]} rotation={[0, 0, 0]} />
    </Canvas>
  );
}

"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import Character from "./Character";
import Lighting from "./Lighting";
import Desk from "./desk/Desk";
import { Test2 } from "./Test2";

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
      <Desk position={[0, -1.125, 1.125]} scale={[1, 1, 1]} />
      {/* <Character position={[0, -0.5, 0]} rotation={[0, 0, 0]} /> */}
      <Test2
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
        scale={[0.25, 0.25, 0.25]}
      />
    </Canvas>
  );
}

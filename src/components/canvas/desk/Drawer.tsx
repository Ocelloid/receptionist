"use client";
import { useState } from "react";
import { Box } from "@react-three/drei";
import { useFrame, type ThreeElements } from "@react-three/fiber";

export default function Drawer(props: ThreeElements["group"]) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const basicPosition = props.position as [number, number, number];
  const [pos, setPos] = useState(basicPosition);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useFrame(() => {
    if (isOpen) {
      if (pos[2] > basicPosition[2] - 0.6) {
        setPos([pos[0], pos[1], pos[2] - 0.01]);
      }
    } else {
      if (pos[2] < basicPosition[2]) {
        setPos([pos[0], pos[1], pos[2] + 0.01]);
      }
    }
  });

  return (
    <group {...props} position={pos}>
      {/* Front wall */}
      <Box args={[0.8, 0.3, 0.02]} position={[0, 0, -0.29]}>
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </Box>
      {/* Back wall */}
      <Box args={[0.8, 0.3, 0.02]} position={[0, 0, 0.29]}>
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </Box>
      {/* Left wall */}
      <Box args={[0.02, 0.3, 0.6]} position={[-0.39, 0, 0]}>
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </Box>
      {/* Right wall */}
      <Box args={[0.02, 0.3, 0.6]} position={[0.39, 0, 0]}>
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </Box>
      {/* Bottom */}
      <Box args={[0.8, 0.02, 0.6]} position={[0, -0.14, 0]}>
        <meshStandardMaterial color="#A0522D" roughness={0.7} />
      </Box>

      {/* Drawer handle */}
      <Box
        args={[0.15, 0.1, 0.02]}
        position={[0, 0.05, -0.3]}
        onClick={handleClick}
        onPointerOver={() => {
          setIsHovered(true);
        }}
        onPointerOut={() => {
          setIsHovered(false);
        }}
      >
        <meshStandardMaterial
          color={isHovered ? "#FFD700" : "#000000"}
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
    </group>
  );
}

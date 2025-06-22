import { Box } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";

export default function Walls(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      {/* Back wall */}
      <Box args={[2.7, 1, 0.05]} position={[0, 0, 0.725]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>

      {/* Left wall */}
      <Box args={[0.05, 0.3, 1.5]} position={[-1.475, 0.4, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>

      {/* Right wall */}
      <Box args={[0.05, 0.3, 1.5]} position={[1.475, 0.4, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>
    </group>
  );
}

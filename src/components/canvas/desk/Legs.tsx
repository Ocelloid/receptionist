import { Box } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";

export default function Legs(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <Box args={[0.1, 1, 0.1]} position={[-1.4, -0.05, -0.7]}>
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.4, -0.05, -0.7]}>
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[-1.4, -0.05, 0.7]}>
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </Box>
      <Box args={[0.1, 1, 0.1]} position={[1.4, -0.05, 0.7]}>
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </Box>
    </group>
  );
}

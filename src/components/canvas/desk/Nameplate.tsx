import { Box, Text } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";

export default function Nameplate(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <Box args={[0.6, 0.15, 0.02]} position={[0, 0.55, 0.76]}>
        <meshStandardMaterial color="#C0C0C0" metalness={0.6} roughness={0.3} />
        <Text
          fontSize={0.1}
          position={[0, 0, 0.02]}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          Reception
        </Text>
      </Box>
    </group>
  );
}

import { Box } from "@react-three/drei";
import { type ThreeElements } from "@react-three/fiber";
import Nameplate from "./Nameplate";
import Walls from "./Walls";
import Legs from "./Legs";
import Drawer from "./Drawer";

export default function Desk(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <Box args={[3, 0.1, 1.5]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </Box>
      <Walls />
      <Drawer position={[-0.95, 0.3, -0.45]} />
      <Drawer position={[-0.95, 0, -0.45]} />
      <Drawer position={[-0.95, -0.3, -0.45]} />
      <Legs />
      <Nameplate />
    </group>
  );
}

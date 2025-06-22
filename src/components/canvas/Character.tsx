import { type ThreeElements } from "@react-three/fiber";
import ModelViewer from "./ModelViewer";

export default function Character(props: ThreeElements["group"]) {
  return (
    <group {...props}>
      <Head rotation={[0, 0, 0]} />
      <Body rotation={[0, 0, 0]} />
      <ArmLeft rotation={[0, 0.5, 0]} />
      <ArmRight rotation={[0, 0.5, 0]} />
    </group>
  );
}

function Head(props: ThreeElements["group"]) {
  const groupProps = {
    ...props,
    rotation: [0, 0, 0] as [number, number, number],
  };
  return (
    <group {...groupProps}>
      <ModelViewer
        path="/models/head.glb"
        rotation={props.rotation as [number, number, number]}
        position={[-0.00026, 0.894831, 0.005083]}
      />
    </group>
  );
}

function Body(props: ThreeElements["group"]) {
  const groupProps = {
    ...props,
    rotation: [0, 0, 0] as [number, number, number],
  };
  return (
    <group {...groupProps}>
      <ModelViewer
        rotation={props.rotation as [number, number, number]}
        path="/models/body.glb"
      />
    </group>
  );
}

function ArmLeft(props: ThreeElements["group"]) {
  const groupProps = {
    ...props,
    rotation: [0, 0, 0] as [number, number, number],
  };
  return (
    <group {...groupProps}>
      <ModelViewer
        path="/models/arm_left.glb"
        rotation={props.rotation as [number, number, number]}
        position={[0.087534, 0.921923, -0.003371]}
      />
    </group>
  );
}

function ArmRight(props: ThreeElements["group"]) {
  const groupProps = {
    ...props,
    rotation: [0, 0, 0] as [number, number, number],
  };
  return (
    <group {...groupProps}>
      <ModelViewer
        path="/models/arm_right.glb"
        rotation={props.rotation as [number, number, number]}
        position={[-0.087534, 0.921923, -0.003371]}
      />
    </group>
  );
}

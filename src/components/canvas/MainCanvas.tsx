"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function ModelViewer({
  path,
  rotation,
  position,
}: {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { scene } = useGLTF(path); // Adjust the path to your model
  return (
    <primitive
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      object={scene}
      scale={[1, 1, 1]}
      position={position}
      rotation={rotation}
    />
  ); // Adjust scale as needed
}

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
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ModelViewer path="/models/body.glb" />
      <ModelViewer path="/models/head.glb" />
      <ModelViewer
        path="/models/arm_left.glb"
        rotation={[0, 0, 0]}
        position={[0.087534, 0.921923, -0.003371]}
      />
      <ModelViewer
        path="/models/arm_right.glb"
        rotation={[0, 0, 0]}
        position={[-0.087534, 0.921923, -0.003371]}
      />
      <OrbitControls />
    </Canvas>
  );
}

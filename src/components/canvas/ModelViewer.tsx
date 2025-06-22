import { useGLTF } from "@react-three/drei";

export default function ModelViewer({
  path,
  rotation,
  position,
}: {
  path: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const { scene } = useGLTF(path); // Adjust the path to your model
  scene.children.forEach((child) => {
    console.log(child);
  });
  return (
    <primitive
      object={scene}
      scale={[1, 1, 1]}
      position={position}
      rotation={rotation}
    />
  ); // Adjust scale as needed
}

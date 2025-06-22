"use client";
import type * as THREE from "three";
import React, { useEffect } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { type GLTF, SkeletonUtils } from "three-stdlib";

type ActionName = "Armature|mixamo.com|Layer0";

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Retopology_hp_Plane002: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    None: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Test2(props: React.JSX.IntrinsicElements["group"]) {
  const group = React.useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF("/models/test2.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Armature|mixamo.com|Layer0"]?.play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.095}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Retopology_hp_Plane002"
            geometry={nodes.Retopology_hp_Plane002.geometry}
            material={materials.None}
            skeleton={nodes.Retopology_hp_Plane002.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/test2.glb");

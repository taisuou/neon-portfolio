import gsap from 'gsap';
import { useRef, VFC } from 'react';
import { Plane, Reflector, useTexture, Image } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';
import * as THREE from 'three';

export const Images: VFC = () => {
  const { width, height } = useThree((state) => state.viewport);
  useFrame(() => {});
  return (
    <group>
      <Image position={[0, height * -1, 0]} url="/images/posts/sample.jpg" />
      <Image position={[0, height * -2, 0]} url="/images/posts/sample.jpg" />
      <Image position={[0, height * -3, 0]} url="/images/posts/sample.jpg" />
    </group>
  );
};

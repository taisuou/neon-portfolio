import gsap from 'gsap';
import { useRef, VFC } from 'react';
import { Plane, Reflector, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useControls } from 'leva';

export const Ground: VFC = () => {
  useFrame(() => {});

  const [floor, normal] = useTexture([
    '/SurfaceImperfections003_1K_var1.jpg',
    '/SurfaceImperfections003_1K_Normal.jpg',
  ]);
  const groundProps = useControls('GroundControl', {
    rotateX: { value: -75, min: -180, max: 180, step: 1 },
    rotateY: { value: 0, min: -180, max: 180, step: 1 },
    rotateZ: { value: 0, min: -180, max: 180, step: 1 },
    posX: { value: 0, min: -5, max: 5, step: 0.1 },
    posY: { value: -2.9, min: -5, max: 5, step: 0.1 },
    posZ: { value: 0.1, min: -5, max: 5, step: 0.1 },
    blur: { value: 400, min: 0, max: 1000, step: 1 },
    mixBlur: { value: 93, min: 0, max: 500, step: 1 },
    radius:{value: 2.9, min: 0, max: 10, step: 0.1 },
    scale: { value: 1, min: 0, max: 10, step: 0.1 },
    mixStrength: { value: 0.5, min: -5, max: 5, step: 0.1 },
    color: '#aaaaaa',
    resolution: { value: 1024, min: 0, max: 2048, step: 1 },
    metalness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    roughness: { value: 2, min: 0, max: 100, step: 1 },
    transparent: false,
    opacity: { value: 0, min: 0, max: 1, step: 0.1 },
  });

  return (
    <>
      <mesh
        rotation={[
          (Math.PI * groundProps.rotateX) / 180,
          (Math.PI * groundProps.rotateY) / 180,
          groundProps.rotateZ / 180,
        ]}
        position={[groundProps.posX, groundProps.posY, groundProps.posZ]}
        scale={groundProps.scale}
      >
        <circleGeometry args={[groundProps.radius, 32]} />

        <MeshReflectorMaterial
          resolution={groundProps.resolution}
          blur={[groundProps.blur, groundProps.blur]}
          mixBlur={groundProps.mixBlur}
          mixStrength={groundProps.mixStrength}
          color={groundProps.color}
          mirror={1}
          metalness={groundProps.metalness}
          roughness={groundProps.roughness}
          transparent={groundProps.transparent}
          opacity={groundProps.opacity}
        />
      </mesh>
    </>
  );
};

import gsap from 'gsap';
import { useRef, VFC } from 'react';
import { Plane, Reflector, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';
import * as THREE from 'three';

export const Ground: VFC = () => {
  useFrame(() => {});

  const [floor, normal] = useTexture([
    '/SurfaceImperfections003_1K_var1.jpg',
    '/SurfaceImperfections003_1K_Normal.jpg',
  ]);

  return (
    <>
      <Reflector
        resolution={1024}
        args={[8, 8]}
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[(-Math.PI * 1) / 180, 0, Math.PI / 2]}
        position-z={-0.9}
      >
        {(Material, props) => (
          <Material
            color="#f0f0f0"
            metalness={0}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={new THREE.Vector2(2, 2)}
            {...props}
          />
        )}
      </Reflector>
    </>
  );
};

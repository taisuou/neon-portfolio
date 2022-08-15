import gsap from 'gsap';
import { useRef, VFC } from 'react';
import { Plane, Reflector, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Ground: VFC = () => {
  useFrame(() => {});

  const [floor, normal] = useTexture([
    '/SurfaceImperfections003_1K_var1.jpg',
    '/SurfaceImperfections003_1K_Normal.jpg',
  ]);

  return (
    <>
      <mesh
        
        rotation={[(-Math.PI * 1) / 180, 0, Math.PI / 2]}
        position-z={-0.9}
        scale={5}
      >
        <planeGeometry
          args={[8, 8]}
        />
        
          <MeshReflectorMaterial
            resolution={1024}
            blur={[1000, 200]}
            mixBlur={50}
            mixStrength={1.5}
            color="#f0f0f0"
            mirror={1}

            metalness={0}
            roughnessMap={floor}
            normalMap={normal}
            normalScale={new THREE.Vector2(2, 2)}
          />
        
      </mesh>
    </>
  );
};

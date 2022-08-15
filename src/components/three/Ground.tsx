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
  const groundProps = useControls('GroundControl',{
    rotateX: { value: -20, min: -180, max: 180, step:1 },
    rotateY: { value: 0, min: -180, max: 180, step:1 },
    rotateZ: { value: 140, min: -180, max: 180, step:1 },
    posX: { value: 0, min: -5, max: 5, step:0.1 },
    posY: { value: 0, min: -5, max: 5, step:0.1 },
    posZ: { value: -0.9, min: -5, max: 5, step:0.1 },
    blur: { value: 60, min: 0, max: 1000, step:1 },
    mixBlur: { value: 100, min: 0, max: 500, step:1 },
    scale: { value: 5, min: 0, max: 10, step:1 },
  })

  return (
    <>
      <mesh
        
        rotation={[Math.PI * groundProps.rotateX/90, Math.PI * groundProps.rotateY/90, groundProps.rotateZ/90]}
        position={[groundProps.posX,groundProps.posY, groundProps.posZ]}
        scale={groundProps.scale}
      >
        <planeGeometry
          args={[8, 8]}
        />
        
          <MeshReflectorMaterial
            resolution={1024}
            blur={[groundProps.blur, groundProps.blur]}
            mixBlur={groundProps.mixBlur}
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

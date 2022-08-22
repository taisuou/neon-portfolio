/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { GUIController } from '../../utils/gui';
import { useFrame } from '@react-three/fiber';
import { glassState } from '../../utils/store';
import { useControls } from 'leva';
import { animate, useMotionValue } from 'framer-motion';
import { MeshBasicMaterial } from 'three';
import { motion } from 'framer-motion-3d';

type GLTFResult = GLTF & {
  nodes: {
    light_fd: THREE.Mesh;
    root: THREE.Mesh;
    light_ar: THREE.Mesh;
    glass: THREE.Mesh;
  };
  materials: {};
};

export function NeonGLTF(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/sign.gltf') as GLTFResult;
  const glassRef = useRef<THREE.Mesh>(null);
  const materialProps = useControls('GlassMaterial', {
    thickness: { value: 0.2, min: 0, max: 20 },
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
    envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    color: '#ffffff',
    attenuationTint: '#584b25',
    attenuationDistance: { value: 0, min: 0, max: 1 },
    toggleVisible: true,
  });

  const [lightProps, set] = useControls(() => ({
    color: '#c4b072',
    opacity: { value: 0.3, min: 0, max: 1, step: 0.1 },
    emissive: '#c4b072',
  }));
  const argonProps = useControls('ArgonMaterial', {
    color: '#3ad1e8',
  });
  const neonControl = useControls('Neon', {
    rotateX: { value: 0, min: -180, max: 180, step: 1 },
    rotateY: { value: 0, min: -180, max: 180, step: 1 },
    rotateZ: { value: 0, min: -180, max: 180, step: 1 },
    posX: { value: 0, min: -5, max: 5, step: 0.1 },
    posY: { value: 0, min: -5, max: 5, step: 0.1 },
    posZ: { value: 0, min: -5, max: 5, step: 0.1 },
    scale: { value: 1, min: 0, max: 5, step: 0.1 },
  });

  const scroll = useScroll();
  const [isLightOn, setLightOn] = useState(true);
  const colorVariants = {
    on: { color: '#6d5b27' },
    off: { color: '#2e2815' },
  };
  const argonColorVariants = {
    on: { color: '#258291' },
    off: { color: '#0b2a2f' },
  };

  useFrame(() => {
    const offset = 1 - scroll.offset;
    if (offset < 0.85) {
      setLightOn(false);
    } else if (offset >= 0.85) {
      setLightOn(true);
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.01 * neonControl.scale}
      position={[neonControl.posX, neonControl.posY, neonControl.posZ]}
      rotation={[
        (Math.PI * neonControl.rotateX) / 180,
        (neonControl.rotateY * Math.PI) / 180,
        (neonControl.rotateZ * Math.PI) / 180,
      ]}
    >
      <group name="logo" position={[0, 0, 0]} rotation={[1.58, -0.01, -0.02]}>
        <motion.mesh
          name="light_fd"
          geometry={nodes.light_fd.geometry}
          //   material={nodes.light_fd.material}
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
          animate={isLightOn ? 'on' : 'off'}
        >
          <motion.meshBasicMaterial variants={colorVariants} />
        </motion.mesh>
        <mesh
          name="root"
          geometry={nodes.root.geometry}
          material={nodes.root.material}
          position={[-83.97, -56.81, 184.25]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.65, 0.65, 1.7]}
        />
        <motion.mesh
          name="light_ar"
          geometry={nodes.light_ar.geometry}
          // material={nodes.light_ar.material}
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
          animate={isLightOn ? 'on' : 'off'}
        >
          <motion.meshBasicMaterial variants={argonColorVariants} />
        </motion.mesh>
        {materialProps.toggleVisible && (
          <mesh
            name="glass"
            ref={glassRef}
            geometry={nodes.glass.geometry}
            //   material={nodes.glass.material}
            position={[-285.43, 0, 298.68]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={265.42}
          >
            <meshPhysicalMaterial {...materialProps} />
          </mesh>
        )}
      </group>
    </group>
  );
}

useGLTF.preload('/sign.gltf');

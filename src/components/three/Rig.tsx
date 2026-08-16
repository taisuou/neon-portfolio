import { FC, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll as useMotionScroll } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import * as THREE from 'three';

type RigProps = {
  children: React.ReactNode;
};

export const Rig: FC<RigProps> = ({ children }) => {
  const ref = useRef<THREE.Group>();
  const vec = new THREE.Vector3();
  const scroll = useMotionScroll();
  let last = 0;
  const { isReady } = useSnapshot(sceneState);

  useFrame(() => {
    const offset = scroll.scrollYProgress.get();
    if (!ref.current || !isReady) return;
    ref.current.position.lerp(vec.set(0, 0, 10), 0.05);

    ref.current.rotation.y = THREE.MathUtils.lerp(
      (last = ref.current.rotation.y),
      -offset * Math.PI * 2,
      0.05,
    );
  });

  return <group ref={ref}>{children}</group>;
};

import { FC, Suspense, useEffect, useRef, VFC } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import { Scroll, ScrollControls, useScroll } from './ScrollControls';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { NeonGLTF } from './NeonGLTF';
import { Ground } from './Ground';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { Home } from '../organisms/Home';
import { About } from '../organisms/About';
import { Works } from '../organisms/Works';
import { Contact } from '../organisms/Contact';
import { Detail } from '../organisms/Detail';
import { useWindowSize } from '../../utils/useWindowSize';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { contents } from '../../utils/store';
import * as THREE from 'three';
import { useControls } from 'leva';
import { Footer } from '../molecules/Footer';
import { AnimatePresence, useScroll as useMotionScroll } from 'framer-motion';
import { useMedia } from '../../utils/useMedia';
import { color } from '../../utils/style';

function NeonScene() {
  const ambientProps = useControls('AmbientLight', {
    intensity: { value: 0.6, min: 0, max: 1, step: 0.1 },
  });
  const postprocessingBloom1Props = useControls('Bloom1', {
    intensity: { value: 0.6, min: 0, max: 1, step: 0.1 },
  });
  const postprocessingBloom2Props = useControls('Bloom2', {
    intensity: { value: 0.5, min: 0, max: 1, step: 0.1 },
  });
  return (
    <group>
      <ambientLight intensity={ambientProps.intensity} />
      <Rig>
        <NeonGLTF />
        <Ground />
      </Rig>
      <EffectComposer multisampling={8}>
        <Bloom
          kernelSize={3}
          luminanceThreshold={0}
          luminanceSmoothing={0.4}
          intensity={postprocessingBloom1Props.intensity}
        />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={postprocessingBloom2Props.intensity}
        />
      </EffectComposer>
    </group>
  );
}

type RigProps = {
  children: React.ReactNode;
};
const Rig: FC<RigProps> = ({ children }) => {
  const ref = useRef<THREE.Group>();
  const vec = new THREE.Vector3();
  const { camera } = useThree();
  const scroll = useMotionScroll();
  let last = 0;
  useFrame(() => {
    const offset = scroll.scrollYProgress.get();
    if (!ref.current || !sceneState.isReady) return;
    if (!ref.current || !sceneState.isReady) return;
    ref.current!.position.lerp(vec.set(0, 0, 10), 0.05);

    ref.current!.rotation.y = THREE.MathUtils.lerp(
      (last = ref.current!.rotation.y),
      -offset * Math.PI * 2,
      0.05,
    );
  });
  return <group ref={ref}>{children}</group>;
};

export const TCanvas: VFC = () => {
  const helperControl = useControls('helperControl', {
    orbit: false,
    axis: false,
  });
  // const [location] = useLocation();
  return (
    <Canvas
      camera={{
        position: [0, 0, 20],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
      gl={{ antialias: false }}
      // shadows
    >
      {/* scene */}
      <color attach="background" args={[color.background.canvasDark]} />
      {/* camera controller */}

      {helperControl.orbit ? (
        <OrbitControls attach="orbitControls" enableZoom={true} enablePan={true} />
      ) : null}

      {helperControl.axis ? <primitive object={new THREE.AxesHelper(10)} /> : null}
      <Suspense fallback={null}>
        <Preload all />
        <NeonScene />
      </Suspense>
      {/* helper */}
      {/* <Stats /> */}
    </Canvas>
  );
};

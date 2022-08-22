import { FC, Suspense, useEffect, useRef, VFC } from 'react';
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Stats,
  Preload,
  Image,
  Text,
  useScroll,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { NeonGLTF } from './NeonGLTF';
import { Ground } from './Ground';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { Contents as PageContents } from '../organisms/Contents';

import { useWindowSize } from '../../utils/useWindowSize';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { Switch, Route, useLocation } from 'wouter';
import { contents } from '../../utils/store';
import { useMedia } from '../../utils/useMedia';
import * as THREE from 'three';
import { useControls } from 'leva';
import { isReturnStatement } from 'typescript';
import { Header } from '../molecules/Header';
import { Box, Flex } from '@react-three/flex';

function Contents() {
  const elementRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const { height } = useSnapshot(sceneState);
  const [location] = useLocation();

  useEffect(() => {
    //need to be fixed later. Triggered only when
    sceneState.height = elementRef.current!.getBoundingClientRect().height;
  }, [size.height, elementRef, location]);

  return (
    <ScrollControls
      pages={height / size.height} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={10} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false} // Can also scroll infinitely (default: false)
    >
      <Rig>
        <NeonGLTF />
        <Ground />
      </Rig>
      <EffectComposer multisampling={8}>
        <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
        <Bloom
          kernelSize={KernelSize.HUGE}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          intensity={0.5}
        />
      </EffectComposer>

      <Scroll html ref={elementRef}>
        <PageContents />
      </Scroll>
    </ScrollControls>
  );
}
type RigProps = {
  children: React.ReactNode;
};
const Rig: FC<RigProps> = ({ children }) => {
  const ref = useRef<THREE.Group>();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  const { isMobile, isTablet } = useMedia();
  const scroll = useScroll();
  useFrame(() => {
    const offset = 1 - scroll.offset;
    if (!ref.current || !sceneState.isReady) return;
    camera.position.lerp(
      vec.set(Math.sin(offset * Math.PI * 2) * 12, 0, Math.cos(offset * Math.PI * 2) * 12),
      0.05,
    );

    camera.lookAt(0, 0, 0);
    //Objectを動かすと簡略に表現はできるz
    // ref.current!.rotation.y = offset
  });
  return <group ref={ref}>{children}</group>;
};

export const TCanvas: VFC = () => {
  const { isMobile, isTablet } = useMedia();
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
      <color attach="background" args={['#000']} />
      {/* camera controller */}

      {helperControl.orbit ? (
        <OrbitControls attach="orbitControls" enableZoom={true} enablePan={true} />
      ) : null}
      <ambientLight />
      {helperControl.axis ? <primitive object={new THREE.AxesHelper(10)} /> : null}
      <Suspense fallback={null}>
        {/* objects */}
        {/* <Objects /> */}

        <Contents />
        <Preload all />
      </Suspense>
      {/* helper */}
      {/* <Stats /> */}
    </Canvas>
  );
};

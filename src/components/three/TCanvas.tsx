import { FC, Suspense, useEffect, useRef, VFC } from 'react';
import { OrbitControls, Stats, Preload, Image, Text } from '@react-three/drei';
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
import { Switch, Route, useLocation } from 'wouter';
import { contents } from '../../utils/store';
import { useMedia } from '../../utils/useMedia';
import * as THREE from 'three';
import { useControls } from 'leva';
import { isReturnStatement } from 'typescript';
import { Header } from '../molecules/Header';
import { Box, Flex } from '@react-three/flex';
import { Footer } from '../molecules/Footer';
import { AnimatePresence } from 'framer-motion';

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
        <Route path="/">
          <NeonGLTF />
        </Route>
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

function Contents() {
  const elementRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const { height, isWorksFiltered, currentCategory } = useSnapshot(sceneState);
  const [location] = useLocation();
  // let offset = useScroll().offset

  useEffect(() => {
    //need to be fixed later. Triggered only when
    setTimeout(() => {
      //コンテンツ落ちを防ぐために僅かに遅くしてる
      sceneState.height = elementRef.current!.getBoundingClientRect().height;
    }, 500);
  }, [size.height, elementRef, location, isWorksFiltered, currentCategory]);

  return (
    <group>
      <ScrollControls
        pages={height / size.height} // Each page takes 100% of the height of the canvas
        damping={10} // Friction, higher is faster (default: 4)
        locale={location}
      >
        <NeonScene />
        <Scroll html ref={elementRef}>
          <AnimatePresence initial={false}>
            <Switch location={location}>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/works/:id">
                {(params) => (
                  <Detail post={contents.works[Number(params.id)]} pageIndex={Number(params.id)} key={Number(params.id)}/>
                )}
              </Route>
            </Switch>
            <Footer key = {location}/>
          </AnimatePresence>
        </Scroll>
      </ScrollControls>
    </group>
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
      <color attach="background" args={['#040404']} />
      {/* camera controller */}

      {helperControl.orbit ? (
        <OrbitControls attach="orbitControls" enableZoom={true} enablePan={true} />
      ) : null}

      {helperControl.axis ? <primitive object={new THREE.AxesHelper(10)} /> : null}
      <Suspense fallback={null}>
        

        <Contents />
        <Preload all />
      </Suspense>
      {/* helper */}
      {/* <Stats /> */}
    </Canvas>
  );
};

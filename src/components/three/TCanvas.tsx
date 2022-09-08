import { FC, Suspense, useEffect, useRef, VFC } from 'react';
import { OrbitControls, Stats, Preload, Image, Text } from '@react-three/drei';
import { Scroll, ScrollControls, useScroll } from './ScrollControls';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { NeonGLTF } from './NeonGLTF';
import { Ground } from './Ground';
import {Item} from './Item'
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

function NeonScene() {
  const ambientProps = useControls('AmbientLight', {
    intensity: { value: 0.6, min: 0, max: 1, step: 0.1 },
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
        <Scroll>
          <Switch location={location}>
            <Route path="/" >
            {contents.works
              .filter((work, index) => index < 4)
              .map((work, index) => (
                <Item index={index} work={work}/>
            ))}
            </Route>
            <Route>404, Not Found!</Route>
          </Switch>
        </Scroll>
        <Scroll html ref={elementRef}>
          <Switch location={location}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
            <Route path="/works/:id">
              {(params) => (
                <Detail post={contents.works[Number(params.id)]} pageIndex={Number(params.id)} />
              )}
            </Route>
          </Switch>
          <Footer />
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
  const { isMobile, isTablet } = useMedia();
  const scroll = useScroll();
  let last = 0
  useFrame(() => {
    if (!ref.current || !sceneState.isReady) return;
    ref.current!.position.lerp(vec.set(0, 0, -3),0.05,);

    // camera.lookAt(0, 0, 0);
    //Objectを動かすsと簡略に表現はできるz

    ref.current!.rotation.y = THREE.MathUtils.lerp(last=ref.current!.rotation.y, -scroll.offset * Math.PI*2, 0.05)
  });
  return <group ref={ref} position={[0,0,-20]}>{children}</group>;
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

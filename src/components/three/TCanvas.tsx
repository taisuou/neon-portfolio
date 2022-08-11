import React, { Suspense, useEffect, useRef, useState, VFC } from 'react';
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Stats,
  Image,
  Text,
  useAspect,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Lights } from './Light';
import { Objects } from './Objects';
import { NeonGLTF } from './NeonGLTF';
import * as THREE from 'three';
import { Ground } from './Ground';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { color } from '../../utils/style';
import styled from '@emotion/styled';
import { Flex, Box, useReflow } from '@react-three/flex';
import { Body } from '../molecules/Body';
import { Footer } from '../molecules/Footer';
import { useWindowSize } from '../../utils/useWindowSize';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';

function Contents() {
  const elementRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const { height } = useSnapshot(sceneState);
  useEffect(() => {
    //need to be fixed later. Triggered only when

    sceneState.height = elementRef.current!.getBoundingClientRect().height;
  }, [size.height]);
  useFrame(() => {
    sceneState.height = elementRef.current!.getBoundingClientRect().height;
  });
  return (
    <ScrollControls
      pages={height / size.height} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={4} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false} // Can also scroll infinitely (default: false)
    >
      {/* You can have components in here, they are not scrolled, but they can still
			react to scroll by using useScroll! */}
      {/* <Scroll> */}
      {/* <Flex
				flexDirection="column"
				size={[vpWidth, vpHeight, 0]}
			>
				<Box
					flexDirection="row"
				>

					<Box centerAnchor>
						<Image position={[0, 0, 0]} url="/images/posts/sample.jpg"/>
					</Box>
					<Box centerAnchor flexGrow={1}>
						<Text color="black" anchorX="center" anchorY="middle">
							hello world!
							</Text>
					</Box>
				</Box>
			</Flex> */}
      {/* </Scroll> */}
      <Scroll html ref={elementRef}>
        <Body />
        <Footer />
      </Scroll>
    </ScrollControls>
  );
}

export const TCanvas: VFC = () => {
  // const [height, setHeight] = useState(0);

  return (
    <Canvas
      camera={{
        position: [0, 3, 8],
        fov: 50,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
      }}
      dpr={window.devicePixelRatio}
      shadows
    >
      {/* scene */}
      <color attach="background" args={['#000']} />
      {/* camera controller */}
      {/* <OrbitControls attach="orbitControls" /> */}
      <ambientLight />
      {/* shows Axis Helper */}
      {/* <primitive object={new THREE.AxesHelper(10)} /> */}
      {/* lights */}
      {/* <Lights /> */}
      <Suspense fallback={null}>
        {/* objects */}
        {/* <Objects /> */}
        <NeonGLTF />
        <Ground />
        <EffectComposer multisampling={8}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
          <Bloom
            kernelSize={KernelSize.HUGE}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={0.5}
          />
        </EffectComposer>
        <Contents />
      </Suspense>
      {/* helper */}
      <Stats />
    </Canvas>
  );
};

const H1 = styled.h1`
  color: ${color.content.HighEmphasis};
`;

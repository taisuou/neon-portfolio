import { FC, Suspense, useEffect, useRef, VFC } from 'react';
import { OrbitControls, Scroll, ScrollControls, Stats } from '@react-three/drei';
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

function Contents() {
  const elementRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const { height } = useSnapshot(sceneState);
  const [location] = useLocation();
  

  useEffect(() => {
    //need to be fixed later. Triggered only when

    sceneState.height = elementRef.current!.getBoundingClientRect().height;
  }, [size.height, elementRef, location]);

  // useFrame(() => {
  //   sceneState.height = elementRef.current!.getBoundingClientRect().height;
  // });
  return (
    <ScrollControls
      pages={height / size.height} // Each page takes 100% of the height of the canvas
      distance={1} // A factor that increases scroll bar travel (default: 1)
      damping={6} // Friction, higher is faster (default: 4)
      horizontal={false} // Can also scroll horizontally (default: false)
      infinite={false} // Can also scroll infinitely (default: false)
    >
      {/* ▼後でFlex式のHTMLに変更する場合にこちらを使用 */}
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
        <PageContents/>
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
  useFrame(() => {
    if (!ref.current || !sceneState.isReady) return;
    camera.position.lerp(vec.set(mouse.x * 2, 0, 8.5), 0.05);
    ref.current!.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current!.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1,
    );
  });
  return <group ref={ref}>{children}</group>;
};

export const TCanvas: VFC = () => {
  const {isMobile, isTablet} = useMedia();
  const helperControl = useControls('helperControl', {
    orbit: false,
    axis: false,
  });
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
      shadows
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
        {(!isMobile&&!isTablet)&&<Contents />}
      </Suspense>
      {/* helper */}
      {/* <Stats /> */}
    </Canvas>
  );
};

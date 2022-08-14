import { Suspense, useEffect, useRef, VFC } from 'react';
import { OrbitControls, Scroll, ScrollControls, Stats, useProgress } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { NeonGLTF } from './NeonGLTF';
import { Ground } from './Ground';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { color } from '../../utils/style';
import styled from '@emotion/styled';
import { Home } from '../organisms/Home';
import { About } from '../organisms/About';
import { Works } from '../organisms/Works';
import { Contact } from '../organisms/Contact';
import { Detail } from '../organisms/Detail';
import { Footer } from '../molecules/Footer';
import { useWindowSize } from '../../utils/useWindowSize';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';
import { Switch, Route, useLocation } from 'wouter';
import { contents } from '../../utils/store';
import { Loader } from './Loader';
import { useMedia } from '../../utils/useMedia';

function Contents() {
  const elementRef = useRef<HTMLDivElement>(null);
  const size = useWindowSize();
  const { height } = useSnapshot(sceneState);
  const isMobile = useMedia().isMobile;
  const { active } = useProgress()
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
      damping={isMobile?100:4} // Friction, higher is faster (default: 4)
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
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Route path="/works/:id">{(params) => <Detail post={contents.works[0]} />}</Route>
          <Route>存在しないコンテンツです</Route>
        </Switch>
        <Footer />
      </Scroll>
    </ScrollControls>
  );
}

export const TCanvas: VFC = () => {
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
      <Suspense fallback={<Loader/>}>
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
      {/* <Stats /> */}
    </Canvas>
  );
};

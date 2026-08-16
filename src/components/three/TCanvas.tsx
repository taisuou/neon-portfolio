import { Suspense, VFC } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { NeonGLTF } from './NeonGLTF';
import { Rig } from './Rig';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';
import { useControls } from 'leva';
import * as THREE from 'three';

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
        near: 0.1,
        far: 2000,
      }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      gl={{ antialias: false, alpha: true }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
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

import useSpline from '@splinetool/r3f-spline';
import { useRef, VFC } from 'react';

export const Neon: VFC = () => {
  const { nodes, materials } = useSpline(
    'https://prod.spline.design/MZRuLxdgFXODE2vc/scene.splinecode',
  );
  return (
    <>
      {/* <color attach="background" args={['#4b4d52']} /> */}
      <group dispose={null} scale={0.003} rotation={[0.5 * Math.PI, 0, 0]}>
        <mesh
          name="light_fd"
          geometry={nodes.light_fd.geometry}
          material={nodes.light_fd.material}
          castShadow
          receiveShadow
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
        />
        <mesh
          name="root"
          geometry={nodes.root.geometry}
          material={nodes.root.material}
          castShadow
          receiveShadow
          position={[-83.97, -56.81, 184.25]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.65, 0.65, 1.7]}
        />
        <mesh
          name="glass"
          geometry={nodes.glass.geometry}
          material={nodes.glass.material}
          castShadow
          receiveShadow
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
        />
        <mesh
          name="light_ar"
          geometry={nodes.light_ar.geometry}
          material={nodes.light_ar.material}
          castShadow
          receiveShadow
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
        />
      </group>
    </>
  );
};

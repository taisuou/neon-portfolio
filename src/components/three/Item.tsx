import gsap from 'gsap';
import { useRef, VFC } from 'react';
import { Plane, Reflector, useTexture, Image, Text, useIntersect, Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';
import * as THREE from 'three';
import { useMedia } from '../../utils/useMedia';
import { Flex, Box, useReflow } from '@react-three/flex';
import { WorkPost } from '../../../@types/schema';

interface Props {
  index:number
  work:WorkPost
}




export const Item: VFC<Props> = (props) => {
  const { width, height } = useThree((state) => state.viewport);
  const gap = width*0.1
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { isMobile, isTablet } = useMedia();
  const isMobTab = isMobile||isTablet
  const isOdd = props.index%2===0
  useFrame((state, delta) => {
    // ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
    // ref.current.material.zoom = THREE.MathUtils.damp(ref.current.material.zoom, visible.current ? 1 : 1.5, 4, delta)
  })
  return (
    <group scale={1} position={[0,-height*(props.index*0.8+1),0]}>
    {/* @ts-ignore */}
    <Image ref={ref} scale={[isMobTab?width:width*0.6,height*0.6,1]} position={[isMobTab?0:(isOdd?width*0.35:-width*0.35), 0, 0]} url={props.work.thumb} />
    <Html position ={[0,0,0.1]}>
        <h2>{props.work.titleEn}</h2>
        <p>{props.work.titleJp}</p>
        <p style={{padding:'2px 4px', border:'solid 1px #ffffff', borderRadius:4}}>ART</p>
    </Html>
    </group>
  );
};

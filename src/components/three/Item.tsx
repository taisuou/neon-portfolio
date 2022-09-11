import gsap from 'gsap';
import { useEffect, useRef, VFC } from 'react';
import { Plane, Reflector, useTexture, Image, Text, useIntersect, Html, RenderTexture } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { MeshReflectorMaterialProps } from '@react-three/drei/materials/MeshReflectorMaterial';
import * as THREE from 'three';
import { useMedia } from '../../utils/useMedia';
import { Flex, Box, useReflow } from '@react-three/flex';
import { WorkPost } from '../../../@types/schema';
import { useSnapshot } from 'valtio';
import { sceneState } from '../../utils/sceneState';

interface Props {
  
}

type ImagePlane = {
  src:string,
  width:number, 
  height:number,
  x:number,
  y:number
}


export const Item: VFC<Props> = (props) => {
  const { width, height } = useThree((state) => state.viewport);
  const { isMobile, isTablet } = useMedia();
  
  
  // const texture = useLoader(THREE.TextureLoader, props.work.thumb)
  // @ts-ignore
  const htmlImages = [...document.querySelectorAll('.mesh-image')];
  const imagePlaneArray:ImagePlane[] = [];
  htmlImages.forEach(img => {
    
    const rect = img.getBoundingClientRect();
    console.log(img)
    // @ts-ignore
    const rectWidth = rect.width/window.innerWidth*width
    const rectHeight = rect.height/window.innerHeight*height
    const x = rect.left/window.innerWidth*width - width/2 + rectWidth/2
    const y = -rect.top/window.innerHeight*height + height/2 - rectHeight/2
    console.log(rect)
    // @ts-ignore
    const imagePlane:ImagePlane = {src:img.src, width:rectWidth, height:rectHeight, x:x, y:y}
    imagePlaneArray.push(imagePlane)
  })

  useFrame((state, delta) => {
    
  })
  return (
    <group>
      {imagePlaneArray.map((img,index) => (
        // @ts-ignore
        <Image url={img.src} position={[img.x,img.y,0]} scale={[img.width,img.height,0]}/>
      ))}  
    </group>
  );
};

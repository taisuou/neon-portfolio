import { VFC } from 'react';
import {Image,} from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMedia } from '../../utils/useMedia';
import {sceneState} from '../../utils/sceneState'
import { ImagePlane } from '../../../@types/schema';

interface Props {
  
}



export const Item: VFC<Props> = () => {
  const { width, height } = useThree((state) => state.viewport);
  const { isMobile, isTablet } = useMedia();
  // const {imageMesh} = sceneState().imageMesh
  
  
  // const texture = useLoader(THREE.TextureLoader, props.work.thumb)
  // @ts-ignore
  const htmlImages = [...document.querySelectorAll('.mesh-image')];
  const imagePlaneArray:ImagePlane[] = [];
  htmlImages.forEach(img => {
    
    const rect = img.getBoundingClientRect();
    // @ts-ignore
    const rectWidth = rect.width/window.innerWidth*width
    const rectHeight = rect.height/window.innerHeight*height
    const x = rect.left/window.innerWidth*width - width/2 + rectWidth/2
    const y = -rect.top/window.innerHeight*height + height/2 - rectHeight/2
    // @ts-ignore
    const imagePlane:ImagePlane = {src:img.src, width:rectWidth, height:rectHeight, x:x, y:y}
    imagePlaneArray.push(imagePlane)
    // sceneState.imageMesh = imagePlaneArray
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
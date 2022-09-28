import { useFrame } from '@react-three/fiber';
import React, { useRef, VFC } from 'react';
import * as THREE from 'three';

type ShaderMeshProps = {
    url:string
    width:number
    height:number
}


export const ShaderMesh: VFC<ShaderMeshProps> = (props) => {
    const imgRef = useRef<THREE.Mesh>(null);
    const loader = new THREE.TextureLoader();
    const texture = loader.load(props.url);
    const uniforms = {
        uTexture: { value: texture },
        uImageAspect: { value: props.width / props.height },
        uPlaneAspect: { value: props.width / props.height },
        uTime: { value: 0 },
      };
    const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    });

    

    useFrame(({ clock }) => {
        material.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
        <mesh
            ref={imgRef}
            material={material}
        >
            <planeGeometry args={[1, 1, 1]}/>
        </mesh>
    );
};

const vertexShader = `
varying vec2 vUv;
uniform float uTime;

float PI = 3.1415926535897932384626433832795;

void main() {
    vUv = uv;
  vec3 pos = position;

  // 横方向
  float amp = 0.03; // 振幅（の役割） 大きくすると波が大きくなる
  float freq = 0.01 * uTime; // 振動数（の役割） 大きくすると波が細かくなる

  // 縦方向
  float tension = -0.001 * uTime; // 上下の張り具合

  pos.x = pos.x + sin(pos.y * PI  * freq) * amp;
  pos.y = pos.y + (cos(pos.x * PI) * tension);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

const fragmentShader = `
#define PI 3.141592653589

uniform float u_time;
varying vec2 v_uv;

void main() {
    float noise = fract(sin(dot(v_uv.xy, vec2(12.9898, 78.233)) + u_time) * 43758.5453123);
    float r = (sin(u_time) + 1.0) / 2.0;
    float g = (sin(PI * 2.0 / 3.0 + u_time) + 1.0) / 2.0;
    float b = (sin(PI * 4.0 / 3.0 + u_time) + 1.0) / 2.0;
    vec3 color = vec3(r, g, b) * noise;

    gl_FragColor = vec4(color, 1.0);
}
`;
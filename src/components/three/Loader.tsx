import styled from '@emotion/styled';
import { Html, useProgress } from '@react-three/drei';
import { useEffect, useRef, useState, VFC } from 'react';
import { color } from '../../utils/style';
import { gsap } from 'gsap';

export const Loader: VFC = () => {
  const { progress, item } = useProgress();

  const loaderPath = useRef(null);
  const loaderPathParent = useRef(null);
  const counter = useRef<HTMLDivElement|null>(null);

  const [isLoaderOpen, setLoaderOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const [hidden, setOcclude] = useState(false)



  

  const paths = {
    step1: {
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
      inBetween: {
        curve: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
    }
  };

  const loaderEnd = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLoaderOpen(true);

    if (!loaderPath.current || !loaderPathParent.current) return;
    
    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
          setOcclude(true)
        },
      })
      .set(loaderPath.current, {
        attr: { d: paths.step1.filled },
      })
      .set(loaderPathParent.current, {
        visibility: 'visible',
      })
      .to(
        loaderPath.current,
        {
          duration: 0.8,
          delay:3.0,
          ease: 'power4.in',
          attr: { d: paths.step1.inBetween.curve },
        },
        0,
      )
      .to(loaderPath.current, {
        duration: 0.2,
        ease: 'power1',
        attr: { d: paths.step1.unfilled },
      })
      .set(loaderPathParent.current, {
        visibility: 'hidden',
      })
  };

  
  
  
  //   return <Html center>{progress} % loaded</Html>
  useEffect(()=>{
    if(progress===100){loaderEnd()}
  },[progress])
  return (
    <Html 
        fullscreen
        occlude={hidden}
        style={{
            visibility: hidden ? 'hidden':'visible',
            
          }} 
    >
      <SVG
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        ref={loaderPathParent}
      >
        <path
          fill={color.background.dark}
          vectorEffect="non-scaling-stroke"
          d="M 0 0 V 100 Q 50 100 100 100 V 0 z"
          ref={loaderPath}
        />
      </SVG>
      <LoaderAnim>
        <LoaderLogo>
          <LogoInner>
            <li className="front">
              <div className="elec__item glass__front"></div>
              <div className="elec__item mica__front"></div>
            </li>
            <li className="sideY">
              <div className="elec__item glass__side"></div>
              <ul>
                <li className="elec__item mica__side"></li>
                <li className="elec__item plate__side">
                  <svg width="44" height="84">
                    <path d="M22 0 L1 84 L43 84 Z" fillOpacity="0"></path>
                  </svg>
                </li>
              </ul>
            </li>
            <li className="sideX">
              <div className="elec__item glass__side"></div>
              <ul>
                <li className="elec__item mica__side"></li>
                <li className="elec__item plate__side">
                  <svg width="44" height="84">
                    <path d="M22 0 L1 84 L43 84 Z" fillOpacity="0"></path>
                  </svg>
                </li>
              </ul>
            </li>
          </LogoInner>
        </LoaderLogo>
        <LoaderNum ref={counter} data-from="0" data-to="4096">{progress}</LoaderNum>

      </LoaderAnim>
      
    </Html>
  );
};

const SVG=styled.svg`
    position: absolute;
    visibility: hidden;
    top: 0;
    left: 0;

`
const LoaderAnim = styled.div`
    
  .front {
    animation: rotateFront 5000ms linear infinite;
  }
  .sideY {
    animation: rotateSideY 5000ms linear infinite;
    transform-origin: 0 60px;
    transform: translateZ(60px);
  }
  .sideX {
    animation: rotateSideX 5000ms linear infinite;
    transform-origin: 0 60px;
  }

  @keyframes rotateFront {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-359deg);
    }
  }

  @keyframes rotateSideY {
    from {
      transform: rotateY(90deg) rotateX(0deg);
    }
    to {
      transform: rotateY(449deg) rotateX(359deg);
    }
  }

  @keyframes rotateSideX {
    from {
      transform: rotateY(90deg) rotateX(90deg);
    }
    to {
      transform: rotateY(449deg) rotateX(449deg);
    }
  }
`;

const LoaderLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 400px;
  margin-top: -40px;

  .elec__item {
    position: absolute;
    width: 120px;
    height: 120px;
    border: 2px solid #fff;
    transform-style: preserve-3d;
  }

  .glass__front {
    border-radius: 120px;
    transform: translateX(-60px);
  }
  .mica__front {
    width: 86px;
    height: 86px;
    border-radius: 86px;
    transform: translateX(-43px) translateY(17px) translateZ(60px);
  }

  .glass__side {
    border-radius: 0 120px 120px 0;
    border-left: none;
  }

  .mica__side {
    width: 70px;
    height: 86px;
    transform: translateY(17px) translateZ(23px);
  }

  .plate__side {
    border: none;
    stroke: #ffffff;
    stroke-width: 1;
    transform: rotateZ(90deg) translateY(8px) translateX(38px);
  }
`;

const LogoInner = styled.ol`
  list-style-type: none;
  transform: translateY(-60px) translateZ(-60px);
`;

const LoaderNum = styled.div`
  position: absolute;
  top: 50%;
  margin-top: 50px;
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 18px;
`;

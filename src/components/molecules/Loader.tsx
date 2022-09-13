import styled from '@emotion/styled';
import { useEffect, useRef, useState, VFC } from 'react';
import { color, zIndex } from '../../utils/style';
import { gsap } from 'gsap';

type LoaderProps = {
  isReady: boolean;
};
export const Loader: VFC<LoaderProps> = (props) => {
  // const { progress, item } = useProgress();

  const loaderPath = useRef(null);
  const loader = useRef(null);
  const electrode = useRef(null);

  const [isLoaderOpen, setLoaderOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const paths = {
    step1: {
      unfilled: 'M 0 0 V 0 Q 50 0 100 0 V 0 z',
      inBetween: {
        curve: 'M 0 0 V 50 Q 50 100 100 50 V 0 z',
      },
      filled: 'M 0 0 V 100 Q 50 100 100 100 V 0 z',
    },
  };

  const loaderEnd = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setLoaderOpen(true);

    if (!loaderPath.current || !loader.current || !electrode.current) return;
    gsap.timeline().fromTo(
      electrode.current,
      {
        opacity: 1,
      },
      {
        duration: 0.2,
        ease: 'power1',
        y: -30,
        opacity: 0,
        delay: 0.5,
      },
    );
    gsap
      .timeline({
        onComplete: () => {
          setIsAnimating(false);
        },
      })
      .set(loaderPath.current, {
        attr: { d: paths.step1.filled },
      })
      .set(loader.current, {
        visibility: 'visible',
      })

      .to(loaderPath.current, {
        duration: 0.5,
        ease: 'power4.in',
        attr: { d: paths.step1.inBetween.curve },
      })
      .to(loaderPath.current, {
        duration: 0.1,
        ease: 'power1',
        attr: { d: paths.step1.unfilled },
      })
      .set(loader.current, {
        visibility: 'hidden',
      });
  };

  //   return <Html center>{progress} % loaded</Html>
  useEffect(() => {
    props.isReady && loaderEnd();
  }, [props.isReady]);

  return (
    <Container ref={loader}>
      <SVG width="100vw" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          fill={color.background.middleDark}
          vectorEffect="non-scaling-stroke"
          d="M 0 0 V 100 Q 50 100 100 100 V 0 z"
          ref={loaderPath}
        />
      </SVG>
      <LoaderAnim ref={electrode}>
        <Electrode src="/loader_anim.png" />
        {/* <LoaderNum ref={counter} data-from="0" data-to="4096">{progress}</LoaderNum> */}
        {/* <LoaderNum>Loading...</LoaderNum> */}
      </LoaderAnim>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: ${zIndex.elevation.ev16};
`;

const SVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`;

const Electrode = styled.img`
  width: calc(240px * 2 / 3);
  height: calc(320px * 2 / 3);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoaderAnim = styled.div`
  width: 100%;
  height: 100%;
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

import React, { useEffect, useRef, VFC } from 'react';
import styled from '@emotion/styled';
import { color, zIndex, media } from '../../utils/style';
import { Link } from 'wouter';
import { gsap } from 'gsap';

export const Cursor: VFC = () => {
  const cursorElem = useRef(null);

  const cursorScale = document.querySelectorAll('.cursor-scale');
  const tl = gsap.timeline();
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursorElem.current!, {
          css: {
            left: posX,
            top: posY,
          },
        });
      },
    });
    document.addEventListener('mousemove', function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
    cursorScale.forEach((link) => {
      link.addEventListener('mousemove', () => {
        if (link.classList.contains('small')){
          gsap.to(cursorElem.current!, {
            width: 44,
            height: 44,
            duration: 1,
            ease: 'power3',
          });
          return
        }
        gsap.to(cursorElem.current!, {
          width: 82,
          height: 82,
          duration: 1,
          ease: 'power3',
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(cursorElem.current!, {
          width: 16,
          height: 16,
          duration: 1,
          ease: 'power3',
        });
      });
    });
  });
  return <Elem ref={cursorElem} />;
};

const Elem = styled.div`
  display: none;
  ${media.lg`
        display:block;
    `}
  position:absolute;
  width: 16px;
  height: 16px;

  z-index: ${zIndex.elevation.ev16};
  pointer-events: none;
  user-select: none;
  mix-blend-mode: difference;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: ${color.content.HighEmphasis} 1px solid;
    z-index: ${zIndex.elevation.ev16};
    transform: translate(-50%, -50%);
  }
`;

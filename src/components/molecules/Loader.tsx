import React, { VFC } from 'react';
import styled from '@emotion/styled';
import {color, zIndex,} from '../../utils/style'

export const Loader: VFC = () => {
	return (
	<LoaderAnim>
      <LoaderLogo>
        <LogoInner>
            <li className="front">
              <div className="elec__item glass__front"></div>
              <div className="elec__item mica__front"></div>
            </li>
            <li className="sideY">
              <div className="elec__item glass__side"></div>
              <li className="elec__item mica__side"></li>
              <li className="elec__item plate__side">
                <svg width="44" height="84">
                  <path d="M22 0 L1 84 L43 84 Z" fill-opacity="0"></path>
                </svg>
              </li>
            </li>
            <li className="sideX">
              <div className="elec__item glass__side"></div>
              <li className="elec__item mica__side"></li>
              <li className="elec__item plate__side">
                <svg width="44" height="84">
                  <path d="M22 0 L1 84 L43 84 Z" fill-opacity="0"></path>
                </svg>
              </li>
            </li>
        </LogoInner>
      </LoaderLogo>
      <LoaderNum>100</LoaderNum>
    </LoaderAnim>
	)
}

const LoaderAnim = styled.div`
width:100%;
height:100vh;
position:absolute;
background:#000;
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
`

const LoaderLogo = styled.div`
  position: absolute;
	top: 50%;
	left: 50%;
  perspective: 400px;
  margin-left: -40px;
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
    transform: rotateZ(90deg) translateY(8px)  translateX(38px);
    }
`

const LogoInner = styled.ol`
  list-style-type:none;
  transform: translateY(-60px) translateZ(-60px);
`

const LoaderNum = styled.p`
position: absolute;
top: 50%;
margin-top: 50px;
color: #fff;
width: 100%;
text-align: center;
font-size:18px;
`



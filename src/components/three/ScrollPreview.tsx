import { VFC } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { media, zIndex } from '../../utils/style';
import { sceneState } from '../../utils/sceneState';
import { TCanvas } from './TCanvas';

export const ScrollPreview: VFC = () => {
  const { isReady } = useSnapshot(sceneState);

  return (
    <Wrapper
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <TCanvas />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 140px;
  height: 105px;
  z-index: ${zIndex.elevation.ev8};
  pointer-events: none;
  background: transparent;

  ${media.sp`
    width: 100px;
    height: 75px;
    bottom: 32px;
    right: 32px;
  `}
`;

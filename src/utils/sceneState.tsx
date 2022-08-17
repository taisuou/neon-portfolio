import { proxy } from 'valtio';

export const sceneState = proxy({
  height: 0,
  isReady: false,
});

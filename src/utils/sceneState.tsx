import { proxy } from 'valtio';
import {ImagePlane} from '../../@types/schema'

export const sceneState = proxy({
  height: 0,
  isReady: false,
  isWorksFiltered: false,
  currentCategory: 0,
  imageMesh:[] as ImagePlane[]
});



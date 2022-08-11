import { proxy, useSnapshot } from 'valtio'

export const sceneState = proxy({
  height: 0
})
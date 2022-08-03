import { css } from '@emotion/react'

export const color = {
  primary: '#298990',
  secondary: '#CBA4A0',
  white: '#fff',
  subColor: {
    blue: '#6DC2DF',
    orange: '#FF9575',
    yellow: '#FFE895',
    red: '#B6645E',
  },
  background: {
    dark: '#151717',
    white: '#fff'
  },
  utils: {
    error: '#FF5B37',
    link: '#007AFF',
  },
  content: {
    MiddleEmphasis: 'rgba(255, 255, 255, 0.60)',
    Disable: 'rgba(255, 255, 255, 0.38)',
    HighEmphasis: 'rgba(255, 255, 255, 0.87)',
  },
} as const

export const media = {
  lg: (...args: any) => css`
    @media (min-width: 1040px) {
      ${css(...args)}
    }
  `,
  md: (...args: any) => css`
    @media (min-width: 480px) and (max-width: 1039px) {
      ${css(...args)}
    }
  `,
  mdsp: (...args: any) => css`
    @media (max-width: 1039px) {
      ${css(...args)}
    }
  `,
  sp: (...args: any) => css`
    @media (max-width: 479px) {
      ${css(...args)}
    }
  `,
}

export const curve = {
  button: 'transition: all .3s ease-out 0s !important;',
  fade: 'transition: all .6s ease-out 0s !important;',
} as const

export const zIndex = {
  base: 0,
  behind: -1,
  elevation: {
    ev4: 4,
    ev8: 8,
    ev16: 16,
  },
} as const

export const shadow = {
  ev0: '0px 0px 0px rgba(0, 0, 0, 0.0);',
  ev8: '0px 9px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.12);',
  ev16: '0px 9px 16px rgba(0, 0, 0, 0.06), 0px 2.01027px 3.57381px rgba(0, 0, 0, 0.03), 0px 0.598509px 1.06402px rgba(0, 0, 0, 0.0161557);',
  ev32: '0px 67px 94px rgba(0, 0, 0, 0.07), 0px 20.1985px 28.3382px rgba(0, 0, 0, 0.0456112), 0px 8.38944px 11.7703px rgba(0, 0, 0, 0.035), 0px 3.0343px 4.25707px rgba(0, 0, 0, 0.0243888);',
  ev64: '0px 36px 49px rgba(0, 0, 0, 0.16), 0px 15.0399px 20.471px rgba(0, 0, 0, 0.115017), 0px 8.04107px 10.9448px rgba(0, 0, 0, 0.0953772), 0px 4.50776px 6.13556px rgba(0, 0, 0, 0.08), 0px 2.39404px 3.25855px rgba(0, 0, 0, 0.0646228), 0px 0.996212px 1.35596px rgba(0, 0, 0, 0.0449833);',
} as const

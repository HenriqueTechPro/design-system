import { styled, keyframes } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const hideDownAndFade = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
})

const slideTopAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const hideTopAndFade = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-5px)',
  },
})

export const Content = styled(Tooltip.Content, {
  padding: '$3 $4',
  background: '$black',
  color: '$gray100',
  borderRadius: '$sm',

  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  lineHeight: '$short',
  userSelect: 'none',
  cursor: 'help',

  "&[data-state='delayed-open'][data-side='bottom']": {
    animation: `${slideDownAndFade} 0.3s ease-in`,
  },

  "&[data-state='closed'][data-side='bottom']": {
    animation: `${hideDownAndFade} 0.3s ease-out`,
  },

  "&[data-state='delayed-open'][data-side='top']": {
    animation: `${slideTopAndFade} 0.3s ease-in`,
  },

  "&[data-state='closed'][data-side='top']": {
    animation: `${hideTopAndFade} 0.3s ease-out`,
  },
})

export const Arrow = styled(Tooltip.Arrow, {
  fill: '$black',
})

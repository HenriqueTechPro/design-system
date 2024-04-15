import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const show = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100px)',
  },
  to: {
    transform: 'translateX(0)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  gap: '$1',

  padding: '$3 $5',
  width: '100%',
  maxWidth: 360,
  minWidth: 180,
  borderRadius: '$md',
  overflow: 'hidden',

  position: 'relative',
  right: 16,
  top: 16,

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    filter: 'brightness(0.75)',
  },

  "&[data-state='closed']": {
    animation: `${hide} 0.2s ease-out`,
  },

  "&[data-state='open']": {
    animation: `${slideIn}  0.3s ease-in, ${show}  0.3s ease-in`,
  },

  'h2, span': {
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: '$5',
  },

  variants: {
    type: {
      normal: {
        background: '$gray800',
        border: '1px solid $gray600',

        h2: {
          color: '$white',
        },
        'span, svg': {
          color: '$gray200',
        },
      },
      success: {
        background: '$ignite500',
        border: '1px solid $ignite700',

        h2: {
          color: '$white',
        },
        'span, svg': {
          color: '$gray100',
        },
      },
      error: {
        background: '$red500',
        border: '1px solid $red700',

        h2: {
          color: '$white',
        },
        'span, svg': {
          color: '$gray100',
        },
      },
      warning: {
        background: '$yellow500',
        border: '1px solid $yellow700',

        h2: {
          color: '$black',
        },
        'span, svg': {
          color: '$gray900',
        },
      },
    },
  },

  defaultVariants: {
    type: 'normal',
  },
})

export const Title = styled(Toast.Title, {
  all: 'unset',
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const Description = styled(Toast.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const CloseButton = styled(Toast.Close, {
  all: 'unset',
  width: 20,
  height: 20,
  position: 'absolute',
  right: '$4',
  top: '$4',

  transition: 'all 0.3s',

  '&:hover': {
    opacity: 0.7,
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '$8',
  right: '$8',
})

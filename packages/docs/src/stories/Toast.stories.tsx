import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Toast, ToastProps } from '@ignite-ui-domene/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Toast dispatch',
    description: 'The message has been dispatch...',
    open: true,
    type: 'normal',
  },
  argTypes: {
    type: {
      options: ['normal', 'success', 'error', 'warning'],
      control: { type: 'inline-radio' },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const Success: StoryObj<ToastProps> = {
  args: {
    type: 'success',
  },
}

export const Error: StoryObj<ToastProps> = {
  args: {
    type: 'error',
  },
}

export const Warning: StoryObj<ToastProps> = {
  args: {
    type: 'warning',
  },
}

export const ExampleToast: StoryObj<ToastProps> = {
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    open: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    description: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Button onClick={() => setOpen((state) => !state)}>
            {`Finish payment`.toUpperCase()}
          </Button>
          {Story({
            args: {
              title: 'Toast dispatch',
              description: 'Toast has been dispatch in 1s ago',
              open,
              onOpenChange: setOpen,
            },
          })}
        </Box>
      )
    },
  ],
}

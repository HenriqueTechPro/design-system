import type { StoryObj, Meta } from '@storybook/react'
import { Box, Button, Tooltip, TooltipProps } from '@ignite-ui-domene/react'


export default {
    title: 'Data display/Tooltip',
    component: Tooltip,
    args: {
        content: 'The day is avaliable for you',
        children: <Button variant='secondary'>Select day</Button>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        delayDuration: {
            control: {
                type: 'number',
            }
        }
    }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

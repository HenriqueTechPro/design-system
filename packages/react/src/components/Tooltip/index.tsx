import { ComponentProps } from 'react'
import * as TooltipUI from '@radix-ui/react-tooltip'

import { Arrow, Content } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipUI.Root> {
  content: string
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipUI.Provider>
      <TooltipUI.Root {...props}>
        <TooltipUI.Trigger asChild>{children}</TooltipUI.Trigger>

        <TooltipUI.Portal>
          <Content sideOffset={5}>
            {content}
            <Arrow />
          </Content>
        </TooltipUI.Portal>
      </TooltipUI.Root>
    </TooltipUI.Provider>
  )
}

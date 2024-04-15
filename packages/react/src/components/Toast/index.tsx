import { ComponentProps } from 'react'
import * as ToastUI from '@radix-ui/react-toast'

import {
  ToastContainer,
  Title,
  Description,
  CloseButton,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  open: boolean
}

export function Toast({
  title,
  description = undefined,
  open,
  ...props
}: ToastProps) {
  return (
    <ToastUI.Provider swipeDirection="right">
      <ToastContainer open={open} {...props}>
        <Title as="h2">{title}</Title>

        <Description as="span">{description}</Description>

        <CloseButton asChild>
          <X size={20} />
        </CloseButton>
      </ToastContainer>

      <ToastViewport />
    </ToastUI.Provider>
  )
}

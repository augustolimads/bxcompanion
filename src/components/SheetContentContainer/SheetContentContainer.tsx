import { HStack } from '@chakra-ui/react'
import { SheetContentContainerProps } from './index'

export const SheetContentContainer = (props: SheetContentContainerProps) => {

  return (
    <HStack h="60vh" overflow="hidden" align="start" py={2} px={0}>
      {props.aside && props.aside}
      {props.children}
    </HStack>
  )
}

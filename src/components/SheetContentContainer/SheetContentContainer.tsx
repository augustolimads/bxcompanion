import { HStack } from '@chakra-ui/react'
import { SheetContainer } from '../SheetContainer'
import { SheetContentContainerProps, useSheetContentContainer } from './index'

export const SheetContentContainer = (props: SheetContentContainerProps) => {
  const { result } = useSheetContentContainer()

  return (
    <SheetContainer>
      <HStack h="64vh" overflow="hidden" align="start">
        {props.aside && props.aside}
        {props.children}
      </HStack>
    </SheetContainer>
  )
}

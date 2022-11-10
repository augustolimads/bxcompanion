import { Button, VStack } from '@chakra-ui/react'
import { SheetListProps, useSheetList } from './index'

export const SheetList = (props: SheetListProps) => {
  const { result } = useSheetList()
  const buttonBg = props.buttonBg ? props.buttonBg : 'neutral.900'
  const pb = props.pb ? props.pb : 3

  return (
    <VStack w="full" h="65vh">
      {props.buttonLabel && (
        <Button
          size="xs"
          bg={buttonBg}
          color="neutral.100"
          onClick={props.onClick}
        >
          {props.buttonLabel}
        </Button>
      )}
      <VStack flex="1" w="full" overflowY="scroll" h="65vh" pb={pb}>
        {props.children}
      </VStack>
    </VStack>
  )
}

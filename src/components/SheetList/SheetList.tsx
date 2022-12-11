import { Button, Flex, VStack } from '@chakra-ui/react'
import { SheetListProps, useSheetList } from './index'

export const SheetList = (props: SheetListProps) => {
  const { result } = useSheetList()
  const buttonBg = props.buttonBg ? props.buttonBg : 'neutral.900'
  const pb = props.pb ? props.pb : 3

  return (
    <VStack w="full"  h="60vh" overflowY="hidden">
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
      <Flex
        flexDir="column"
        w="full"
        overflowY="scroll"
        pb={pb}
        gap={2}
        h="60vh"
      >
        {props.children}
      </Flex>
    </VStack>
  )
}

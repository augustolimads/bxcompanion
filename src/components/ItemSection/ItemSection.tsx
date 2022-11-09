import { Box, Button, Flex, HStack } from '@chakra-ui/react'
import { ItemSectionAside } from '../ItemSectionAside'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { result } = useItemSection()

  return (
    <HStack h="55vh" overflow="hidden" align="start">
      <ItemSectionAside />
      <Box overflowY="scroll" flex="1" height="55vh">
        <Flex flexDir="column" gap={2}>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
          <Button size="xs" w="full">
            teste
          </Button>
        </Flex>
      </Box>
    </HStack>
  )
}

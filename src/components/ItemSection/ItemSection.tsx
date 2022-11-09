import { Box, Button, Flex } from '@chakra-ui/react'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { result } = useItemSection()

  return (
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
  )
}

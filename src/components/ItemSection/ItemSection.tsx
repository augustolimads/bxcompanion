import { Button, VStack } from '@chakra-ui/react'
import { ItemSectionProps, useItemSection } from './index'

export const ItemSection = (props: ItemSectionProps) => {
  const { result } = useItemSection()

  return (
    <VStack  flex="1" w="full">
      <Button size="xs" bg="neutral.900" color="neutral.100">
        Comprar Itens
      </Button>
      <VStack w="full" overflowY="scroll" height="50vh">
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
        <Button size="md" w="full">
          teste
        </Button>
       
      </VStack>
    </VStack>
  )
}

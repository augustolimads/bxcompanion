import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import { ItemSectionAsideProps, useItemSectionAside } from './index'

export const ItemSectionAside = (props: ItemSectionAsideProps) => {
  const { result } = useItemSectionAside()

  return (
    <VStack w="6rem" color="neutral.100">
      <Box bg="neutral.500" rounded="md" p={2} w="full">
        <Text textAlign="center" fontWeight="bold">
          carga
        </Text>
        <Text textAlign="center" fontSize="xl">
          100/100
        </Text>
      </Box>
      <VStack bg="neutral.500" rounded="md" p={2} w="full" align="start">
        <HStack>
          <Text w={8}>PC</Text>
          <Text>0</Text>
        </HStack>
        <HStack>
          <Text w={8}>PP</Text>
          <Text>0</Text>
        </HStack>
        <HStack>
          <Text w={8}>PE</Text>
          <Text>0</Text>
        </HStack>
        <HStack>
          <Text w={8}>PO</Text>
          <Text>0</Text>
        </HStack>
        <HStack>
          <Text w={8}>PL</Text>
          <Text>0</Text>
        </HStack>
      </VStack>
      <Button size="xs" w="full" bg="neutral.900" color="neutral.100">
        Comprar Itens
      </Button>
    </VStack>
  )
}

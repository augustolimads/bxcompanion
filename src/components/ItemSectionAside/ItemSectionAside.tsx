import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { ItemSectionAsideProps, useItemSectionAside } from './index'

export const ItemSectionAside = (props: ItemSectionAsideProps) => {
  const { result } = useItemSectionAside()

  return (
    <VStack w="6rem" color="neutral.100">
      <Box bg="neutral.500" rounded="md" p={2} w="full">
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Jornada
        </Heading>
        <Text textAlign="center" fontSize="md">
          20
        </Text>
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Exploração
        </Heading>
        <Text textAlign="center" fontSize="md">
          20
        </Text>
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Encontro
        </Heading>
        <Text textAlign="center" fontSize="md">
          20
        </Text>
      </Box>
      <Box bg="neutral.500" rounded="md" p={2} w="full">
        <Heading textAlign="center" fontWeight="bold" fontSize="md">
          carga
        </Heading>
        <Text textAlign="center" fontSize="xl">
          100/100
        </Text>
      </Box>
      <VStack bg="neutral.500" rounded="md" p={2} w="full" align="start">
        <HStack>
          <Text w={8}>PC</Text>
          <Text flex="1">0</Text>
        </HStack>
        <HStack>
          <Text w={8}>PP</Text>
          <Text flex="1">1000</Text>
        </HStack>
        <HStack>
          <Text w={8}>PE</Text>
          <Text flex="1">999</Text>
        </HStack>
        <HStack>
          <Text w={8}>PO</Text>
          <Text flex="1">555</Text>
        </HStack>
        <HStack>
          <Text w={8}>PL</Text>
          <Text flex="1">777</Text>
        </HStack>
      </VStack>
    </VStack>
  )
}

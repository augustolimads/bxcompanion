import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { useItemSectionAside } from './index'

export const ItemSectionAside = () => {
  const { distances, coins } = useItemSectionAside()

  return (
    <VStack w="6rem" color="neutral.100">
      <Box bg="neutral.500" rounded="md" p={2} w="full">
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Jornada
        </Heading>
        <Text textAlign="center" fontSize="md">
          {distances.journey}
        </Text>
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Exploração
        </Heading>
        <Text textAlign="center" fontSize="md">
          {distances.exploration}
        </Text>
        <Heading textAlign="center" fontWeight="bold" fontSize="sm">
          Encontro
        </Heading>
        <Text textAlign="center" fontSize="md">
          {distances.encounter}
        </Text>
      </Box>
      <VStack bg="neutral.500" rounded="md" p={2} w="full" align="start">
        <Heading textAlign="center" fontWeight="bold" fontSize="md">
          Moedas
        </Heading>
        <HStack>
          <Text w={8}>PC</Text>
          <Text flex="1">{coins.copper}</Text>
        </HStack>
        <HStack>
          <Text w={8}>PP</Text>
          <Text flex="1">{coins.silver}</Text>
        </HStack>
        <HStack>
          <Text w={8}>PE</Text>
          <Text flex="1">{coins.electron}</Text>
        </HStack>
        <HStack>
          <Text w={8}>PO</Text>
          <Text flex="1">{coins.gold}</Text>
        </HStack>
        <HStack>
          <Text w={8}>PL</Text>
          <Text flex="1">{coins.platinum}</Text>
        </HStack>
      </VStack>
    </VStack>
  )
}

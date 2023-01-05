import {
  Box,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useRef } from 'react'
import { formatCoin } from 'src/utils/formatCoin'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { SheetCoinsEditor } from '../SheetCoinsEditor'
import { useItemSectionAside } from './index'

export const ItemSectionAside = () => {
  const { encounter, exploration, journey, coins, currentWeight } = useItemSectionAside()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <VStack w="8rem" color="neutral.100">
        <Box bg="neutral.500" rounded="md" p={2} w="full">
          <Heading textAlign="center" fontWeight="bold" fontSize="sm">
            Carga
          </Heading>
          <Text textAlign="center" fontSize="md">
            {currentWeight}{' '}
            <Text as="span" fontSize="xs">
              mo
            </Text>
          </Text>
          <Heading textAlign="center" fontWeight="bold" fontSize="sm">
            Jornada
          </Heading>
          <Text textAlign="center" fontSize="md">
            {journey}{' '}
            <Text as="span" fontSize="xs">
              milhas
            </Text>
          </Text>
          <Heading textAlign="center" fontWeight="bold" fontSize="sm">
            Exploração
          </Heading>
          <Text textAlign="center" fontSize="md">
            {exploration}
            <Text as="span" fontSize="xs">
              m
            </Text>
          </Text>
          <Heading textAlign="center" fontWeight="bold" fontSize="sm">
            Encontro
          </Heading>
          <Text textAlign="center" fontSize="md">
            {encounter}
            <Text as="span" fontSize="xs">
              m
            </Text>
          </Text>
        </Box>
        <VStack
          bg="neutral.500"
          rounded="md"
          p={2}
          w="full"
          align="start"
          ref={btnRef}
          onClick={onOpen}
        >
          <Heading textAlign="center" fontWeight="bold" fontSize="md">
            Moedas
          </Heading>
          <HStack>
            <Text w={8}>PC</Text>
            <Text flex="1">{formatCoin(coins.copper)}</Text>
          </HStack>
          <HStack>
            <Text w={8}>PP</Text>
            <Text flex="1">{formatCoin(coins.silver)}</Text>
          </HStack>
          <HStack>
            <Text w={8}>PE</Text>
            <Text flex="1">{formatCoin(coins.electron)}</Text>
          </HStack>
          <HStack>
            <Text w={8}>PO</Text>
            <Text flex="1">{formatCoin(coins.gold)}</Text>
          </HStack>
          <HStack>
            <Text w={8}>PL</Text>
            <Text flex="1">{formatCoin(coins.platinum)}</Text>
          </HStack>
        </VStack>
      </VStack>
      <CharacterSheetEditor
        label={`Moedas`}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        hasMenu
      >
        <SheetCoinsEditor />
      </CharacterSheetEditor>
    </>
  )
}

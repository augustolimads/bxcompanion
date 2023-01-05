import { Button, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { colors } from 'src/styles/colors'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { HitpointEditor } from '../HitpointEditor'
import { HeartIcon } from '../Icons'
import { ProgressHp } from '../ProgressHp'
import { HitpointProps, useHitpoint } from './index'

export const Hitpoint = (props: HitpointProps) => {
  const {
    currentHP,
    maxHP,
    excededHP,
    isExceded,
    fullCurrentHP,
    increaseHitpoint,
    decreaseHitpoint
  } = useHitpoint()

  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex gap={1}>
        <Button
          size="sm"
          bg="neutral.900"
          color="neutral.100"
          fontWeight="bold"
          onClick={decreaseHitpoint}
          _focus={{ bg: 'neutral.900' }}
        >
          -
        </Button>
        <Flex
          flex="1"
          bg="neutral.500"
          rounded="md"
          px={2}
          justify="space-between"
          align="center"
          gap={1}
          ref={btnRef}
          onClick={onOpen}
        >
          <HStack>
            <HeartIcon color={colors.neutral[300]} />
            <Text color="neutral.100" fontSize="xs" w={10}>
              {currentHP}/{maxHP}
              {isExceded && excededHP}
            </Text>
          </HStack>
          <ProgressHp value={fullCurrentHP} max={maxHP} />
        </Flex>
        <Button
          size="sm"
          bg="neutral.900"
          color="neutral.100"
          fontWeight="bold"
          onClick={increaseHitpoint}
          _focus={{ bg: 'neutral.900' }}
        >
          +
        </Button>
      </Flex>
      <CharacterSheetEditor
        label="Edição de Pontos de vida"
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <HitpointEditor />
      </CharacterSheetEditor>
    </>
  )
}

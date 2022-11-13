import { Button, Flex, Text } from '@chakra-ui/react'
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

  return (
    <Flex gap={1}>
      <Button
        size="sm"
        bg="neutral.900"
        color="neutral.100"
        fontWeight="bold"
        onClick={decreaseHitpoint}
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
      >
        <Text color="neutral.100" fontSize="xs">
          {currentHP}/{maxHP}
          {isExceded && excededHP}
        </Text>
        <ProgressHp value={fullCurrentHP} max={maxHP} />
      </Flex>
      <Button
        size="sm"
        bg="neutral.900"
        color="neutral.100"
        fontWeight="bold"
        onClick={increaseHitpoint}
      >
        +
      </Button>
    </Flex>
  )
}

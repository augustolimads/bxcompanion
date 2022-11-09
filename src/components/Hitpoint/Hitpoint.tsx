import { Button, Flex, Text } from '@chakra-ui/react'
import { ProgressHp } from '../ProgressHp'
import { HitpointProps, useHitpoint } from './index'

export const Hitpoint = (props: HitpointProps) => {
  const { result } = useHitpoint()

  return (
    <Flex gap={1}>
      <Button size="sm" bg="neutral.900" color="neutral.100" fontWeight="bold">
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
        <Text color="neutral.100" fontSize="xs">10/20+2</Text>
        <ProgressHp value={20} max={100} extra={3} />
      </Flex>
      <Button size="sm" bg="neutral.900" color="neutral.100" fontWeight="bold">
        +
      </Button>
    </Flex>
  )
}

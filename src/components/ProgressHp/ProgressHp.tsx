import { Box, Flex } from '@chakra-ui/react'
import { ProgressHpProps, useProgressHp } from './index'

export const ProgressHp = (props: ProgressHpProps) => {
  const { currentPercent, extraPercent, barColor } = useProgressHp()

  return (
    <Flex
      flex="1"
      bg="neutral.300"
      h={2}
      rounded="sm"
      w="full"
      justify="space-between"
    >
      <Box h="full" w={`${currentPercent}%`} bg={barColor()} />
      <Box h="full" w={`${extraPercent}%`} bg="blue" />
    </Flex>
  )
}

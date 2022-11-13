import { Box, Flex } from '@chakra-ui/react'
import { ProgressLevelProps, useProgressLevel } from './index'

export const ProgressLevel = (props: ProgressLevelProps) => {
  const { currentPercent } = useProgressLevel(props.current, props.max)

  return (
    <Flex flex="1" bg="neutral.500" h={1} rounded="sm">
      <Box h="full" w={`${currentPercent}%`} bg="neutral.100" />
    </Flex>
  )
}

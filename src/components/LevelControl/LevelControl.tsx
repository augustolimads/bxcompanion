import { Box, Flex, Text } from '@chakra-ui/react'
import { ProgressLevel } from '../ProgressLevel'
import { LevelControlProps, useLevelControl } from './index'

export const LevelControl = (props: LevelControlProps) => {
  const { charClass, level, currentXP, maxXP } = useLevelControl()

  return (
    <Box
      border="1px"
      borderColor="neutral.100"
      rounded="md"
      py={1}
      px={4}
      pb={2}
      color="neutral.100"
      w="full"
    >
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">
          {charClass} NV {level}
        </Text>
        <Text>
          XP: {currentXP}/{maxXP}
        </Text>
      </Flex>
      <ProgressLevel
        current={currentXP}
        max={maxXP}
      />
    </Box>
  )
}

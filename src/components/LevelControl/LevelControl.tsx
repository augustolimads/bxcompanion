import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { LevelSheetEditor } from '../LevelSheetEditor'
import { ProgressLevel } from '../ProgressLevel'
import { LevelControlProps, useLevelControl } from './index'

export const LevelControl = (props: LevelControlProps) => {
  const { charClass, level, currentXP, maxXP } = useLevelControl()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        border="1px"
        borderColor="neutral.100"
        rounded="md"
        py={1}
        px={4}
        pb={2}
        color="neutral.100"
        w="full"
        ref={btnRef}
        onClick={onOpen}
      >
        <Flex justifyContent="space-between">
          <Text fontWeight="bold">
            {charClass} NV {level}
          </Text>
          <Text>
            XP: {currentXP}/{maxXP}
          </Text>
        </Flex>
        <ProgressLevel current={currentXP} max={maxXP} />
      </Box>
      <CharacterSheetEditor isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <LevelSheetEditor />
      </CharacterSheetEditor>
    </>
  )
}

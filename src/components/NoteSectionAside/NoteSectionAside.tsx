import { Box, Heading, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRef } from 'react'
import { AlignmentSheetEditor } from '../AlignmentSheetEditor'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { ProficiencySheetEditor } from '../ProficiencySheetEditor'
import { NoteSectionAsideProps, useNoteSectionAside } from './index'

export const NoteSectionAside = (props: NoteSectionAsideProps) => {
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    activeModal,
    handleActiveModal,
    alignment,
    vision,
    languages,
    armors,
    weapons
  } = useNoteSectionAside()

  return (
    <>
      <VStack align="start" color="neutral.100" w="10rem">
        <Box
          bg="neutral.500"
          p={2}
          rounded="md"
          w="full"
          ref={btnRef}
          onClick={() => handleActiveModal('alignment', onOpen())}
        >
          <Heading fontWeight="bold" fontSize="sm">
            Alinhamento
          </Heading>
          <Text fontSize="sm">{alignment}</Text>
          <Heading fontWeight="bold" fontSize="sm">
            Visão
          </Heading>
          <Text fontSize="sm">{vision}</Text>
          <Heading fontWeight="bold" fontSize="sm">
            Línguas
          </Heading>
          <Text fontSize="sm">{languages.join(', ')}</Text>
        </Box>

        <VStack
          bg="neutral.500"
          p={2}
          rounded="md"
          w="full"
          align="start"
          ref={btnRef}
          onClick={() => handleActiveModal('proficiency', onOpen())}
        >
          <Heading fontSize="lg">Proficiências</Heading>
          <Box>
            <Heading fontWeight="bold" fontSize="sm">
              Armaduras
            </Heading>
            <Text fontSize="sm">{armors.join(', ')}</Text>
          </Box>
          <Box>
            <Heading fontWeight="bold" fontSize="sm">
              Armas
            </Heading>
            <Text fontSize="sm">{weapons}</Text>
          </Box>
        </VStack>
      </VStack>
      <CharacterSheetEditor
        label={activeModal === 'alignment' ? 'Edição de Informações' : 'Edição de Proficiências'}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        {activeModal === 'alignment' ? (
          <AlignmentSheetEditor />
        ) : (
          <ProficiencySheetEditor />
        )}
      </CharacterSheetEditor>
    </>
  )
}

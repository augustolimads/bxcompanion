import { Box, Heading, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useRef } from 'react'
import { AlignmentSheetEditor } from '../AlignmentSheetEditor'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { ProficiencySheetEditor } from '../ProficiencySheetEditor'
import { NoteSectionAsideProps, useNoteSectionAside } from './index'

export const NoteSectionAside = (props: NoteSectionAsideProps) => {
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { activeModal, handleActiveModal } = useNoteSectionAside()

  return (
    <>
      <VStack align="start" color="neutral.100" w="10rem">
        <Box
          bg="neutral.500"
          p={2}
          rounded="md"
          w="full"
          ref={btnRef}
          onClick={() => handleActiveModal('aligment', onOpen())}
        >
          <Heading fontWeight="bold" fontSize="sm">
            Alinhamento
          </Heading>
          <Text fontSize="sm">Neutro</Text>
          <Heading fontWeight="bold" fontSize="sm">
            Visão
          </Heading>
          <Text fontSize="sm">Penumbra</Text>
          <Heading fontWeight="bold" fontSize="sm">
            Línguas
          </Heading>
          <Text fontSize="sm">Comum, anão</Text>
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
              Escudos
            </Heading>
            <Text fontSize="sm">leves, pesados</Text>
          </Box>
          <Box>
            <Heading fontWeight="bold" fontSize="sm">
              Armaduras
            </Heading>
            <Text fontSize="sm">leves, pesados</Text>
          </Box>
          <Box>
            <Heading fontWeight="bold" fontSize="sm">
              Armas
            </Heading>
            <Text fontSize="sm">leves, pesados</Text>
          </Box>
        </VStack>
      </VStack>
      <CharacterSheetEditor
        label="Edição de nível"
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        {activeModal === 'aligment' ? (
          <AlignmentSheetEditor />
        ) : (
          <ProficiencySheetEditor />
        )}
      </CharacterSheetEditor>
    </>
  )
}

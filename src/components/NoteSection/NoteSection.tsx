import { Button, VStack } from '@chakra-ui/react'
import { SimpleNote } from '../SimpleNote'
import { NoteSectionProps, useNoteSection } from './index'

export const NoteSection = (props: NoteSectionProps) => {
  const { result } = useNoteSection()

  return (
    <VStack w="full">
      <Button size="sm" bg="primary.500" color="neutral.100">
        Nova nota
      </Button>
      <VStack w="full">
        <SimpleNote title="teste" content="ui" />
        <SimpleNote title="teste" content="ui" />
        <SimpleNote title="teste" content="ui" />
      </VStack>
    </VStack>
  )
}

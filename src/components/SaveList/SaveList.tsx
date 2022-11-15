import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { useCharacter } from 'src/hooks/useCharacter/useCharacter'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { SaveListEditor } from '../SaveListEditor'
import { SavingThrow } from '../SavingThrow'
import { SaveListProps, useSaveList } from './index'

export const SaveList = (props: SaveListProps) => {
  const { result } = useSaveList()
  const { character } = useCharacter()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <>
      <Flex gap={1} justify="space-between" ref={btnRef} onClick={onOpen}>
        {character.saves.map((item) => {
          return (
            <SavingThrow
              label={item.abbreviate}
              value={item.value}
              highLight={item.ref === 'vsMagic'}
              symbol={item.ref === 'vsMagic'}
            />
          )
        })}
      </Flex>
      <CharacterSheetEditor label="Edição de salvaguardas" isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <SaveListEditor />
      </CharacterSheetEditor>
    </>
  )
}

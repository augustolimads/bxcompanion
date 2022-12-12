import { Flex, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { SaveListEditor } from '../SaveListEditor'
import { SavingThrow } from '../SavingThrow'
import { SaveListProps, useSaveList } from './index'

export const SaveList = (props: SaveListProps) => {
  const { vsMagicMod, saveList } = useSaveList()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex gap={1} justify="space-between" ref={btnRef} onClick={onOpen}>
        {saveList.map((item) => {
          return (
            <SavingThrow
              key={item.id}
              label={item.abbreviate}
              value={
                item.id === 'vsMagic'
                  ? vsMagicMod
                  : item.value
              }
              highLight={item.id === 'vsMagic'}
              symbol={item.id === 'vsMagic'}
            />
          )
        })}
      </Flex>
      <CharacterSheetEditor
        label="Edição de salvaguardas"
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <SaveListEditor />
      </CharacterSheetEditor>
    </>
  )
}

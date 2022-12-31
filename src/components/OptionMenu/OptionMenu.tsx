import { MenuItem, Text, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { CharacterSheetEditor } from '../CharacterSheetEditor';
import { OptionMenuProps } from './index';

export const OptionMenu = (props: OptionMenuProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
  <>
    <MenuItem _focus={{ bg: 'neutral.700' }}
      ref={btnRef}
      onClick={onOpen}
    >{props.label}</MenuItem>
    <CharacterSheetEditor
      label={`Edição de teste`}
      isOpen={isOpen}
      onClose={onClose}
      btnRef={btnRef}
    >
      <Text>oi</Text>
    </CharacterSheetEditor>
  </>
  );
}

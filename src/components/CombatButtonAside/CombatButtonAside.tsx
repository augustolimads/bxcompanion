import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { CharacterSheetEditor } from '../CharacterSheetEditor';
import { CombatButtonAsideProps, useCombatButtonAside } from './index';

export const CombatButtonAside = (props: CombatButtonAsideProps) => {
  const { result } = useCombatButtonAside()
  const btnRef = useRef<HTMLButtonElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button w="full" bg="transparent" h={props.h && props.h} ref={btnRef}
        onClick={onOpen}>
        {props.children}
      </Button>
      <CharacterSheetEditor
        label={`Edição de`}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
      >
        <Text>pera</Text>
      </CharacterSheetEditor>
    </>
  );
}

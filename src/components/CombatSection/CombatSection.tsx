import { Button } from '@chakra-ui/react';
import { SheetList } from '../SheetList';
import { CombatSectionProps, useCombatSection } from './index';

export const CombatSection = (props:CombatSectionProps) => {
  const {result} = useCombatSection()

  return (
    <SheetList buttonLabel='Novo Equipamento'>
      <Button w="full">teste</Button>
    </SheetList>
  );
}

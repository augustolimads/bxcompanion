import { VStack } from '@chakra-ui/react';
import { SimpleNote } from '../SimpleNote';
import { AbilitySectionProps, useAbilitySection } from './index';

export const AbilitySection = (props:AbilitySectionProps) => {
  const {result} = useAbilitySection()

  return (
    <VStack overflowY="scroll" h="55vh">
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
      <SimpleNote
        title='Ataque Básico à Distância'
        content='Padrão / à distância 20, Padrão / à distância 20, Padrão / à '
      />
    </VStack>
  );
}

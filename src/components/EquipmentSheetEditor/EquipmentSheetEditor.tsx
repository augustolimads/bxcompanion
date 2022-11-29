import { Box, Text } from '@chakra-ui/react';
import { EquipmentSheetEditorProps, useEquipmentSheetEditor } from './index';

export const EquipmentSheetEditor = (props:EquipmentSheetEditorProps) => {
  const {result} = useEquipmentSheetEditor()

  return (
    <Box>
      <Text fontSize='md'>Nome do equipamento</Text>
      <Text fontSize='md'>select de tipo: arma, armadura, munição</Text>
      <Text fontSize='md'>bonus</Text>
      <Text fontSize='md'>dano</Text>
      <Text fontSize='md'>CA bonus</Text>
      <Text fontSize='md'>quantidade</Text>
      <Text fontSize='md'>TextArea com descrição</Text>
    </Box>
  );
}

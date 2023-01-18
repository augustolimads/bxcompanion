import { Box, Text } from '@chakra-ui/react';
import { ProficiencySheetEditorProps, useProficiencySheetEditor } from './index';

export const ProficiencySheetEditor = (props:ProficiencySheetEditorProps) => {
  const {result} = useProficiencySheetEditor()

  return (
    <Box>
      <Text fontSize='md'>ProficiencySheetEditor</Text>
    </Box>
  );
}

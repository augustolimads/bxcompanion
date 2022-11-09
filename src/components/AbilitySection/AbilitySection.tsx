import { Box, Text } from '@chakra-ui/react';
import { AbilitySectionProps, useAbilitySection } from './index';

export const AbilitySection = (props:AbilitySectionProps) => {
  const {result} = useAbilitySection()

  return (
    <Box>
      <Text fontSize='md'>AbilitySection</Text>
    </Box>
  );
}

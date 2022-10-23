import { Box, Text } from '@chakra-ui/react';
import { TeamContentProps, useTeamContent } from './index';

export const TeamContent = (props:TeamContentProps) => {
  const {result} = useTeamContent()

  return (
    <Box>
      <Text fontSize='md'>TeamContent</Text>
    </Box>
  );
}

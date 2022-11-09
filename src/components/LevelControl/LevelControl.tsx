import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import { LevelControlProps, useLevelControl } from './index';

export const LevelControl = (props: LevelControlProps) => {
  const { result } = useLevelControl()

  return (
    <Box border="1px" borderColor="neutral.100" rounded="md" py={1} px={4} pb={2} color="neutral.100" w="full">
      <Flex justifyContent="space-between">
        <Text fontWeight="bold">Guerreiro NV 1</Text>
        <Text>XP: 10/200</Text>
      </Flex>
      <Progress value={20} max={100} bg="neutral.500" colorScheme='whiteAlpha' size='xs' />
    </Box>
  );
}

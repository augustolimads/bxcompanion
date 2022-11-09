import { Button, Flex, HStack, Image, Show, Text, VStack } from '@chakra-ui/react';
import { Attribute } from '../Attribute';
import { Hitpoint } from '../Hitpoint';
import { LevelControl } from '../LevelControl';
import { SavingThrow } from '../SavingThrow';
import { MainContentProps, useMainContent } from './index';

export const MainContent = (props: MainContentProps) => {
  const { result } = useMainContent()

  return (
    <VStack align="normal">
      <Flex justifyContent="space-between" gap={3}>
        <Show above="sm">
          <Image src="/images/avatar.jpg" rounded="md" objectFit="cover" />
        </Show>
        <VStack w="100%" align="flex-start">
          <Text color="white" fontWeight="bold" fontSize="xl">Falkor o pirata</Text>
          <LevelControl />
          <HStack w="full">
            <Button size="sm" w="full" bg="neutral.500" color="neutral.100">CA 9</Button>
            <Button size="sm" w="full" bg="neutral.500" color="neutral.100">BA 15</Button>
            <Button size="sm" w="full" bg="neutral.500" color="neutral.100">inic. 15</Button>
          </HStack>
        </VStack>
      </Flex>
      <Flex gap={1} justify="space-between">
        <Attribute label="for" value={12}/>
        <Attribute label="des" value={12}/>
        <Attribute label="con" value={12}/>
        <Attribute label="int" value={12}/>
        <Attribute label="sab" value={12}/>
        <Attribute label="car" value={12}/>
      </Flex>
      <Flex gap={1} justify="space-between">
        <SavingThrow label="vs magia" value={1} highLight symbol />
        <SavingThrow label="morte" value={2} />
        <SavingThrow label="varinhas" value={2} />
        <SavingThrow label="paralisia" value={2} />
        <SavingThrow label="sopro" value={2} />
        <SavingThrow label="feitiços" value={2} />
      </Flex>
      <Hitpoint />
    </VStack>
  );
}

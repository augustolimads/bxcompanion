import { Button, Text } from '@chakra-ui/react';
import { MainHButtonProps, useMainHButton } from './index';

export const MainHButton = (props: MainHButtonProps) => {
  const { result } = useMainHButton()

  return (
    <Button size="sm" w="full" flexDirection="column" bg="neutral.500" color="neutral.100">
      <Text as="span" fontSize={["xs", "sm"]} >
        {props.value}
      </Text>
      <Text as="span" fontSize={["xs", "sm"]} >
        {props.label}
      </Text>
    </Button>
  );
}

import { Button, Text } from '@chakra-ui/react'
import { EquipmentProps, useEquipment } from './index'

export const Equipment = (props: EquipmentProps) => {
  const { result } = useEquipment()

  return (
    <Button
      w="full"
      bg="neutral.300"
      size="sm"
      color="white"
      gap={1}
      justifyContent="start"
    >
      {props.amount && (
        <Text color="neutral.100" justifySelf="start">
          {props.amount}x
        </Text>
      )}
      <Text>{props.label}</Text>
      {props.bonus && <Text color="neutral.100">{props.bonus}</Text>}
      {props.damage && (
        <Text color="neutral.100" ml={3}>
          {props.damage}
        </Text>
      )}
    </Button>
  )
}

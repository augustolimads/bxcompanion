import { Box, Flex, Text } from '@chakra-ui/react'
import { formatBonus } from 'src/utils/formatBonus'
import { EquipmentSummaryProps, useEquipmentSummary } from './index'

export const EquipmentSummary = (props: EquipmentSummaryProps) => {
  const { result } = useEquipmentSummary()

  return (
    <Box border="1px" w="full" rounded="lg">
      <Box>
        <Text align="center" p={2}>
          {props.equippedItem.label}
        </Text>
      </Box>
      <Flex justifyContent="space-between">
        {props.equippedItem.TAC0Bonus && (
          <Box flex="1" borderTop="1px">
            <Text align="center" p={2}>
               {formatBonus(props.equippedItem.TAC0Bonus)}
            </Text>
          </Box>
        )}
        {props.equippedItem.ACBonus && (
          <Box flex="1" borderTop="1px">
            <Text align="center" p={2}>
              CA {props.equippedItem.ACBonus}
            </Text>
          </Box>
        )}
        <Box borderLeft="1px" />
        {props.equippedItem.damage && (
          <Box flex="1" borderTop="1px">
            <Text align="center" p={2}>
              dano: {props.equippedItem.damage}
            </Text>
          </Box>
        )}
         {props.equippedItem.amount && props.equippedItem.type === 'ammo' && (
          <Box flex="1" borderTop="1px">
            <Text align="center" p={2}>
              qtd. {props.equippedItem.amount}
            </Text>
          </Box>
        )}
      </Flex>
      {props.equippedItem.description && (
        <Box borderTop="1px">
          <Text p={2}>{props.equippedItem.description}</Text>
        </Box>
      )}
    </Box>
  )
}

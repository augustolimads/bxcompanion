import { Flex, HStack, Text } from '@chakra-ui/react'
import { SheetList } from 'src/components/SheetList'
import { formatBonus } from 'src/utils/formatBonus'
import { HandIcon, WeightIcon } from '../Icons'
import {
  CombatEquipmentItemEditorProps,
  useCombatEquipmentItemEditor
} from './index'

export const CombatEquipmentItemEditor = (
  props: CombatEquipmentItemEditorProps
) => {
  const { equipmentList, handleWearEquipment } = useCombatEquipmentItemEditor(
    props?.type
  )

  return (
    <SheetList>
      {equipmentList.map((el) => (
        <Flex
          key={el.id}
          rounded="md"
          p={1}
          w="full"
          alignItems="center"
          bg="neutral.300"
          color="white"
          gap={1}
          justifyContent="start"
          borderWidth={Boolean(el.equippedOn) ? 2 : 0}
          onClick={() => handleWearEquipment(el.equippedOn, el.id)}
        >
          <HStack>
            {Boolean(el.equippedOn) && <HandIcon />}
            {el.type === 'ammo' && (
              <Text color="neutral.100" justifySelf="start">
                {el.amount}x
              </Text>
            )}
          </HStack>
          <Text>{el.label}</Text>
          {el.type === 'weapon' && el.TAC0Bonus && (
            <Text color="neutral.100">{formatBonus(el.TAC0Bonus)}</Text>
          )}
          {(el.type === 'armor' ||
            el.type === 'shield' ||
            el.type === 'helmet') &&
            el.ACBonus && <Text color="neutral.100">{el.ACBonus}</Text>}
          {el.type === 'weapon' && el.damage && (
            <Text color="neutral.100" ml={3}>
              dano: {el.damage}
            </Text>
          )}
          <HStack ml="auto" key={el.id}>
            <WeightIcon size={14} />
            <Text color="neutral.100">
              {(el.weight || 0) * (el.amount || 1)}
            </Text>
          </HStack>
        </Flex>
      ))}
    </SheetList>
  )
}

import { Box, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { formatBonus } from 'src/utils/formatBonus'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { EquipmentSheetEditor } from '../EquipmentSheetEditor'
import { HandIcon, WeightIcon } from '../Icons'
import { EquipmentProps, useEquipment } from './index'

export const Equipment = (props: EquipmentProps) => {
  const { result } = useEquipment()
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex      
        rounded="md"
        p={1}
        w="full"
        alignItems='center'
        bg="neutral.300"
        color="white"
        gap={1}
        justifyContent="start"
        borderWidth={props.isEquipped ? 2 : 0}
        ref={btnRef}
        onClick={onOpen}
      >
        {props.type === 'ammo' && (
          <Text color="neutral.100" justifySelf="start">
            {props.amount}x
          </Text>
        )}
        <Text>{props.label}</Text>
        {props.type === 'weapon' && props.TAC0Bonus && (
          <Text color="neutral.100">{formatBonus(props.TAC0Bonus)}</Text>
        )}
        {props.type === 'armor' && props.ACBonus && (
          <Text color="neutral.100">{props.ACBonus}</Text>
        )}
        {props.type === 'weapon' && props.damage && (
          <Text color="neutral.100" ml={3}>
            dano: {props.damage}
          </Text>
        )}
        <Box ml="auto">
          {props.weight && props.weight > 0 && (
            <HStack>
              <WeightIcon size={14} />
              <Text color="neutral.100">{props.weight * (props.amount || 1)}</Text>
            </HStack>
          )}
          {props.isEquipped && <HandIcon />}
        </Box>
      </Flex>
      <CharacterSheetEditor
        label={`Edição de Equipamento`}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        hasMenu
      >
        <EquipmentSheetEditor id={props.id} />
      </CharacterSheetEditor>
    </>
  )
}

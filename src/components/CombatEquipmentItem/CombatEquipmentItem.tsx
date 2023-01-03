import { Center, GridItem, Image, Text, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { colors } from 'src/styles/colors'
import { CharacterSheetEditor } from '../CharacterSheetEditor'
import { CombatEquipmentItemEditor } from '../CombatEquipmentItemEditor'
import {
  ArmorIcon,
  BackpackIcon,
  HelmetIcon,
  OpenHand,
  QuiverIcon,
  RingIcon
} from '../Icons'
import { CombatEquipmentItemProps, useCombatEquipmentItem } from './index'

export const CombatEquipmentItem = (props: CombatEquipmentItemProps) => {
  const { getEquipmentImage } = useCombatEquipmentItem({
    imageRef: props.imageRef
  })
  const btnRef = useRef<HTMLDivElement>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const equipmentEmptyIcon = () => {
    switch (props.type) {
      case 'ammo':
        return <QuiverIcon size="24" color={colors.neutral[700]} />
      case 'misc':
        return <BackpackIcon size="24" color={colors.neutral[700]} />
      case 'magic':
        return <RingIcon size="24" color={colors.neutral[700]} />
      case 'helmet':
        return <HelmetIcon size="24" color={colors.neutral[700]} />
      case 'armor':
        return <ArmorIcon size="24" color={colors.neutral[700]} />
      case 'weapon':
        return <OpenHand size="24" color={colors.neutral[700]} />
      default:
        return <RingIcon size="24" color={colors.neutral[700]} />
    }
  }

  return (
    <>
      <GridItem
        bg="neutral.300"
        rounded="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100%"
        ref={btnRef}
        onClick={onOpen}
      >
        <Center position="relative" overflow="hidden" h="100%" w="100%">
          {!props.imageRef && equipmentEmptyIcon()}
          {props.imageRef && (
            <Image
              src={getEquipmentImage(props.imageRef)}
              objectFit="contain"
              maxW={props.size === 'lg' ? '5rem' : '3rem'}
              maxH={props.size === 'lg' ? '5rem' : '3rem'}
            />
          )}
          <Text
            padding="0 4px"
            position="absolute"
            bottom="0"
            left="0"
            bg="neutral.900"
            color="neutral.100"
            textAlign="center"
            opacity={0.5}
            roundedBottomLeft="md"
          >
            {props.primaryInfo}
          </Text>
          <Text
            padding="0 4px"
            position="absolute"
            bottom="0"
            right="0"
            bg="neutral.900"
            color="neutral.100"
            textAlign="center"
            opacity={0.5}
            roundedBottomRight="md"
          >
            {props.secondaryInfo}
          </Text>
        </Center>
      </GridItem>
      <CharacterSheetEditor
        label={`Selecione o equipamento`}
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        hasMenu
      >
        <CombatEquipmentItemEditor id={props.id} type={props.type} />
      </CharacterSheetEditor>
    </>
  )
}

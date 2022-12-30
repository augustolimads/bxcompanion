import { Box, Grid } from '@chakra-ui/react'
import { CombatEquipmentItem } from '../CombatEquipmentItem'
import { CombatSectionProps } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  return (
    <Box w="95vw" h="58vh" px="2">
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 5rem)"
        gap={2}
      >
        <CombatEquipmentItem
          size="lg"
          type="misc"
          image="/images/equipments/bow.png"
        />
        <CombatEquipmentItem
          size="lg"
          type="helmet"
          image="/images/equipments/helmet.png"
        />
        <CombatEquipmentItem
          type="ammo"
          image="/images/equipments/Arrow.png"
          primaryInfo="12"
        />
        <CombatEquipmentItem
          size="lg"
          type="weapon"
          image="/images/equipments/Sword.png"
          primaryInfo="+1"
          secondaryInfo="d6+2"
        />
        <CombatEquipmentItem
          size="lg"
          type="armor"
          image="/images/equipments/armor.png"
          secondaryInfo="CA 12"
        />
        <CombatEquipmentItem
          size="lg"
          type="weapon"
          image="/images/equipments/shieldSmall.png"
          secondaryInfo="CA +1"
        />
      </Grid>
      <Grid
        pt="8"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 4rem)"
        gap={2}
      >
        <CombatEquipmentItem image="/images/equipments/Wand.png" />
        <CombatEquipmentItem image="/images/equipments/scroll.png" />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
        <CombatEquipmentItem />
      </Grid>
    </Box>
  )
}

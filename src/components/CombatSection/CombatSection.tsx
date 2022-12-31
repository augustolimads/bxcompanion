import { Box, Grid } from '@chakra-ui/react'
import { CombatEquipmentItem } from '../CombatEquipmentItem'
import { CombatSectionProps, useCombatSection } from './index'

export const CombatSection = (props: CombatSectionProps) => {
  const { magicItensList, mainEquipmentList } = useCombatSection()

  return (
    <Box w="95vw" h="58vh" px="2">
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(2, 5rem)"
        gap={2}
      >
        {mainEquipmentList.map((el) => {
          console.log(el)
          return(
          <CombatEquipmentItem
            key={el.id}
            type={el.id}
            imageRef={el.imageRef}
            size={el?.size}
            primaryInfo={el.primaryInfo}
            secondaryInfo={el.secondaryInfo}
          />
        )})}
      </Grid>
      <Grid
        pt="8"
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(3, 4rem)"
        gap={2}
      >
        {magicItensList.map((el, index) => (
          <CombatEquipmentItem
            key={'magic' + index}
            id={'magic' + index}
            type={'magic' + index}
            imageRef={el.imageRef}
          />
        ))}
      </Grid>
    </Box>
  )
}

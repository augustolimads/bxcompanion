import { Text } from '@chakra-ui/react'
import { CharacterSheetNameProps, useCharacterSheetName } from './index'

export const CharacterSheetName = (props: CharacterSheetNameProps) => {
  const { name } = useCharacterSheetName()


  return (
    <Text fontSize="md" flex="1" textAlign="center">
      {name}
    </Text>
  )
}

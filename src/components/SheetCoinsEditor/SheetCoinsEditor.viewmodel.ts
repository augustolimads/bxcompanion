import { actions, useCharacter } from 'src/stores/SheetCharacter'
import { CoinProps } from 'src/stores/SheetCharacter/SheetCharacter.types'

export const useSheetCoinsEditor = () => {
  const { character, dispatch } = useCharacter()
  const copper = character.itens.coins.copper
  const silver = character.itens.coins.silver
  const electron = character.itens.coins.electron
  const gold = character.itens.coins.gold
  const platinum = character.itens.coins.platinum

  const editCoinList = (props: CoinProps) => {
    const values = {
      copper: Number(props.copper),
      electron: Number(props.electron),
      gold: Number(props.gold),
      platinum: Number(props.platinum),
      silver: Number(props.silver)
    }
    dispatch(actions.editCoinList(values))
  }

  return { copper, silver, electron, gold, platinum, editCoinList }
}

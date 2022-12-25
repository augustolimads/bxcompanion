import { useCharacter } from "src/stores/SheetCharacter"
import { AttrListProps } from "./AttributeList.types"

export const useAttributeList = () => {
    const { character } = useCharacter()

    const attrList = [
        {
            id: 'str',
            label: 'Força',
            abbreviate: 'for',
            value: character.attr.str
        },
        {
            id: 'int',
            label: 'Inteligência',
            abbreviate: 'int',
            value: character.attr.int
        },
        {
            id: 'wis',
            label: 'Sabedoria',
            abbreviate: 'sab',
            value: character.attr.wis
        },
        {
            id: 'dex',
            label: 'Destreza',
            abbreviate: 'des',
            value: character.attr.dex
        },
        {
            id: 'con',
            label: 'Constituição',
            abbreviate: 'con',
            value: character.attr.con
        },
        {
            id: 'cha',
            label: 'Carisma',
            abbreviate: 'car',
            value: character.attr.cha
        },
    ] as AttrListProps[]
    return {attrList}
}

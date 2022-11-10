import { SheetList } from '../SheetList'
import { SimpleNote } from '../SimpleNote'
import { SpellSectionProps, useSpellSection } from './index'

export const SpellSection = (props: SpellSectionProps) => {
  const { result } = useSpellSection()

  return (
    <SheetList buttonLabel="Nova magia">
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
      <SimpleNote title="teste" content="ui" />
    </SheetList>
  )
}

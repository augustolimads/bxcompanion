import { SheetList } from '../SheetList'
import { SimpleNote } from '../SimpleNote'
import { NoteSectionProps, useNoteSection } from './index'

export const NoteSection = (props: NoteSectionProps) => {
  const { result } = useNoteSection()

  return (
    <SheetList buttonLabel="Nova nota" buttonBg="primary.500">
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
      <SimpleNote
        title="Ataque Básico à Distância"
        content="Padrão / à distância 20, Padrão / à distância 20, Padrão / à "
      />
    </SheetList>
  )
}

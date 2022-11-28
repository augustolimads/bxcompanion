import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { LevelSheetEditorProps, useLevelSheetEditor } from './index'

export const LevelSheetEditor = (props: LevelSheetEditorProps) => {
  const { editLevelSheet, character } = useLevelSheetEditor()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      level: character.level,
      currentXP: character.currentXP,
      maxXP: character.maxXP,
      xpBonus: character.xpBonus
    }
  })

  return (
    <VStack as="form" align="left" onSubmit={handleSubmit(editLevelSheet)}>
      <FormControl>
        <FormLabel htmlFor="level">Nível</FormLabel>
        <NumberInput
          name="level"
          id="level"
          min={0}
          max={20}
          aria-invalid={errors.level ? 'true' : 'false'}
        >
          <NumberInputField {...register('level')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.level && (
          <FormErrorMessage>{errors.level.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="currentXP">XP atual</FormLabel>
        <NumberInput
          name="currentXP"
          id="currentXP"
          min={0}
          aria-invalid={errors.currentXP ? 'true' : 'false'}
        >
          <NumberInputField {...register('currentXP')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.currentXP && (
          <FormErrorMessage>{errors.currentXP.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="maxXP">Próximo nível</FormLabel>
        <NumberInput
          name="maxXP"
          id="maxXP"
          min={0}
          aria-invalid={errors.maxXP ? 'true' : 'false'}
        >
          <NumberInputField {...register('maxXP')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.maxXP && (
          <FormErrorMessage>{errors.maxXP.message}</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="xpBonus">% bônus de XP</FormLabel>
        <NumberInput
          name="xpBonus"
          id="xpBonus"
          min={0}
          aria-invalid={errors.xpBonus ? 'true' : 'false'}
        >
          <NumberInputField {...register('xpBonus')} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        {errors.xpBonus && (
          <FormErrorMessage>{errors.xpBonus.message}</FormErrorMessage>
        )}
      </FormControl>

      <Spacer />
      <Button
        bg="neutral.900"
        color="neutral.100"
        type="submit"
        isLoading={isSubmitting}
      >
        Confirmar
      </Button>
    </VStack>
  )
}

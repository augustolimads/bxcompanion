import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Modal,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Spacer,
  Textarea,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { EquipTypeProps } from 'src/stores/SheetEquipments/SheetEquipments.types'
import { getEquipmentImage } from 'src/utils/getEquipmentImage'
import { GalleryEquipmentIcon } from '../GalleryEquipmentIcon'
import { Option } from '../Option'
import { EquipmentSheetEditorProps, useEquipmentSheetEditor } from './index'

export const EquipmentSheetEditor = (props: EquipmentSheetEditorProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    getEquipmentStats,
    editEquipmentSheet,
    onEquipTypeElements,
    equipType,
    getEquipmentIconName,
    selectedIcon
  } = useEquipmentSheetEditor(props.id)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      label: getEquipmentStats()?.label || 'item',
      type: getEquipmentStats()?.type || 'item',
      TAC0Bonus: getEquipmentStats()?.TAC0Bonus,
      ACBonus: getEquipmentStats()?.ACBonus,
      damage: getEquipmentStats()?.damage,
      description: getEquipmentStats()?.description,
      amount: getEquipmentStats()?.amount,
      weight: getEquipmentStats()?.weight,
      imageRef: getEquipmentStats()?.imageRef
    }
  })

  return (
    <>
      <VStack
        as="form"
        align="left"
        onSubmit={handleSubmit(editEquipmentSheet)}
      >
        <HStack>
          <Button bg="neutral.900" color="neutral.100" onClick={onOpen}>
            Selecionar ícone
          </Button>
          {selectedIcon && (
            <Image
              w={16}
              src={getEquipmentImage(selectedIcon)}
            />
          )}
        </HStack>
        {!props.isItem && (
          <HStack gap={3}>
            <FormControl flex="1">
              <FormLabel htmlFor="type">Tipo do equipamento</FormLabel>
              <Select
                bg="neutral.700"
                {...register('type')}
                onChange={(event) =>
                  onEquipTypeElements(event.target.value as EquipTypeProps)
                }
              >
                <Option color="neutral.900" bg="neutral.700" value="magic">
                  Mágico
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="helmet">
                  Elmo
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="shield">
                  Escudo
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="item">
                  Item
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="weapon">
                  Arma
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="armor">
                  Armadura
                </Option>
                <Option color="neutral.900" bg="neutral.700" value="ammo">
                  Munição
                </Option>
              </Select>
            </FormControl>
          </HStack>
        )}

        <FormControl>
          <FormLabel htmlFor="label">Nome do equipamento</FormLabel>
          <Input
            id="label"
            placeholder="Nome do personagem"
            {...register('label')}
            aria-invalid={errors.label ? 'true' : 'false'}
          />
        </FormControl>

        {equipType === 'weapon' && (
          <HStack>
            <FormControl flex="0.6">
              <FormLabel htmlFor="TAC0Bonus">Bônus no TAC0</FormLabel>
              <NumberInput
                name="TAC0Bonus"
                id="TAC0Bonus"
                min={0}
                aria-invalid={errors.TAC0Bonus ? 'true' : 'false'}
              >
                <NumberInputField {...register('TAC0Bonus')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl flex="1">
              <FormLabel htmlFor="damage">Dano</FormLabel>
              <Input
                id="damage"
                placeholder="2d6+2"
                {...register('damage')}
                aria-invalid={errors.damage ? 'true' : 'false'}
              />
            </FormControl>
          </HStack>
        )}

        <HStack>
          {(equipType === 'armor' ||
            equipType === 'shield' ||
            equipType === 'helmet') && (
            <FormControl>
              <FormLabel htmlFor="ACBonus">valor de CA</FormLabel>
              <NumberInput
                name="ACBonus"
                id="ACBonus"
                min={0}
                aria-invalid={errors.ACBonus ? 'true' : 'false'}
              >
                <NumberInputField {...register('ACBonus')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}

          {(equipType === 'ammo' || props.isItem) && (
            <FormControl>
              <FormLabel htmlFor="amount">Quantidade</FormLabel>
              <NumberInput
                name="amount"
                id="amount"
                min={0}
                aria-invalid={errors.amount ? 'true' : 'false'}
              >
                <NumberInputField {...register('amount')} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          )}

          <FormControl>
            <FormLabel htmlFor="weight">Peso</FormLabel>
            <NumberInput
              name="weight"
              id="weight"
              min={0}
              aria-invalid={errors.weight ? 'true' : 'false'}
            >
              <NumberInputField {...register('weight')} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </HStack>

        <FormControl>
          <FormLabel htmlFor="description">Descritor</FormLabel>
          <Textarea
            {...register('description')}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <GalleryEquipmentIcon
          onClose={onClose}
          getEquipmentIconName={getEquipmentIconName}
        />
      </Modal>
    </>
  )
}

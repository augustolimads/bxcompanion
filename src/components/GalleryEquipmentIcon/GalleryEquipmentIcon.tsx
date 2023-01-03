import {
  Box,
  Button,
  Grid,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { equipmentIconsMock } from 'src/mocks/equipmentIconsMock'
import { getEquipmentImage } from 'src/utils/getEquipmentImage'
import { GalleryEquipmentIconProps, useGalleryEquipmentIcon } from './index'

export const GalleryEquipmentIcon = (props: GalleryEquipmentIconProps) => {
  const { selectedIcon, getName, handleSubmit } = useGalleryEquipmentIcon(props)

  return (
    <>
      <ModalOverlay />
      <ModalContent bg="neutral.700" color="white">
        <ModalHeader>Selecione o ícone</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            {equipmentIconsMock.map((el, index) => (
              <Box
                key={el + index}
                bg={selectedIcon === el ? 'blue' : 'neutral.500'}
                rounded="md"
                p={2}
                onClick={() => getName(el)}
              >
                <Image src={getEquipmentImage(el)} />
              </Box>
            ))}
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit}>Confirmar</Button>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

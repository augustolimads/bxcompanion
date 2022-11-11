import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { NoteSectionAsideProps, useNoteSectionAside } from './index'

export const NoteSectionAside = (props: NoteSectionAsideProps) => {
  const { result } = useNoteSectionAside()

  return (
    <VStack align="start" color="neutral.100" w="10rem">
      <Box>
        <Heading fontWeight="bold" fontSize="sm">
          Alinhamento
        </Heading>
        <Text fontSize="sm">Neutro</Text>
        <Heading fontWeight="bold" fontSize="sm">
          Visão
        </Heading>
        <Text fontSize="sm">Penumbra</Text>
        <Heading fontWeight="bold" fontSize="sm">
          Línguas
        </Heading>
        <Text fontSize="sm">Comum, anão</Text>
      </Box>

      <VStack bg="neutral.500" p={2} rounded="md" w="full" align="start">
        <Heading fontSize="lg">Proficiências</Heading>
        <Box>
          <Heading fontWeight="bold" fontSize="sm">
            Escudos
          </Heading>
          <Text fontSize="sm">leves, pesados</Text>
        </Box>
        <Box>
          <Heading fontWeight="bold" fontSize="sm">
            Armaduras
          </Heading>
          <Text fontSize="sm">leves, pesados</Text>
        </Box>
        <Box>
          <Heading fontWeight="bold" fontSize="sm">
            Armas
          </Heading>
          <Text fontSize="sm">leves, pesados</Text>
        </Box>
      </VStack>
    </VStack>
  )
}

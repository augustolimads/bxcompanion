import { Box, Heading, Text } from '@chakra-ui/react'
import { SimpleNoteProps, useSimpleNote } from './index'

export const SimpleNote = (props: SimpleNoteProps) => {
  const { result } = useSimpleNote()

  return (
    <Box
      color="neutral.100"
      border="1px solid"
      borderColor="neutral.100"
      rounded="md"
      py={1}
      px={2}
      w="full"
    >
      <Heading fontSize="md">{props.title}</Heading>
      {props.content && <Text>{props.content}</Text>}
    </Box>
  )
}

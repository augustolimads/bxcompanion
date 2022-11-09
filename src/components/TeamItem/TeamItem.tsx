import { Avatar, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { TeamItemProps, useTeamItem } from './index'

export const TeamItem = (props: TeamItemProps) => {
  const { result } = useTeamItem()

  return (
    <Link href={`/personagens/ficha`}>
      <Flex
        alignItems="center"
        gap="4"
        border="2px solid"
        borderColor="neutral.500"
        p="4"
        rounded="md"
      >
        <Avatar name="Falkor" src="/images/drawer-image.jpg" />
        <Text fontSize="md" color="white" fontWeight="bold">
          Falkor
        </Text>
      </Flex>
    </Link>
  )
}

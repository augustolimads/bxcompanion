import { Flex, IconButton, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Layout } from 'src/components'
import { PencilIcon } from 'src/components/Icons'

const Sheet: NextPage = () => {
  return (
    <div>
      <Layout>
        <>
          <Header>
            <Flex flex='1' alignItems='center'>
              <Text flex='1' textAlign='center'>Guerreiro neutro</Text>
              <IconButton
                aria-label='Search database'
                colorScheme='transparent'
                icon={<PencilIcon size='24'/>}
                justifySelf="self-start"
                rounded='md'
              />
            </Flex>
          </Header>
        </>
      </Layout>
    </div>
  )
}

export default Sheet

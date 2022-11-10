import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from 'src/components'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Text>home</Text>
      </Layout>
    </div>
  )
}

export default Home

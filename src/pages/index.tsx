import type { NextPage } from 'next'
import { Header, Layout } from 'src/components'
import { Logo } from 'src/components/Logo'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header><Logo /></Header>
      </Layout>
    </div>
  )
}

export default Home

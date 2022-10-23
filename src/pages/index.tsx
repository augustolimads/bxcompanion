import type { NextPage } from 'next'
import { Header, Layout, LogoHeader } from 'src/components'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <Header>
         <LogoHeader />
        </Header>
      </Layout>
    </div>
  )
}

export default Home

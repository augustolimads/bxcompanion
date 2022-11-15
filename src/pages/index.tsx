import type { NextPage } from 'next'
import { Layout, TeamContent } from 'src/components'

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <TeamContent />
      </Layout>
    </div>
  )
}

export default Home

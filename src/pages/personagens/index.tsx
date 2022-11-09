import type { NextPage } from 'next'
import { Header, Layout, Logo, TeamContent } from 'src/components'

const Personagens: NextPage = () => {
  return (
    <div>
      <Layout>
        <>
          <Header><Logo /></Header>
          <TeamContent />
        </>
      </Layout>
    </div>
  )
}

export default Personagens

import type { NextPage } from 'next'
import { Header } from 'src/components'
import { Logo } from 'src/components/Logo'

const Home: NextPage = () => {
  return (
    <div>
      <Header><Logo /></Header>
    </div>
  )
}

export default Home

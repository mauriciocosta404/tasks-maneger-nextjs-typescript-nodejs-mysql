import type { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../src/components/aside/aside'
import Header from '../src/components/header/header'

const Home: NextPage = () => {

  return (
   <>
   <Head>
    <title>
      mauriciadas
    </title>
  </Head>
    <Aside></Aside>
   <Header></Header>
   </>
  )
}

export default Home


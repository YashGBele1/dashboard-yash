import Head from 'next/head'
import TopBar from '../components/TopBar'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'
import Main from '../components/Main'

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <LeftBar />
      <RightBar />
      <Main />
    </div>
  )
}

export default Home

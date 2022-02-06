
import Head from 'next/head'

import Header from '../components/header'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      { /** navbar */ }
      <Nav />

      { /** results */ }
    </div>
  )
}

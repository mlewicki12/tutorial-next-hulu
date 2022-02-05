
import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's build Hulu 2.0</h1>

      { /** header */ }
      <Header />
      
      { /** navbar */ }

      { /** results */ }
    </div>
  )
}

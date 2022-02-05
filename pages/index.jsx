
import Head from 'next/head'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { /** header */ }
      <Header />
      
      { /** navbar */ }

      { /** results */ }
    </div>
  )
}

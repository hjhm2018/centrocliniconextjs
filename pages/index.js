import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Pagina de Inicio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home</h1>
    </div>
  )
}

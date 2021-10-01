import Head from 'next/head'
import Nosotros from '../componentes/componentesInicio/Nosotros'
import Contacto from '../componentes/componentesInicio/Contacto'
import Ubicacion from '../componentes/componentesInicio/Ubicacion'
import Galeria from '../componentes/componentesInicio/Galeria'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Pagina de Inicio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Galeria />
      <Nosotros />
      <Contacto />
      <Ubicacion />
    </div>
  )
}

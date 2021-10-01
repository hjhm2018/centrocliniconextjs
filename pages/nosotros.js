import Head from 'next/head'
import Nosotros from '../componentes/componentesInicio/Nosotros'

const nosotros = () => {
    return (
        <div>
            <Head>
                <title>Nosotros</title>
                <meta name="description" content="Pagina de Nosotros" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nosotros />
        </div>
    )
}

export default nosotros

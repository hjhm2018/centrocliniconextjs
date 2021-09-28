import Ubicacion from "../componentes/componentesInicio/Ubicacion"
import Head from 'next/head'

const ubicacion = () => {
    return (
        <div>
            <Head>
                <title>Ubicación</title>
                <meta name="description" content="Pagina de Ubicación" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Ubicacion />
        </div>
    )
}

export default ubicacion

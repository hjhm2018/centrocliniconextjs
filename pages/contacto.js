import ContactForm from "../componentes/componentesInicio/Contacto"
import Head from 'next/head'

const contacto = () => {
    return (
        <div>
            <Head>
                <title>Contacto</title>
                <meta name="description" content="Pagina de Contacto" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ContactForm />
        </div>
    )
}

export default contacto

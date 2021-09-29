import Head from 'next/head'
import especialidadesData from '../assets/data/especialidades'

// export const getStaticProps = async () => {
//     const res = await fetch('http://localhost:3000/assets/data/especialidades.json', {
//         method: "GET",
//         headers: {
//             "Content-Type": "application / json"
//         }
//     });

//     const data = await res.json();
//     const newData = JSON.parse(data);

//     return {
//         props: { especialidadesData: newData }
//     }
// }

const especialidades = () => {

    return (
        <div>
            <Head>
                <title>Especialidades</title>
                <meta name="description" content="Pagina de Especialidades" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Especialidades</h1>
        </div>
    )
}

export default especialidades

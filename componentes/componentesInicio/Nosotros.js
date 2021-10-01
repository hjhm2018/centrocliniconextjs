import Image from 'next/image'
import imagen from '../../assets/imagenes/nosotros.jpg'
import styles from '../../styles/Nosotros.module.css'


const Nosotros = () => {

    return (
        <>
            <div className="d-flex justify-content-center flex-wrap align-items-center ml-md-5 ml-2 px-2 px-md-5">
                <div className="col-12">
                    <h2 className="text-center">Nosotros</h2>
                </div>

                <div className="col-md-8 col-12 text-center pl-2 pl-md-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
                </div>
                <div className={`col-md-4 col-12 text-center pt-2 mt-4 pt-md-3 pl-2 ${styles.nosotrosItem}`}>
                    <Image layout="fill" src={imagen} alt="Nosotros" />
                </div>
            </div>
        </>
    )
}

export default Nosotros;

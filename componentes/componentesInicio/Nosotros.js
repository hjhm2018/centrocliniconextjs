import Image from 'next/image'
import imagen from '../../assets/imagenes/nosotros.jpg'
import styles from '../../styles/Nosotros.module.css'
import { FaHandshake } from "react-icons/fa";

const Nosotros = () => {

    return (
        <>
            <div className="col-12 mb-3">
                <div className="col-12">
                    <h2 className="text-center p-2 mb-2 mb-0 bg-info text-white rounded">Nosotros <FaHandshake /> </h2>
                </div>
                <div className="d-flex justify-content-center flex-wrap align-items-center">
                    <div className="col-md-7 col-12 text-center pl-2 pl-md-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et adipisci ipsum porro optio, ducimus culpa iste illum, nobis tempora non vitae aut repellat recusandae quae fugit. Quas, sapiente quia.
                    </div>
                    <div className={`col-md-4 col-8 text-center pt-2 mt-4 pt-md-3 pl-2 ${styles.nosotrosItem}`}>
                        <Image layout="fill" src={imagen} alt="Nosotros" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros;

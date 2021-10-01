import React from 'react';
import especialidades from '../../assets/data/especialidades';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styles from '../../styles/Galeria.module.css'

const Galeria = () => {

    return (
        <div className="col-lg-10 mb-2 mx-auto text-center">

            <Carousel>
                {especialidades && especialidades.map((especialidad, index) => (

                    <Carousel.Item key={index} className={styles.galeriaItem}>
                        <Image src={especialidad.imagen} layout="fill" alt={`foto-${especialidad.nombre}`} />
                        <Carousel.Caption className="rounded text-dark p-2" style={{ background: `rgba(255, 255, 255, 0.5)` }}>
                            <h3>{especialidad.nombre}</h3>
                            <p>{especialidad.servicios}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </div>
    )
}

export default Galeria;

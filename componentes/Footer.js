
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link'
import { Nav } from 'react-bootstrap';
// import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

    return (
        <div className="row mt-4">
            <footer className="d-flex flex-wrap bg-info text-white col-12 p-5">
                <div className=" d-flex flex-wrap justify-content-around col-12 col-md-6 pt-2">
                    <div className="col-12 col-md-8 col-lg-6">
                        <Link className="navbar-brand" href='/'>
                            {/* <StaticImage
                                src="../assets/imagenes/logo.png"
                                className="d-inline-block align-top"
                                alt="Logo"
                                placeholder="blurred"
                                layout="fixed"
                                width={250}
                            /> */}
                            Link
                        </Link>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 pl-md-5 pl-0">
                        <Nav.Link as={Link} href='/'><a className="d-block text-white font-weight-bold pb-3">Inicio</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/nosotros'><a className="d-block text-white font-weight-bold pb-3">Nosotros</a></Nav.Link>
                        <Nav.Link as={Link} href='/especialidades'><a className="d-block text-white font-weight-bold pb-3">Especialidades</a></Nav.Link>
                        <Nav.Link as={Link} href='/especialistas'><a className="d-block text-white font-weight-bold pb-3">Especialistas</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/contacto'><a className="d-block text-white font-weight-bold pb-3">Contacto</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/ubicacion'><a className="d-block text-white font-weight-bold pb-3">Ubicación</a></Nav.Link>
                    </div>
                </div>
                <div className="col-12 col-md-6 pl-4 pt-3">
                    <h3>Centro Clínico Dios da el maná</h3>
                    <p><span className="font-weight-bold">Dirección:</span> Av. Paradissi Nº 44 a una casa del Centro
                        Hispano de
                        Villa de Cura - Edo. Aragua</p>
                    <p><span className="font-weight-bold">Horarios:</span> Lunes a Sabado 8am - 2pm </p>
                    <p><span className="font-weight-bold">Teléfono:</span> (0412) - 0433807 </p>

                    <p><span className="font-weight-bold">Siguenos en Instagram:</span> <a aria-label="Instagram Icon"
                        href="https://www.instagram.com/diosdaelmana/" className="text-white" target="_blank" rel="noreferrer"><FaInstagram /></a></p>
                </div>

            </footer>
        </div>
    )
}

export default Footer

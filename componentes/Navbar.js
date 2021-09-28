import React from 'react';
import Link from 'next/link';
import { Nav, Navbar } from 'react-bootstrap';
import Image from 'next/image'
import logo from '../assets/imagenes/logo.png'

const Navigationbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand='lg' bg="light" variant="light" sticky="top">
                <Navbar.Brand style={{ cursor: 'pointer' }}>
                    <Link href='/'>
                        <a>
                            <Image src={logo} alt="logo" width={250} height={60} />
                        </a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={2} as={Link} href='/'><a className="border border-info text-info rounded text-center mr-1 p-2">Inicio</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/nosotros'><a className="border border-info text-info rounded text-center mr-1 p-2">Nosotros</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/especialidades'><a className="border border-info text-info rounded text-center mr-1 p-2">Especialidades</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/especialistas'><a className="border border-info text-info rounded text-center mr-1 p-2">Especialistas</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/contacto'><a className="border border-info text-info rounded text-center mr-1 p-2">Contacto</a></Nav.Link>
                        <Nav.Link eventKey={2} as={Link} href='/ubicacion'><a className="border border-info text-info rounded text-center mr-1 p-2">Ubicación</a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigationbar;

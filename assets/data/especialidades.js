let especialidades = [
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Medicina General",
        servicios: "Tratamiento médico, Cirugía menor, Vitaminoterapia Endovenosa, Terapia Respiratoria",
        imagen: require("../imagenes/medicina-general.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Medicina Interna",
        servicios: "Atención del adulto mayor, Control de Diabetes Mellitus, Control de Hipertensión Arterial",
        imagen: require("../imagenes/medicina-interna.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Pediatría",
        servicios: "Control del niño sano y del adolescente, Control prenatal, Promoción de la lactancia materna",
        imagen: require("../imagenes/pediatria.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Psiquiatría",
        servicios: "Psiquiatría infanto-juvenil y de adultos, Psicoterapia individual y familiar",
        imagen: require("../imagenes/psiquiatria.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Neurología",
        servicios: "Diagnóstico y tratamiento de las enfermedades del cerebro y la médula espinal, Cefaleas, migrañas, epilepsia, enfermedades cerebrovasculares, enfermedad de Parkinson",
        imagen: require("../imagenes/neurologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Ginecología y Obstetricia",
        servicios: "Control ginecológico, Cirugía ginecológica, Control prenatal, Cesáreas, Planificación familiar",
        imagen: require("../imagenes/ginecologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Psicología",
        servicios: "Certificado de salud mental, Intervención específica en relaciones de pareja., Eventos traumáticos, Modificación de conductas, Depresión",
        imagen: require("../imagenes/psicologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Dermatología",
        servicios: "Revisión de Nevus (lunares), acné, dermatitis, piel atípica y psoriasis, eccema, verrugas, infecciones de la piel y mucosas",
        imagen: require("../imagenes/dermatologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Gastroenterología",
        servicios: "Enfermedades del trato digestivo: gastritis, colon irritable, hígado, vesícula y vías biliares, páncreas, prevención de cáncer de esófago, estómago y colon",
        imagen: require("../imagenes/gastroenterologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Traumatología",
        servicios: "Fracturas, Luxaciones,lesiones de hombro, codo, manos, caderas, tobillos y pies",
        imagen: require("../imagenes/traumatologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Cardiología",
        servicios: "Control de patologías cardiovasculares, hipertensión en el embarazo, pacientes con marcapasos, arritmias cardíacas, realización de electrocardiograma informado, colocación de mapa y Holter ",
        imagen: require("../imagenes/cardiologia.jpg").default

    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Nutrición",
        servicios: "Educación nutricional infantil, Trastornos alimenticios, Tratamiento de obesidad, Planes alimenticios",
        imagen: require("../imagenes/nutricion.jpg").default

    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Nefrología",
        servicios: "Patologías del riñón, infección del tracto urinario, prevención y manejo de la enfermedad renal crónica",
        imagen: require("../imagenes/nefrologia.jpg").default

    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Estética",
        servicios: "Masoterapia: masajes anti-estres, descontracturantes, reductores, vacunterapia",
        imagen: require("../imagenes/estetica.jpg").default

    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Oftalmología",
        servicios: "Agudeza visual, fondo de ojo,tonometría ",
        imagen: require("../imagenes/oftalmologia.jpg").default

    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Mastología",
        servicios: "Estudio integral de la mama,prevención y tratamiento del cáncer de mama",
        imagen: require("../imagenes/mastologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Salud Ocupacional",
        servicios: "Valoración física, mental y social del trabajador, elaboración de sistema de riesgos en empresas",
        imagen: require("../imagenes/salud-ocupacional.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Cirugía",
        servicios: "Diagnóstico y cuidado pre-operatorio, operatorio y post-operatorio, cirugía de vesícula biliar, cirugía de hernias",
        imagen: require("../imagenes/cirugia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Odontología",
        servicios: "Odontología general e infantil, Rayos X, Ortopedia, Cirugía, y Endodoncia, Ortodoncia, Peridoncia",
        imagen: require("../imagenes/odontologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Radiología",
        servicios: "Rayos X de Craneo, Tórax, Abdominal, Extremidades, Panorámicas ",
        imagen: require("../imagenes/radiologia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Ecografía",
        servicios: "Ecografía abdominal , Pélvico, Obstétrico, Genético I y II, Partes blandas, Prostático, Tiroideo, Ecosonograma doppler arterial y venoso de miembros inferiores.",
        imagen: require("../imagenes/ecografia.jpg").default
    },
    {
        id: Math.floor(Math.random() * 1000),
        nombre: "Laboratorio",
        servicios: "Laboratorios de rutina, Perfil 20, Pruebas especiales, Cultivos y antibiogramas ",
        imagen: require("../imagenes/laboratorio.jpg").default
    }
]

export default especialidades;
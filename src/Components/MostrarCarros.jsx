import React, { useState, useEffect } from "react";
import motorLogo from "../images/Motor.png";
import caballosFuerzaLogo from "../images/caballos_fuerza.png";
import velocidadMaximaLogo from "../images/velocimetro.png";
import pesoLogo from "../images/peso_carros.png";
import { useTrail, a } from "@react-spring/web";
import '../App.css';

const velocidad_max = 200;
const caballos_de_fuerza_max = 300;
const peso_max = 4000;

const MostrarCarros = ({ carros }) => {
    const [anchoBarra, setAnchoBarra] = useState({
        caballos: "0%",
        velocidad: "0%",
        peso: "0%",
    });

    useEffect(() => {
        setTimeout(() => {
            setAnchoBarra({
                caballos: `${(carros.caballos_de_fuerza / caballos_de_fuerza_max) * 100}%`,
                velocidad: `${(carros.velocidad_maxima / velocidad_max) * 100}%`,
                peso: `${(carros.peso / peso_max) * 100}%`,
            });
        }, 100);
    }, [carros]);

    const items = [
        <span className="carro_año">{carros.año}</span>,
        <span className="año_division"></span>,
        <h2 className="carro_titulo">{carros.nombre}</h2>,
    ];

    const [trailOpen, setTrailOpen] = useState(true);

    useEffect(() => {
        setTrailOpen(false);
        setTimeout(() => setTrailOpen(true), 100);
    }, [carros]);

    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: trailOpen ? 1 : 0,
        transform: trailOpen ? "translateX(0px)" : "translateX(20px)",
        from: { opacity: 0, transform: "translateX(20px)" },
        leave: { opacity: 0, transform: "translateX(-20px)" },
        reset: true,
    });

    const imgTrail = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: trailOpen ? 1 : 0,
        transform: trailOpen ? "translateX(0px)" : "translateX(20px)",
        from: { opacity: 0, transform: "translateX(20px)" },
        leave: { opacity: 0, transform: "translateX(-20px)" },
        reset: true,
    });

    return (
        <div className="detalle_carro container">
            <div className="carro_titulo_container">
                {trail.map(({ transform, ...style }, index) => (
                    <a.div key={index} style={{ ...style, transform }} className="trail_item">
                        {items[index]}
                    </a.div>
                ))}
            </div>
            <div className="img_carro_container">
                {imgTrail.map(({ transform, ...style }, index) => (
                    <a.img key={index} className="img_carro" style={{ ...style, transform }} src={carros.imgCarro} alt={carros.nombre} />
                ))}
            </div>
            <ul className="detalle_carro_lista">
                <li className="carro_lista skill-box" key={carros.nombre + 'caballos'}>
                    <img className="list_img" src={caballosFuerzaLogo} alt="caballos de fuerza" />
                    <div className="skill-bar">
                        <span className="skill-per caballos" style={{ width: anchoBarra.caballos }}>
                            <span className="tooltip">{carros.caballos_de_fuerza} BHP</span>
                        </span>
                    </div>
                </li>
                <li className="carro_lista skill-box" key={carros.nombre + 'velocidad'}>
                    <img className="list_img" src={velocidadMaximaLogo} alt="velocidad maxima" />
                    <div className="skill-bar">
                        <span className="skill-per velocidad" style={{ width: anchoBarra.velocidad }}>
                            <span className="tooltip">{carros.velocidad_maxima} MPH</span>
                        </span>
                    </div>
                </li>
                <li className="carro_lista skill-box" key={carros.nombre + 'peso'}>
                    <img className="list_img" src={pesoLogo} alt="peso" />
                    <div className="skill-bar">
                        <span className="skill-per peso" style={{ width: anchoBarra.peso }}>
                            <span className="tooltip">{carros.peso} LB</span>
                        </span>
                    </div>
                </li>
                <li className="carro_lista" key={carros.nombre + 'motor'}>
                    <img className="list_img" src={motorLogo} alt="motor" />
                    <p className="list_texto">{carros.motor}</p>
                </li>
            </ul>
        </div>
    );
};

export default MostrarCarros;

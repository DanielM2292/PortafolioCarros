import React from "react";
import motorLogo from "../images/Motor.png";
import caballosFuerzaLogo from "../images/caballos_fuerza.png";
import velocidadMaximaLogo from "../images/velocimetro.png";
import pesoLogo from "../images/peso_carros.png";

const MostrarCarros = ({ carros }) => {
    console.log("Detalles del carro:", carros);

    return (
        <div className="detalle_carro">
            <div className="carro_titulo_container">
                <span className="carro_año">{carros.año}</span>
                <span className="año_division"></span>
                <div className="carro_titulo">
                    {carros.nombre}
                    {carros.logo && (
                        <img
                            className="carro_logo"
                            src={carros.logo}
                            alt={carros.nombre}
                        />
                    )}
                </div>
            </div>
            <div className="img_carro_container">
                <img className="img_carro" src={carros.imgCarro} alt={carros.nombre} />
            </div>
            <ul className="detalle_carro_lista">
                <li className="carro_lista">
                    <img className="list_img" src={caballosFuerzaLogo} alt="caballos de fuerza" />
                    <p className="list_texto">{carros.caballos_de_fuerza} BHP</p>
                </li>
                <li className="carro_lista">
                    <img className="list_img" src={motorLogo} alt="motor" />
                    <p className="list_texto">{carros.motor}</p>
                </li>
                <li className="carro_lista">
                    <img className="list_img" src={velocidadMaximaLogo} alt="velocidad maxima" />
                    <p className="list_texto">{carros.velocidad_maxima}MPH</p>
                </li>
                <li className="carro_lista">
                    <img className="list_img" src={pesoLogo} alt="peso" />
                    <p className="list_texto">{carros.peso} LB</p>
                </li>
            </ul>
        </div>
    );
};

export default MostrarCarros;
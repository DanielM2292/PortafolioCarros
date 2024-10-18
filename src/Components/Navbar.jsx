import React, { useState } from 'react'

const Navbar = ({handleClickModelo}) => {
    const [cateActiva, setcateActiva] = useState(null);

    const carCate = [
        {nombre: 'NISSAN', modelo: ['Skyline R34', 'Silvia', '350Z']},
        {nombre: 'MAZDA', modelo: ['RX-7', 'MX-5 Miata', 'RX-8']},
        {nombre: 'TOYOTA', modelo: ['Supra', 'MR2', 'Corolla']},        
        {nombre: 'HONDA', modelo: ['Civic', 'NSX', 'S2000']},
    ];

    const handleClickCate = (categoria) => {
        setcateActiva(cateActiva === categoria ? null : categoria);
    };

    return (
        <nav className="navbar">
            <ul className="nav-lista">
                {carCate.map((categoria, index) => (
                    <li key={index} className={`nav-carro ${cateActiva === categoria.nombre ? 'active' : ''}`} onClick={() => handleClickCate(categoria.nombre)}>
                        <span className="nav-categoria">{categoria.nombre}</span>
                        {cateActiva === categoria.nombre && (
                            <ul className="submenu">
                                {categoria.modelo.map((modelo, modeloIndex) => (
                                    <li key={modeloIndex} className="submenu-modelo" onClick={() => {
                                        console.log("Modelo clicado:", modelo);
                                        handleClickModelo(modelo)
                                    }}>
                                        {modelo}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>

    );
};

export default Navbar;
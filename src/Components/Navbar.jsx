import React, { useState } from 'react'

const Navbar = () => {
    const [cateActiva, setcateActiva] = useState(null);
    const [modeloSeleccionado, setModeloSeleccionado] = useState(null);

    const carCate = [
        {
            nombre: 'Nissan',
            modelo: ['Skyline R34', 'Silvia', '240SX']
        },
        {
            nombre: 'Mazda',
            modelo: ['RX-7', 'MX-5 Miata',  'RX-8']
        },
        {
            nombre: 'Toyota',
            modelo: ['Supra', 'MR2',  'Corolla']
        },
        {
            nombre: 'Honda',
            modelo: ['Civic Type R', 'NSX',  'S2000']
        },
    ];

    const handleClickCate = (categoria) => {
        setcateActiva(cateActiva === categoria ? null : categoria);
    };

    const handleClickModelo = (modelo) => {
        setModeloSeleccionado(modelo);
        setcateActiva(null);
    };

    return (
        <nav>
            <ul>
                {carCate.map((categoria, index) =>(
                  <li key={index} onClick={() => handleClickCate(categoria.nombre)}>
                    {categoria.nombre}
                    {cateActiva === categoria.nombre && (
                        <ul>
                            {categoria.modelo.map((modelo, modeloIndex) => (
                                <li key={modeloIndex} onClick={() => handleClickModelo(modelo)}>
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
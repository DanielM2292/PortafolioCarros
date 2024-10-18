import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MostrarCarros from './components/MostrarCarros'
import skylineR34 from './images/SkylineR34.png';
import Silvia from './images/Silvia.png';
import Nissan350Z from './images/350Z.png'
import RX7 from './images/RX7.png'
import Miata from './images/Miata.png'
import RX8 from './images/RX8.png'
import Supra from './images/Supra.png'
import ToyotaMR2 from './images/ToyotaMR2.png'
import ToyotaCorolla from './images/ToyotaCorolla.png'
import Civic from './images/Civic.png'
import NSX from './images/NSX.png'
import HondaS2000 from './images/HondaS2000.png'
import mazdaLogo from './images/MazdaLogo.png';
import nissanLogo from './images/NissanLogo.png';
import skylineLogo from './images/SkylineLogo.png';
import silviaLogo from './images/SilviaLogo.png';
import supraLogo from './images/SupraLogo.png';
import toyotaLogo from './images/ToyotaLogo.png';
import hondaLogo from './images/HondaLogo.png';
import './App.css'

const PaginaPrincipal = () => {
  const [ModeloSeleccionado, setModeloSeleccionado] = useState(null);

  const carroDetalles = {
    'Skyline R34': {
    nombre: 'Nissan Skyline R34',
    año: 1999,
    caballos_de_fuerza: 276,
    velocidad_maxima: 156,
    motor: 'RB26DETT 2.6L I6',
    peso: 3660,
    imgCarro: skylineR34,
    logo: skylineLogo,
  },
  'Silvia': {
    nombre: 'Nissan Silvia',
    año: 1993,
    caballos_de_fuerza: 197,
    velocidad_maxima: 139,
    motor: 'SR20DET 2.0L I4 Turbo',
    peso: 2855,
    imgCarro: Silvia,
    logo: silviaLogo,
  },
  '350Z': {
    nombre: 'Nissan 350Z',
    año: 2003,
    caballos_de_fuerza: 287,
    velocidad_maxima: 155,
    motor: 'VQ35DE 3.5L V6',
    peso: 3400,
    imgCarro: Nissan350Z,
    logo: nissanLogo,
  },
  'RX-7': {
    nombre: 'Mazda RX-7',
    año: 1992,
    caballos_de_fuerza: 276,
    velocidad_maxima: 160,
    motor: '13B-REW 1.3L Rotary Twin-Turbo',
    peso: 2820,
    imgCarro: RX7,
    logo: mazdaLogo,
  },
  'MX-5 Miata': {
    nombre: 'Mazda MX-5 Miata',
    año: 1999,
    caballos_de_fuerza: 140,
    velocidad_maxima: 126,
    motor: '1.8L I4',
    peso: 2300,
    imgCarro: Miata,
    logo: mazdaLogo,
  },
  'RX-8': {
    nombre: 'Mazda RX-8',
    año: 2004,
    caballos_de_fuerza: 232,
    velocidad_maxima: 145,
    motor: '13B-MSP 1.3L Rotary',
    peso: 3029,
    imgCarro: RX8,
    logo: mazdaLogo,
  },
  'Supra': {
    nombre: 'Toyota Supra',
    año: 1993,
    caballos_de_fuerza: 276,
    velocidad_maxima: 155,
    motor: '2JZ-GTE 3.0L I6 Twin-Turbo',
    peso: 3460,
    imgCarro: Supra,
    logo: supraLogo,
  },
  'MR2': {
    nombre: 'Toyota MR2',
    año: 1995,
    caballos_de_fuerza: 200,
    velocidad_maxima: 140,
    motor: '3S-GTE 2.0L I4 Turbo',
    peso: 2855,
    imgCarro: ToyotaMR2,
    logo: toyotaLogo,
  },
  'Corolla': {
    nombre: 'Toyota Corolla',
    año: 2002,
    caballos_de_fuerza: 130,
    velocidad_maxima: 118,
    motor: '1ZZ-FE 1.8L I4',
    peso: 2700,
    imgCarro: ToyotaCorolla,
    logo: toyotaLogo,
  },
  'Civic': {
    nombre: 'Honda Civic Type R',
    año: 2000,
    caballos_de_fuerza: 160,
    velocidad_maxima: 127,
    motor: 'B16A2 1.6L I4',
    peso: 2500,
    imgCarro: Civic,
    logo: hondaLogo,
  },
  'NSX': {
    nombre: 'Honda NSX',
    año: 1995,
    caballos_de_fuerza: 290,
    velocidad_maxima: 168,
    motor: 'C30A 3.0L V6',
    peso: 3153,
    imgCarro: NSX,
    logo: hondaLogo,
  },
  'S2000': {
    nombre: 'Honda S2000',
    año: 2000,
    caballos_de_fuerza: 240,
    velocidad_maxima: 150,
    motor: 'F20C 2.0L I4',
    peso: 2835,
    imgCarro: HondaS2000,
    logo: hondaLogo,
  },
};

const handleModeloSeleccionado = (modelo) => {
  setModeloSeleccionado(prevModelo => (prevModelo === modelo ? null : modelo));
};


  return (
    <div className='PagPrin'>
      <div className='NavPrin'>
      <Navbar  handleClickModelo={handleModeloSeleccionado} />
      </div>
      <div className='MostrarCarrosPrin'></div>
        {ModeloSeleccionado && carroDetalles[ModeloSeleccionado] && (
          <MostrarCarros carros={carroDetalles[ModeloSeleccionado]} />
        )}
    </div>
  )
}

export default PaginaPrincipal;
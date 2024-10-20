import React, { useState, useEffect } from 'react';
import { useTrail, a } from '@react-spring/web';
import SupraLogo from '../images/SupraLogo.png';
import MazdaLogo from '../images/MazdaLogo.png';
import NissanLogo from '../images/NissanLogo.png';
import HondaLogo from '../images/HondaLogo.png';
import ToyotaLogo from '../images/ToyotaLogo.png';
import SkylineLogo from '../images/SkylineLogo.png';
import SilviaLogo from '../images/SilviaLogo.png';
import '../App.css';

const PaginaEntrada = () => {
  const items = [
    <p className='txtEntrada'>Bienvenido,</p>,
    <p className='txtEntrada'>Aquí encontrarás <br /> los mejores autos Japoneses <br /> del mundo!!</p>,
  ];

  const logos = [
    { src: MazdaLogo, alt: 'Mazda Logo' },
    { src: NissanLogo, alt: 'Nissan Logo' },
    { src: SkylineLogo, alt: 'Skyline Logo' },
    { src: SilviaLogo, alt: 'Silvia Logo' },
    { src: SupraLogo, alt: 'Supra Logo' },
    { src: HondaLogo, alt: 'Honda Logo' },
    { src: ToyotaLogo, alt: 'Toyota Logo' },
  ];

  const [trailOpen, setTrailOpen] = useState(true);

  useEffect(() => {
    setTrailOpen(false);
    setTimeout(() => setTrailOpen(true), 100);
  }, []);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: trailOpen ? 1 : 0,
    transform: trailOpen ? 'translateX(0px)' : 'translateX(20px)',
    from: { opacity: 0, transform: 'translateX(20px)' },
    leave: { opacity: 0, transform: 'translateX(-20px)' },
    reset: true,
  });

  const logoTrail = useTrail(logos.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: trailOpen ? 1 : 0,
    transform: trailOpen ? 'translateX(0px)' : 'translateX(20px)',
    from: { opacity: 0, transform: 'translateX(20px)' },
    leave: { opacity: 0, transform: 'translateX(-20px)' },
    reset: true,
  });

  return (
    <div className='pagina-entrada'>
      <div className='text-container'>
        <div className='text-content'>
          {trail.map(({ transform, ...style }, index) => (
            <a.div key={index} style={{ ...style, transform }} className="trail_item">
              {items[index]}
            </a.div>
          ))}
        </div>
      </div>
      <div className='logos-container'>
        <div className='logos-marcas'>
          <div className="logo-row">
            {logoTrail.slice(0, 2).map(({ transform, ...style }, index) => (
              <a.img key={index} src={logos[index].src} alt={logos[index].alt} className="logo" style={{ ...style, transform }} />
            ))}
          </div>
          <div className="logo-row">
            {logoTrail.slice(2, 5).map(({ transform, ...style }, index) => (
              <a.img key={index} src={logos[index + 2].src} alt={logos[index + 2].alt} className="logo" style={{ ...style, transform }} />
            ))}
          </div>
          <div className="logo-row middle-row">
            {logoTrail.slice(5).map(({ transform, ...style }, index) => (
              <a.img key={index} src={logos[index + 5].src} alt={logos[index + 5].alt} className="logo" style={{ ...style, transform }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaEntrada;
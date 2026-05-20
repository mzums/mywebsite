import "bootstrap/dist/css/bootstrap.min.css";
import gh from "./assets/gh.svg";
import './App.css';
import Typewriter from './components/Typewriter';
import CircularImage from "./components/CircularImage";
import GearIcon from "./components/GearIcon";
import { useRef, useState, useEffect } from 'react';


function App() {

  const gearRef = useRef<SVGSVGElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      setRotation(prev => prev + (e.deltaY > 0 ? 3 : -3));
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    if (gearRef.current) {
      gearRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, [rotation]);


  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CircularImage />
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "4rem", alignContent: "center" }}>
          <span className="typewriter-text">
            <Typewriter text="Hi! I'm mzums" speed={100} />
          </span>
          <p style={{ marginTop: "2rem" }}>A Computer Science student living in Warsaw</p>
          <p style={{ marginTop: "0.5rem" }}>I love coding, reading science fiction books and cycling</p>
          <p style={{ marginTop: "0.5rem" }}>⚙️ Rust · Python · ML · Linux · Git</p>
          <a
            href="https://github.com/mzums"
          >
            <button className="gh-button">
              <span>
                <img style={{ marginRight: "1rem" }} src={gh} width="25rem" />
              </span>
              View my github
            </button>

          </a>
        </div>
      </div >
      <span style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <GearIcon dir={-1} rotation={rotation} color="#058e63" />
      </span>
      <span style={{ position: 'fixed', bottom: '180px', right: '20px', zIndex: 1000 }}>
        <GearIcon rotation={rotation} width="80" color="#058e63" />
      </span>
      <span style={{ position: 'fixed', bottom: '20px', right: '220px', zIndex: 1000 }}>
        <GearIcon rotation={rotation} width="110" color="#058e63" />
      </span>
    </>

  );
}

export default App;

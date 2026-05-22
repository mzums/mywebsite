import "bootstrap/dist/css/bootstrap.min.css";
import gh from "./assets/gh.svg";
import tm from "./assets/tm3.png";
import ttt from "./assets/ttt3.png";
import calc from "./assets/calc2.png";
import mnist from "./assets/mnist.png";
import openai from "./assets/openai.png";
import uncyclopedia from "./assets/uncyclopedia2.png";
import './App.css';
import Typewriter from './components/Typewriter';
import CircularImage from "./components/CircularImage";
import GearIcon from "./components/GearIcon";
import Card from "./components/Card.tsx";
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

      <div className="main-row" >
        <CircularImage />
        <div
          className="about-me"
        >
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
        <GearIcon dir={-1} rotation={rotation} width="200" color="#058e63" />
      </span>
      <span style={{ position: 'fixed', bottom: '250px', right: '20px', zIndex: 1000 }}>
        <GearIcon rotation={rotation} width="80" color="#058e63" />
      </span>
      <span style={{ position: 'fixed', bottom: '50px', right: '220px', zIndex: 1000 }}>
        <GearIcon rotation={rotation} width="110" color="#058e63" />
      </span>

      <div style={{ height: "2rem" }}></div>

      <div
        className="project-row"
      >
        <Card
          imgPath={tm}
          title="Typeman"
          content="Typing speed test written in Rust with practice mode in GUI, TUI and CLI"
          stats={[180, 11]}
          link="https://github.com/mzums/typeman"
        />
        <Card
          imgPath={uncyclopedia}
          title="uncyclopedia-api"
          content="Fastapi API for Uncyclopedia and it's Polish alternative - Nonsensopedia"
          link="https://github.com/mzums/uncyclopedia-api"
        />
        <Card
          imgPath={ttt}
          title="Tic-Tac-Toe (Computer Vision)"
          content="Multiple interfaces to play Tic-Tac-Toe against AI opponents (MiniMax or MCTS)"
          link="https://github.com/mzums/tic-tac-toe"
        />
        <Card
          imgPath={calc}
          title="Calculator"
          content="DIY Lexer and Parser with exporting constants (Tokenization, RPN Conversion, Evaluation)"
          link="https://github.com/mzums/calculator"
        />
        <Card
          imgPath={mnist}
          title="Generating MNIST"
          content="MNIST generation using GAN and DCGAN"
          link="https://github.com/mzums/generating_mnist"
        />
        <Card
          imgPath={openai}
          title="OpenAI-Gymnasium"
          content="My solutions to some RL problems"
          link="https://github.com/mzums/openai-gymnasium"
        />

      </div>
    </>

  );
}

export default App;

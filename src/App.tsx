import "bootstrap/dist/css/bootstrap.min.css";
import gh from "./assets/gh.svg";
import tm from "./assets/tm3.png";
import ttt from "./assets/ttt3.png";
import calc from "./assets/calc2.png";
import mnist from "./assets/mnist.png";
import openai from "./assets/openai.png";
import uncyclopedia from "./assets/uncyclopedia2.png";
import battleship from "./assets/battleship.png";
import './App.css';
import Typewriter from './components/Typewriter';
import InfiniteAutoScroll from "./components/InfiniteAutoScroll.tsx";
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
          <p className="about-text" style={{ marginTop: "2rem" }}>A Computer Science student living in Warsaw</p>
          <p className="about-text" style={{ marginTop: "0.5rem" }}>I love coding, reading science fiction books and cycling</p>
          <p className="about-text" style={{ marginTop: "0.5rem" }}>⚙️ Rust · Python · ML · Linux · Git</p>
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
      <div className="gears">
        <div className="gears-container">
          <span className="gear gear-1">
            <GearIcon dir={-1} rotation={rotation} color="#058e63" />
          </span>
          <span className="gear gear-2">
            <GearIcon rotation={rotation} color="#058e63" />
          </span>
          <span className="gear gear-3">
            <GearIcon rotation={rotation} color="#058e63" />
          </span>
        </div>
      </div>


      <InfiniteAutoScroll speed={0.8} pauseOnHover={true}>
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
        <Card
          imgPath={battleship}
          title="Battleship"
          content="A CLI/TUI game with a computer opponent using probability density heatmap to make decisions"
          link="https://github.com/mzums/battleship"
        />

      </InfiniteAutoScroll>
      <div style={{ height: "10rem" }}></div>
    </>

  );
}

export default App;

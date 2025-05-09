import { useState } from "react";
import "./App.css";
import PreGame from "./Components/PreGame";
import Game from "./Components/Game";

function App() {
  const [cardAmount, setCardAmount] = useState(11);
  const [animeId, setAnimeId] = useState(21);
  const [animeTitle, setAnimeTitle] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  function mainMenu() {
    setGameStarted(false)
  }

  return (
    <>
      {!gameStarted && <h1 className="app__title">Anime Memory Card Game</h1>}
      <PreGame
        cardAmount={cardAmount}
        setCardAmount={setCardAmount}
        animeId={animeId}
        setAnimeId={setAnimeId}
        animeTitle={animeTitle}
        setAnimeTitle={setAnimeTitle}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
      />
      {gameStarted && (
        <Game
          cardAmount={cardAmount}
          animeId={animeId}
          gameStarted={gameStarted}
          animeTitle={animeTitle}
          mainMenu={mainMenu}
        />
      )}
    </>
  );
}

export default App;

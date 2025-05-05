import { useState } from "react";
import "./App.css";
import PreGame from "./PreGame";

function App() {
  const [cardAmount, setCardAmount] = useState(10);
  const [animeId, setAnimeId] = useState(21);
  const [animeTitle, setAnimeTitle] = useState(null);

  return (
    <>
      <h1>Anime Memory Game</h1>
      <PreGame
        cardAmount={cardAmount}
        setCardAmount={setCardAmount}
        animeId={animeId}
        setAnimeId={setAnimeId}
        animeTitle={animeTitle}
        setAnimeTitle={setAnimeTitle}
      />
    </>
  );
}

export default App;

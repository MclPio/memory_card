import { useState, useEffect } from "react";
import "./App.css";
import getAnimeDataById from "./getAnimeDataById";

function App() {
  const [cardAmount, setCardAmount] = useState(10);
  const [animeId, setAnimeId] = useState(21);
  const [animeTitle, setAnimeTitle] = useState(null);

  useEffect(() => {
    fetchAnimeTitle();
  }, []);

  async function fetchAnimeTitle() {
    try {
      const data = await getAnimeDataById(animeId);
      setAnimeTitle(data ? data.title : "Not Found");
    } catch (error) {
      setAnimeTitle("Not Found");
    }
  }

  function startGame() {}

  return (
    <>
      <h1>Anime Memory Game</h1>
      <label htmlFor="card-amount">Card Amount</label>
      <input
        id="card-amount"
        name="card-amount"
        type="range"
        min="6"
        max="30"
        value={cardAmount}
        onChange={(e) => setCardAmount(Number(e.target.value))}
      />
      <p>Number of cards: {cardAmount}</p>
      <br />
      <label htmlFor="anime-id">MAL Anime ID: </label>
      <input
        type="number"
        name="anime-id"
        id="anime-id"
        value={animeId}
        onChange={(e) => {
          const value = e.target.value;
          setAnimeId(value === "" || isNaN(Number(value)) ? 21 : Number(value));
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchAnimeTitle();
          }
        }}
      />
      <button onClick={fetchAnimeTitle}>Fetch Title</button>

      <p>Anime Title: {animeTitle}</p>
      <br />
      <button onClick={startGame}>Start Game</button>
    </>
  );
}

export default App;

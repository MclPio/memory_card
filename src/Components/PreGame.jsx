import { useEffect } from "react";
import getAnimeDataById from "../utils/getAnimeDataById";

export default function PreGame({
  cardAmount,
  animeId,
  animeTitle,
  setCardAmount,
  setAnimeId,
  setAnimeTitle,
  gameStarted,
  setGameStarted,
}) {
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

  function startGame() {
    fetchAnimeTitle();
    setGameStarted(true);
  }

  return (
    <>
      {!gameStarted && (
        <div className="pregame">
          <div className="pregame__card-amount">
            <label htmlFor="card-amount" className="pregame__label">
              Card Amount
            </label>
            <input
              id="card-amount"
              name="card-amount"
              type="range"
              min="6"
              max="30"
              value={cardAmount}
              onChange={(e) => setCardAmount(Number(e.target.value))}
              className="pregame__range"
            />
            <p className="pregame__text">Number of cards: {cardAmount}</p>
          </div>
          <div className="pregame__anime-selection">
            <label htmlFor="anime-id" className="pregame__label">
              MAL Anime ID
            </label>
            <div className="pregame__anime-input-group">
              <input
                type="number"
                name="anime-id"
                id="anime-id"
                value={animeId}
                onChange={(e) => {
                  const value = e.target.value;
                  setAnimeId(
                    value === "" || isNaN(Number(value)) ? "" : Number(value)
                  );
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchAnimeTitle();
                  }
                }}
                className="pregame__input"
              />
              <button
                onClick={fetchAnimeTitle}
                className="pregame__fetch-button"
              >
                Fetch Title
              </button>
            </div>
            <p className="pregame__text">Anime Title: {animeTitle}</p>
          </div>
          <button onClick={startGame} className="pregame__start-button">
            Start Game
          </button>
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import getCards from "../utils/getCards";
import Card from "./Card";
import shuffle from "../utils/shuffle";

export default function Game({ cardAmount, animeId, gameStarted, animeTitle }) {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      try {
        let fetchedCards = await getCards(animeId, cardAmount);
        fetchedCards = shuffle(fetchedCards);
        setCards(fetchedCards);
      } catch (error) {
        console.error("Failed to fetch cards:", error);
        setCards([]);
      }
    }
    if (gameStarted) {
      fetchCards();
    }
  }, [animeId, cardAmount, gameStarted]);

  return (
    <>
      {gameStarted && (
        <div>
          <h2>Score: {score} High Score: {highScore}</h2>
          <h2>{animeTitle}</h2>
          <div className="table">
            {cards.length > 0 ? (
              cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  score={score}
                  setScore={setScore}
                  highScore={highScore}
                  setHighScore={setHighScore}
                  shuffle={shuffle}
                  cards={cards}
                  setCards={setCards}
                />
              ))
            ) : (
              <p>Loading cards...</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import getCards from "../utils/getCards";
import Card from "./Card";

export default function Game({ cardAmount, animeId, gameStarted, animeTitle }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const fetchedCards = await getCards(animeId, cardAmount);
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
          <h2>{animeTitle}</h2>
          {cards.length > 0 ? (
            cards.map((card) => <Card key={card.id} card={card} />)
          ) : (
            <p>Loading cards...</p>
          )}
        </div>
      )}
    </>
  );
}

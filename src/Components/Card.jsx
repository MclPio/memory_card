import { useState } from "react";

export default function Card({
  card,
  score,
  setScore,
  highScore,
  setHighScore,
  shuffle,
  cards,
  setCards,
}) {
  const [clicked, setClicked] = useState(false); // THIS MUST BE MOVED UP!

  function handleClick() {
    if (clicked === true) {
      setScore(0);
      setClicked(false);
    } else {
      setClicked(true);
      setScore((score += 1));
    }

    if (score > highScore) {
      setHighScore(score);
    }
    setCards(shuffle(cards));
  }

  return (
    <button className="table__card-button" onClick={handleClick}>
      <img src={card.png} alt={card.name} />
      <p>{card.name}</p>
    </button>
  );
}

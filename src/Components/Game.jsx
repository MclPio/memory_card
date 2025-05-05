export default function Game({
  cardAmount,
  animeId,
  gameStarted,
  setGameStarted,
}) {
  return <>{gameStarted && <div>Game Started!</div>}</>;
}

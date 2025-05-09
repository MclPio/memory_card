export default function Score({ score, highScore }) {
  return (
    <div className="score">
      <span className="score__current">Score: {score}</span>
      <span className="score__high">High Score: {highScore}</span>
    </div>
  );
}

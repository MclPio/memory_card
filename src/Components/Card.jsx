export default function Card({card}) {
  return (
    <div>
      <img src={card.png} alt={card.name} style={{ width: "100px" }} />
      <p>{card.name}</p>
    </div>
  );
}

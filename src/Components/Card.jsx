export default function Card({
  card,
  handleClick,
}) {

  return (
    <button className="table__card-button" onClick={() => handleClick(card.id)}>
      <img className="table__card-img" src={card.png} alt={card.name}/>
      <p>{card.name}</p>
    </button>
  );
}

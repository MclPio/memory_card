import getCharacters from "./getCharacters";

export default async function getCards(animeId, cardAmount) {
  const data = await getCharacters(animeId)
  const topCards = data.slice(0, cardAmount);
  const filterNameAndImageUrl = topCards.map((item) => ({id: item.character.mal_id, name: item.character.name, png: item.character.images.jpg.image_url}))
  return filterNameAndImageUrl
}

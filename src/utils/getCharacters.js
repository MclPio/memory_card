export default async function getCharacters(id) {
  const url = `https://api.jikan.moe/v4/anime/${id}/characters`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

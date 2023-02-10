import charactersJson from "../data/characters.json";

export function createCharacter(id) {
  let character = charactersJson.find((c) => c.id === id);
  return character;
}

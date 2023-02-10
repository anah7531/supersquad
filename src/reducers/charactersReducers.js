import charactersJson from "../data/characters.json";
import { addCharacter, removeCharacter } from "../actions";
import { createCharacter } from "./helpers";

function characters(state = charactersJson, action) {
  switch (action.type) {
    case addCharacter:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;

    case removeCharacter:
      return (characters = [...state, createCharacter(action.id)]);

    default:
      return state;
  }
}

export default characters;

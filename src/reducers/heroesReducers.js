import { addCharacter, removeCharacter } from "../actions";
import { createCharacter } from "./helpers";

function heroes(state = [], action) {
  switch (action.type) {
    case addCharacter:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;

    case removeCharacter:
      heroes = state.filter((item) => item.id !== action.id);
      return heroes;

    default:
      return state;
  }
}

export default heroes;

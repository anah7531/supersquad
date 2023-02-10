import { combineReducers } from "redux";
import characters from "./charactersReducers";
import heroes from "./heroesReducers";

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;

export const addCharacter = "addCharacter";
export const removeCharacter = "removeCharacter";

export function addCharacterById(id) {
  const action = {
    type: addCharacter,
    id,
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: removeCharacter,
    id,
  };
  return action;
}

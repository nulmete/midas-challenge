export const getItemFromLocalStorage = (itemKey) =>
  JSON.parse(localStorage.getItem(itemKey));

export const saveItemToLocalStorage = (itemKey, item) => {
  localStorage.setItem(itemKey, JSON.stringify(item));
};

export const deleteItemFromLocalStorage = (itemKey) => {
  localStorage.removeItem(itemKey);
};

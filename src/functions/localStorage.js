export const getLocalStorage = (value) => {
  const data = JSON.parse(localStorage.getItem("cart"));
  return data;
};

export const setLocalStorageCart = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const removeLocalStorage = (value) => {
  localStorage.removeItem(value);
};

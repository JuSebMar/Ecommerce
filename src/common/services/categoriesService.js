export const getAllCategory = async (category) => {
  const data = await fetch(`https://fakestoreapi.com/products/categories`);
  const res = await data.json();
  return res;
};

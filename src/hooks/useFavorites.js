import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(null);

  const handleFavorites = (id) => {
    setFavorites(id);
    const updateFavorite = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!updateFavorite.includes(id)) {
      const updateNew = [...updateFavorite, id];
      localStorage.setItem("favorites", JSON.stringify(updateNew));
    }
  };
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return { handleFavorites };
};

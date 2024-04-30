import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(null);

  const handleFavorites = (id) => {
    toast.success("Add To Favorites");
    setFavorites(id);
    const updateFavorite = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!updateFavorite.includes(id)) {
      const updateNew = [...updateFavorite, id];
      localStorage.setItem("favorites", JSON.stringify(updateNew));
    }
  };
  useEffect(() => {}, [favorites]);

  return { handleFavorites };
};

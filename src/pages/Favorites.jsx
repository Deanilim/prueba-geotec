import { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Curiosidades</h1>
      <ul>
        {favorites.map((fact, index) => (
          <li key={index} className="mt-2 p-4 border rounded">
            <div className="flex items-center">
              {fact.image && (
                <img
                  src={fact.image}
                  alt="Curiosidad"
                  className="w-16 h-16 object-cover mr-4"
                />
              )}
              <p>{typeof fact.fact === "string" ? fact.fact : "Curiosidad no válida"}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;

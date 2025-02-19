import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [fact, setFact] = useState(""); // Para la curiosidad
  const [catImage, setCatImage] = useState(""); // Para la imagen del gato
  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate(); // Para redirigir al usuario

  // Función para obtener una curiosidad y una imagen aleatoria
  const fetchFactAndImage = async () => {
    setLoading(true); // Activar el estado de carga
    try {
      const factResponse = await fetch("https://catfact.ninja/fact");
      const factData = await factResponse.json();
      const imageUrl = `https://cataas.com/cat/says/${factData.fact.split(' ')[0]}`;

      setFact(factData.fact); // Guarda la curiosidad
      setCatImage(imageUrl); // Guarda la imagen
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  // Función para guardar la curiosidad en favoritos
  const saveFavorite = () => {
    if (!fact) return; // No guardar si no hay curiosidad

    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    savedFavorites.push({ fact, image: catImage }); // Guarda la curiosidad y la imagen
    localStorage.setItem("favorites", JSON.stringify(savedFavorites));

    navigate("/favorites"); // Navegar a la página de favoritos
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Curiosidades sobre Gatos</h1>
      <p>Haz clic en el botón para obtener una curiosidad aleatoria sobre los gatos.</p>

      <button
        onClick={fetchFactAndImage} // Obtener una curiosidad al hacer clic
        className="bg-blue-500 text-white p-2 rounded mt-4"
      >
        Obtener Curiosidad
      </button>

      {/* Mostrar curiosidad y botones solo si hay datos */}
      {fact && (
        <div className="mt-4">
          {loading ? (
            <p>Cargando curiosidad...</p> // Mostrar mientras carga
          ) : (
            <>
              <p>{fact}</p>
              {catImage && (
                <div className="w-48 h-48 object-cover mt-4 mb-4"> {/* Añadir espacio entre la imagen y los botones */}
                  <img src={catImage} alt="Gato" className="w-full h-full object-cover rounded" />
                </div>
              )}
              
              {/* Botones para guardar y copiar */}
              <div className="mt-6 flex justify-center space-x-4"> {/* Flex para alinear los botones y space-x-4 para separarlos */}
                <button
                  onClick={saveFavorite}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Guardar en Favoritos
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(fact)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Copiar Curiosidad
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

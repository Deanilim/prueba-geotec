const CatFactCard = ({ fact }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(fact.fact);
    };
  
    return (
      <div className="mt-4 p-4 border rounded shadow-md">
        <p>{fact.fact}</p>
        <button
          onClick={copyToClipboard}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Copiar al portapapeles
        </button>
      </div>
    );
  };
  
  export default CatFactCard;
  
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Market = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem("tokens")) || [];
    setTokens(storedTokens);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">ATHLX Market</h1>
      {tokens.length === 0 ? (
        <p className="text-gray-600">No tokens available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tokens.map((token) => (
            <div key={token.id} className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{token.tokenName}</h2>
              <p className="text-gray-700">Symbol: {token.symbol}</p>
              <p className="text-gray-500">Supply: {token.supply}</p>
              <p className="text-gray-500">Price: ${token.price}</p>
              <Link
                to={`/token/${token.symbol}`}
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Market;
import React, { useState, useContext } from "react";
import { AthlxPriceContext } from "../AthlxPriceContext";

const CreateToken = () => {
  const { athlxPrice } = useContext(AthlxPriceContext);
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [priceFactor, setPriceFactor] = useState("1.2");

  const handleCreate = (e) => {
    e.preventDefault();
    const tokens = JSON.parse(localStorage.getItem("tokens")) || [];
    const calculatedPrice = parseFloat(athlxPrice) * parseFloat(priceFactor);
    const newToken = {
      id: Date.now(),
      tokenName,
      symbol,
      supply: parseInt(supply, 10),
      price: parseFloat(calculatedPrice.toFixed(2)),
    };
    const updatedTokens = [...tokens, newToken];
    localStorage.setItem("tokens", JSON.stringify(updatedTokens));
    setTokenName("");
    setSymbol("");
    setSupply("");
    setPriceFactor("1.2");
    alert("Token created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Create Token</h1>
      <form onSubmit={handleCreate} className="bg-white p-6 rounded shadow max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Token Name:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Symbol:
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Initial Supply:
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Price Factor (ATHLX Price × factor):
          </label>
          <input
            type="number"
            step="0.1"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={priceFactor}
            onChange={(e) => setPriceFactor(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-700">
            Current ATHLX Price: ${athlxPrice}
          </p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create Token
        </button>
      </form>
    </div>
  );
};

export default CreateToken;
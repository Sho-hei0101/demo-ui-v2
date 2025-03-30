// src/components/CreateToken.jsx
import React, { useState } from "react";

const CreateToken = () => {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const tokens = JSON.parse(localStorage.getItem("tokens")) || [];

    const newToken = {
      id: Date.now(),
      tokenName,
      symbol,
      supply: parseInt(supply, 10),
      price: parseFloat(price),
    };

    const updatedTokens = [...tokens, newToken];
    localStorage.setItem("tokens", JSON.stringify(updatedTokens));

    setTokenName("");
    setSymbol("");
    setSupply("");
    setPrice("");
    alert("Token created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Create Token</h1>
      <form onSubmit={handleCreate} className="bg-white p-6 rounded shadow max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Token Name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Symbol:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Initial Supply:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Price:</label>
          <input
            type="number"
            step="0.01"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
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
// src/components/TokenDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TokenDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [portfolio, setPortfolio] = useState({});
  const [quantity, setQuantity] = useState(1);

  // ダミーのチャートデータ
  const [chartData] = useState([
    { date: "2025-01-01", price: 1.0 },
    { date: "2025-01-02", price: 1.1 },
    { date: "2025-01-03", price: 0.9 },
    { date: "2025-01-04", price: 1.2 },
    { date: "2025-01-05", price: 1.3 },
  ]);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem("tokens")) || [];
    const storedPortfolio = JSON.parse(localStorage.getItem("portfolio")) || {};

    const foundToken = storedTokens.find((t) => t.symbol === symbol);
    setToken(foundToken || null);
    setPortfolio(storedPortfolio);
  }, [symbol]);

  const handleBuy = () => {
    if (!token) return;
    const currentAmount = portfolio[symbol] || 0;
    const newAmount = currentAmount + parseInt(quantity, 10);

    const updatedPortfolio = { ...portfolio, [symbol]: newAmount };
    setPortfolio(updatedPortfolio);
    localStorage.setItem("portfolio", JSON.stringify(updatedPortfolio));

    alert(`Bought ${quantity} ${symbol} tokens!`);
  };

  const handleSell = () => {
    if (!token) return;
    const currentAmount = portfolio[symbol] || 0;
    const sellQty = parseInt(quantity, 10);

    if (sellQty > currentAmount) {
      alert("You don't have enough tokens to sell.");
      return;
    }

    const newAmount = currentAmount - sellQty;
    const updatedPortfolio = { ...portfolio, [symbol]: newAmount };
    setPortfolio(updatedPortfolio);
    localStorage.setItem("portfolio", JSON.stringify(updatedPortfolio));

    alert(`Sold ${quantity} ${symbol} tokens!`);
  };

  if (token === null) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <p className="text-gray-600 mb-4">Token not found.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Back to Market
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        {token.tokenName} ({token.symbol})
      </h1>

      {/* トークン基本情報 */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <p className="text-gray-700 mb-2">Price: ${token.price}</p>
        <p className="text-gray-700 mb-2">Supply: {token.supply}</p>
        <p className="text-gray-700 mb-2">
          Your Holdings: {portfolio[symbol] || 0} tokens
        </p>
      </div>

      {/* チャート表示 */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Price History</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="price" stroke="#3B82F6" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 買い/売りフォーム */}
      <div className="bg-white p-6 rounded shadow max-w-md">
        <label className="block text-gray-700 font-semibold mb-1">
          Quantity:
        </label>
        <input
          type="number"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
        />
        <div className="flex space-x-4">
          <button
            onClick={handleBuy}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Buy
          </button>
          <button
            onClick={handleSell}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenDetail;
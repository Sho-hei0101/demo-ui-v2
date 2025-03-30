// src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [tokens, setTokens] = useState([]);
  const [portfolio, setPortfolio] = useState({});
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem("tokens")) || [];
    const storedPortfolio = JSON.parse(localStorage.getItem("portfolio")) || {};

    setTokens(storedTokens);
    setPortfolio(storedPortfolio);

    let total = 0;
    storedTokens.forEach((token) => {
      const holdings = storedPortfolio[token.symbol] || 0;
      total += holdings * token.price;
    });
    setTotalValue(total);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Investor Dashboard</h1>
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">
          Total Portfolio Value: ${totalValue.toFixed(2)}
        </h2>
      </div>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Token Overview</h2>
        {tokens.length === 0 ? (
          <p className="text-gray-600">No tokens available.</p>
        ) : (
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Token Name</th>
                <th className="px-4 py-2">Symbol</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Holdings</th>
                <th className="px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => {
                const holdings = portfolio[token.symbol] || 0;
                const value = (token.price * holdings).toFixed(2);
                return (
                  <tr key={token.id} className="text-center">
                    <td className="border px-4 py-2">{token.tokenName}</td>
                    <td className="border px-4 py-2">{token.symbol}</td>
                    <td className="border px-4 py-2">${token.price}</td>
                    <td className="border px-4 py-2">{holdings}</td>
                    <td className="border px-4 py-2">${value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
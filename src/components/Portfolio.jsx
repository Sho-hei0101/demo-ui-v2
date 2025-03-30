// src/components/Portfolio.jsx
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState({});
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const storedPortfolio = JSON.parse(localStorage.getItem("portfolio")) || {};
    const storedTokens = JSON.parse(localStorage.getItem("tokens")) || [];
    setPortfolio(storedPortfolio);
    setTokens(storedTokens);
  }, []);

  // トークンの保有数と価格から各アイテムを算出
  const portfolioDetails = Object.keys(portfolio).map((symbol) => {
    const token = tokens.find((t) => t.symbol === symbol);
    const holdings = portfolio[symbol];
    return {
      ...token,
      holdings,
      totalValue: token ? token.price * holdings : 0,
    };
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Your Portfolio</h1>
      {portfolioDetails.length === 0 ? (
        <p className="text-gray-600">You don't own any tokens yet.</p>
      ) : (
        <div className="space-y-4">
          {portfolioDetails.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {item.tokenName ? item.tokenName : item.symbol}
                </h2>
                <p className="text-gray-700">Holdings: {item.holdings}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">
                  Total Value: ${item.totalValue.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
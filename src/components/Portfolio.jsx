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

  const portfolioDetails = Object.keys(portfolio).map((symbol) => {
    const token = tokens.find((t) => t.symbol === symbol);
    const holdings = portfolio[symbol];
    return {
      ...token,
      holdings,
      totalValue: token ? token.price * holdings : 0,
    };
  });

  const exportCSV = () => {
    let csv = "Token Name,Symbol,Price,Holdings,Total Value\n";
    portfolioDetails.forEach((item) => {
      csv += `${item.tokenName || item.symbol},${item.symbol},${item.price},${item.holdings},${item.totalValue.toFixed(2)}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Your Portfolio</h1>
      {portfolioDetails.length === 0 ? (
        <p className="text-gray-600">You don't own any tokens yet.</p>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {portfolioDetails.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded shadow flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold">
                    {item.tokenName || item.symbol}
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
          <button
            onClick={exportCSV}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Export as CSV
          </button>
        </>
      )}
    </div>
  );
};

export default Portfolio;
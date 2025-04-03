import React, { useEffect, useState } from "react";

const ActivityFeed = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTx = JSON.parse(localStorage.getItem("transactions")) || [];
    const sortedTx = storedTx.sort((a, b) => b.id - a.id);
    setTransactions(sortedTx);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Recent Activity</h1>
      {transactions.length === 0 ? (
        <p className="text-gray-600">No recent activity.</p>
      ) : (
        <ul className="space-y-2">
          {transactions.map((tx) => (
            <li key={tx.id} className="border p-2 rounded">
              <span className="font-semibold">{tx.type.toUpperCase()}</span>{" "}
              {tx.quantity} tokens of <span className="font-semibold">{tx.tokenSymbol}</span> @ ${tx.price} on {tx.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActivityFeed;
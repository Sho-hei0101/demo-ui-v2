import React, { useState } from "react";

const TransactionHistory = ({ transactions }) => {
  const [filter, setFilter] = useState("all");
  const filteredTransactions = transactions.filter((tx) => {
    if (filter === "all") return true;
    return tx.type === filter;
  });

  return (
    <div>
      <div className="mb-4 flex items-center">
        <label className="mr-2 font-semibold">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="all">All</option>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
      </div>
      {filteredTransactions.length === 0 ? (
        <p className="text-gray-600">No transactions to display.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTransactions.map((tx) => (
            <li key={tx.id} className="border p-2 rounded">
              <p>
                <span className="font-semibold">{tx.type.toUpperCase()}</span>{" "}
                {tx.quantity} tokens @ ${tx.price} on {tx.date}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;
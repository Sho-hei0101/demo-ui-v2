import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [news, setNews] = useState([
    { id: 1, title: "ATHLX Surges as New Athlete Token Launched", date: "2025-04-01" },
    { id: 2, title: "Market Update: ATHLX Price Reaches New High", date: "2025-04-01" },
    { id: 3, title: "Major Partnership Announced in ATHLX Ecosystem", date: "2025-03-31" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem = {
        id: Date.now(),
        title: "Breaking News: " + Math.random().toString(36).substring(7),
        date: new Date().toLocaleDateString(),
      };
      setNews((prevNews) => [newItem, ...prevNews]);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">News Feed</h1>
      {news.length === 0 ? (
        <p className="text-gray-600">No news available.</p>
      ) : (
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsFeed;
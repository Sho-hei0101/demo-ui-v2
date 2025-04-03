import React, { createContext, useState, useEffect } from "react";

export const AthlxPriceContext = createContext();

export const AthlxPriceProvider = ({ children }) => {
  const [athlxPrice, setAthlxPrice] = useState(1.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAthlxPrice((prevPrice) => {
        const fluctuation = Math.random() * 0.1 - 0.05; // ±5%
        const newPrice = Math.max(0.5, prevPrice * (1 + fluctuation));
        return parseFloat(newPrice.toFixed(2));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AthlxPriceContext.Provider value={{ athlxPrice }}>
      {children}
    </AthlxPriceContext.Provider>
  );
};
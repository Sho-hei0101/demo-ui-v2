import React, { useState } from "react";

const CreateTokenForm: React.FC = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState<number>(1000);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`トークンを作成しました。\n\n名前: ${name}\nシンボル: ${symbol}\n供給量: ${supply}`);

    // localStorage に保存
    const tokens = JSON.parse(localStorage.getItem("tokens") || "[]");
    tokens.push({ name, symbol, supply });
    localStorage.setItem("tokens", JSON.stringify(tokens));
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <h2 className="text-xl font-semibold mb-4">🪙 フリートークン作成</h2>

      <div>
        <label>📝 Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>🔤 Symbol</label>
        <input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>📦 Initial Supply</label>
        <input
          type="number"
          value={supply}
          onChange={(e) => setSupply(Number(e.target.value))}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Create Token
      </button>
    </form>
  );
};

export default CreateTokenForm;
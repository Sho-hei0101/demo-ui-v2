import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const newFeedback = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toLocaleString(),
    };
    const updatedFeedbacks = [...existingFeedbacks, newFeedback];
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    setName("");
    setEmail("");
    setMessage("");
    alert("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Feedback</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Name:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Email:</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Message:</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
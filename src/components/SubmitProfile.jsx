// src/components/SubmitProfile.jsx
import React, { useState } from "react";

const SubmitProfile = () => {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProfiles = JSON.parse(localStorage.getItem("profiles")) || [];

    const newProfile = {
      id: Date.now(),
      name,
      sport,
      bio,
      status: "pending",
    };

    const updatedProfiles = [...existingProfiles, newProfile];
    localStorage.setItem("profiles", JSON.stringify(updatedProfiles));

    setName("");
    setSport("");
    setBio("");
    alert("Profile submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Submit Profile</h1>
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
          <label className="block text-gray-700 font-semibold mb-1">Sport:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Bio:</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SubmitProfile;
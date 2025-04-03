import React, { useEffect, useState } from "react";

const ReviewProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const storedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];
    setProfiles(storedProfiles);
  }, []);

  const handleApprove = (id) => {
    const updated = profiles.map((p) =>
      p.id === id ? { ...p, status: "approved" } : p
    );
    setProfiles(updated);
    localStorage.setItem("profiles", JSON.stringify(updated));
  };

  const handleReject = (id) => {
    const updated = profiles.map((p) =>
      p.id === id ? { ...p, status: "rejected" } : p
    );
    setProfiles(updated);
    localStorage.setItem("profiles", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Review Profiles</h1>
      {profiles.length === 0 ? (
        <p className="text-gray-600">No profiles found.</p>
      ) : (
        <div className="space-y-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-1">{profile.name}</h2>
              <p className="text-gray-700">Sport: {profile.sport}</p>
              <p className="text-gray-700">Bio: {profile.bio}</p>
              <p className="text-gray-500 mt-1">Status: {profile.status}</p>
              {profile.status === "pending" && (
                <div className="mt-2">
                  <button
                    onClick={() => handleApprove(profile.id)}
                    className="px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(profile.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewProfiles;
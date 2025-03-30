import React, { useState } from "react";

const PlayerProfileForm: React.FC = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [team, setTeam] = useState("");
  const [nationality, setNationality] = useState("");
  const [idFile, setIdFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name,
      position,
      team,
      nationality,
      idFile,
    });
    alert("Submission completed. Please wait for the review result.");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Submit Athlete Profile</h2>

      <div>
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>Position</label>
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>Team</label>
        <input
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>Nationality</label>
        <input
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <div>
        <label>Please upload your ID document</label>
        <input
          type="file"
          accept="image/*,.pdf"
          onChange={(e) => setIdFile(e.target.files?.[0] || null)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>

      <button type="submit">Submit Profile</button>
    </form>
  );
};

export default PlayerProfileForm;

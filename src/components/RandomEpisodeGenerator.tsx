import React, { useState } from 'react';
import './RandomEpisodeGenerator.css';

const RandomEpisodeGenerator: React.FC = () => {
  const [seasons, setSeasons] = useState<number>(1);
  const [episodesPerSeason, setEpisodesPerSeason] = useState<number>(1);
  const [randomEpisode, setRandomEpisode] = useState<{ season: number; episode: number } | null>(null);

  const handleGenerateEpisode = () => {
    const randomSeason = Math.floor(Math.random() * seasons) + 1;
    const randomEpisode = Math.floor(Math.random() * episodesPerSeason) + 1;
    setRandomEpisode({ season: randomSeason, episode: randomEpisode });
  };

  return (
    <div className="container">
      <h1>Random Episode Generator</h1>
      <div className="input-group">
        <label htmlFor="seasons">Number of Seasons:</label>
        <input
          type="number"
          id="seasons"
          min="1"
          value={seasons}
          onChange={(e) => setSeasons(Math.max(1, parseInt(e.target.value)))}
        />
      </div>
      <div className="input-group">
        <label htmlFor="episodes">Episodes per Season:</label>
        <input
          type="number"
          id="episodes"
          min="1"
          value={episodesPerSeason}
          onChange={(e) => setEpisodesPerSeason(Math.max(1, parseInt(e.target.value)))}
        />
      </div>
      <button onClick={handleGenerateEpisode}>Generate Random Episode</button>
      {randomEpisode && (
        <div className="result">
          <h2>Random Episode:</h2>
          <p>
            Season {randomEpisode.season}, Episode {randomEpisode.episode}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomEpisodeGenerator;


import React, { useState } from 'react';
import Countdown from './Countdown';
import './index.css';

const App = () => {
  const launchDate = '2025-06-24T00:00:00';

  const snowflakes = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 5,
  }));

  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const toggleTeamDetails = () => setShowTeamDetails(!showTeamDetails);

  return (
    <div className="container">
      <h1>🚀 Launching Soon: SnowwUI Library</h1>
      <Countdown targetDate={launchDate} />

      {/* About Me Section */}
      <div className="about">
        <h2>👨‍💻 About the Creator</h2>
        <p>
          Hi! I'm <strong><span className="creator-name">Suyash Abhijit Rane</span></strong>, a passionate developer focused on developer experience.
          I'm creating Snoww UI library to provide a better user experience, making it easier and faster for developers to build beautiful and functional applications.
        </p>
        <p>
          Follow me on{' '}
          <a href="https://github.com/SUYASH2004" target="_blank" rel="noreferrer">GitHub</a> or{' '}
          <a href="https://www.linkedin.com/in/suyash-rane-4aaa84258/" target="_blank" rel="noreferrer">LinkedIn</a>.
        </p>
      </div>

      {/* Button to Toggle Team Section */}
      <div className="explore-team-button">
        <button onClick={toggleTeamDetails}>
          {showTeamDetails ? 'Hide Team' : 'Explore Team'}
        </button>
      </div>

      {/* Team Section */}
      {showTeamDetails && (
        <div className="team">
          <h2>👥 Meet the Team</h2>
          <div className="team-member">
            <h3>Deven Randhir</h3>
            <p>
              Deven is an experienced developer with a knack for creating intuitive user interfaces and improving user experience.
            </p>
            <p>
              Connect with Deven on{' '}
              <a href="https://www.linkedin.com/in/deven-randhir-a85b8a259" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </div>
          <div className="team-member">
            <h3>Sushank Chandekar</h3>
            <p>
              Sushank brings a creative approach to development, focused on performance optimization and seamless user interactions.
            </p>
            <p>
              Connect with Sushank on{' '}
              <a href="https://www.linkedin.com/in/sushank-chandekar-720811257/" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>
          </div>
        </div>
      )}

      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          ❄️
        </div>
      ))}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';
import "../components/ProfileInfo.css" // Import the CSS file

const ProfileInfo = () => {
  // Get the current day of the week
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  // State to hold the current UTC time in milliseconds
  const [currentUTCTime, setCurrentUTCTime] = useState(Date.now());

  // Function to update the UTC time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentUTCTime(Date.now());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title"data-testid="slackUserName">Oluwatosin Atere</h2>
         
        {/* Profile Picture */}
        <div className="profile-picture" data-testid="slackDisplayImage">
          <img
            src={profile}
            alt="Oluwatosin Atere"
            className="profile-image"
            data-testid="profilePicture"
          />
        </div>

        {/* Current Day of the Week */}
        <p className="profile-info"data-testid="currentDayOfTheWeek">
          <strong>Current Day of the Week:</strong> <span data-testid="currentDayOfTheWeek">{currentDay}</span>
        </p>

        {/* Current UTC Time in Milliseconds */}
        <p className="profile-info" data-testid="currentUTCTime">
          <strong>Current UTC Time (Milliseconds):</strong> <span data-testid="currentUTCTime">{currentUTCTime}</span>
        </p>

        <p className="profile-info" data-testid="myTrack">
          <strong>Track:</strong> <span>Frontend Development</span>
        </p>

        {/* Routing to GitHub */}
        <div className="profile-link">
          <a href="https://github.com/atere21" target="_blank" rel="noopener noreferrer">
            <button className="github-button" data-testid="githubURL">
              My Github Repository <span data-testid="githubURL"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;

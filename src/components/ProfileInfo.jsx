import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

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
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-100 p-4 justify-center grid mx-auto items-center rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-pink-400 text-center">Profile Information</h2>
        
        {/* Profile Picture */}
        <div className="mb-4 rounded-full justify-center items-center mx-auto">
          <img
            src={profile}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto"
            data-testid="profilePicture"
          />
          <span data-testid="profile"></span>
        </div>
        
        {/* Current Day of the Week */}
        <p className="text-lg mb-2 text-center p-2">
          <strong>Current Day of the Week:</strong> <span data-testid="currentDayOfTheWeek">{currentDay}</span>
        </p>

        {/* Current UTC Time in Milliseconds */}
        <p className="text-lg text-center p-2">
          <strong>Current UTC Time (Milliseconds):</strong> <span data-testid="currentUTCTime">{currentUTCTime}</span>
        </p>

        <p className="text-lg mb-2 text-center p-2">
          <strong>Track:</strong> <span>Frontend Development</span>
        </p>
        
        {/* Routing to GitHub */}
        <div className="flex justify-center py-4">
          <a href="https://github.com/atere21" target="_blank" rel="noopener noreferrer">
            <button className="bg-pink-400 text-white p-2 rounded-md cursor-pointer hover:bg-pink-500">
              My Github Repository <span data-testid="githubURL"></span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;


import React, { useState } from "react";
import "./Sidebar.css"; 
import dashboardIcon from "../../assets/dashboard.png";
import learnIcon from "../../assets/learn.png";
import forumsIcon from "../../assets/forums.png";
import upskillIcon from "../../assets/upskill.png";
import contestIcon from "../../assets/contest.png";
import leaderboardIcon from "../../assets/leaderboard.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Upskill");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <ul className="menu">
        <li 
          className={`menu-item ${activeItem === "Dashboard" ? "active" : ""}`}
          onClick={() => handleItemClick("Dashboard")}
        >
          <img src={dashboardIcon} alt="Dashboard Icon" className="icon" />
          Dashboard
        </li>
        <li 
          className={`menu-item ${activeItem === "Learn" ? "active" : ""}`}
          onClick={() => handleItemClick("Learn")}
        >
          <img src={learnIcon} alt="Learn Icon" className="icon" />
          Learn
        </li>
        <li 
          className={`menu-item ${activeItem === "Forums" ? "active" : ""}`}
          onClick={() => handleItemClick("Forums")}
        >
          <img src={forumsIcon} alt="Forums Icon" className="icon" />
          Forums
        </li>
        <li 
          className={`menu-item ${activeItem === "Upskill" ? "active" : ""}`}
          onClick={() => handleItemClick("Upskill")}
        >
          <img src={upskillIcon} alt="Upskill Icon" className="icon" />
          Upskill
  
        </li>
        <li 
          className={`menu-item ${activeItem === "Contest" ? "active" : ""}`}
          onClick={() => handleItemClick("Contest")}
        >
          <img src={contestIcon} alt="Contest Icon" className="icon" />
          Contest
        </li>
        <li 
          className={`menu-item ${activeItem === "Leaderboard" ? "active" : ""}`}
          onClick={() => handleItemClick("Leaderboard")}
        >
          <img src={leaderboardIcon} alt="Leaderboard Icon" className="icon" />
          Leaderboard
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

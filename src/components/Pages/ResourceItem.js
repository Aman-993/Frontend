import React from "react";
import "./ResourceItem.css";
import time from "../../assets/time.png";
const ResourceItem = ({ item }) => {

  const iconPaths = {
    video: require("../../assets/video-icon.png"),
    article: require("../../assets/article-icon.png"),
    quiz: require("../../assets/quiz-icon.png"),
    exercise: require("../../assets/exercise-icon.png"),
    combined: require("../../assets/combined-icon.png"),
  };

  return (
    <div className="resource-item">
      <img 
        src={iconPaths[item.type]} 
        alt={`${item.type} icon`} 
        className="resource-icon" 
      />
      <span className="resource-title">{item.title}</span>
      <span className="resource-time"><img src={time} alt="time" className="timer-icon" />{item.time}</span>
    </div>
  );
};

export default ResourceItem;

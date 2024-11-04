import React, { useState } from "react";
import ResourceItem from "./ResourceItem";
import "./Resource.css";
import duration from "../../assets/duration-icon.png";
import difficulty from "../../assets/difficulty-icon.png";
import items from "../../assets/items-icon.png";
import up from "../../assets/up-icon.png";
import down from "../../assets/down-icon.png";

const Resource = ({ resource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="resource">
      <div className="resource-header" onClick={toggleExpand}>
        <div className="resource-info">
          <span className="part-label">{resource.part}</span>
          <span className="resource-title">{resource.title}</span>
        </div>
        <div className="right-resource">
        <div className="resource-meta">
          <span className="res-header-right">
            <img src={duration} alt="Duration" className="meta-icon" />
            {resource.duration}
          </span>
          <span className="res-header-right">
            <img src={difficulty} alt="Difficulty" className="meta-icon" />
            {resource.difficulty}
          </span>
          <span className="res-header-right">
            <img src={items} alt="Items" className="meta-icon" />
            {resource.items.length} items
          </span>
        </div>
        
        <div className="toggle-icon">
          <img
            src={isExpanded ? up : down}
            alt={isExpanded ? "Collapse" : "Expand"}
          />
        </div></div>
      </div>
        <div className="container-comp-perc">

      <div className="comp-perc">
          {resource.completion} Completed </div>
          </div>
      <div className="completion">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: resource.completion }}
            ></div>
          </div>
        </div>

      {isExpanded && (
        <div className="resource-content">
          {resource.items.map((item, index) => (
            <ResourceItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Resource;

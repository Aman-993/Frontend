import React from "react";
import Resource from "./Resource";
import "./ResourceList.css";

const resourcesData = [
  {
    part: "Part 1",
    title: "Lorem Ipsum Dolor Sit Amet",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [
      { type: "video", title: "Video 1", time: "10:00" },
      { type: "article", title: "Article 1", time: "10:00" },
      { type: "quiz", title: "Quiz 1", time: "10:00" },
      { type: "exercise", title: "Coding Exercise 1", time: "10:00" },
      { type: "combined", title: "Combined Resource 1", time: "10:00" },
    ],
     completion: "45%" ,
  },
  {
    part: "Part 2",
    title: "Lorem Ipsum Dolor Sit Amet",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [
      { type: "video", title: "Video 1", time: "10:00" },
      { type: "article", title: "Article 1", time: "10:00" },
      { type: "quiz", title: "Quiz 1", time: "10:00" },
      { type: "exercise", title: "Coding Exercise 1", time: "10:00" },
      { type: "combined", title: "Combined Resource 1", time: "10:00" },
    ],
    completion: "20%",
  },
  {
    part: "Part 3",
    title: "Lorem Ipsum Dolor Sit Amet",
    duration: "02:00:00",
    difficulty: "Medium",
    items: [
      { type: "video", title: "Video 1", time: "10:00" },
      { type: "article", title: "Article 1", time: "10:00" },
      { type: "quiz", title: "Quiz 1", time: "10:00" },
      { type: "exercise", title: "Coding Exercise 1", time: "10:00" },
      { type: "combined", title: "Combined Resource 1", time: "10:00" },
    ],
    completion: "0%",
  },
];

const ResourceList = () => {
  return (
    <div className="resource-list-container">
      <div className="resource-list">
        {resourcesData.map((resource, index) => (
          <div className="resourceitem" key={index}>
            <Resource resource={resource} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;

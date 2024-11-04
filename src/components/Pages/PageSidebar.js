import React, { useState } from "react";
import Time from '../../assets/time.png';
import "./PageSidebar.css";

const PageSidebar = () => {
  const [activeChapter, setActiveChapter] = useState("Chapter 1"); 

  const handleChapterClick = (chapter) => {
    setActiveChapter(chapter);
  };

  return (
    <aside className="page-sidebar">
      <ul className="chapter-list">
        {["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"].map(
          (chapter, index) => (
            <li
              key={index}
              className={`chapter-item ${activeChapter === chapter ? "active" : ""}`}
              onClick={() => handleChapterClick(chapter)}
            >
              <span>{chapter}</span>
               <div>
              {activeChapter === chapter && (
                <div className="timer">
                  <img src={Time} alt="Timer" className="time" /> 
                  <span style={{ color: " #608AD2" }}>05:00:00</span>
                </div>
              )}
            </div>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default PageSidebar;

import React, { useState } from "react";
import teamMembers from "../Data/home.data";

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrow = (direction) => {
    const length = teamMembers.length;
    if (direction === "up")
      setCurrentIndex((prev) => (prev - 1 + length) % length);
    else setCurrentIndex((prev) => (prev + 1) % length);
  };

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <div className="main-container mx-5 shadow-sm">
      {/* Carousel Section */}
      <div className="controls-section">
        <div className="member-info">
          <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
          <p className="member-role">{teamMembers[currentIndex].role}</p>
        </div>

        <div className="dots">
          {teamMembers.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            ></div>
          ))}
        </div>
      </div>
      <div className="carousel-section">
        <div className="carousel-container">
          <button className="nav-arrow up" onClick={() => handleArrow("up")}>
            <img
              src="https://ik.imagekit.io/gopichakradhar/icons/top.png"
              alt="Up"
            />
          </button>

          <div className="carousel-track">
            {teamMembers.map((member, i) => {
              let position = "hidden";
              if (i === currentIndex) position = "center";
              else if (i === (currentIndex + 1) % teamMembers.length)
                position = "down-1";
              else if (i === (currentIndex + 2) % teamMembers.length)
                position = "down-2";
              else if (
                i ===
                (currentIndex - 1 + teamMembers.length) % teamMembers.length
              )
                position = "up-1";
              else if (
                i ===
                (currentIndex - 2 + teamMembers.length) % teamMembers.length
              )
                position = "up-2";

              return (
                <div key={i} className={`card ${position}`}>
                  <img src={member.img} alt={member.name} />
                </div>
              );
            })}
          </div>

          <button
            className="nav-arrow down"
            onClick={() => handleArrow("down")}
          >
            <img
              src="https://ik.imagekit.io/gopichakradhar/icons/down.png"
              alt="Down"
            />
          </button>
        </div>
      </div>

      
    </div>
  );
}

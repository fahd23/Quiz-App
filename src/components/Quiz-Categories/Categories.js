import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    <div className="container">
      <h1 className="title">Select the quiz category</h1>
      <div className="category-container">
        <div className="quiz-card">
          <img
            src="Assets/html-quiz.png"
            alt="HTML quiz"
            className="card-image"
          />
          <div className="image-text">
            <h3>HTML</h3>
            <p className="details">Test Your HTML Understanding here</p>
          </div>
        </div>

        <div className="quiz-card">
          <img
            src="Assets/css-quiz.jpg"
            alt="Css Quiz"
            className="card-image"
          />
          <div className="image-text">
            <h3>CSS</h3>
            <p className="details">Test Your CSS Understanding here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

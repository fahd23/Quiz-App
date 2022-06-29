import React from "react";
import { useNavigate } from "react-router-dom";
const Categories = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/rules");
  };
  return (
    <div>
      <section className="quiz-type" onClick={() => clickHandler("HTML")}>
        <div className="quiz-type-one">
          <img src="images/general.jpg" alt="general quiz" className="image" />
          <div className="image-text">
            <h3>HTML</h3>
            <p className="details">Test Your HTML Understanding</p>
          </div>
        </div>
      </section>
      <section className="quiz-type" onClick={() => clickHandler("CSS")}>
        <div className="quiz-type-two">
          <img src="images/harry.jpg" alt="harry potter" />
          <div className="image-text">
            <h3>CSS</h3>
            <p className="details">Test Your CSS Understanding here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;

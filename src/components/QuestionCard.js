import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ src, title, text }) => {
    return (
      <div className="question_card">
        <div className="question_card_info">
          <h2>{title}</h2>
          <button>{text}</button>
        </div>
        <div className="question_card_image" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    );
  };

export default QuestionCard;

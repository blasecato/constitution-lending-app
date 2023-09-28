import { Button } from "antd";
import React from "react";

const ButtonsQuestions = ({ cuestion, text, options, listItems }) => {
  return (
    <div className="ButtonsQuestions">
      <p className="h2">{cuestion}</p>
      {text && <p className="h4 h4-w4 title-text">{text}</p>}
      {listItems?.length >= 0 && (
        <ol className="list">
          {listItems.map((item) => (
            <li className="h4 h4-w4" key={item.id}>
              {item.text}
            </li>
          ))}
        </ol>
      )}
      <div className="options">
        {options?.map((option) => (
          <Button className="Button-option" key={option.id}>
            {option.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default ButtonsQuestions;

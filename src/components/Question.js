import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <header>
        <h2>
          {title}{" "}
          <button onClick={() => setShowInfo(!showInfo)} className="btnAi">
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </h2>

        {showInfo && <p>{info}</p>}
      </header>
    </article>
  );
};

export default Question;

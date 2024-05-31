import React from "react";
import "./Glossary.css";

const Glossary = ({glossary, handleHover, handleMouseOut}) => {
  

  return (
    <div className="glossary">
      <h1>Glossary</h1>
      <p>
        Here are some terms you may come across when discussing cervical cancer
        and related topics. We have provided definitions to help you understand
        these terms better.
      </p>
      <h2>Terms and Definitions</h2>
      <ul>
        {Object.entries(glossary).map(([term, definition]) => (
          <li key={term}>
            <div
              className="glossary-term term"
            >
              {term}:{" "}
            </div>
            {definition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glossary;

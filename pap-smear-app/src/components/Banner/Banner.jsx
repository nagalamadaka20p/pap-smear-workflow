import React from "react";
import "./Banner.css";
import Survey from "../Survey/Survey";

const Banner = ({ glossary, handleHover, handleMouseOut }) => {
  return (
    <div className="banner">
      <h1>Do I need a Pap smear?</h1>
      <p>
        A Pap smear is a sampling of cells from the surface of the <u
          className="glossary-term"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          cervix
        </u> to screen for early{" "}
        <u
          className="glossary-term"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          cervical cancer
        </u>
        . By screening early, we can catch and treat cervical cancer before it
        becomes a serious problem.
      </p>
      <p>
        This website is intended to help you understand the current guidelines
        for Pap smears. After answering a few questions, the website will
        provide a tailored recommendation for you on whether you need a Pap
        smear.{" "}
      </p>
      <p>
        This is not a substitute for expert medical care. If you need a provider
        in Rhode Island for care, please click on the PROVIDERS tab. To begin,
        fill out the questions below.
      </p>
      <Survey glossary={glossary} handleHover={handleHover}
            handleMouseOut={handleMouseOut}/>
    </div>
  );
};

export default Banner;

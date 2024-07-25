import React from "react";
import "./Banner.css";
import Survey from "../Survey/Survey";
import { Link } from "react-router-dom";

const Banner = ({ glossary, handleHover, handleMouseOut }) => {
  return (
    <div className="banner">
      <h1>Do I need a Pap smear?</h1>
      <p className="paragraph">
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
        . 
      </p>
      <p className="paragraph">
      Cervical cancer can cause symptoms ranging from minor bleeds to life threatening situations. However, by screening early, we can catch and treat cervical cancer <i>before</i> it
      becomes a serious problem.
      </p>
      <p className="paragraph">
        This website is intended to help you understand the current guidelines
        for Pap smears. After answering a few questions, the website will
        provide a tailored recommendation for you on whether you need a Pap
        smear.{" "}
      </p>
      <p className="paragraph">
        This is not a substitute for expert medical care. If you need a provider
        in Rhode Island for care, please click <Link
                    to="/providers"
                    className="menuhover"
                  >
                    {" "}
                    here
                  </Link>. If you are uninsured or low income, click <a href="https://health.ri.gov/programs/womenscancerscreening/">here</a> for more information about the Women's Cancer Screening Program in Rhode Island. To begin,
        fill out the questions below.
      </p>
      <Survey glossary={glossary} handleHover={handleHover}
            handleMouseOut={handleMouseOut}/>
    </div>
  );
};

export default Banner;

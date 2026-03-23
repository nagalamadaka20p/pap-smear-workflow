import React from "react";
import "./Banner.css";
import Survey from "../Survey/Survey";

const Banner = ({ glossary, handleHover, handleMouseOut }) => {
  return (
    <div className="banner">
      <h1>Do I need a Pap smear?</h1>
      <p className="paragraph">
        A Pap smear is a sampling of cells from the surface of the{" "}
        <u
          className="glossary-term"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          {" "}
          cervix
        </u>{" "}
        to screen for early{" "}
        <u
          className="glossary-term"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          cervical cancer
        </u>
        . Testing for HPV (human papillomavirus) may also be part of your
        screening.{" "}
        <a
          href="https://www.acog.org/womens-health/videos/cervical-cancer-screening"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here
        </a>{" "}
        is more information and a video about cervical cancer screening.
      </p>
      <p className="paragraph">
        Cervical cancer can cause symptoms ranging from minor bleeds to life
        threatening situations. However, by screening early, we can catch and
        treat cervical cancer <i>before</i> it becomes a serious problem.
      </p>
      <p className="paragraph">
        This website is intended to help you understand whether you need a Pap
        smear. After answering a few questions, the website will provide a
        tailored recommendation for you about whether you need a Pap smear.{" "}
      </p>
      <p className="paragraph">
        This is not a substitute for expert medical care. If you are unsure if
        you need care or cannot answer the questions in the survey, we suggest
        you make an appointment with a doctor. If you need a healthcare provider
        in Rhode Island, please click{" "}
        <a
          href="/providers"
          target="_blank"
          rel="noopener noreferrer"
          className="menuhover"
        >
          here
        </a>{" "}
        for a list of providers who can provide cervical cancer screening. If
        you do not have health insurance or cannot afford to visit the doctor,
        click{" "}
        <a
          href="https://health.ri.gov/programs/womenscancerscreening/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        for more information about the Women's Cancer Screening Program in Rhode
        Island.
      </p>
      <p className="paragraph">To begin, fill out the questions below.</p>
      <Survey
        glossary={glossary}
        handleHover={handleHover}
        handleMouseOut={handleMouseOut}
      />
    </div>
  );
};

export default Banner;

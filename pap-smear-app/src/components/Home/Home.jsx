import React, { useState } from "react";
import "./Home.css";

const Home = ({ glossary, handleHover, handleMouseOut }) => {
  const [showHPVAnswer, setShowHPVAnswer] = useState(false);
  const [showGardasilAnswer, setShowGardasilAnswer] = useState(false);
  const [showCervicalPreCancerAnswer, setShowCervicalPreCancerAnswer] =
    useState(false);
  const [showPortalAnswer, setShowPortalAnswer] = useState(false);

  const toggleHPVAnswer = () => {
    setShowHPVAnswer(!showHPVAnswer);
  };

  const toggleGardasilAnswer = () => {
    setShowGardasilAnswer(!showGardasilAnswer);
  };

  const toggleCervicalPreCancerAnswer = () => {
    setShowCervicalPreCancerAnswer(!showCervicalPreCancerAnswer);
  };

  const togglePortalAnswer = () => {
    setShowPortalAnswer(!showPortalAnswer);
  };

  return (
    <div className="home">
      <h1>Do I need a Pap smear?</h1>
      <p>
        A Pap smear is a sampling of cells from the surface of the cervix (the
        entrance to the uterus) to screen for early cervical cancer. It is
        performed by a medical provider who can perform a pelvic exam. It is not
        always performed with every{" "}
        <u
          className="glossary-term"
          onMouseOver={handleHover}
          onMouseOut={handleMouseOut}
        >
          pelvic exam
        </u>.
      </p>
      <p>
        <a href="https://www.acog.org/womens-health/videos/cervical-cancer-screening">
          Here
        </a>{" "}
        is a video with more info.{" "}
      </p>

      <div className="question">
        <h2>What is HPV?</h2>
        <button onClick={toggleHPVAnswer}>{showHPVAnswer ? "-" : "+"}</button>
        {showHPVAnswer && (
          <p className={`answer-paragraph ${showHPVAnswer ? "show" : ""}`}>
            HPV or human papillomavirus is a virus that the majority of people
            are exposed to in their lifetime, and is usually transmitted
            sexually. It is known to be the cause of most cases of cervical
            cancer. It can also increase risk of anal, penile and oral cancers.{" "}
          </p>
        )}
      </div>

      <div className="question">
        <h2>
          What is GARDASIL ®9 Human Papillomavirus 9-valent Vaccine, Recombinant
        </h2>
        <button onClick={toggleGardasilAnswer}>
          {showGardasilAnswer ? "-" : "+"}
        </button>
        {showGardasilAnswer && (
          <div className={`answer ${showGardasilAnswer ? "show" : ""}`}>
            <p>
              GARDASIL 9 helps protect individuals ages 9 to 45 against the
              following diseases caused by 9 types of HPV: cervical, vaginal,
              and vulvar cancers in females, anal cancer, certain head and neck
              cancers, such as throat and back of mouth cancers and genital
              warts in both males and females.
            </p>
            <p>
              GARDASIL 9 may not fully protect everyone, nor will it protect
              against diseases caused by other HPV types or against diseases not
              caused by HPV. GARDASIL 9 does not prevent all types of cervical,
              vulvar, vaginal, anal, or head and neck cancers.
            </p>
            <p>
              Vaccination does not remove the need for recommended cancer
              screenings, and it's important to get routine cervical cancer
              screenings. GARDASIL 9 does not treat HPV infection, cancer, or
              genital warts.
            </p>
            <p>
              GARDASIL 9 is a shot that is usually given in the arm muscle.
              GARDASIL 9 may be given as 2 or 3 shots.
            </p>
            <ul>
              <li>
                For persons 9 through 14 years of age, GARDASIL 9 can be given
                using a 2-dose or 3-dose schedule. For the 2-dose schedule, the
                second shot should be given 6-12 months after the first shot. If
                the second shot is given less than 5 months after the first
                shot, a third shot should be given at least 4 months after the
                second shot. For the 3-dose schedule, the second shot should be
                given 2 months after the first shot and the third shot should be
                given 6 months after the first shot.
              </li>
              <li>
                For persons 15 through 45 years of age, GARDASIL 9 is given
                using a 3-dose schedule; the second shot should be given 2
                months after the first shot and the third shot should be given 6
                months after the first shot.
              </li>
            </ul>
            <p>
              The appropriate dosing schedule will be determined by a health
              care professional.
            </p>
            <p>
              Click <a href="https://www.gardasil9.com/">here</a> for more info.
            </p>
          </div>
        )}
      </div>

      <div className="question">
        <h2>What is a cervical pre-cancer? How does it happen?</h2>
        <button onClick={toggleCervicalPreCancerAnswer}>
          {showCervicalPreCancerAnswer ? "-" : "+"}
        </button>
        {showCervicalPreCancerAnswer && (
          <p
            className={`answer-paragraph ${
              showCervicalPreCancerAnswer ? "show" : ""
            }`}
          >
            When there are cervical cells that look abnormal but are not yet
            cancerous, it is called <i>cervical precancer</i>. These abnormal
            cells may be the first sign of cancer that develops years later.
            Cervical precancer usually doesn't cause pain or other symptoms. It
            is found with a Pap test. Click{" "}
            <a href="https://www.cdc.gov/cancer/cervical/basic_info/screening.htm#:~:text=Cervical%20precancer%20usually%20doesn't,Cervical%20Cancer%20Early%20Detection%20Program">
              here
            </a>{" "}
            for more info.
          </p>
        )}
      </div>

      <div className="question">
        <h2>What is a Patient Portal?</h2>
        <button onClick={togglePortalAnswer}>
          {showPortalAnswer ? "-" : "+"}
        </button>
        {showPortalAnswer && (
          <div className={`answer ${showPortalAnswer ? "show" : ""}`}>
            <p>
              A patient portal is a secure online website that gives patients
              convenient, 24-hour access to personal health information from
              anywhere with an Internet connection. Using a secure username and
              password, patients can view health information such as:
            </p>
            <ul>
              <li>Recent doctor visits</li>
              <li>Discharge summaries</li>
              <li>Medications</li>
              <li>Immunizations</li>
              <li>Allergies</li>
              <li>Lab results</li>
              <li>Medical history</li>
            </ul>
            <p>Some patient portals also allow you to:</p>
            <ul>
              <li>Securely message your doctor</li>
              <li>Request prescription refills</li>
              <li>Schedule non-urgent appointments</li>
              <li>Check benefits and coverage</li>
              <li>Update contact information</li>
              <li>Make payments</li>
              <li>Download and complete forms</li>
              <li>View educational materials</li>
            </ul>
            <p>
              With your patient portal, you can be in control of your health and
              care. Patient portals can also save your time, help you
              communicate with your doctor, and support care between visits.
            </p>
            <p>
              Learn more here:{" "}
              <a href="https://www.healthit.gov/faq/what-patient-portal#:~:text=A%20patient%20portal%20is%20a,Recent%20doctor%20visits">
                LINK
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

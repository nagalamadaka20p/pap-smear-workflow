import React, { useState } from "react";
import "./Home.css";

const Home = ({ glossary, handleHover, handleMouseOut }) => {
  const [showHPVAnswer, setShowHPVAnswer] = useState(false);
  const [showGardasilAnswer, setShowGardasilAnswer] = useState(false);
  const [showCervicalPreCancerAnswer, setShowCervicalPreCancerAnswer] =
    useState(false);
  const [showPortalAnswer, setShowPortalAnswer] = useState(false);
  // const [showInsuranceAnswer, setShowInsuranceAnswer] = useState(false);
  const [showWhatPapAnswer, setShowWhatPapAnswer] = useState(false);
  const [showColposcopyAnswer, setShowColposcopyAnswer] = useState(false);
  const [showLeepAnswer, setShowLeepAnswer] = useState(false);

  const toggleWhatPapAnswer = () => {
    setShowWhatPapAnswer(!showWhatPapAnswer);
  };

  // const toggleInsuranceAnswer = () => {
  //   setShowInsuranceAnswer(!showInsuranceAnswer);
  // };
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

  const toggleColposcopyAnswer = () => {
    setShowColposcopyAnswer(!showColposcopyAnswer);
  };

  const toggleLeepAnswer = () => {
    setShowLeepAnswer(!showLeepAnswer);
  };

  return (
    <div className="home">
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        <h2>What is a Pap smear?</h2>
        <button onClick={toggleWhatPapAnswer}>
          {showWhatPapAnswer ? "-" : "+"}
        </button>
        {showWhatPapAnswer && (
          <p className={`answer-paragraph ${showWhatPapAnswer ? "show" : ""}`}>
            A Pap smear is a sampling of cells from the surface of the cervix
            (the entrance to the uterus) to screen for early cervical cancer. It
            is performed by a medical provider who can perform a pelvic exam. It
            is not always performed with every{" "}
            <u
              className="glossary-term"
              onMouseOver={handleHover}
              onMouseOut={handleMouseOut}
            >
              pelvic exam
            </u>
            . Please see the video below for more information.
            <p>
              <a href="https://www.acog.org/womens-health/videos/cervical-cancer-screening">
                Learn more about cervical cancer screening here.
              </a>{" "}
            </p>
          </p>
        )}
      </div>

      {/* <div className="question">
        <h2>Can I get a Pap smear if I am uninsured or low income?</h2>
        <button onClick={toggleInsuranceAnswer}>{showInsuranceAnswer ? "-" : "+"}</button>
        {showInsuranceAnswer && (
          <p className={`answer-paragraph ${showInsuranceAnswer ? "show" : ""}`}>
            The Women's Cancer Screening Program in Rhode Island is working to reduce the number of cases of cancer in women with limited access to healthcare. You can call their information line at 401-222-4324
            or go to their website <a href="https://health.ri.gov/programs/womenscancerscreening/">here</a> for more information and eligibility guidelines.{" "}
          </p>
        )}
      </div> */}

      <div className="question">
        <h2>What is HPV?</h2>
        <button onClick={toggleHPVAnswer}>{showHPVAnswer ? "-" : "+"}</button>
        {showHPVAnswer && (
          <p className={`answer-paragraph ${showHPVAnswer ? "show" : ""}`}>
            HPV or human papillomavirus is a virus that the majority of people
            are exposed to in their lifetime, and is usually transmitted
            sexually. It causes most cases of cervical cancer. It can also
            increase one’s risk of anal, vulvar, penile and oral cancers.
          </p>
        )}
      </div>

      <div className="question">
        <h2>What is the GARDASIL ®9 Human Papillomavirus 9-valent Vaccine?</h2>
        <button onClick={toggleGardasilAnswer}>
          {showGardasilAnswer ? "-" : "+"}
        </button>
        {showGardasilAnswer && (
          <div className={`answer ${showGardasilAnswer ? "show" : ""}`}>
            <p>
              The HPV vaccine, GARDASIL 9, helps protect individuals ages 9 to
              45 against 9 types of HPV. HPV infection can lead to cervical,
              vaginal, and vulvar cancers in females. In both males and females,
              HPV infection can also lead to anal cancer, head and neck cancer
              and genital warts.
            </p>
            <p>
              GARDASIL 9 may not fully protect everyone, nor will it protect
              against diseases caused by other HPV types or against diseases not
              caused by HPV. GARDASIL 9 does not prevent all types of cervical,
              vulvar, vaginal, anal, or head and neck cancers.
            </p>
            <p>
              Vaccination does not remove the need for recommended cancer
              screenings (Pap smears), and it’s important to get routine
              cervical cancer screenings. GARDASIL 9 does not treat HPV
              infection, cancer, or genital warts.
            </p>
            <p>
              GARDASIL 9 is a shot that is usually given in the arm muscle.
              GARDASIL 9 may be given as 2 or 3 shots.
            </p>
            <ul>
              <li>
                For persons 9 through 14 years of age, GARDASIL 9 can be given
                using a 2-dose or 3-dose schedule. For the 2-dose schedule, the
                second shot should be given 6-12 months after the first shot.
              </li>
              <li>
                For persons 15 through 45 years of age, GARDASIL 9 is given
                using a 3-dose schedule.For the 3-dose schedule, the second shot
                should be given 2 months after the first shot and the third shot
                should be given 6 months after the first shot.
              </li>
            </ul>
            <p>
              The appropriate dosing schedule will be determined by a health
              care professional.
            </p>
            <p>
              Click <a href="https://www.gardasil9.com/">here</a> for more
              information.
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
          <div
            className={`answer-paragraph ${
              showCervicalPreCancerAnswer ? "show" : ""
            }`}
          >
            <p>
              Cervical precancer is when there are abnormal cervical cells but
              the cells are not yet cancerous. This may also be called cervical
              dysplasia or CIN (Cervical Intraepithelial Neoplasia). These
              abnormal cells may develop into cancer years later.{" "}
            </p>
            <p>
              Cervical precancer usually doesn't cause pain or other symptoms.
              It is found with a Pap smear and can be treated before it
              progresses to cervical cancer. This is why it is so important to
              get your Pap smears and HPV testing. For more information from the
              CDC, click{" "}
              <a href="https://www.cdc.gov/cancer/cervical/basic_info/screening.htm#:~:text=Cervical%20precancer%20usually%20doesn't,Cervical%20Cancer%20Early%20Detection%20Program">
                here
              </a>{" "}
              . To learn about how cervical precancer is treated, see “What is a
              colposcopy?” and “What is a LEEP and a conization/cone biopsy?”.
            </p>
          </div>
        )}
      </div>

      <div className="question">
        <h2>What is a colposcopy?</h2>
        <button onClick={toggleColposcopyAnswer}>
          {showColposcopyAnswer ? "-" : "+"}
        </button>
        {showColposcopyAnswer && (
          <div className={`answer ${showColposcopyAnswer ? "show" : ""}`}>
            <p>
              {" "}
              A colposcopy is a 5-to-15-minute in-office procedure using a
              microscope (colposcope) to closely examine the cervix, vagina, and
              vulva for abnormal cells. It is usually done following an abnormal
              Pap smear. When precancerous cells are suspected, your doctor may
              recommend this procedure to get a clearer view because
              colposcopies allow for early treatment and detection of abnormal
              cells. It is a safe tool that may involve a biopsy to test
              abnormal cells for cancer. Colposcopies can cause minor discomfort
              or cramping.
            </p>
            <p>
              Other reasons your doctor may suggest this procedure include:
              <ul>
                <li>
                  Colposcopy for HPV infection with abnormal findings that need
                  further examination
                </li>
                <li>
                  Checking for vulvar or vaginal abnormalities that require a
                  detailed evaluation
                </li>
              </ul>
            </p>
            <img
              src="https://brooklyngynplace.com/wp-content/uploads/2016/06/Colposcopy.jpg.webp"
              alt="Colposcopy"
            ></img>
            <p>
              Image:
              https://brooklyngynplace.com/colposcopy-obgyn-physicians-downtown-brooklyn-nyc/
            </p>
          </div>
        )}
      </div>

      <div className="question">
        <h2>What is a LEEP and a conization/cone biopsy?</h2>
        <button onClick={toggleLeepAnswer}>{showLeepAnswer ? "-" : "+"}</button>
        {showLeepAnswer && (
          <div className={`answer ${showLeepAnswer ? "show" : ""}`}>
            <p>
              A LEEP (loop electrosurgical excision procedure) or a
              conization/cone biopsy are short procedures to remove a portion of
              the cervix containing abnormal precancerous cells. This can be
              done in the office or in the operating room. The purpose is to
              remove precancerous cells and to make sure there is not an actual
              cancer of the cervix present. After a LEEP or conization, you
              still need Pap smears going forward to make sure the precancer has
              been fully treated and does not turn into cervical cancer.
            </p>
            <img
              src="https://nycgyne.com/wp-content/uploads/2025/01/leep-colposcopy-768x768.jpg.webp"
              alt=" LEEP"
            ></img>
            <p>
              Image:
              https://nycgyne.com/colposcopy-leep-procedure-nyc-gyn/
            </p>
            <img
              src="https://nycgyne.com/wp-content/uploads/2025/01/cone-biopsy-conization-768x768.jpg.webp"
              alt=" Conization/Cone Biopsy"
            ></img>
            <p>
              Image:
              https://nycgyne.com/womens-health/cone-biopsy-conization/
            </p>
          </div>
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

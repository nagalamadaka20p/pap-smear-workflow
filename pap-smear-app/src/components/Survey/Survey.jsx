import React, { useState } from "react";
import "./Survey.css";
// import { Link } from "react-router-dom";

function Survey({ glossary, handleHover, handleMouseOut }) {
  const initialFormState = {
    age: "",
    hivAnswer: "",
    cervixAnswer: "",
    everAbnormalPap: "",
    papAnswer: "",
    documentationAnswer: "",
    normalDocAnswer: "",
    prevHPVAnswer: "",
    positiveHPVAnswer: "",
    normalHPVAnswer: "",
    papNormalAnswer: "",
    last12pap: "",
    last12papresult: "",
    last12papresultabnormal: "",
    dysplasiaAnswer: "",
  };
  const [troubleshooting, setTroubleshooting] = useState(initialFormState);
  const [ageGroup, setAgeGroup] = useState("");

  const handleAgeChange = (event) => {
    const ageValue = parseInt(event.target.value);
    handleOnTroubleshootingChange("age", ageValue);

    if (ageValue < 21) {
      setAgeGroup("under21");
    } else if (ageValue >= 21 && ageValue <= 29) {
      setAgeGroup("21-29");
    } else if (ageValue >= 30 && ageValue <= 65) {
      setAgeGroup("30-65");
    } else {
      setAgeGroup("over65");
    }
  };

  function handleOnTroubleshootingChange(key, val) {
    const resetKeys = [
      "age",
      "hivAnswer",
      "cervixAnswer",
      "everAbnormalPap",
      "papAnswer",
      "documentationAnswer",
      "normalDocAnswer",
      "prevHPVAnswer",
      "positiveHPVAnswer",
      "normalHPVAnswer",
      "papNormalAnswer",
      "last12pap",
      "last12papresult",
      "last12papresultabnormal",
      "dysplasiaAnswer",
    ];
    const resetIndex = resetKeys.indexOf(key);
    if (resetIndex !== -1) {
      setTroubleshooting((prevState) => {
        const newForm = { ...prevState };
        resetKeys.slice(resetIndex + 1).forEach((resetKey) => {
          newForm[resetKey] = "";
        });
        return newForm;
      });
    }

    setTroubleshooting((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  }

  const handleResetForm = () => {
    setTroubleshooting(initialFormState);
    setAgeGroup("");
  };

  return (
    <div className="survey">
      <form>
        <h2>Take the Survey</h2>
        <div className="survey-container">
          <button type="button" onClick={handleResetForm}>
            Reset
          </button>
          <ol>
            {/* ── Q1: Age ── */}
            <div className="question">
              <li>How old are you?</li>
              <input
                type="number"
                id="age"
                name="age"
                min="0"
                max="100"
                value={troubleshooting.age}
                onChange={handleAgeChange}
                required
              />
            </div>

            {/* ── Q2: HIV ── */}
            {ageGroup && (
              <div className="question">
                <li>
                  To the best of your knowledge, have you ever been diagnosed
                  with{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    Human Immunodeficiency Virus (HIV)
                  </u>
                  ?
                </li>
                <select
                  name="hivAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.hivAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange("hivAnswer", e.target.value)
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}

            {/* ── Under 21 + HIV negative ── */}
            {ageGroup === "under21" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                  You are too young to start cervical cancer screening. The
                  recommendation is to start cervical cancer screening at 21
                  years old. If you would still like to see a family medicine
                  doctor or OB/gyn, please see this{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                     list of providers
                  </a>{" "}
                  in your area. If you do not have health insurance or cannot
                  afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* ════════════════════════════════════════
                HIV+ FLOW — cervix question first
            ════════════════════════════════════════ */}
            {troubleshooting.hivAnswer === "yes" && (
              <div className="question">
                <p>
                  To get cervical cancer, a person must have a cervix. The
                  cervix is part of the female reproductive system. If you have
                  a cervix, you need regular Pap smears and/or HPV tests to
                  check for cervical cancer.
                  <br />
                  If you were born female and have not had surgery to remove
                  your uterus (a hysterectomy), you probably still have a
                  cervix. Even if you had a hysterectomy, you may still have a
                  cervix and may still need Pap smears.
                  <br />
                  The best way to know for sure is to ask your surgeon or have a
                  pelvic exam with a healthcare provider. Click{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    here
                  </a>{" "}
                  if you need a provider. If you do not have health insurance or
                  cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
                <li>
                  Have you had a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>{" "}
                  (surgery to remove your uterus)?
                </li>
                <select
                  name="cervixAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.cervixAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "cervixAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">I'm not sure</option>
                </select>
              </div>
            )}

            {/* HIV+ cervix = yes → 12-month pap question */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.cervixAnswer === "yes" && (
                <div className="question">
                  <li>
                    Was your most recent Pap smear within the last 12 months?
                  </li>
                  <select
                    name="last12pap"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.last12pap}
                    onChange={(e) =>
                      handleOnTroubleshootingChange("last12pap", e.target.value)
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">
                      No, my most recent Pap smear was more than 12 months ago
                    </option>
                    <option value="never">I have never had a Pap smear</option>
                    <option value="unsure">
                      I do not know or I can't remember
                    </option>
                  </select>
                </div>
              )}

            {/* HIV+ last12pap = no or never → overdue */}
            {troubleshooting.hivAnswer === "yes" &&
              (troubleshooting.last12pap === "no" ||
                troubleshooting.last12pap === "never") && (
                <div className="question">
                  <p>
                    You are likely due now or overdue for cervical cancer
                    screening. Please schedule an appointment with your
                    healthcare provider for screening. If you do not have a
                    provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area. If you do not have
                    health insurance or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* HIV+ last12pap = unsure → how to find records */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12pap === "unsure" && (
                <div className="question">
                  <p>
                    There are a few ways to find out if you have ever had a Pap
                    smear:
                  </p>
                  <ol>
                    <li>
                      <b>Call your doctor:</b> You can call your doctor's office
                      and ask if you have ever had a Pap smear. If so, you can
                      have the result read to you or request a copy of your
                      results via email, mail, or fax. You may need to sign a
                      permission form.
                    </li>
                    <li>
                      <b>Visit your doctor:</b> You can visit your doctor
                      in-person to request a copy of your results via email,
                      mail, or fax. You may need to sign a permission form.
                    </li>
                    <li>
                      <b>Log into your online health portal:</b> You may also be
                      able to access your records online through a patient
                      portal. These are sometimes called myChart or myResults.
                      If you do not know how to access your patient portal, call
                      your doctor's office.
                    </li>
                  </ol>
                  <p>
                    If you are still unsure or you do not have a doctor, please
                    see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area and schedule
                    screening as soon as possible. If you do not have health
                    insurance or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* HIV+ last12pap = yes → do you know results? */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12pap === "yes" && (
                <div className="question">
                  <li>
                    Do you know the results of your most recent Pap smear?
                  </li>
                  <select
                    name="last12papresult"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.last12papresult}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "last12papresult",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}

            {/* HIV+ doesn't know results → how to get them */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12papresult === "no" && (
                <div className="question">
                  <p>
                    You can get your Pap smear results a few different ways:
                  </p>
                  <ol>
                    <li>
                      <b>Call your doctor:</b> You can call your doctor's office
                      and have your results read to you or request a copy via
                      email, mail, or fax. You may need to sign a permission
                      form.
                    </li>
                    <li>
                      <b>Visit your doctor:</b> You can visit your doctor
                      in-person to request a copy. You may need to sign a
                      permission form.
                    </li>
                    <li>
                      <b>Log into your online health portal:</b> These are
                      sometimes called myChart or myResults. If you do not know
                      how to access your portal, call your doctor's office.
                    </li>
                  </ol>
                  <p>
                    If you are still unsure or you do not have a doctor, please
                    see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider and schedule screening as soon as
                    possible. If you do not have health insurance or cannot
                    afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* HIV+ knows results → were they normal? */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12papresult === "yes" && (
                <div className="question">
                  <p>
                    The next question will ask you about your Pap smear results.
                  </p>
                  <p>
                    Normal Pap smear results will have the following acronym or
                    words on them:
                  </p>
                  <ul>
                    <li>NIL (negative for intraepithelial lesion)</li>
                    <li>
                      NILM (negative for intraepithelial lesion or malignancy)
                    </li>
                    <li>If you had HPV testing, it will be negative</li>
                  </ul>
                  <p>
                    Abnormal Pap smear results will have the following acronyms
                    or words on them:
                  </p>
                  <ul>
                    <li>
                      ASCUS (atypical squamous cells of undetermined
                      significance)
                    </li>
                    <li>
                      LSIL/LGSIL (low grade squamous intraepithelial lesion)
                    </li>
                    <li>
                      HSIL/HGSIL (high grade squamous intraepithelial lesion)
                    </li>
                    <li>ASC-H (atypical squamous cells)</li>
                    <li>AGC (atypical glandular cells)</li>
                  </ul>
                  <li>Were your Pap smear results normal?</li>
                  <select
                    name="last12papresultabnormal"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.last12papresultabnormal}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "last12papresultabnormal",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">
                      Yes, my Pap smear results were normal
                    </option>
                    <option value="no">
                      No, my Pap smear results were abnormal
                    </option>
                  </select>
                </div>
              )}

            {/* HIV+ normal pap result */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12papresultabnormal === "yes" && (
                <div className="question">
                  <p>
                    You are likely due for cervical cancer screening one year
                    from the date of your last Pap smear. For example, if your
                    most recent Pap smear was in January 2025, your next Pap
                    smear would be in January 2026.
                    <br />
                    <br />
                    Individuals who have HIV and have had 3 normal cervical
                    cancer screenings in a row may be able to stretch out their
                    screenings to once every three years. However, this decision
                    should be made between you and your doctor. Please speak
                    with your doctor about your individual screening schedule.
                    <br />
                    <br />
                    If you do not have a provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area and schedule your
                    next Pap smear. If you do not have health insurance or
                    cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* HIV+ abnormal pap result */}
            {troubleshooting.hivAnswer === "yes" &&
              troubleshooting.last12papresultabnormal === "no" && (
                <div className="question">
                  <p>
                    You are likely due now or overdue for cervical cancer
                    screening. Please schedule an appointment with your
                    healthcare provider for screening. If you do not have a
                    provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area. If you do not have
                    health insurance or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* ════════════════════════════════════════
                21-29 + HIV negative — cervix question
            ════════════════════════════════════════ */}
            {ageGroup === "21-29" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                  To develop cervical cancer, a person must have a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    cervix
                  </u>
                  . The cervix is a reproductive organ located at the end of the vagina, connected to the lower part of the uterus. 
                  If you have had a <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u> (surgery to remove your uterus), there is a good chance the cervix was also removed at the same time because these organs are connected. However, sometimes a “supracervical” hysterectomy is performed, which means you keep your cervix. 
                  <br />
                  <br />

                 If you no longer have a cervix, you may not need pap smears to continue to screen for cervical cancer. 
                  <br />
                  <br />
                  {'\n'}
                  If you have not had a hysterectomy, you still have a cervix and should continue to screen for cervical cancer. 
                  
                  
                </p>
                <li>
                  Have you had a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>{" "}
                  (surgery to remove your uterus)?
                </li>
                <select
                  name="cervixAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.cervixAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "cervixAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">I'm not sure</option>
                </select>
              </div>
            )}

            {/* ════════════════════════════════════════
                30-65 + HIV negative — cervix question
            ════════════════════════════════════════ */}
            {ageGroup === "30-65" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                  To get cervical cancer, a person must have a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    cervix
                  </u>
                  . The cervix is part of the female reproductive system. If you
                  have a cervix, you need regular Pap smears and/or HPV tests to
                  check for cervical cancer. If you were born female and have
                  not had surgery to remove your uterus (a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>
                  ), you probably still have a cervix. Even if you had a
                  hysterectomy, you may still have a cervix and may still need
                  Pap smears. , you may still have a cervix and need Pap smears.
                  The most accurate way to confirm is to check with your surgeon
                  or undergo a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    pelvic exam
                  </u>{" "}
                  with a provider. Click{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    here
                  </a>{" "}
                  if you need a provider. If you do not have health insurance or
                  cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
                <li>
                  Have you had a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>{" "}
                  (surgery to remove your uterus)?
                </li>
                <select
                  name="cervixAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.cervixAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "cervixAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">I'm not sure</option>
                </select>
              </div>
            )}

            {/* ════════════════════════════════════════
                over65 + HIV negative — cervix question
            ════════════════════════════════════════ */}
            {ageGroup === "over65" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                  To get cervical cancer, a person must have a cervix. The
                  cervix is part of the female reproductive system. If you have
                  a cervix, you need regular Pap smears and/or HPV tests to
                  check for cervical cancer.
                  <br />
                  If you were born female and have not had surgery to remove
                  your uterus (a hysterectomy), you probably still have a
                  cervix. Even if you had a hysterectomy, you may still have a
                  cervix and may still need Pap smears.
                  <br />
                  The best way to know for sure is to ask your surgeon or have a
                  pelvic exam with a healthcare provider. Click{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    here
                  </a>{" "}
                  if you need a provider. If you do not have health insurance or
                  cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
                <li>
                  Have you had a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>{" "}
                  (surgery to remove your uterus)?
                </li>
                <select
                  name="cervixAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.cervixAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "cervixAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">I'm not sure</option>
                </select>
              </div>
            )}

            {/* ════════════════════════════════════════
                NO CERVIX FLOW (all ages, HIV neg/pos)
                Only show for non-HIV users here;
                HIV+ "no cervix" is handled above via
                the same cervixAnswer === "no" check
            ════════════════════════════════════════ */}
            {(troubleshooting.cervixAnswer === "no" ||
              troubleshooting.cervixAnswer === "unsure") &&
              troubleshooting.hivAnswer !== "yes" && (
                <div className="question">
                  <li>
                    Have you ever been diagnosed with precancer of the cervix
                    (also called dysplasia or CIN) or had a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      biopsy
                    </u>{" "}
                    of your cervix? You may have had the following procedures:
                    'colposcopy', 'biopsy', "LEEP," or "conization/cone biopsy."
                    These usually would be scheduled after an abnormal Pap smear
                    result. If you are unsure, we recommend you contact your
                    provider to check.
                  </li>
                  <select
                    name="dysplasiaAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.dysplasiaAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "dysplasiaAnswer",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="unsure">I don't know</option>
                  </select>
                </div>
              )}

            {/* No cervix + history of dysplasia */}
            {troubleshooting.dysplasiaAnswer === "yes" && (
              <div className="question">
                <p>
                  If you have a history of cervical cancer or cervical changes,
                  you should continue to have cervical cancer screening every
                  year for up to 20 years after treatment. Please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider. If you do not have health
                  insurance or cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* No cervix + no history of dysplasia */}
            {troubleshooting.dysplasiaAnswer === "no" && (
              <div className="question">
                <p>
                  If you have had a hysterectomy in which your cervix was
                  removed and you do not have a history of cervical cancer or
                  cervical changes, you may be able to discontinue cervical
                  cancer screening.
                  <br />
                  <br />
                  However, please be sure to confirm with your doctor and see an
                  OB/gyn regularly for routine visits. Even if you are not due
                  for cervical cancer screening, you should still see your
                  ob-gyn regularly for vaccinations, health screenings, and the
                  latest information about your reproductive health. It is
                  recommended to continue having regular{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    pelvic exam
                  </u>
                  s at least every 2 years because there is still a risk for
                  other conditions such as cancer of the ovaries. If you do not
                  have a provider, please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider. If you do not have health
                  insurance or cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* No cervix + unsure about dysplasia history */}
            {troubleshooting.dysplasiaAnswer === "unsure" && (
              <div className="question">
                <p>You can get this information a few different ways:</p>
                <ol>
                  <li>
                    <b>Call your doctor:</b> We highly recommend this option
                    because results can easily be misinterpreted. You can call
                    your doctor's office and have your history read to you or
                    request a copy via email, mail, or fax. You may need to sign
                    a permission form.
                  </li>
                  <li>
                    <b>Visit your doctor:</b> You can visit your doctor
                    in-person to request a copy of your results. You may need to
                    sign a permission form.
                  </li>
                  <li>
                    <b>Log into your online health portal:</b> These are
                    sometimes called myChart or myResults. If you do not know
                    how to access your patient portal, call your doctor's
                    office.
                  </li>
                </ol>
                <p>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider and schedule a screening. If you do
                  not have health insurance or cannot afford to visit the
                  doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* ════════════════════════════════════════
                OVER 65 + HIV neg + has cervix
                Step 1: ever had abnormal pap?
            ════════════════════════════════════════ */}
            {ageGroup === "over65" &&
              troubleshooting.hivAnswer === "no" &&
              troubleshooting.cervixAnswer === "yes" && (
                <div className="question">
                  <li>Have you ever had an abnormal Pap smear result?</li>
                  <select
                    name="everAbnormalPap"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.everAbnormalPap}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "everAbnormalPap",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">
                      Yes, I have had abnormal Pap smear results
                    </option>
                    <option value="no">
                      No, my Pap smear testing has always been normal
                    </option>
                    <option value="unsure">
                      I don't know or I can't remember
                    </option>
                  </select>
                </div>
              )}

            {/* over65 + ever abnormal = yes → see doctor */}
            {ageGroup === "over65" &&
              troubleshooting.hivAnswer === "no" &&
              troubleshooting.everAbnormalPap === "yes" && (
                <div className="question">
                  <p>
                    Please speak to your doctor about your specific screening
                    recommendations. Your screening schedule will depend on how
                    abnormal your cells were (whether they were "high-grade")
                    and how long it has been since you had abnormal results. If
                    you do not have a doctor, please click{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      here
                    </a>{" "}
                    for a list of providers who can provide cervical cancer
                    screening. If you do not have health insurance or cannot
                    afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* over65 + ever abnormal = unsure → how to find records */}
            {ageGroup === "over65" &&
              troubleshooting.hivAnswer === "no" &&
              troubleshooting.everAbnormalPap === "unsure" && (
                <div className="question">
                  <p>
                    You can get your Pap smear results a few different ways:
                  </p>
                  <ol>
                    <li>
                      <b>Call your doctor:</b> You can call your doctor's office
                      and have your results read to you or request a copy via
                      email, mail, or fax. You may need to sign a permission
                      form.
                    </li>
                    <li>
                      <b>Visit your doctor:</b> You can visit your doctor
                      in-person to request a copy. You may need to sign a
                      permission form.
                    </li>
                    <li>
                      <b>Log into your online health portal:</b> These are
                      sometimes called myChart or myResults. If you do not know
                      how to access your portal, call your doctor's office.
                    </li>
                  </ol>
                  <p>
                    If you are still unsure and you do not have a doctor, please
                    click{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      here
                    </a>{" "}
                    for a list of providers. If you do not have health insurance
                    or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* over65 + always normal → when was last pap? */}
            {ageGroup === "over65" &&
              troubleshooting.hivAnswer === "no" &&
              troubleshooting.everAbnormalPap === "no" && (
                <div className="question">
                  <li>
                    A Pap smear is a test that checks for early signs of
                    cervical cancer. During the test, your doctor uses a tool
                    called a speculum to gently open the vagina so they can see
                    the cervix. Then, they use a small soft brush to collect
                    cells from the cervix for testing.
                    <br />
                    When was your most recent cervical cancer screening?
                  </li>
                  <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange("papAnswer", e.target.value)
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="pap3">
                      I had a Pap test alone within the past 3 years
                    </option>
                    <option value="hpv5">
                      I had an HPV test alone within the past 5 years
                    </option>
                    <option value="cotest5">
                      I had a co-test (Pap + HPV) within the past 5 years
                    </option>
                    <option value="overdue">
                      It has been more than 3 years since a Pap test alone, or
                      more than 5 years since an HPV or co-test
                    </option>
                    <option value="unsure65">
                      I don't know or I can't remember
                    </option>
                  </select>
                </div>
              )}

            {/* over65 recent screening → ACOG may discontinue message */}
            {ageGroup === "over65" &&
              (troubleshooting.papAnswer === "pap3" ||
                troubleshooting.papAnswer === "hpv5" ||
                troubleshooting.papAnswer === "cotest5") && (
                <div className="question">
                  <p>
                    According to major organizations including the American
                    College of Obstetricians and Gynecologists (ACOG), you do
                    not need any more screening if you have no history of
                    cervical changes (no irregular Pap tests) and either:
                  </p>
                  <ul>
                    <li>three negative Pap test results in a row,</li>
                    <li>two negative HPV tests in a row, or</li>
                    <li>
                      two negative co-test results in a row within the past 10
                      years.
                    </li>
                  </ul>
                  <p>
                    The most recent test should have been performed within the
                    past 3 years (Pap test alone) or 5 years (HPV test alone or
                    Pap/HPV co-test).
                    <br />
                    <br />
                    If you meet all of the above conditions, you may discontinue
                    cervical cancer screening. However, please be sure to see an
                    OB/gyn regularly for routine visits. Even if you are not due
                    for cervical cancer screening, you should still see your
                    ob-gyn regularly for vaccinations, health screenings, and
                    the latest information about your reproductive health.
                    <br />
                    <br />
                    If you do not have a provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area. If you do not have
                    health insurance or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* over65 overdue */}
            {ageGroup === "over65" &&
              troubleshooting.papAnswer === "overdue" && (
                <div className="question">
                  <p>
                    You are likely due now or overdue for cervical cancer
                    screening. Please schedule an appointment with your
                    healthcare provider for screening. If you do not have a
                    provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    to find a medical provider in your area. If you do not have
                    health insurance or cannot afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* over65 unsure about last screening */}
            {ageGroup === "over65" &&
              troubleshooting.papAnswer === "unsure65" && (
                <div className="question">
                  <p>
                    You can find out about your last cervical cancer screening a
                    few different ways:
                  </p>
                  <ol>
                    <li>
                      <b>Call your doctor:</b> You can call your doctor's office
                      and have your results read to you or request a copy via
                      email, mail, or fax. You may need to sign a permission
                      form.
                    </li>
                    <li>
                      <b>Visit your doctor:</b> You can visit your doctor
                      in-person to request a copy. You may need to sign a
                      permission form.
                    </li>
                    <li>
                      <b>Log into your online health portal:</b> These are
                      sometimes called myChart or myResults. If you do not know
                      how to access your portal, call your doctor's office.
                    </li>
                  </ol>
                  <p>
                    If you are still unsure and you do not have a doctor, please
                    click{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      here
                    </a>{" "}
                    for a list of providers to schedule a cervical cancer
                    screening. If you do not have health insurance or cannot
                    afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* ════════════════════════════════════════
                21-29 + HIV neg + has cervix — pap timing
            ════════════════════════════════════════ */}
            {troubleshooting.cervixAnswer === "yes" &&
              ageGroup === "21-29" &&
              troubleshooting.hivAnswer === "no" && (
                <div className="question">
                  <li>
                    A Pap smear is a test that checks for early signs of
                    cervical cancer. During the test, your doctor uses a tool
                    called a speculum to gently open the vagina so they can see
                    the cervix. Then, they use a small soft brush to collect
                    cells from the cervix for testing.
                    <br />
                    When was your last Pap smear?
                  </li>
                  <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange("papAnswer", e.target.value)
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="under3">Less than 3 years ago</option>
                    <option value="over3">More than 3 years ago</option>
                    <option value="never">I have never had a Pap smear</option>
                    <option value="cantremember">
                      I don't know or can't remember
                    </option>
                  </select>
                </div>
              )}

            {/* ════════════════════════════════════════
                30-65 + HIV neg + has cervix — pap timing
            ════════════════════════════════════════ */}
            {troubleshooting.cervixAnswer === "yes" &&
              ageGroup === "30-65" &&
              troubleshooting.hivAnswer === "no" && (
                <div className="question">
                  <li>
                    A Pap smear is a test that checks for early signs of
                    cervical cancer. During the test, your doctor uses a tool
                    called a speculum to gently open the vagina so they can see
                    the cervix. Then, they use a small soft brush to collect
                    cells from the cervix for testing.
                    <br />
                    When was your last Pap smear?
                  </li>
                  <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange("papAnswer", e.target.value)
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="under3">Less than 3 years ago</option>
                    <option value="between35">Between 3 and 5 years ago</option>
                    <option value="over5">More than 5 years ago</option>
                    <option value="never">I have never had a Pap smear</option>
                    <option value="cantremember">
                      I do not know if I have ever had a Pap smear
                    </option>
                    <option value="cantrememberpap">
                      I can't remember when I had my last Pap smear
                    </option>
                  </select>
                </div>
              )}

            {/* Overdue — non-HIV, non-over65 */}
            {troubleshooting.hivAnswer !== "yes" &&
              ageGroup !== "over65" &&
              (troubleshooting.papAnswer === "over3" ||
                troubleshooting.papAnswer === "over5" ||
                troubleshooting.papAnswer === "never") && (
                <div className="question">
                  <p>
                    You are likely due now or overdue for cervical cancer
                    screening. Please schedule an appointment with your
                    healthcare provider for a Pap smear. If you do not have a
                    provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page to find a medical provider
                    </a>{" "}
                    in your area. If you do not have health insurance or cannot
                    afford to visit the doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* Can't remember if ever had pap */}
            {troubleshooting.papAnswer === "cantremember" && (
              <div className="question">
                <p>
                  There are a few ways to find out if you have ever had a Pap
                  smear:
                </p>
                <ol>
                  <li>
                    <b>Call your doctor:</b> You can call your doctor's office
                    and ask if you have ever had a Pap smear. If so, you can
                    have the result read to you or request a copy of your
                    results via email, mail, or fax. You may need to sign a
                    permission form.
                  </li>
                  <li>
                    <b>Visit your doctor:</b> You can visit your doctor
                    in-person to request a copy of your results via email, mail,
                    or fax. You may need to sign a permission form.
                  </li>
                  <li>
                    <b>Log into your online health portal:</b> You may also be
                    able to access your records online through a patient portal.
                    Each health care system has a different patient portal.
                    These are sometimes called myChart or myResults. If you do
                    not know how to access your patient portal, call your
                    doctor's office. You can also search your email for an
                    invitation to join the patient portal. If you have seen more
                    than one doctor, you may have more than one patient portal,
                    so you may need to check multiple patient portals to find
                    your results.
                  </li>
                </ol>
                <p>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible. If you do not have health insurance
                  or cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Can't remember when last pap was */}
            {troubleshooting.papAnswer === "cantrememberpap" && (
              <div className="question">
                <p>
                  There are a few ways to find out when you last had a Pap
                  smear:
                </p>
                <ol>
                  <li>
                    <b>Call your doctor:</b> You can call your doctor's office
                    and ask. You can have your results read to you or request a
                    copy via email, mail, or fax. You may need to sign a
                    permission form.
                  </li>
                  <li>
                    <b>Visit your doctor:</b> You can visit your doctor
                    in-person to request a copy of your results via email, mail,
                    or fax. You may need to sign a permission form.
                  </li>
                  <li>
                    <b>Log into your online health portal:</b> You may also be
                    able to access your records online through a patient portal.
                    Each health care system has a different patient portal.
                    These are sometimes called myChart or myResults. If you do
                    not know how to access your patient portal, call your
                    doctor's office.
                  </li>
                </ol>
                <p>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible. If you do not have health insurance
                  or cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* ════════════════════════════════════════
                between35 (30-65 only) — do you have results?
            ════════════════════════════════════════ */}
            {troubleshooting.papAnswer === "between35" && (
              <div className="question">
                <li>Do you know the results of your most recent Pap smear?</li>
                <select
                  name="documentationAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.documentationAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "documentationAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}

            {/* under3 — do you know results? */}
            {troubleshooting.papAnswer === "under3" && (
              <div className="question">
                <li>Do you know the results of your most recent Pap smear?</li>
                <select
                  name="documentationAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.documentationAnswer}
                  onChange={(e) =>
                    handleOnTroubleshootingChange(
                      "documentationAnswer",
                      e.target.value,
                    )
                  }
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}

            {/* under3 + knows results → were they normal? */}
            {troubleshooting.documentationAnswer === "yes" &&
              troubleshooting.papAnswer === "under3" && (
                <div className="question">
                  <p>
                    The next question will ask you about your Pap smear results.
                    Normal Pap smear results will have the following acronym or
                    words on them:
                  </p>
                  <ul>
                    <li>NIL (Negative for intraepithelial lesion)</li>
                    <li>
                      NILM (Negative for intraepithelial lesion or malignancy)
                    </li>
                    <li>
                      If you had HPV testing, it will be <b>negative</b>
                    </li>
                  </ul>
                  <p>
                    Abnormal Pap smear results will have the following acronyms
                    or words on them:
                  </p>
                  <ul>
                    <li>
                      ASCUS (atypical squamous cells of undetermined
                      significance)
                    </li>
                    <li>
                      LSIL/LGSIL (low grade squamous intraepithelial lesion)
                    </li>
                    <li>
                      HSIL/HGSIL (high grade squamous intraepithelial lesion)
                    </li>
                    <li>ASC-H (atypical squamous cells)</li>
                    <li>AGC (atypical glandular cells)</li>
                    <li>
                      If you had HPV testing, it may be <b>positive</b> or{" "}
                      <b>negative</b>
                    </li>
                  </ul>
                  <li>Were your Pap smear results normal?</li>
                  <select
                    name="normalDocAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalDocAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "normalDocAnswer",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">
                      Yes, my Pap smear results were normal
                    </option>
                    <option value="no">
                      No, my Pap smear results were abnormal
                    </option>
                  </select>
                </div>
              )}

            {/* between35 + knows results → were they normal? */}
            {troubleshooting.documentationAnswer === "yes" &&
              ageGroup === "30-65" &&
              troubleshooting.papAnswer === "between35" && (
                <div className="question">
                  <p>
                    Normal Pap smear results will have the following acronym or
                    words on them:
                  </p>
                  <ul>
                    <li>NIL (Negative for intraepithelial lesion)</li>
                    <li>
                      NILM (Negative for intraepithelial lesion or malignancy)
                    </li>
                    <li>If you had HPV testing, it will be negative</li>
                  </ul>
                  <p>
                    Abnormal Pap smear results will have the following acronyms
                    or words on them:
                  </p>
                  <ul>
                    <li>
                      ASCUS (atypical squamous cells of undetermined
                      significance)
                    </li>
                    <li>
                      LSIL/LGSIL (low grade squamous intraepithelial lesion)
                    </li>
                    <li>
                      HSIL/HGSIL (high grade squamous intraepithelial lesion)
                    </li>
                    <li>ASC-H (atypical squamous cells)</li>
                    <li>AGC (atypical glandular cells)</li>
                    <li>
                      If you had HPV testing, it may be positive or negative
                    </li>
                  </ul>
                  <li>Were your Pap smear results normal?</li>
                  <select
                    name="normalDocAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalDocAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "normalDocAnswer",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">
                      Yes, my Pap smear results were normal
                    </option>
                    <option value="no">
                      No, my Pap smear results were abnormal
                    </option>
                  </select>
                </div>
              )}

            {/* Doesn't know results → how to get them */}
            {troubleshooting.documentationAnswer === "no" && (
              <div className="question">
                <p>You can get your Pap smear results a few different ways.</p>
                <ol>
                  <li>
                    <b>Call your doctor:</b> You can call your doctor's office
                    and have your results read to you or request a copy of your
                    results via email, mail, or fax. You may need to sign a
                    permission form.
                  </li>
                  <li>
                    <b>Visit your doctor:</b> You can visit your doctor
                    in-person to request a copy of your results via email, mail,
                    or fax. You may need to sign a permission form.
                  </li>
                  <li>
                    <b>Log into your online health portal:</b> You may also be
                    able to access your results online through a patient portal.
                    Each health care system has a different patient portal.
                    These are sometimes called myChart or myResults. If you do
                    not know how to access your patient portal, call your
                    doctor's office. You can also search your email for an
                    invitation to join the patient portal. If you have seen more
                    than one doctor, you may have more than one patient portal,
                    so you may need to check multiple patient portals to find
                    your results.
                  </li>
                </ol>
                <p>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible. If you do not have health insurance
                  or cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Normal pap result (21-29) → due in 3 years directly, no HPV question */}
            {troubleshooting.normalDocAnswer === "yes" &&
              ageGroup === "21-29" && (
                <div className="question">
                  <p>
                    You are likely due for cervical cancer screening 3 years
                    from the date of your last Pap smear. For example, if your
                    most recent Pap smear was in January 2025, your next Pap
                    smear would be in January 2028. If you do not have a
                    provider, please see{" "}
                    <a
                      href="/providers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="menuhover"
                    >
                      this page
                    </a>{" "}
                    for healthcare providers who can provide screening. If you
                    do not have health insurance or cannot afford to visit the
                    doctor, click{" "}
                    <a
                      href="https://health.ri.gov/programs/womenscancerscreening/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>{" "}
                    for more information about the Women's Cancer Screening
                    Program in Rhode Island.
                  </p>
                </div>
              )}

            {/* Normal pap result (30-65) → HPV co-test question */}
            {troubleshooting.normalDocAnswer === "yes" &&
              ageGroup === "30-65" && (
                <div className="question">
                  <li>Did you have HPV testing with your last Pap smear?</li>
                  <select
                    name="prevHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.prevHPVAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "prevHPVAnswer",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="cantremember">I don't know</option>
                  </select>
                </div>
              )}

            {/* Abnormal pap result → overdue */}
            {troubleshooting.normalDocAnswer === "no" && (
              <div className="question">
                <p>
                  You are likely due now or overdue for cervical cancer
                  screening. If you do not have a provider, please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening. If you do
                  not have health insurance or cannot afford to visit the
                  doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Normal pap, no HPV test → due in 3 years */}
            {troubleshooting.prevHPVAnswer === "no" && (
              <div className="question">
                <p>
                  You are likely due for cervical cancer screening 3 years from
                  the date of your last Pap smear. For example, if your most
                  recent Pap smear was in January 2025, your next Pap smear
                  would be in January 2028. If you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening. If you do
                  not have health insurance or cannot afford to visit the
                  doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Normal pap, can't remember HPV → overdue */}
            {troubleshooting.prevHPVAnswer === "cantremember" && (
              <div className="question">
                <p>
                  You are likely due now or overdue for cervical cancer
                  screening. Please schedule an appointment with your healthcare
                  provider for a Pap smear. If you do not have a doctor, please
                  see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening. If you do
                  not have health insurance or cannot afford to visit the
                  doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Had HPV co-test → was HPV positive? */}
            {troubleshooting.prevHPVAnswer === "yes" &&
              ageGroup === "30-65" && (
                <div className="question">
                  <li>Was your HPV test positive?</li>
                  <select
                    name="positiveHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.positiveHPVAnswer}
                    onChange={(e) =>
                      handleOnTroubleshootingChange(
                        "positiveHPVAnswer",
                        e.target.value,
                      )
                    }
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes, my HPV test was positive</option>
                    <option value="no">No, my HPV test was negative</option>
                    <option value="cantremember">
                      I don't remember my HPV results
                    </option>
                  </select>
                </div>
              )}

            {/* HPV positive → overdue */}
            {troubleshooting.positiveHPVAnswer === "yes" && (
              <div className="question">
                <p>
                  You are likely due now or overdue for cervical cancer
                  screening. Please schedule an appointment with your healthcare
                  provider for a Pap smear. If you do not have a provider,
                  please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening and
                  schedule a Pap smear. If you do not have health insurance or
                  cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* Can't remember HPV result */}
            {troubleshooting.positiveHPVAnswer === "cantremember" && (
              <div className="question">
                <p>
                  You can call your doctor for your HPV results. If your HPV
                  test was positive, you may be due now or overdue for cervical
                  cancer screening. If you do not have a provider, please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening and
                  schedule a Pap smear. If you do not have health insurance or
                  cannot afford to visit the doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}

            {/* HPV negative (co-test normal) → due in 5 years, with screening options */}
            {troubleshooting.positiveHPVAnswer === "no" && (
              <div className="question">
                <p>
                  You are likely due for your next cervical cancer screening{" "}
                  <b>5 years</b> after your normal co-test (negative HPV test
                  and normal Pap test). For example, if your most recent normal
                  co-test was in January 2025, your next cervical cancer
                  screening would be in January 2030. You can choose from one of
                  three options for your next screening:
                </p>
                <ol>
                  <li>
                    Continue to co-test (have a Pap test and an HPV test) every
                    5 years
                  </li>
                  <li>Have a Pap test alone every 3 years</li>
                  <li>Have an HPV test alone every 5 years</li>
                </ol>
                <p>
                  If you do not have a provider, please see{" "}
                  <a
                    href="/providers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menuhover"
                  >
                    this page
                  </a>{" "}
                  for healthcare providers who can provide screening. If you do
                  not have health insurance or cannot afford to visit the
                  doctor, click{" "}
                  <a
                    href="https://health.ri.gov/programs/womenscancerscreening/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>{" "}
                  for more information about the Women's Cancer Screening
                  Program in Rhode Island.
                </p>
              </div>
            )}
          </ol>
        </div>
      </form>
    </div>
  );
}

export default Survey;

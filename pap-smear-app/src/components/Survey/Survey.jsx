import React, { useState } from "react";
import "./Survey.css";
import { Link } from "react-router-dom";

function Survey({ glossary, handleHover, handleMouseOut }) {
  const initialFormState = {
    age: "",
    hivAnswer: "",
    cervixAnswer: "",
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
    handleOnTroubleshootingChange("age", ageValue); // Update age state

    // Determine age group based on age value
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

  // function handleOnTroubleshootingChange(key, val) {
  //   let newForm = {
  //     age: troubleshooting.age,
  //     hivAnswer: troubleshooting.hivAnswer,
  //     cervixAnswer: troubleshooting.cervixAnswer,
  //     papAnswer: troubleshooting.papAnswer,
  //     documentationAnswer: troubleshooting.documentationAnswer,
  //     normalDocAnswer: troubleshooting.normalDocAnswer,
  //     prevHPVAnswer: troubleshooting.prevHPVAnswer,
  //     positiveHPVAnswer: troubleshooting.positiveHPVAnswer,
  //     normalHPVAnswer: troubleshooting.normalHPVAnswer,
  //     papNormalAnswer: troubleshooting.papNormalAnswer,
  //     last12pap: troubleshooting.last12pap,
  //     last12papresult: troubleshooting.last12papresult,
  //     last12papresultabnormal: troubleshooting.last12papresultabnormal,
  //   };
  //   newForm[key] = val;
  //   setTroubleshooting(newForm);
  // }

  function handleOnTroubleshootingChange(key, val) {
    const resetKeys = [
      "age",
      "hivAnswer",
      "cervixAnswer",
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
      // Reset subsequent questions
      setTroubleshooting((prevState) => {
        const newForm = { ...prevState };
        resetKeys.slice(resetIndex + 1).forEach((resetKey) => {
          newForm[resetKey] = "";
        });
        return newForm;
      });
    }

    // Update the modified question
    setTroubleshooting((prevState) => ({
      ...prevState,
      [key]: val,
    }));
  }

  const handleResetForm = () => {
    setTroubleshooting(initialFormState); // Reset form to initial state
    setAgeGroup(""); // Reset age group
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
              ></input>
            </div>
            {/* Show HIV question only after age is entered */}
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
                  onChange={(e) => {
                    handleOnTroubleshootingChange("hivAnswer", e.target.value);
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}
            {ageGroup === "under21" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                  Great news! You are not due to start cervical cancer screening
                  until you're 21 years old. If you would still like to see a
                  medical provider for another reason, please visit{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this list
                  </Link>{" "}
                  of providers in your area.
                </p>
              </div>
            )}
            {(ageGroup === "under21" ||
              ageGroup === "21-29" ||
              ageGroup === "30-65" ||
              ageGroup === "over65") &&
              troubleshooting.hivAnswer === "yes" && (
                <div className="question">
                  <li>Was your last Pap smear within the last 12 months?</li>
                  <select
                    name="last12pap"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.last12pap}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "last12pap",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}
            {troubleshooting.last12pap === "yes" && (
              <div className="question">
                <li>Do you have the result of your Pap smear?</li>
                <select
                  name="last12papresult"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.last12papresult}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "last12papresult",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}
            {troubleshooting.last12papresult === "yes" && (
              <div className="question">
                <li>Was it abnormal?</li>
                <p>
                  Normal Pap smear results will have the following acronyms or
                  words on them:{" "}
                </p>
                <ul>
                  <li>Negative for intraepithelial lesion, NIL.</li>
                </ul>
                <p>
                  Abnormal Pap smear results will have the following acronyms or
                  words on them:
                </p>
                <ul>
                  <li>
                    ASCUS (atypical squamous cells of undetermined significance)
                  </li>
                  <li>
                    LSIL/LGSIL (low grade squamous intraepithelial lesion)
                  </li>{" "}
                  <li>
                    {" "}
                    HSIL/HGSIL (high grade squamous intraepithelial lesion)
                  </li>{" "}
                  <li> ASC-H (atypical squamous cells)</li>{" "}
                  <li> AGC (atypical glandular cells)</li>
                </ul>

                <select
                  name="last12papresultabnormal"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.last12papresultabnormal}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "last12papresultabnormal",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}
            {troubleshooting.last12papresultabnormal === "no" && (
              <div className="question">
                <p>
                  You are due 12 months from your prior Pap smear. Please see
                  the provider tab for resources to see a medical provider if
                  you do not have one
                </p>
              </div>
            )}
            {(ageGroup === "21-29" || ageGroup === "over65") &&
              troubleshooting.hivAnswer === "no" && (
                <div className="question">
                  <p>
                    To develop cervical cancer, a person must have a cervix,
                    which is a reproductive organ found only in individuals who
                    are biologically female (have XX chromosomes). If you have a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      {" "}
                      cervix
                    </u>
                    , you need regular Pap smears to screen for cervical cancer.
                    If you have never had surgery on your uterus and you are
                    female, you likely have a cervix. However, even if you had a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      hysterectomy
                    </u>
                    , you may still have a cervix and need Pap smears. The most
                    accurate way to confirm that you have a cervix is to check
                    with your surgeon or undergo a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      pelvic exam
                    </u>{" "}
                    with a provider. Click{" "}
                    <Link to="/providers" className="menuhover">
                      {" "}
                      here
                    </Link>{" "}
                    if you need a provider.
                  </p>
                  <li>
                    Do you have a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      cervix
                    </u>
                    ?
                  </li>

                  <select
                    name="cervixAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.cervixAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "cervixAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="no">I'm not sure</option>
                  </select>
                </div>
              )}
            {/* {(ageGroup === "30-65" && troubleshooting.hivAnswer === "yes") &&(
                <div className="question">
                    <p>HIV algorithm</p>
                </div>
            )} */}
            {ageGroup === "30-65" && troubleshooting.hivAnswer === "no" && (
              <div className="question">
                <p>
                    To develop cervical cancer, a person must have a cervix,
                    which is a reproductive organ found only in individuals who
                    are biologically female (have XX chromosomes). If you have a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      {" "}
                      cervix
                    </u>
                    , you need regular Pap smears to screen for cervical cancer.
                    If you have never had surgery on your uterus and you are
                    female, you likely have a cervix. However, even if you had a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      hysterectomy
                    </u>
                    , you may still have a cervix and need Pap smears. The most
                    accurate way to confirm that you have a cervix is to check
                    with your surgeon or undergo a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      pelvic exam
                    </u>{" "}
                    with a provider. Click{" "}
                    <Link to="/providers" className="menuhover">
                      {" "}
                      here
                    </Link>{" "}
                    if you need a provider.
                  </p>
                  <li>
                    Do you have a{" "}
                    <u
                      className="glossary-term"
                      onMouseOver={handleHover}
                      onMouseOut={handleMouseOut}
                    >
                      cervix
                    </u>
                    ?
                  </li>
                <select
                  name="cervixAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.cervixAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "cervixAnswer",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="no">I'm not sure</option>
                </select>
              </div>
            )}
            {troubleshooting.cervixAnswer === "no" && (
              <div className="question">
                <li>
                  Have you ever been diagnosed with pre-cancer of the cervix or
                  had a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    biopsy
                  </u>{" "}
                  of your cervix? You may have heard the procedure be called a{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    LEEP
                  </u>{" "}
                  or a “Cone”. If you are unsure, we recommend you contact your
                  provider to check.{" "}
                </li>
                <select
                  name="dysplasiaAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.dysplasiaAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "dysplasiaAnswer",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            )}
            {troubleshooting.dysplasiaAnswer === "yes" && (
              <div className="question">
                <p>
                  If you have a history of pre-cancer of the cervix you should
                  continue to have Pap smears once a year for up to 20 years
                  after{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    hysterectomy
                  </u>
                  . Please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  for resources below to see a medical provider.
                </p>
              </div>
            )}
            {troubleshooting.dysplasiaAnswer === "no" && (
              <div className="question">
                <p>
                  It is possible you don't need any more Pap smears if you've
                  always had normal Pap smears. It is recommended to continue
                  having regular{" "}
                  <u
                    className="glossary-term"
                    onMouseOver={handleHover}
                    onMouseOut={handleMouseOut}
                  >
                    pelvic exam
                  </u>
                  s at least every 2 years as there is still a risk for other
                  conditions such as cancer of the ovary. Please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page{" "}
                  </Link>
                  for resources below to see a medical provider.
                </p>
              </div>
            )}
            {troubleshooting.cervixAnswer === "yes" &&
              ageGroup === "over65" && (
                <div className="question">
                  <li>
                    A Pap smear is a sampling of cells from the surface of the
                    cervix to screen for early cervical cancer. This exam
                    involves using a speculum so your doctor can see your
                    cervix, and special types of brushes to collect the cells
                    from your cervix. When was your last pap smear?{" "}
                  </li>
                  <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "papAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="never"> never</option>
                    <option value="more3">
                      {" "}
                      more than 3 years before 65th birthday
                    </option>
                    <option value="between13">
                      {" "}
                      pap smear 1-3 years before your 65th birthday
                    </option>
                    <option value="less1">
                      pap smear less than one year before your 65th birthday
                    </option>
                  </select>
                </div>
              )}
            {(troubleshooting.papAnswer === "more3" ||
              troubleshooting.papAnswer === "never") &&
              ageGroup === "over65" && (
                <div className="question">
                  <p>
                    You are likely due now or overdue for cervical cancer
                    screening. Please schedule an appointment with
                    your healthcare provider for a Pap smear. If you do not have
                    a provider, please see{" "}
                    <Link to="/providers" className="menuhover">
                      {" "}
                      this page
                    </Link>{" "}
                    to find a medical provider in your area.
                  </p>
                </div>
              )}
            {(troubleshooting.papAnswer === "between13" ||
              troubleshooting.papAnswer === "less1") &&
              ageGroup === "over65" && (
                <div className="question">
                  <li>Was you last pap smear normal?</li>
                  <select
                    name="papNormalAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papNormalAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "papNormalAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">Yes </option>
                    <option value="no">No</option>
                  </select>
                </div>
              )}
            {troubleshooting.papNormalAnswer === "no" && (
              <div className="question">
                <p>Likely due now</p>
              </div>
            )}
            {troubleshooting.papNormalAnswer === "yes" && (
              <div className="question">
                <p>
                  You are likely not indicated for further Pap smears if you've
                  always had normal Pap smears
                </p>
              </div>
            )}
            {troubleshooting.cervixAnswer === "yes" && ageGroup === "30-65" && (
              <div className="question">
                <li>
                  A Pap smear is a sampling of cells from the surface of the
                  cervix to screen for early cervical cancer. This exam involves
                  using a speculum so your doctor can see your cervix, and
                  special types of brushes to collect the cells from your
                  cervix. When was your last pap smear?
                </li>
                <select
                  name="papAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.papAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange("papAnswer", e.target.value);
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="under3"> less than 3 years ago</option>
                  <option value="between35"> between 3 and 5 years ago</option>
                  <option value="over5">more than 5 years ago</option>
                  <option value="never">I have never had a Pap smear</option>
                  <option value="cantremember">
                    I do not know if I have ever had a Pap smear
                  </option>
                  <option value="cantrememberpap">
                    I can’t remember when I had my last Pap smear
                  </option>
                </select>
              </div>
            )}
            {troubleshooting.cervixAnswer === "yes" && ageGroup === "21-29" && (
              <div className="question">
                <li>
                  A Pap smear is a sampling of cells from the surface of the
                  cervix to screen for early cervical cancer. This exam involves
                  using a speculum so your doctor can see your cervix, and
                  special types of brushes to collect the cells from your
                  cervix. When was your last pap smear?
                </li>
                <select
                  name="papAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.papAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange("papAnswer", e.target.value);
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="under3"> less than 3 years ago</option>
                  <option value="over3"> over 3 years ago</option>
                  <option value="never"> I have never had a Pap smear</option>
                  <option value="cantremember">
                    I do not know if I have ever had a Pap smear
                  </option>
                  <option value="cantrememberpap">
                    I can't remember when I had my last Pap smear
                  </option>
                </select>
              </div>
            )}
            {(troubleshooting.papAnswer === "over3" ||
              troubleshooting.papAnswer === "over5" ||
              troubleshooting.last12pap === "no" ||
              troubleshooting.last12papresultabnormal === "yes" ||
              troubleshooting.papAnswer === "never") && (
              <div className="question">
                <p>
                  {" "}
                  You are likely due now or overdue for cervical cancer
                  screening. Please schedule an appointment with your healthcare
                  provider for a Pap smear. If you do not have a provider,
                  please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area.
                </p>
              </div>
            )}
            {troubleshooting.papAnswer === "cantremember" && (
              <div className="question">
                <p>
                  There are a few ways to find out if you have ever had a Pap
                  smear:
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
                      portal. Each health care system has a different patient
                      portal. These are sometimes called myChart or myResults.
                      If you do not know how to access your patient portal, call
                      your doctor's office. You can also search your email for
                      an invitation to join the patient portal. If you have seen
                      more than one doctor, you may have more than one patient
                      portal, so you may need to check multiple patient portals
                      to find your results.
                    </li>
                  </ol>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible.
                </p>
              </div>
            )}
            {troubleshooting.papAnswer === "cantrememberpap" && (
              <div className="question">
                <p>
                  There are a few ways to find out when you last had a Pap
                  smear:
                  <ol>
                    <li>
                      {" "}
                      Call your doctor: You can call your doctor's office and
                      ask. You can have your results read to you or request a
                      copy via email, mail, or fax. You may need to sign a
                      permission form.
                    </li>
                    <li>
                      Visit your doctor: You can visit your doctor in-person to
                      request a copy of your results via email, mail, or fax.
                      You may need to sign a permission form.{" "}
                    </li>
                    <li>
                      Log into your online health portal: You may also be able
                      to access your records online through a patient portal.
                      Each health care system has a different patient portal.
                      These are sometimes called myChart or myResults. If you do
                      not know how to access your patient portal, call your
                      doctor's office. You can also search your email for an
                      invitation to join the patient portal. If you have seen
                      more than one doctor, you may have more than one patient
                      portal, so you may need to check multiple patient portals
                      to find your results.{" "}
                    </li>
                  </ol>
                  If you are still unsure or you do not have a doctor, please
                  see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible.
                </p>
              </div>
            )}
            {troubleshooting.papAnswer === "between35" && (
              <div className="question">
                <li>Do you have documentation of your results?</li>
                <select
                  name="documentationAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.documentationAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "documentationAnswer",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
            )}
            {troubleshooting.papAnswer === "under3" && (
              <div className="question">
                <li>Do you have the results of your most recent Pap smear?</li>
                <select
                  name="documentationAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.documentationAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "documentationAnswer",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
            )}
            {troubleshooting.documentationAnswer === "yes" &&
              troubleshooting.papAnswer === "under3" && (
                <div className="question">
                  <p>
                    Normal Pap smear results will have the following acronym or
                    words on them:
                    <ul>
                      <li>NIL (Negative for intraepithelial lesion)</li>
                      <li>
                        NILM (Negative for intraepithelial lesion or malignancy)
                      </li>
                      <li>If you had HPV testing, it will be negative</li>
                    </ul>
                    Abnormal Pap smear results will have the following acronyms
                    or words on them:
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
                  </p>
                  <li>Were your Pap smear results normal?</li>
                  <select
                    name="normalDocAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalDocAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "normalDocAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </div>
              )}
            {troubleshooting.documentationAnswer === "yes" &&
              ageGroup === "30-65" &&
              troubleshooting.papAnswer === "between35" && (
                <div className="question">
                  <p>
                    Normal Pap smear results will have the following acronym or
                    words on them:
                    <ul>
                      <li>NIL (Negative for intraepithelial lesion)</li>
                      <li>
                        NILM (Negative for intraepithelial lesion or malignancy)
                      </li>
                      <li>If you had HPV testing, it will be negative</li>
                    </ul>
                    Abnormal Pap smear results will have the following acronyms
                    or words on them:
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
                  </p>
                  <li>Did you have HPV testing with your last pap smear?</li>
                  <select
                    name="prevHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.prevHPVAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "prevHPVAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                    <option value="cantremember">can't remember</option>
                  </select>
                </div>
              )}
            {troubleshooting.prevHPVAnswer === "yes" &&
              ageGroup === "30-65" && (
                <div className="question">
                  <li>Did you test positive for HPV?</li>
                  <select
                    name="positiveHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.positiveHPVAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "positiveHPVAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">yes</option>
                    <option value="no">no/don't know</option>
                  </select>
                </div>
              )}
            {(troubleshooting.prevHPVAnswer === "no" ||
              troubleshooting.prevHPVAnswer === "cantremember") && (
              <div className="question">
                <p>
                  You are likely due now or overdue for cervical cancer
                  screening. Please schedule an appointment with your
                  healthcare provider for a Pap smear. If you do not have a
                  provider, please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area.
                </p>
                {/* <li>Were your HPV results normal?</li>
                <select
                  name="normalHPVAnswer"
                  className="troubleshooting-dropdown"
                  value={troubleshooting.normalHPVAnswer}
                  onChange={(e) => {
                    handleOnTroubleshootingChange(
                      "normalHPVAnswer",
                      e.target.value
                    );
                  }}
                >
                  <option value="">Select an Option</option>
                  <option value="yes">yes</option>
                  <option value="no">no/don't know</option>
                </select> */}
              </div>
            )}
            {troubleshooting.positiveHPVAnswer === "yes" && (
              <div className="question">
                <p>Likely due now.</p>
              </div>
            )}
            {troubleshooting.positiveHPVAnswer === "no" && (
              <div className="question">
                <div className="question">
                  <p>
                    Yes: insert how to interpret results, a few examples of
                    reports, and definitions
                  </p>
                  <li>Were your HPV results normal?</li>
                  <select
                    name="normalHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalHPVAnswer}
                    onChange={(e) => {
                      handleOnTroubleshootingChange(
                        "normalHPVAnswer",
                        e.target.value
                      );
                    }}
                  >
                    <option value="">Select an Option</option>
                    <option value="yes">yes</option>
                    <option value="no">no/don't know</option>
                  </select>
                </div>
              </div>
            )}
            {troubleshooting.normalHPVAnswer === "no" && (
              <div className="question">
                <p>Follow up with provider</p>
              </div>
            )}
            {troubleshooting.normalHPVAnswer === "yes" && (
              <div className="question">
                <p>Get screened 5 years from last pap.</p>
              </div>
            )}
            {troubleshooting.normalDocAnswer === "no" && (
              <div className="question">
                <p>
                  You are likely due now or overdue for cervical cancer
                  screening. Please schedule an appointment with your
                  healthcare provider for a Pap smear. If you do not have a
                  provider, please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area.
                </p>
              </div>
            )}
            {troubleshooting.normalDocAnswer === "yes" && (
              <div className="question">
                <p>
                  You are likely due for cervical cancer screening 3 years from
                  the date of your last Pap smear. For example, if your most
                  recent Pap smear was in January 2025, your next Pap smear
                  would be in January 2028.
                </p>
                <p>
                  If you do not have a provider, please see{" "}
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area and schedule your next
                  Pap smear.
                </p>
              </div>
            )}
            {(troubleshooting.documentationAnswer === "no" ||
              troubleshooting.last12papresult === "no") && (
              <div className="question">
                <p>You can get your Pap smear results a few different ways. </p>
                <ol>
                  <li>
                    Call your doctor: You can call your doctor's office and have
                    your results read to you or request a copy of your results
                    via email, mail, or fax. You may need to sign a permission
                    form.
                  </li>
                  <li>
                    Visit your doctor: You can visit your doctor in-person to
                    request a copy of your results via email, mail, or fax. You
                    may need to sign a permission form.
                  </li>
                  <li>
                    Log into your online health portal: You may also be able to
                    access your results online through a patient portal. Each
                    health care system has a different patient portal. These are
                    sometimes called myChart or myResults. If you do not know
                    how to access your patient portal, call your doctor's
                    office. You can also search your email for an invitation to
                    join the patient portal. If you have seen more than one
                    doctor, you may have more than one patient portal, so you
                    may need to check multiple patient portals to find your
                    results.
                  </li>
                </ol>
                <p>
                  If you are still unsure or you do not have a doctor, please
                  see
                  <Link to="/providers" className="menuhover">
                    {" "}
                    this page
                  </Link>{" "}
                  to find a medical provider in your area and schedule a Pap
                  smear as soon as possible.
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

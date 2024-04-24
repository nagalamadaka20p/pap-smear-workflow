import React, { useState } from "react";
import "./Survey.css";

function Survey() {
  const [troubleshooting, setTroubleshooting] = useState({});
  const [ageGroup, setAgeGroup] = useState("");

  const handleAgeChange = (event) => {
    const ageValue = parseInt(event.target.value);
    handleOnTroubleshootingChange("age", ageValue) // Update age state

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

  function handleOnTroubleshootingChange(key, val) {
    let newForm = {
      age: troubleshooting.age,
      hivAnswer: troubleshooting.hivAnswer,
      cervixAnswer: troubleshooting.cervixAnswer,
        papAnswer: troubleshooting.papAnswer,
        documentationAnswer: troubleshooting.documentationAnswer,
        normalDocAnswer: troubleshooting.normalDocAnswer,
        prevHPVAnswer: troubleshooting.prevHPVAnswer,
        positiveHPVAnswer: troubleshooting.positiveHPVAnswer,
        normalHPVAnswer: troubleshooting.normalHPVAnswer,
        papNormalAnswer: troubleshooting.papNormalAnswer
    };
    newForm[key] = val;
    setTroubleshooting(newForm);
  }

  return (
    <div className="survey">
      <form>
        <h2>Survey</h2>
        <div className="survey-container">
          <ol>
            <div className="question">
              <li>What is your age?</li>
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
            <div className="question">
                    <li>
                    Has a provider ever told you that you have HIV?
                    </li>
                    <select
                    name="hivAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.hivAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "hivAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            {(ageGroup === "under21" && troubleshooting.hivAnswer === "no") &&(
                <div className="question">
                    <p>Pap not indicated</p>
                </div>
            )}
            {((ageGroup === "under21" || ageGroup === "21-29" || ageGroup === "30-65" || ageGroup === "over65")&& troubleshooting.hivAnswer === "yes") &&(
                <div className="question">
                    <p>HIV algorithm</p>
                </div>
            )}
            {((ageGroup === "21-29" || ageGroup === "over65") && troubleshooting.hivAnswer === "no") &&(
                <div className="question">
                    <li>
                    Do you have a cervix?
                    </li>
                    <select
                    name="cervixAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.cervixAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "cervixAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            )}
            {/* {(ageGroup === "30-65" && troubleshooting.hivAnswer === "yes") &&(
                <div className="question">
                    <p>HIV algorithm</p>
                </div>
            )} */}
            {(ageGroup === "30-65" && troubleshooting.hivAnswer === "no") &&(
                <div className="question">
                    <li>
                    Do you have a cervix? Describe hysterectomy types?
                    </li>
                    <select
                    name="cervixAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.cervixAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "cervixAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            )}
            {troubleshooting.cervixAnswer === "no" &&(
                <div className="question">
                   <p>No cervix algorithm</p>
                </div>
            )}
            {troubleshooting.cervixAnswer === "yes" && ageGroup === "over65" &&(
                <div className="question">
                    <li>
                    When was your last pap smear?
                    </li>
                    <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "papAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="more3"> more than 3 years before 65th birthday/never </option>
                        <option value="between13"> pap smear 1-3 years before your 65th birthday</option>
                        <option value="less1">pap smear less than one year before your 65th birthday</option>
                    </select>
                </div>
            )}
            {troubleshooting.papAnswer === "more3" && ageGroup === "over65" && (
                <div className="question">
                    <p>Likely due now</p>
                </div>
            )}
            {(troubleshooting.papAnswer === "between13" || troubleshooting.papAnswer === "less1") && ageGroup === "over65" && (
                <div className="question">
                    <li>
                    Was you last pap smear normal?
                    </li>
                    <select
                    name="papNormalAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papNormalAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "papNormalAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">Yes </option>
                        <option value="no">No</option>
                    </select>
                </div>
            )}
            {troubleshooting.papNormalAnswer === "no" &&(
                <div className="question">
                    <p>Likely due now</p>
                </div>
            )}
            {troubleshooting.papNormalAnswer === "yes" &&(
                <div className="question">
                    <p>You are likely not indicated for further Pap smears if you've always had normal Pap smears</p>
                </div>
            )}
            {(troubleshooting.cervixAnswer === "yes" && ageGroup === "30-65") && (
                <div className="question">
                    <li>
                    When was your last pap smear?
                    </li>
                    <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "papAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="under3"> less than 3 years or never </option>
                        <option value="between35"> between 3 and 5 years</option>
                        <option value="over5">more than 5 years</option>
                    </select>
                </div>
            )}
            {(troubleshooting.cervixAnswer === "yes" && ageGroup === "21-29") &&(
                <div className="question">
                    <li>
                    When was your last pap smear?
                    </li>
                    <select
                    name="papAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.papAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "papAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="over3"> over 3 years</option>
                        <option value="under3"> less than 3 years or never </option>
                    </select>
                </div>
            )}
            {troubleshooting.papAnswer === "over5" &&(
                <div className="question">
                    <p>High risk</p>
                </div>
            )}
            {troubleshooting.papAnswer === "between35" &&(
                <div className="question">
                     <li>
                    Do you have documentation of your results?
                    </li>
                    <select
                    name="documentationAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.documentationAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "documentationAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            )}
            {troubleshooting.papAnswer === "under3" &&(
                <div className="question">
                     <li>
                    Do you have documentation of your results?
                    </li>
                    <select
                    name="documentationAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.documentationAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "documentationAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            )}
            {troubleshooting.documentationAnswer === "yes" && troubleshooting.papAnswer === "under3" &&(
                <div className="question">
                    <p>Insert things explaining how to understand documentation</p>
                    <li>
                    Is the documentation normal?
                    </li>
                    <select
                    name="normalDocAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalDocAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "normalDocAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                </div>
            )}
            {troubleshooting.documentationAnswer === "yes" && ageGroup === '30-65' && troubleshooting.papAnswer === "between35"&&(
                <div className="question">
                    <p>Insert things explaining how to understand documentation</p>
                    <li>
                    Did you have HPV testing with your last pap smear?
                    </li>
                    <select
                    name="prevHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.prevHPVAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "prevHPVAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no/don't know</option>
                    </select>
                </div>
            )}
            {troubleshooting.prevHPVAnswer === "yes" && ageGroup === '30-65'&&(
                <div className="question">
                    <li>
                    Did you test positive for HPV?
                    </li>
                    <select
                    name="positiveHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.positiveHPVAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "positiveHPVAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no/don't know</option>
                    </select>
                </div>
            )}
            {troubleshooting.prevHPVAnswer === "no" &&(
                <div className="question">
                    <p>Yes: insert how to interpret results, a few examples of reports, and definitions</p>
                    <li>
                    Were your HPV results normal?
                    </li>
                    <select
                    name="normalHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalHPVAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "normalHPVAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no/don't know</option>
                    </select>
                </div>
            )}
            {troubleshooting.positiveHPVAnswer === "yes" &&(
                <div className="question">
                    <p>Likely due now.</p>
                </div>
            )}
            {troubleshooting.positiveHPVAnswer === "no" &&(
                <div className="question">
                    <div className="question">
                    <p>Yes: insert how to interpret results, a few examples of reports, and definitions</p>
                    <li>
                    Were your HPV results normal?
                    </li>
                    <select
                    name="normalHPVAnswer"
                    className="troubleshooting-dropdown"
                    value={troubleshooting.normalHPVAnswer}
                    onChange={(e) => {
                    handleOnTroubleshootingChange(
                        "normalHPVAnswer",
                        e.target.value
                    );}}>
                        <option value="">Select an Option</option>
                        <option value="yes">yes</option>
                        <option value="no">no/don't know</option>
                    </select>
                </div>
                </div>
            )}
            {troubleshooting.normalHPVAnswer === "no" &&(
                <div className="question">
                    <p>Follow up with provider</p>
                </div>
            )}
            {troubleshooting.normalHPVAnswer === "yes" &&(
                <div className="question">
                    <p>Get screened 5 years from last pap.</p>
                </div>
            )}
            {troubleshooting.normalDocAnswer === "no" &&(
                <div className="question">
                    <p>Follow up with provider</p>
                </div>
            )}
            {troubleshooting.normalDocAnswer === "yes" &&(
                <div className="question">
                    <p>Get screened 3 years after last pap smear.</p>
                </div>
            )}
            {troubleshooting.documentationAnswer === "no" &&(
                <div className="question">
                    <p>Try to get your results; describe how to get your results. 
                        If you do not remember where you last had a Pap smear, it would be best to see a provider</p>
                </div>
            )}
          </ol>
        </div>
      </form>
    </div>
  );
}

export default Survey;

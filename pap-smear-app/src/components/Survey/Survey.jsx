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
        documentationAnswer: troubleshooting.documentationAnswer
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
            {((ageGroup === "under21" || ageGroup === "21-29")&& troubleshooting.hivAnswer === "yes") &&(
                <div className="question">
                    <p>HIV algorithm</p>
                </div>
            )}
            {(ageGroup === "21-29" && troubleshooting.hivAnswer === "no") &&(
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
            {(troubleshooting.cervixAnswer === "yes") &&(
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
            {troubleshooting.papAnswer === "over3" &&(
                <div className="question">
                    <p>High risk</p>
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
            {troubleshooting.documentationAnswer === "yes" &&(
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

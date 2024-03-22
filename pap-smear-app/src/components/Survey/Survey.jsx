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
      ageGroup: troubleshooting.ageGroup
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
            {ageGroup === "under21" && (
                <div className="question">
                    <li>
                    Has a provider ever told you that you have HIV?
                    </li>
                    <select > </select>
                </div>
            )}
          </ol>
        </div>
      </form>
    </div>
  );
}

export default Survey;

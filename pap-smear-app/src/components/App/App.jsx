import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Providers from "../Providers/Providers";
import Glossary from "../Glossary/Glossary";

// const API_BASE_URL = "http://localhost:3001";

function App() {
  const glossary = {
    "Anus": "The opening at the end of the digestive tract where bowel contents leave the body.",
    "Biopsy": "The removal of a small piece of tissue for examination under a microscope.",
    "Cells":
      "The smallest unit of a structure in the body. Cells are the building blocks for all parts of the body.",
    "Cervical Biopsy":
      "A minor surgical procedure to remove a small piece of cervical tissue that is then examined under a microscope in a laboratory.",
    "Cervical Cancer":
      "A type of cancer that is in the cervix, the opening to the uterus at the top of the vagina.",
    "Cervical Cytology":
      "The study of cells taken from the cervix using a microscope. Also called a Pap test.",
    "Cervix": "The lower, narrow end of the uterus at the top of the vagina.",
    "Colposcopy":
      "Viewing of the cervix, vulva, or vagina under magnification with an instrument called a colposcope.",
    "Co-Testing":
      "Use of both the Pap test and human papillomavirus (HPV) test to screen for cervical cancer.",
    "Diabetes Mellitus":
      "A condition in which the levels of sugar in the blood are too high.",
    "False-Negative":
      "A test result that says you do not have a condition when you do.",
    "False-Positive":
      "A test result that says you have a condition when you do not.",
    "Human Immunodeficiency Virus (HIV)":
      "A virus that attacks certain cells of the body’s immune system. If left untreated, HIV can cause acquired immunodeficiency syndrome (AIDS).",
    "Human Papillomavirus (HPV)":
      "The name for a group of related viruses, some of which cause genital warts and some of which are linked to cancer of the cervix, vulva, vagina, penis, anus, mouth, and throat.",
    "Hysterectomy": "Surgery to remove the uterus.",
    "Immune System":
      "The body’s natural defense system against viruses and bacteria that cause disease.",
    "LEEP":
      "Loop Electrosurgical Excision Procedure -- A procedure that removes abnormal tissue from the cervix using a thin wire loop and electric energy.",
    "Menopause":
      "The time when a woman’s menstrual periods stop permanently. Menopause is confirmed after 1 year of no periods.",
    "Menstrual Period":
      "The monthly shedding of blood and tissue from the uterus.",
    "Obstetrician–Gynecologist (Ob-Gyn)":
      "A doctor with special training and education in women’s health.",
    "Pap Test":
      "A test in which cells are taken from the cervix (or vagina) to look for signs of cancer.",
    "Pelvic Exam": "A physical examination of pelvic organs.",
    "Pelvic Floor Disorders":
      "Disorders that affect the muscles and tissues that support the pelvic organs.",
    "Penis": "The male sex organ.",
    "Sexual Intercourse":
      "The act of the penis of the male entering the vagina of the female. Also called “having sex” or “making love.”",
    "Speculum": "An instrument used to hold open the walls of the vagina.",
    "Uterus":
      "A muscular organ in the female pelvis. During pregnancy, this organ holds and nourishes the fetus. Also called the womb.",
    "Vagina":
      "A tube-like structure surrounded by muscles. The vagina leads from the uterus to the outside of the body.",
    "Virus": "An agent that causes certain types of infections.",
    "Vulva": "The external female genital area.",
  };

  const handleHover = (event) => {
    const term = event.target.innerText.trim().replace(":", "").replace(/\b\w/g, (char) => char.toUpperCase());
    console.log(term)
    const definition = glossary[term];
    if (definition) {
      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.innerText = `${term}: ${definition}`;
      event.target.appendChild(tooltip);
    }
  };

  // Function to hide tooltip on mouseout
  const handleMouseOut = (event) => {
    const tooltip = event.target.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Banner glossary={glossary} handleHover={handleHover}
            handleMouseOut={handleMouseOut}/>}
          />
          <Route path="/faq" element={<Home glossary={glossary} handleHover={handleHover}
            handleMouseOut={handleMouseOut}/>} />
          <Route path="/providers" element={<Providers />} />
          <Route
            path="/glossary"
            element={
              <Glossary
                glossary={glossary}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

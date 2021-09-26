// http://zacharyruden.com/
import React, { useState } from "react";
import cvImage from "../images/cv.jpg";

//TODO:  Fix download btn, doesn't create element and click it.

function SeeVee() {
  const [cvLink] = useState(
    "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"
  );
  // "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"

  const text = [
    "Is that you? Finally! I've been waiting here, where have you been? How are you?",
    "It's been ages, I feel like we don't know each other anymore.",
    "We were really close, weren't we? Or maybe I'm getting you mixed up, it really has been that long.",
    "Well, that's all behind us now, I'm just glad that you have come found me here.",
    "I've been so preoccupied lately that I must have forgotten to call.",
    "I'm sorry. The energy lies in learning, anyway, I'll learn to be better. For you, to you.",
    "I've been thinking a lot about us. What we could be... it sounds silly.",
  ];

  const cvText = text.map((sentence) => (
    <p className="cvTextPara" key={sentence}>
      {sentence}
    </p>
  ));

  return (
    <div id="cvContainer">
      <div id="cvText">
        {cvText}
        <p>I made this for you:</p>
      </div>
      <div
        id="cvImageContainer"
        onClick={() => {
          const link = document.createElement("a");
          link.href = cvLink;
          link.click();
        }}
      >
        <img src={cvImage} alt="cv" id="cvImage" />
      </div>
      <button className="downloadCVBtn">Download CV</button>
    </div>
  );
}

export default SeeVee;

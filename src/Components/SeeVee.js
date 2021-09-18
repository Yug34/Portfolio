// http://zacharyruden.com/
import React, { useState } from "react";
import cvImage from "../images/cv.jpg";

function SeeVee() {
  const [cvLink, setCvLink] = useState(
    "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"
  );
  // "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"

  return (
    <div id="cvContainer">
      <div id="cvText">
        <p className="cvTextPara">
          Is that you? Finally! I've been waiting here, where have you been? How
          are you?
        </p>
        <p className="cvTextPara">
          It's been ages, I feel like we don't know each other anymore.
        </p>
        <p className="cvTextPara">
          We were really close, weren't we? Or maybe I'm getting you mixed up,
          it really has been that long.
        </p>
        <p className="cvTextPara">
          Well, that's all behind us now, I'm just glad that you have come found
          me here.
        </p>
        <p className="cvTextPara">
          I've been so preoccupied lately that I must have forgotten to call.
        </p>
        <p className="cvTextPara">
          I'm sorry. The energy lies in learning, anyway, I'll learn to be
          better. For you, to you.
        </p>
        <p className="cvTextPara">
          I've been thinking a lot about us. What we could be... it sounds
          silly.
        </p>
        <p>I made this for you:</p>
      </div>
      <a href={cvLink} id="cvLink">
        {/*  <div id="cvImageContainer">*/}
        <img src={cvImage} alt="cv image" id="cvImage" />
        {/*</div>*/}
      </a>
    </div>
  );
}

export default SeeVee;

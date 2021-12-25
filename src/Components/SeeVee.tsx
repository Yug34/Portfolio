import React from "react";
import cvImage from "../images/cv.jpg";

type SeeVeeProps = {
    cvLink: string,
    cvText: string[],
    isMobile: boolean
};

function SeeVee(props: SeeVeeProps): JSX.Element {
  const cvText: JSX.Element[] | JSX.Element = props.cvText.map((sentence) => (
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
        onClick={(): void => {
          const link: HTMLAnchorElement = document.createElement("a");
          link.href = props.cvLink;
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

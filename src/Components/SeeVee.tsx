// import React, {useContext} from "react";
import React from "react";
import cvImage from "../images/cv.jpg";
// import {IsMobileContext} from "../Contexts/IsMobile";

type SeeVeeProps = {
  cvLink: string,
  cvText: string[],
};

function SeeVee(props: SeeVeeProps): JSX.Element {
  // const isMobile = useContext(IsMobileContext);
  // const {isMobile, setIsMobile} = useContext(IsMobileContext);

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

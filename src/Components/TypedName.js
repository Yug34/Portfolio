import React, {useContext} from "react"
import {IsMobileContext} from "../Contexts/IsMobile";

function TypedName(props) {
  // const {isMobile, setIsMobile} = useContext(IsMobileContext);
  const {isMobile, } = useContext(IsMobileContext);

  return (
    <div id="nameTitle">
      <div id="name">
        {isMobile ? (
          <b style={{ fontSize: "1.6em" }}>{props.name}</b>
        ) : (
          <b>{props.name}</b>
        )}
      </div>
      {isMobile ? (
        <div style={{ fontSize: "0.75em" }} id="title" />
      ) : (
        <div id="title" />
      )}
    </div>
  );
}

export default TypedName;

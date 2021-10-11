import React from "react";

function TypedName(props) {
  return (
    <div id="nameTitle">
      <div id="name">
        {props.isMobile ? (
          <b style={{ fontSize: "1.6em" }}>{props.name}</b>
        ) : (
          <b>{props.name}</b>
        )}
      </div>
      {props.isMobile ? (
        <div style={{ fontSize: "0.75em" }} id="title" />
      ) : (
        <div id="title" />
      )}
    </div>
  );
}

export default TypedName;

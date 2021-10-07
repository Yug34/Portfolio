import React from "react";

function TypedName(props) {
  return (
    <div id="nameTitle">
      <div id="name">
        <b>{props.name}</b>
      </div>
      <div id="title" />
    </div>
  );
}

export default TypedName;

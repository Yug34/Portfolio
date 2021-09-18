import React, { useState } from "react";

function SeeVee() {
  const [cvLink, setCvLink] = useState(
    "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"
  );
  // "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf"

  return (
    <div id="seeVee">
      <div>
        Is that you? Finally! I've been waiting here, where have you been? It's
        been ages, I feel like we don't know each other anymore. We were really
        close, weren't we? Or maybe I'm getting you mixed up, it really has been
        that long. Well, that's all behind us now, I'm just glad that you have
        come found me here. I've been so preoccupied lately that I must have
        forgotten to call. I'm sorry. The energy lies in learning, anyway, I'll
        learn to be better. I've been thinking a lot about us. What we could
        be... it sounds silly. I made this for you:
        {/*Oh and did I ever mention I have a really nice*/}
        <a
          id="cvLink"
          href={cvLink}
          // target="_blank"
          // onClick={() => {}}
        >
          <i>Curriculum Vitae</i>
        </a>
        {/*as they like to call it. I generally charge an exorbitant amount but*/}
        {/*hey, you are special, I'll show it to you for free.*/}
      </div>
    </div>
  );
}

export default SeeVee;

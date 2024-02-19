import { AiFillFastForward } from "react-icons/ai";
import React from 'react';
import './NextButton.css';

const NextButton = () => {
  return (
    <div className="nextButtonContainer absolute top-[60%] right-[15%]">
      <div className="svgContainer">
        <svg xmlns="http://www.w3.org/2000/svg" lang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" width={200} height={200}>
          <title>Listen to the next Project</title>
          <circle
            cx="250"
            cy="250"
            r="100"
            className="circle-under-text"
          ></circle>
          <defs>
            <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(-90 250 250)" />
          </defs>
          <g className="textcircle">
            <text textLength="940">
              <textPath
                href="#textcircle"
                aria-label="LISTEN TO THE NEXT PROJECT"
                textLength="940">
                NEXT &#128191; LISTEN TO THE NEXT PROJECT &#128191;&#160;
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <button>
        <AiFillFastForward className="nextIcon absolute top-[37%] left-[40%]" x="225" y="225" />
      </button>
    </div>
  );
};

export default NextButton;

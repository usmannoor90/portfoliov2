"use client";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCircle() {
  return (
    <div>
      <AnimatedCursor
        innerSize={6}
        outerSize={35}
        innerScale={1.5}
        outerScale={2}
        outerAlpha={0}
        // hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#d3d3d3",
        }}
        outerStyle={{
          border: "2px solid #d3d3d3",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}

export default CustomCircle;

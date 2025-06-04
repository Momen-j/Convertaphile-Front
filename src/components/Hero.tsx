import React from "react";

// @ts-expect-error testing
const Hero = (props) => {
  return (
    <>
      <div className="text-xl text-red">{props.title}</div>
      <div className="text-xl text-red">{props.subtitle}</div>
    </>
  );
};

export default Hero;

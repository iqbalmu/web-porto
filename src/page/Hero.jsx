import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

const Hero = () => {
  return (
    <Wrapper>
      <div id="hero" className="flex justify-between items-center h-full">
        <div className="flex flex-col justify-around h-5/6">
          <h1></h1>
          <div className="ps-6">
            <p className="text-xl">IQBAL MUHAKIM</p>
            <h1 className="text-6xl font-sans font-bold">SOFTWARE ENGINEER</h1>
            <p className="text-xl text-end">STUDENT AT PADANG STATE POLYTECHNIC</p>
          </div>
          {/* <h1>//</h1> */}
          <div className="ps-6">
            <Button text="contact me" href={"https://wa.me/+6282196506900"} />
          </div>
        </div>
        <div className="m-auto border p-3">
          <img src="../../public/image/stickman.png" alt="" width={300} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;

import React from "react";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

const About = () => {
  return (
    <Wrapper>
      <div id="about" className="flex items-center h-full w-full">
        <div className="z-0 basis-2/5">
          <div className="relative w-auto h-auto">
            <img
              src="../../public/image/stickman.png"
              alt=""
              width={250}
              className="z-50"
            />
            <div className="block p-32 border absolute -top-8 left-7 -z-10"></div>
          </div>
        </div>
        <div className="flex flex-col justify-around h-5/6 basis-3/5 text-zinc-100">
          <div>
            <h2 className="text-xl">about me</h2>
            <p className="text-xs text-zinc-700">
              a glimpse of me that you may not want to know
            </p>
          </div>

          <p className="text-sm border-t border-b py-4">
            Hello, my name is Iqbal Muhakim, a software engineering student at
            the Padang State Polytechnic. Born in West Sumatra, Indonesia. just
            someone who loves programming and solving problems with it.
            interested in web programming and the world of open source linux
          </p>

          <div className="flex justify-between">
            <table className="text-center text-sm w-fit">
              <tr>
                <td className="border px-12 py-1">Name</td>
                <td className="border px-12 py-1">Iqbal Muhakim</td>
              </tr>
              <tr>
                <td className="border px-12 py-1">Age</td>
                <td className="border px-12 py-1">20</td>
              </tr>
              <tr>
                <td className="border px-12 py-1">Country</td>
                <td className="border px-12 py-1">Indonesia</td>
              </tr>
              <tr>
                <td className="border px-12 py-1">Phone</td>
                <td className="border px-12 py-1">+62 821 9650 6900</td>
              </tr>
              <tr>
                <td className="border px-12 py-1">Email</td>
                <td className="border px-12 py-1">iqbalmu1601@gmail.com</td>
              </tr>
            </table>
            <div className="mt-14 pe-2 h-fit">
              <Button text="Download CV" href={"https://www.google.com"} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

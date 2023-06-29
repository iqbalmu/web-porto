import React from "react";

const Project = ({ image, title, link, stack }) => {
  const imageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className="inline-block relative w-44 h-48 z-0">
      {/* <img src={image} alt="" className="w-48 h-52"/> */}
      <a href={link} target="_blank" className="group">
        <div
          className="transition-all inline-block w-44 h-48 hover:cursor-pointer absolute top-0 left-0 group-hover:-top-1 group-hover:left-2"
          style={imageStyle}
        ></div>
        <div className="transition-all block w-44 h-48 border p-4 absolute -top-8 left-10 -z-10 group-hover:z-0 group-hover:-top-2 group-hover:left-3 group-hover:bg-[#212529] group-hover:opacity-80">
          <div className="transition-all hidden justify-center text-center text-white group-hover:flex group-hover:flex-col">
            <h3>{title}</h3>
            <hr />
            <span className="text-xs">{stack}</span>
          </div>
        </div>

        {/* <div className="transition delay-700 duration-300 hidden w-44 h-48 border opacity-70 absolute -top-8 left-10 group-hover:block group-hover:-top-2 group-hover:left-3 group-hover:bg-gray-800"></div> */}
      </a>
    </div>
  );
};

export default Project;

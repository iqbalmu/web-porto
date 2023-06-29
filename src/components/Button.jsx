import React from "react";

const Button = ({ text, href }) => {
  return (
    <div className="relative w-fit z-0 group">
      <a href={href} target="_blank" className="transition-all border px-5 py-2 inline-block w-fit bg-[#212529] z-10 group-hover:scale-95 group-hover:opacity-95">
        {text}
      </a>
      <div className="transition-all group-hover:bg-slate-200 group-hover:-top-0 group-hover:-right-0 group-hover:scale-95 inline-block w-full h-full border absolute -top-3 -right-3 -z-10"></div>
    </div>
  );
};

export default Button;

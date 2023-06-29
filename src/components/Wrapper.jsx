import React from "react";

const Wrapper = (props) => {
  return (
    <div>
      <div className="px-16 h-screen">
        <div className="max-w-full border py-7 px-16 h-4/5 mt-7">
            {props.children}          
        </div>
      </div>
    </div>
  );
};

export default Wrapper;

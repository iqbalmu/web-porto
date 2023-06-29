import React from "react";
import Wrapper from "../components/Wrapper";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (    
      <div id="contact" className="flex flex-col justify-center mx-16 border-t pt-5">
        <h1 className="text-xl text-center">contact</h1>
        <p className="text-xs text-zinc-700 text-center mb-5">
          contact me if you have no need but curious
        </p>
        <div>
          <ContactCard
            title={"Phone"}
            val={"+62 821 9650 6900"}
            link={"https://wa.me/+6282196506900"}
          />
          <ContactCard
            title={"Email"}
            val={"iqbalmu1601@gmail.com"}
            link={"mailto:iqbalmu1601@gmail.com"}
          />
          <ContactCard
            title={"Linkedin"}
            val={"iqbal-muhakim-246b79280"}
            link={"https://www.linkedin.com/in/iqbal-muhakim-246b79280/"}
          />
          <ContactCard
            title={"Github"}
            val={"iqbalmu"}
            link={"https://github.com/iqbalmu"}
          />
        </div>
      </div>
  );
};

export default Contact;

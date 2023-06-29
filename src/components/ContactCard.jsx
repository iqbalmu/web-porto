import React from "react";

const ContactCard = ({ title, val, link }) => {
  return (
    <div className="flex flex-col text-center my-4">
      <h3 className="text-sm text-zinc-500">{title}</h3>
      <p className="underline text-sm">
        <a href={link} target="_blank">
          {val}
        </a>
      </p>
    </div>
  );
};

export default ContactCard;

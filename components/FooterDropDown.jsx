import React from "react";

const FooterDropDown = ({ title, options }) => {
  return (
    <div className="inline-black">
      <button className="w-full flex justify-between items-center text-[1.5rem] font-bold text-black">
        {title}
        <i className="bi bi-caret-down text-[1rem] ml-auto text-black"></i>
      </button>
    </div>
  );
};

export default FooterDropDown;

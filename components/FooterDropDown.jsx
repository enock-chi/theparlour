import React, { useState } from 'react';

const FooterDropDown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown open/closed state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="inline-block relative w-full">
      <button className="button w-full" onClick={toggleDropdown}>
        {title}
        <i className="bi bi-caret-down icon ml-1"></i>
      </button>
      <div
        // TailwindCSS classes for transition and overflow handling
        className={`transition-all duration-1000 ease-in-out overflow-hidden ${
          isOpen ? 'h-auto' : 'h-0'
        }`}
        // Inline style to dynamically adjust height
        style={{ height: isOpen ? `${options.length * 2.5}rem` : '0' }}
      >
        <ul className="bg-white  w-full">
          {options.map((option, index) => (
            <li key={index} className="flex my-[1vh] pl-[8vw] cursor-pointer text-black ">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterDropDown;

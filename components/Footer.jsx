"use client";

import React, { useState } from 'react';
import Link from "next/link";
import FooterDropDown from "./FooterDropDown";
import { Switch } from "@headlessui/react";


const Footer = () => {
  const [enabled, setEnabled] = useState(false);
  const optionService = ["Salon", "Nailbar", "Men", "Shop"];
  const optionParlour = ["Gallery", "Founders Word", "Think of options"];
  const optionCompany = ["Stories", "Contact Us", "Option 3"];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="relative w-full h-auto pt-[2vh]">
      <div className="w-full min-h-[50vh] border-t border-black rounded-t-[2rem] px-[5vw] pt-[5vh]">
        <div className="w-[40vw] h-[5vh] top-[5vh] mx-auto flex space-x-[10vw] rounded-lg pt-[0.7vh] bg-black opacity-100 items-center justify-center">
          <Link href="https://www.tiktok.com/@tamia.s_beautypalour?_t=8iQoaH5gB8A&_r=1">
            <i className="bi bi-tiktok" target="_blank" rel="noopener noreferrer"></i>
          </Link>
          <Link href="tel:+27679248416">
            <i className="bi bi-telephone-fill" target="_blank" rel="noopener noreferrer"></i>
          </Link>
          <Link href="https://www.instagram.com/tamia.s_beautypalour/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
        <p className="text-black mx-auto w-[60vw] h-auto py-[1vh] text-center font-bold text-[1.2rem]">
          <span className="text-pink-500">Be the first </span>to hear about new
          treatments, promotions and tips to get that feeling.
        </p>
        <div className="pb-[3vh] h-auto z-49 flex flex-col space-y-2">
          <FooterDropDown title="Services" options={optionService} />
          <FooterDropDown title="Your Parlour" options={optionParlour} />
          <FooterDropDown title="Company" options={optionCompany} />
        </div>
        <hr className="w-full border-black" />
        <div className="isolate bg-white pt-5 z-10 ">
         

          <div className="w-full text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black ">
              Contact Us
            </h2>
          </div>
          <form action="#" method="POST" className="mx-auto ">
            <div className="grid grid-cols-1 gap-x-2 ">
              <div className="flex items-center space-x-10">
                <label
                  htmlFor="first-name"
                  className="block text-center text-xl w-[35vw] font-bold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5 w-full">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block h-[3vh] w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <label
                  htmlFor="last-name"
                  className="block text-center text-xl w-[35vw] font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5 w-full">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full h-[3vh] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <label
                  htmlFor="company"
                  className="block text-center text-xl w-[35vw] font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5 w-full">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="block w-full h-[3vh] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <label
                  htmlFor="email"
                  className="block text-center text-xl w-[35vw] font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5 w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full h-[3vh] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <label
                  htmlFor="phone-number"
                  className="block text-center text-xl w-[35vw] font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5 w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-[3vh] rounded-md border-0 bg-transparent bg-none py-0 pl-4 text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>+27</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full h-[3vh] rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-center mt-[1vh] text-xl font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full h-[10vh] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue=""
                  />
                </div>
              </div>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                      enabled ? "bg-pink-500" : "bg-gray-200",
                      "flex mt-[4.1vh] w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? "translate-x-3.5" : "translate-x-0",
                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                </div>
                <Switch.Label className="text-sm font-bold leading-6 text-gray-600 mt-[2vh]">
                  By selecting this, you agree to our{" "}
                  <a href="#" className="font-semibold text-pink-500">
                    privacy&nbsp;policy
                  </a>
                  .
                </Switch.Label>
              </Switch.Group>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="block w-full rounded-md bg-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
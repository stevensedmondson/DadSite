'use client'

import { React, useState, useRef } from 'react';
import { Work_Sans } from "next/font/google";

const work = Work_Sans({
    subsets: ['latin'] })

export default function HamburgerMenuPage () {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className='font-work uppercase text-[#07668C] max-w-xs:text-sm'>    
        <HamburgerMenu bgColor='bg-white' textColor='text-black' >
        <div className='flex justify-between w-[60vw]'>    
            <HamburgerMenuBrand href="/">Pilot Medical Exams, PLLC</HamburgerMenuBrand>
            <HamburgerMenuToggler toggle={toggle} />
        </div>
            <HamburgerMenuCollapse open={open}>
                <HamburgerMenuNav>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="/">Home</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="/about">About</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="/services">Services</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="/location">Location</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="/contact">Contact</HamburgerMenuLink>
                    </HamburgerMenuItem>
                </HamburgerMenuNav>
            </HamburgerMenuCollapse>
            </HamburgerMenu>
    </div>
  );
};

/* Logic */

const style = {
  nav: `flex flex-col mt-5 pt-2 pb-2 bg-[#5D7A8C] text-white border-2 border-[#044159] rounded-2xl shadow-2xl w-full`,
  navbar: `font-light shadow py-2 px-4`,
  collapse: `transition-height delay-100 ease duration-500`,
  toggler: `float-right pt-2.5 text-2xl focus:outline-md focus:shadow`,
  link: `flex justify-center cursor-pointer py-2 px-4  hover:text-gray-400 font-md`,
  brand: `mx-5 p-2 inline-block cursor-pointer text-lg font-normal  hover:text-gray-400 max-w-md:flex`,
};

function HamburgerMenu({ children, bgColor, textColor }) {
  return (
    <nav>{children}</nav>
  );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuBrand({ children, href }) {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
}

function HamburgerMenuToggler({ toggle }) {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#8801;
    </button>
  );
}

function HamburgerMenuCollapse({ children, open }) {
  const ref = useRef(null);

  const inlineStyle = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
}

function HamburgerMenuNav({ children }) {
  return <ul className={style.nav}>{children}</ul>;
}

function HamburgerMenuItem({ children }) {
  return <li>{children}</li>;
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuLink({ children, href }) {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
}
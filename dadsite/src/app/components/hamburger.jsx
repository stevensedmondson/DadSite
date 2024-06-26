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
    <div className='font-work uppercase text-white max-w-xs:text-sm'>    
        <HamburgerMenu bgColor='bg-white' textColor='text-black' >
        <div className='flex justify-center w-full items-center'>
          <div className='bg-gray-700/80 text-center px-4 py-2 rounded-2xl shadow-2xl border-gray-400 border-2'>
            <HamburgerMenuBrand href="/">Pilot Medical Exams, PLLC</HamburgerMenuBrand>
              <div className='flex justify-center w-full h-auto rounded-2xl'>
                <HamburgerMenuToggler toggle={toggle} />
              </div>
          </div>
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
  nav: `flex justify-center mt-5 pt-2 pb-2 bg-gray-700/80 text-white border-2 border-gray-400 rounded-2xl shadow-2xl w-full`,
  navbar: `font-light shadow py-2 px-4`,
  collapse: `transition-height delay-100 ease duration-500`,
  toggler: `float-right place-content-center text-3xl focus:outline-md focus:shadow`,
  link: `flex justify-center cursor-pointer py-2 px-4  hover:text-gray-400 font-md`,
  brand: `mx-2 p-2 inline-block cursor-pointer text-2xl font-normal hover:text-gray-400 max-w-md:flex`,
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
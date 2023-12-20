"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { navlinks } from "@/utils/infos";

const Header = () => { 
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const menu = (
    <React.Fragment>
      
        {
          navlinks.map(nav => (
            <li key={nav?.id}><button className="text-white border-2 border-[#3185FF]  py-2 rounded-full px-6">{nav.title}</button></li>
        ))
        }
    </React.Fragment>
  );

  return (
    <nav  className={`sm:px-10 xl:px-16 px-4 py-5 shadow-none w-[100vw] bg-[black] nav`}
    >
      <div className={`flex w-full items-center   justify-between largeMonitor:justify-around `}>
        <div className="flex overflow-hidden  items-center">
          <Link href={'/'}><Image src={'/images/CntrlLogo.png'} width={100} height={100} alt="cntrl_logo" /></Link>
        </div>
        <ul className={`${active} `}>
          {menu}
        </ul>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
};
export default Header;
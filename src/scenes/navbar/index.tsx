//import { useState, useRef } from "react";
//import { Bars3Icon, XMArkIcon} from "@heroicons/react/16/solid";
//import Logo from "@/assets/Logo.png";

const Navbar = () => {
const flexBetween = "flex items=center justify-bteween"

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>

            </div>
        </div>
    </nav>
  )
}

export default Navbar;
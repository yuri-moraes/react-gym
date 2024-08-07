//import { useState, useRef } from "react";
//import { Bars3Icon, XMArkIcon} from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";

const Navbar:React.FC = () => {
const flexBetween = "flex items=center justify-bteween"

  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/*LEFT SIDE*/}
                    <img src={Logo} alt="logo" />

                    {/*RIGHT SIDE*/}
                    <div className={`${flexBetween} w-full`}>\
                        <div className={`${flexBetween} gap-7 text-sm`}>
                            <p>Home</p>
                            <p>Benefits</p>
                            <p>Our Cllasees</p>
                            <p>Contact Us</p>
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <p>Sign in</p>
                            <button>Become a Member</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
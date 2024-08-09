//import { useState, useRef } from "react";
//import { Bars3Icon, XMArkIcon} from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

interface NavbarProps {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage ) => void;
}

const Navbar:React.FC<NavbarProps> = ({selectedPage, setSelectedPage}) => {
const flexBetween = "flex items-center justify-bteween"
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                   
                    <img src={Logo} alt="logo"/>

                    <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                            page="Home" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Benefits" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Our Classes" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link 
                            page="Contact Us" 
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
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
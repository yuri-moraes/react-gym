import { useState, useRef } from "react";
import { Bars3Icon, XMArkIcon} from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

interface NavbarProps {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage ) => void;
}

const Navbar:React.FC<NavbarProps> = ({selectedPage, setSelectedPage}) => {
const flexBetween = "flex items-center justify-between"
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  return (
    <nav>
        <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                   
                    <img src={Logo} alt="logo"/>


                    {isAboveMediumScreens ? (
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
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
                </div>
            </div>
        </div>

    </nav>
  )
}

export default Navbar;
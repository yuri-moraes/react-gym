import Navbar from "@/scenes/navbar/index";
import Home from "@/scenes/home/index";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIstopOfPage] = useState<boolean>(true)

  useEffect(()=> {
    const handleScroll = ()=> {
      if (window.scrollY === 0) {
        setIstopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } 
      if (window.scrollY !== 0)  setIstopOfPage(false)
  }
  window.addEventListener("scroll", handleScroll);
  return ()=> window.removeEventListener("scroll", handleScroll);
}, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
      isTopOfPage={isTopOfPage}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
      />
      <Home  selectedPage={selectedPage}/>
    </div>
  );
};

export default App;

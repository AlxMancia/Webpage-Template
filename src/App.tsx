import { useEffect, useState } from "react"
import { NavBar } from "./scenes/navbar"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from "@/shared/types";
import { Home } from "./scenes/home";
import { Benefits } from "./scenes/benefits";
import { Gallery } from "./scenes/gallery";
import { ContactUs } from "./scenes/contactUs";
import Footer from "./scenes/footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfpage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {


    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='app bg-gray-20'>
      <NavBar
        isTopOfPage={isTopOfpage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Gallery setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )
}

export default App

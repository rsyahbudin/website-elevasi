import NavbarComp from "./components/NavbarComp";
import HeroComp from "./components/HeroComp";
import GalleryComp from "./components/GalleryComp";
import FaqComp from "./components/FaqComp";
import ServiceComp from "./components/ServiceComp";
import FooterComp from "./components/FooterComp";

function App() {
   return (
      <div>
         <HeroComp />

         {/* Content */}
         <NavbarComp />
         <GalleryComp />
         <ServiceComp />
         <FaqComp />
         {/* <FooterComp /> */}
         {/* Content */}
      </div>
   );
}

export default App;

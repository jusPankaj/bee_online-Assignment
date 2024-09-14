import PackageCard from "./PackageCard";
import { IoIosArrowForward } from "react-icons/io";
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import '../assets/css/packages.css'


const Packages = () => {
  return (
    <div className="package-container">
      <div className="inside-package">
        <div className="package_left">
          <div className="thick-lining"></div>
          <h2 className="package-heading">Affordable Packages</h2>
          <p className="package-para">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <a href="">Learn More <span className="learn-arrow"> <IoIosArrowForward /></span></a>
        </div>
        <div className="cards">
          <PackageCard icon={icon1} title={"Certified Teacher"} content={"The gradual accumulation of information about "} />
          <PackageCard icon={icon2} title={"Expert Instrcution"} content={"The gradual accumulation of information about "}/>
        </div>
      </div>
    </div>
  );
};

export default Packages;

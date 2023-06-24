/** @format */
import Image from "../assets/image/image.png";
import Audio from "../assets/image/audio.svg";
import Data from '../assets/image/databiz.svg';
import Maker from '../assets/image/maker.svg';
import Meet from "../assets/image/meet.svg";


const Body = () => {
  return (
    <>
      <div className="container flex justify-around flex-col-reverse md:flex-row items-center mt-20 md:mt-12">
        <div className="w-[50%] md:items-start md:max-w-xl mt-8">
          <h2 className="text-4xl md:text-6xl md:w-96 sm:font-semibold font-bold text-center text-almostBlack pb-3 sm:pb-8 md:text-left">
            Make remote work
          </h2>
          <p className="text-mediumGray text-center md:w-96 md:text-left text-lg">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="bg-almostBlack text-almostWhite mt-4 sm:mt-8 px-5 py-2 rounded-xl text-lg hover:bg-almostWhite hover:text-almostBlack hover:border hover:border-almostBlack ">
              Learn More
            </button>
          </div>

          <div className="flex justify-center gap-5 mt-14 flex-wrap md:justify-start ">
            <img src={Data} className="h-3 sm:h-4" />
            <img src={Audio} className="h-5 sm:h-6" />
            <img src={Meet} className="h-3 sm:h-4" />
            <img src={Maker} className="h-5 sm:h-6" />
          </div>
        </div>
        <div className="w-[40%]">
          <img src={Image} className="w-[490px] h-auto" />
        </div>
      </div>
    </>
  );
};

export default Body;

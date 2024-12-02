import imageSlider from '../Data/data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const HeroSlyderSection = () => {
  return (
    <>
      <div className="w-full relative max-w-[1300px]  mx-auto overflow-hidden bg">
        <div className="flex  transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}">
          {imageSlider?.map((image) => (
            <img key="id" src={image.src} alt={image.alt} />
          ))}
        </div>

        <button>
          <span>
            <FaAngleLeft />
          </span>
        </button>
        <button>
          <span>
            <FaAngleRight />
          </span>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {imageSlider.map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSlyderSection;

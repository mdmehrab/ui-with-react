import { GrLanguage } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="py-3">
      <div className="grid grid-cols-7">
        <div className="col-span-4 flex gap-4 justify-center items-center">
          <p className="font-bold text-xl">Udemy</p>
          <p className="text-gray-400">category</p>
          <div>
            {/* <span>
              <FaSearch />
            </span> */}
            <input
              type="search"
              placeholder="search for anything"
              className="border border-black p-3 w-[600px] rounded-[100px] focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-3 flex justify-center items-center gap-7">
          <p>udemy bunesiness</p>
          <p>teach on udemy</p>
          <p>
            <MdOutlineShoppingCart />
          </p>
          <div className="gap-2 flex">
            <button className="border border-bllack py-1 px-3">log in</button>
            <button className="bg-black text-white py-1 px-3">sign in</button>
          </div>

          <p className="border border-black p-2">
            <span className="">
              <GrLanguage />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

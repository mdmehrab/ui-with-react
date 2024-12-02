import { GrLanguage } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';
// import { FaSearch } from "react-icons/fa";

const Toolbar = () => {
  return (
    <div className="grid grid-cols-9 py-3">
      <div className="col-span-6 flex gap-7 justify-center items-center">
        <p className="font-bold text-2xl">Udemy</p>
        <p className="text-gray-400">category</p>
        <div>
          {/* <span>
              <FaSearch />
            </span> */}
          <input
            type="search"
            placeholder="search for anything"
            className="border border-black p-3 w-[830px] rounded-[100px] focus:outline-none"
          />
        </div>
      </div>

      <div className="col-span-3 flex justify-center items-center gap-x-3 ">
        <p>udemy bunesiness</p>
        <p>teach on udemy</p>
        <p>
          <span className="text-2xl">
            <MdOutlineShoppingCart />
          </span>
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
  );
};

export default Toolbar;

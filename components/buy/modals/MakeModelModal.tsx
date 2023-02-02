import Image from "next/image";
import { initialMakeArray } from "@/libs/constants";

const makeModelModal = () => {
  return (
    <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      <div className="w-full px-6 pb-8 space-y-4">
        <div className="text-left">
          <label className="form-label inline-block text-lg text-[#333]">
            Make
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search make"
          />
        </div>
        <div className="h-[162px] whitespace-nowrap overflow-auto scrollbar-hide text-left">
          {initialMakeArray.map((item: any, index: number) => {
            return (
              <div className="flex justify-between">
                <div className="text-lg text-[#333] py-2">{item}</div>
                <Image
                  width={6}
                  height={12}
                  src="assets/right.svg"
                  alt="right"
                />
              </div>
            );
          })}
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between px-4 pt-6">
        <button className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded">
          Clear
        </button>
        <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};

export default makeModelModal;

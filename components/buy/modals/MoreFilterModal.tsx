import { useEffect, useState } from "react";
import Image from "next/image";
import { fuelType } from "@/libs/constants";

type Props = {
  setIsMoreFilterModal: Function;
};

const MoreFilterModal = ({ setIsMoreFilterModal }: Props) => {
  return (
    <div className="w-full max-h-[753px] justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="w-[358px] mx-auto opacity-100 bg-white text-[#333] border-1 border-2-gray-400 shadow-md rounded-xl py-4 mt-20">
        <div className="flex justify-between items-center py-3 px-8">
          <Image width={134} height={24} src="assets/logo.svg" alt="logo" />
          <svg
            fill="#00b3de"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="15px"
            height="15px"
            viewBox="0 0 92.13 92.13"
            className="cursor-pointer"
            onClick={() => {
              setIsMoreFilterModal(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M2.141,89.13c1.425,1.429,3.299,2.142,5.167,2.142c1.869,0,3.742-0.713,5.167-2.142l33.591-33.592L79.657,89.13 c1.426,1.429,3.299,2.142,5.167,2.142c1.867,0,3.74-0.713,5.167-2.142c2.854-2.854,2.854-7.48,0-10.334L56.398,45.205 l31.869-31.869c2.855-2.853,2.855-7.481,0-10.334c-2.853-2.855-7.479-2.855-10.334,0L46.065,34.87L14.198,3.001 c-2.854-2.855-7.481-2.855-10.333,0c-2.855,2.853-2.855,7.481,0,10.334l31.868,31.869L2.143,78.795 C-0.714,81.648-0.714,86.274,2.141,89.13z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
        <div className="text-lg py-3 px-8">More filters</div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Trim</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Exterior color</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Interior color</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Fuel type</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            {fuelType.map((item: any, index: number) => {
              return (
                <option value={item.type}>
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  />
                  <span>{item.type}</span>
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Transmission</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Drive type</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-base">Cylinders</div>
          <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer">
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
          </select>
        </div>
        <hr className="w-full mt-4" />
        <div className="flex justify-between px-4 pt-4">
          <button className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded">
            Clear
          </button>
          <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreFilterModal;

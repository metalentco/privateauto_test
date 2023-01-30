import { useEffect, useState } from "react";
import Image from "next/image";

const Filter = () => {
  const [isVehicleModal, setIsVehicleModal] = useState<Boolean>(false);
  const [isBodyTypeModal, setIsBodyTypeModal] = useState<Boolean>(false);

  const initalCarsArray = [
    {
      type: "SUV",
      img: "suv.svg",
      width: 70,
      height: 28,
      isSelected: false,
    },
    {
      type: "Sedan",
      img: "sedan.svg",
      width: 62,
      height: 21,
      isSelected: false,
    },
    {
      type: "Truck",
      img: "truck.svg",
      width: 72,
      height: 28,
      isSelected: false,
    },
    {
      type: "Hatchback",
      img: "hatchback.svg",
      width: 56,
      height: 21,
      isSelected: false,
    },
    {
      type: "Coupe",
      img: "coupe.svg",
      width: 62,
      height: 21,
      isSelected: false,
    },
    {
      type: "Convertible",
      img: "convertible.svg",
      width: 62,
      height: 21,
      isSelected: false,
    },
    {
      type: "Minivan",
      img: "minivan.svg",
      width: 62,
      height: 25,
      isSelected: false,
    },
    {
      type: "Wagon",
      img: "wagon.svg",
      width: 62,
      height: 21,
      isSelected: false,
    },
    {
      type: "Van",
      img: "van.svg",
      width: 68,
      height: 29,
      isSelected: false,
    },
  ];

  const [cars, SetCars] = useState<any>(initalCarsArray);

  const vehicleModal = () => {
    setIsVehicleModal(!isVehicleModal);
  };

  const bodyTypeModal = () => {
    setIsBodyTypeModal(!isBodyTypeModal);
  };

  return (
    <div className="w-full">
      <div className="w-full px-[8%] bg-[#f1f5f9]">
        <button
          className="relative flex items-center space-x-4 py-4"
          onClick={() => vehicleModal()}
        >
          <span className="text-[#333] text-lg">All Vehicles</span>
          <Image
            width={10}
            height={6}
            src="/assets/expand_icon.svg"
            alt="null"
          />
          {isVehicleModal ? (
            <div className="absolute top-[50px] left-0 w-[264px] py-2 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg z-10">
              <button
                type="button"
                className="w-[256px] h-[56px] text-left px-4 hover:bg-[#e9ecef]"
              >
                All Vehicles
              </button>
              <button
                type="button"
                className="w-[256px] h-[56px] text-left px-4 hover:bg-[#e9ecef]"
              >
                Auto
              </button>
              <button
                type="button"
                className="w-[256px] h-[56px] text-left px-4 hover:bg-[#e9ecef]"
              >
                ATV/OHV
              </button>
              <button
                type="button"
                className="w-[256px] h-[56px] text-left px-4 hover:bg-[#e9ecef]"
              >
                Motorcycle
              </button>
              <button
                type="button"
                className="w-[256px] h-[56px] flex items-center text-left text-slate-300 px-4"
                disabled
              >
                RV&nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  width={90}
                  height={20}
                  src="/assets/comingSoon.svg"
                  alt="comingSoon"
                />
              </button>
              <button
                type="button"
                className="w-[256px] h-[56px] flex items-center text-left text-slate-300 px-4"
                disabled
              >
                Boat&nbsp;&nbsp;&nbsp;&nbsp;
                <Image
                  width={90}
                  height={20}
                  src="/assets/comingSoon.svg"
                  alt="comingSoon"
                />
              </button>
            </div>
          ) : null}
        </button>
        <input
          className="bg-[url('/assets/search.svg')] bg-no-repeat bg-[center_left_0.5rem] border border-[#333] rounded-full w-full py-2 px-8 text-[#2e3b54] leading-tight focus:border-sky-400 focus:outline-none"
          id="search"
          type="text"
          placeholder="Search..."
        />
        <div className="flex space-x-4 py-4">
          <button className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded">
            <span className="text-slate-400">Make and Model</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          <button
            className="relative bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded z-0"
            onClick={() => bodyTypeModal()}
          >
            <span className="text-slate-400">Body Type</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
            {isBodyTypeModal ? (
              <div className="absolute top-[40px] left-0 w-[264px] py-2 bg-white text-base text-[#212529] border-1 shadow-2xl rounded-lg">
                {cars.map((car: any, index: number) => {
                  return (
                    <div>
                      <Image
                        src={`/assets/car-icons/${car.img}`}
                        width={car.width}
                        height={car.height}
                        alt={car.type}
                        key={index}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </button>
          <button className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded">
            <span className="text-slate-400">Year</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          <button className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded">
            <span className="text-slate-400">Miles</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          <button className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded">
            <span className="text-slate-400">More Filters</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          <button className="flex items-center space-x-4 py-2">
            <span className="text-[#063829] text-sm">Clear All</span>
          </button>
        </div>
      </div>
      <div className="w-full px-[8%] flex justify-between bg-white ">
        <button className="flex items-center text-sm font-medium space-x-4 py-4">
          <span className="text-slate-400">Location:</span>
          <span>All Locations</span>
          <Image
            width={10}
            height={6}
            src="/assets/expand_more.svg"
            alt="null"
          />
        </button>
        <button className="flex items-center text-sm font-medium space-x-4 py-4">
          <span className="text-slate-400">Sort by:</span>
          <span>Newest</span>
          <Image
            width={10}
            height={6}
            src="/assets/expand_more.svg"
            alt="null"
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;

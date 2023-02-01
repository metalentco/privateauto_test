import { useEffect, useState } from "react";
import Image from "next/image";
import MultiRangeSlider from "../multiRangeSlider/multiRangeSlider";

const Filter = () => {
  const [isVehicleModal, setIsVehicleModal] = useState<Boolean>(false);
  const [isMakeModelModal, setIsMakeModelModal] = useState<Boolean>(false);
  const [isBodyTypeModal, setIsBodyTypeModal] = useState<Boolean>(false);
  const [isYearModal, setIsYearModal] = useState<Boolean>(false);
  const [isMilesModal, setIsMilesModal] = useState<Boolean>(false);
  const [isLocationModal, setIsLocationModal] = useState<Boolean>(false);
  const [isSortModal, setIsSortModal] = useState<Boolean>(false);
  const [isMoreFilterModal, setIsMoreFilterModal] = useState<Boolean>(false);
  const [minYear, setMinYear] = useState<number>(1910);
  const [maxYear, setMaxYear] = useState<number>(2022);
  const [minMiles, setMinMiles] = useState<number>(0);
  const [maxMiles, setMaxMiles] = useState<number>(300000);
  const [minYearInput, setMinYearInput] = useState<number>(1910);
  const [maxYearInput, setMaxYearInput] = useState<number>(2022);
  const [minMilesInput, setMinMilesInput] = useState<number>(0);
  const [maxMilesInput, setMaxMilesInput] = useState<number>(300000);

  useEffect(() => {
    setMinYearInput(minYear);
    setMaxYearInput(maxYear);
  }, [minYear, maxYear]);

  useEffect(() => {
    setMinMilesInput(minMiles);
    setMaxMilesInput(maxMiles);
  }, [minMiles, maxMiles]);

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

  const initialMakeArray = [
    "Acura",
    "Alfa Romeo",
    "Audi",
    "BMW",
    "Buick",
    "Cadillac",
  ];

  const sortArray = [
    "Newest inventory",
    "Highest price",
    "Lowest price",
    "Lowest mileage",
    "Newest year",
  ];

  const initModal = () => {
    setIsVehicleModal(false);
    setIsMakeModelModal(false);
    setIsBodyTypeModal(false);
    setIsYearModal(false);
    setIsMilesModal(false);
    setIsLocationModal(false);
    setIsSortModal(false);
    setIsMoreFilterModal(false);
  };

  const vehicleModal = () => {
    initModal();
    setIsVehicleModal(!isVehicleModal);
  };

  const makeModelModal = () => {
    initModal();
    setIsMakeModelModal(!isMakeModelModal);
  };

  const bodyTypeModal = () => {
    initModal();
    setIsBodyTypeModal(!isBodyTypeModal);
  };

  const yearModal = () => {
    initModal();
    setIsYearModal(!isYearModal);
  };

  const milesModal = () => {
    initModal();
    setIsMilesModal(!isMilesModal);
  };

  const locationModal = () => {
    initModal();
    setIsLocationModal(!isLocationModal);
  };

  const sortModal = () => {
    initModal();
    setIsSortModal(!isSortModal);
  };

  const MoreFilterModal = () => {
    initModal();
    setIsMoreFilterModal(!isMoreFilterModal);
  };

  const setScrollHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  const carHandle = (type: string, selected: Boolean) => {
    let _cars = cars.slice();
    _cars.map((item: any, index: number) => {
      if (item.type == type) {
        item.isSelected = selected;
      }
    });
    SetCars(_cars);
  };

  return (
    <div className="w-full">
      <div className="w-full px-[8%] bg-[#f1f5f9]">
        <div className="relative z-20">
          <button
            className="flex items-center space-x-4 py-4"
            onClick={() => vehicleModal()}
          >
            <span className="text-[#333] text-lg">All Vehicles</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_icon.svg"
              alt="null"
            />
          </button>
          {isVehicleModal ? (
            <div className="absolute top-[50px] left-[0px] w-[264px] py-2 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
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
        </div>
        <input
          className="bg-[url('/assets/search.svg')] bg-no-repeat bg-[center_left_0.5rem] border border-[#333] rounded-full w-full py-2 px-8 text-[#2e3b54] leading-tight focus:border-sky-400 focus:outline-none"
          id="search"
          type="text"
          placeholder="Search..."
        />
        <div className="flex space-x-4 py-4">
          <div className="relative z-10">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => makeModelModal()}
            >
              <span className="text-slate-400">Make and Model</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isMakeModelModal ? (
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
                  <div className="h-[162px] overflow-scroll overflow-x-hidden text-left">
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
            ) : null}
          </div>
          <div className="relative z-10">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => bodyTypeModal()}
            >
              <span className="text-slate-400">Body Type</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isBodyTypeModal ? (
              <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
                <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
                  Body type
                </div>
                <div className="grid grid-cols-3 gap-x-10 px-6">
                  {cars.map((car: any, index: number) => {
                    return (
                      <div>
                        {car.isSelected ? (
                          <div
                            className="bg-[#e2e8f0] py-1 mb-4 rounded"
                            key={index}
                            onClick={() => {
                              carHandle(car.type, false);
                            }}
                          >
                            <div className="w-full flex justify-center">
                              <Image
                                src={`/assets/car-icons/${car.img}`}
                                className=""
                                width={70}
                                height={28}
                                alt={car.type}
                                key={index}
                              />
                            </div>
                            <div className="text-xs font-semibold text-center cursor-default">
                              {car.type}
                            </div>
                          </div>
                        ) : (
                          <div
                            className="py-1 mb-4"
                            key={index}
                            onClick={() => {
                              carHandle(car.type, true);
                            }}
                          >
                            <div className="w-full flex justify-center">
                              <Image
                                src={`/assets/car-icons/${car.img}`}
                                className=""
                                width={70}
                                height={28}
                                alt={car.type}
                                key={index}
                              />
                            </div>
                            <div className="text-xs font-semibold text-center cursor-default">
                              {car.type}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
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
            ) : null}
          </div>
          <div className="relative">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => yearModal()}
            >
              <span className="text-slate-400">Year</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isYearModal ? (
              <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
                <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
                  Year
                </div>
                <MultiRangeSlider
                  min={1910}
                  max={2022}
                  minValue={minYearInput}
                  maxValue={maxYearInput}
                  step={1}
                  onChange={({ min, max }: { min: number; max: number }) => {
                    setMinYear(min);
                    setMaxYear(max);
                  }}
                />
                <div className="w-full px-6 grid grid-cols-2 gap-x-4 py-8">
                  <div className="text-left">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Min Year
                    </label>
                    <input
                      type="number"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      min="1910"
                      max="2022"
                      value={minYearInput}
                      onBlur={() => {
                        if (minYearInput < 1910) {
                          setMinYearInput(1910);
                        } else if (minYearInput > maxYearInput) {
                          setMinYearInput(maxYearInput);
                        }
                      }}
                      onChange={(e: any) => {
                        setMinYearInput(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Max Year
                    </label>
                    <input
                      type="number"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      min="1910"
                      max="2022"
                      value={maxYearInput}
                      onBlur={() => {
                        if (maxYearInput > 2022) {
                          setMaxYearInput(2022);
                        } else if (minYearInput > maxYearInput) {
                          setMaxYearInput(minYearInput);
                        }
                      }}
                      onChange={(e: any) => {
                        setMaxYearInput(e.target.value);
                      }}
                    />
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
            ) : null}
          </div>
          <div className="relative">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => milesModal()}
            >
              <span className="text-slate-400">Miles</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isMilesModal ? (
              <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
                <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
                  Miles
                </div>
                <MultiRangeSlider
                  min={0}
                  max={300000}
                  minValue={minMilesInput}
                  maxValue={maxMilesInput}
                  step={5000}
                  onChange={({ min, max }: { min: number; max: number }) => {
                    setMinMiles(min);
                    setMaxMiles(max);
                  }}
                />
                <div className="w-full px-6 grid grid-cols-2 gap-x-4 py-8">
                  <div className="text-left">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Min Miles
                    </label>
                    <input
                      type="number"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      min="0"
                      max="300000"
                      step="5000"
                      value={minMilesInput}
                      onBlur={() => {
                        if (minMilesInput < 0) {
                          setMinMilesInput(0);
                        } else if (minMilesInput > maxMilesInput) {
                          setMinMilesInput(maxMilesInput);
                        } else if (minMilesInput % 5000 < 2500) {
                          setMinMilesInput(
                            minMilesInput - (minMilesInput % 5000)
                          );
                        } else if (minMilesInput % 5000 > 2499) {
                          setMinMilesInput(
                            minMilesInput - (minMilesInput % 5000) + 5000
                          );
                        }
                      }}
                      onChange={(e: any) => {
                        setMinMilesInput(e.target.value);
                      }}
                    />
                  </div>
                  <div className="text-left">
                    <label className="form-label inline-block mb-2 text-gray-700">
                      Max Miles
                    </label>
                    <input
                      type="number"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      min="0"
                      max="300000"
                      step="5000"
                      placeholder="300000"
                      value={maxMilesInput}
                      onBlur={() => {
                        if (maxMilesInput > 300000) {
                          setMaxMilesInput(300000);
                        } else if (minMilesInput > maxMilesInput) {
                          setMaxMilesInput(minMilesInput);
                        } else if (maxMilesInput % 5000 < 2500) {
                          setMaxMilesInput(
                            maxMilesInput - (maxMilesInput % 5000)
                          );
                        } else if (maxMilesInput % 5000 > 2499) {
                          setMaxMilesInput(
                            maxMilesInput - (maxMilesInput % 5000) + 5000
                          );
                        }
                      }}
                      onChange={(e: any) => {
                        setMaxMilesInput(e.target.value);
                      }}
                    />
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
            ) : null}
          </div>
          <div className="relative">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => {
                MoreFilterModal();
                setScrollHidden();
              }}
            >
              <span className="text-slate-400">More Filters</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isMoreFilterModal ? (
              <div className="w-full max-h-[753px] justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="w-[358px] mx-auto opacity-100 bg-white text-[#333] border-1 border-2-gray-400 shadow-md rounded-xl py-4 mt-20">
                  <div className="flex justify-between items-center py-3 px-8">
                    <Image
                      width={134}
                      height={24}
                      src="assets/logo.svg"
                      alt="logo"
                    />
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
                      <option value={10}>10 miles</option>
                      <option value={25}>25 miles</option>
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
            ) : null}
          </div>
          <button className="flex items-center space-x-4 py-2">
            <span className="text-[#063829] text-sm">Clear All</span>
          </button>
        </div>
      </div>
      <div className="w-full px-[8%] flex justify-between bg-white ">
        <div className="relative">
          <button
            className="flex items-center text-sm font-medium space-x-4 py-4"
            onClick={() => locationModal()}
          >
            <span className="text-slate-400">Location:</span>
            <span>All Locations</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          {isLocationModal ? (
            <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
              <div className="w-full px-6 pb-8 space-y-4">
                <div className="text-left">
                  <label className="form-label inline-block text-lg text-[#333]">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter a location"
                  />
                </div>
                <div className="text-left">
                  <label className="form-label inline-block text-lg text-[#333]">
                    Mile radius
                  </label>
                  <select
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
                    defaultValue={50}
                  >
                    <option value={10}>10 miles</option>
                    <option value={25}>25 miles</option>
                    <option value={50}>50 miles</option>
                    <option value={100}>100 miles</option>
                    <option value={200}>200+ miles</option>
                  </select>
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
          ) : null}
        </div>
        <div className="relative">
          <button
            className="flex items-center text-sm font-medium space-x-4 py-4"
            onClick={() => sortModal()}
          >
            <span className="text-slate-400">Sort by:</span>
            <span>Newest</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          {isSortModal ? (
            <div className="absolute top-[40px] left-[0px] w-[172px] py-6 bg-white text-base text-[#333] border-2 shadow-2xl rounded-lg">
              {sortArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer px-4 py-1 hover:bg-[#e9ecef]"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Filter;

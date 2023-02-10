import { useState } from 'react';
import Image from 'next/image';
import { MoreFilter } from '@/interfaces/MoreFilter';

type Props = {
  moreFilterData: any;
  moreFiltersArr: any;
  setMoreFiltersArr: Function;
  setIsMoreFilterModal: Function;
};

const MoreFilterModal = ({
  moreFilterData,
  moreFiltersArr,
  setMoreFiltersArr,
  setIsMoreFilterModal,
}: Props) => {
  const [isTrim, setIsTrim] = useState<Boolean>(false);
  const [isExteriorColor, setIsExteriorColor] = useState<Boolean>(false);
  const [isInteriorColor, setIsInteriorColor] = useState<Boolean>(false);
  const [isFuelType, setIsFuelType] = useState<Boolean>(false);
  const [isTransmission, setIsTransmission] = useState<Boolean>(false);
  const [isDriveType, setIsDriveType] = useState<Boolean>(false);
  const [isCyclinders, setIsCyclinders] = useState<Boolean>(false);

  const [trimArr, setTrimArr] = useState<Array<string>>(moreFiltersArr.trim);
  const [exteriorColorArr, setExteriorColorArr] = useState<Array<string>>(
    moreFiltersArr.exteriorColor
  );
  const [interiorColorArr, setInteriorColorArr] = useState<Array<string>>(
    moreFiltersArr.interiorColor
  );
  const [fuelTypeArr, setFuelTypeArr] = useState<Array<string>>(
    moreFiltersArr.fuelType
  );
  const [transmissionArr, setTransmissionArr] = useState<Array<string>>(
    moreFiltersArr.transmission
  );
  const [driveTypeArr, setDriveTypeArr] = useState<Array<string>>(
    moreFiltersArr.driveType
  );
  const [cylindersArr, setCylindersArr] = useState<Array<string>>(
    moreFiltersArr.cylinders
  );

  const init = () => {
    setIsTrim(false);
    setIsExteriorColor(false);
    setIsInteriorColor(false);
    setIsFuelType(false);
    setIsTransmission(false);
    setIsDriveType(false);
    setIsCyclinders(false);
  };

  const getResetArr = (arr: Array<string>, item: string) => {
    if (arr.includes(item)) {
      const index = arr.indexOf(item);
      if (index > -1) {
        arr.splice(index, 1);
      }
    } else {
      arr.push(item);
    }
    return arr;
  };

  const clickItem = (type: string, item: string) => {
    if (type == 'trim') {
      const trims = trimArr.slice();
      setTrimArr(getResetArr(trims, item));
    } else if (type == 'exterior') {
      const exteriors = exteriorColorArr.slice();
      setExteriorColorArr(getResetArr(exteriors, item));
    } else if (type == 'interior') {
      const interiors = interiorColorArr.slice();
      setInteriorColorArr(getResetArr(interiors, item));
    } else if (type == 'fuel') {
      const fuels = fuelTypeArr.slice();
      setFuelTypeArr(getResetArr(fuels, item));
    } else if (type == 'transmission') {
      const transmissions = transmissionArr.slice();
      setTransmissionArr(getResetArr(transmissions, item));
    } else if (type == 'drive') {
      const drives = driveTypeArr.slice();
      setDriveTypeArr(getResetArr(drives, item));
    } else {
      const cylinders = cylindersArr.slice();
      setCylindersArr(getResetArr(cylinders, item));
    }
  };

  const apply = () => {
    setIsMoreFilterModal(false);
    document.body.style.overflowY = 'scroll';
    let data: MoreFilter = {
      trim: [],
      exteriorColor: [],
      interiorColor: [],
      fuelType: [],
      transmission: [],
      driveType: [],
      cylinders: [],
    };
    data.trim = trimArr;
    data.exteriorColor = exteriorColorArr;
    data.interiorColor = interiorColorArr;
    data.fuelType = fuelTypeArr;
    data.transmission = transmissionArr;
    data.driveType = driveTypeArr;
    data.cylinders = cylindersArr;
    setMoreFiltersArr(data);
  };

  const clear = () => {
    setIsMoreFilterModal(false);
    document.body.style.overflowY = 'scroll';
    let data: MoreFilter = {
      trim: [],
      exteriorColor: [],
      interiorColor: [],
      fuelType: [],
      transmission: [],
      driveType: [],
      cylinders: [],
    };
    data.trim = [];
    data.exteriorColor = [];
    data.interiorColor = [];
    data.fuelType = [];
    data.transmission = [];
    data.driveType = [];
    data.cylinders = [];
    setMoreFiltersArr(data);
  };

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
              document.body.style.overflowY = 'scroll';
            }}
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M2.141,89.13c1.425,1.429,3.299,2.142,5.167,2.142c1.869,0,3.742-0.713,5.167-2.142l33.591-33.592L79.657,89.13 c1.426,1.429,3.299,2.142,5.167,2.142c1.867,0,3.74-0.713,5.167-2.142c2.854-2.854,2.854-7.48,0-10.334L56.398,45.205 l31.869-31.869c2.855-2.853,2.855-7.481,0-10.334c-2.853-2.855-7.479-2.855-10.334,0L46.065,34.87L14.198,3.001 c-2.854-2.855-7.481-2.855-10.333,0c-2.855,2.853-2.855,7.481,0,10.334l31.868,31.869L2.143,78.795 C-0.714,81.648-0.714,86.274,2.141,89.13z"></path>{' '}
                </g>{' '}
              </g>{' '}
            </g>
          </svg>
        </div>
        <div className="text-base font-medium py-3 px-8">More filters</div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Trim</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsTrim(!isTrim);
              }}
            >
              <div className="flex justify-between">
                <span>
                  {trimArr[0] != undefined ? trimArr[0].slice(0, 35) : ''}
                </span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isTrim && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[140px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.trim
                  .sort((a: string, b: string) => a.localeCompare(b))
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('trim', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={trimArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Exterior color</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsExteriorColor(!isExteriorColor);
              }}
            >
              <div className="flex justify-between">
                <span>{exteriorColorArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isExteriorColor && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[140px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.exteriorColor
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('exterior', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={exteriorColorArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Interior color</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsInteriorColor(!isInteriorColor);
              }}
            >
              <div className="flex justify-between">
                <span>{interiorColorArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isInteriorColor && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[140px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.interiorColor
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('interior', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={interiorColorArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Fuel type</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsFuelType(!isFuelType);
              }}
            >
              <div className="flex justify-between">
                <span>{fuelTypeArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isFuelType && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[120px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.fuel
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('fuel', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={fuelTypeArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Transmission</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsTransmission(!isTransmission);
              }}
            >
              <div className="flex justify-between">
                <span>{transmissionArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isTransmission && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[120px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.transmission
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('transmission', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={transmissionArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Drive type</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsDriveType(!isDriveType);
              }}
            >
              <div className="flex justify-between">
                <span>{driveTypeArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isDriveType && (
              <div className="absolute top-[35px] left-0 w-[290px] h-[120px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide z-20">
                {moreFilterData.driveType
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('drive', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={driveTypeArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-8">
          <div className="text-sm font-medium">Cylinders</div>
          <div className="relative">
            <button
              className="w-[290px] h-[35px] bg-white text-sm font-medium py-2 px-4 border border-[#808080] rounded"
              onClick={() => {
                init();
                setIsCyclinders(!isCyclinders);
              }}
            >
              <div className="flex justify-between">
                <span>{cylindersArr[0]}</span>
                <Image
                  width={10}
                  height={6}
                  className="float-right"
                  src="/assets/expand_more.svg"
                  alt="expand"
                />
              </div>
            </button>
            {isCyclinders && (
              <div className="absolute top-[-120px] left-0 w-[290px] h-[120px] bg-white border border-[#808080] rounded whitespace-nowrap overflow-auto scrollbar-hide shadow-lg z-20">
                {moreFilterData.cylinders
                  .sort()
                  .map((item: string, index: number) => {
                    return (
                      <div
                        className="w-full flex space-x-1 text-sm font-medium text-[#212529] px-4 py-2 cursor-pointer"
                        key={index}
                        onClick={() => clickItem('cylinders', item)}
                      >
                        <input
                          type="checkbox"
                          className="cursor-pointer"
                          checked={cylindersArr.includes(item)}
                          onChange={() => {}}
                        />
                        <div>{item}</div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
        <hr className="w-full mt-4" />
        <div className="flex justify-between px-4 pt-4">
          <button
            className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded"
            onClick={() => clear()}
          >
            Clear
          </button>
          <button
            className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer"
            onClick={() => apply()}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreFilterModal;

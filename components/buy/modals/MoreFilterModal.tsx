import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  setIsMoreFilterModal: Function;
  moreFilterData: any;
};

const MoreFilterModal = ({ setIsMoreFilterModal, moreFilterData }: Props) => {
  const [isTrim, setIsTrim] = useState<Boolean>(false);
  const [isExteriorColor, setIsExteriorColor] = useState<Boolean>(false);
  const [isInteriorColor, setIsInteriorColor] = useState<Boolean>(false);
  const [isFuelType, setIsFuelType] = useState<Boolean>(false);
  const [isTransmission, setIsTransmission] = useState<Boolean>(false);
  const [isDriveType, setIsDriveType] = useState<Boolean>(false);
  const [isCyclinders, setIsCyclinders] = useState<Boolean>(false);

  const init = () => {
    setIsTrim(false);
    setIsExteriorColor(false);
    setIsInteriorColor(false);
    setIsFuelType(false);
    setIsTransmission(false);
    setIsDriveType(false);
    setIsCyclinders(false);
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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
                <span>{"firstTrim"}</span>
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
                      >
                        <input type="checkbox" />
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

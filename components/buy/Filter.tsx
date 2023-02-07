import { useEffect, useState } from "react";
import Image from "next/image";
import VehicleTypeModal from "@/components/buy/modals/VehicleTypeModal";
import MakeModelModal from "@/components/buy/modals/MakeModelModal";
import CarTypeModal from "@/components/buy/modals/CarTypeModal";
import YearModal from "@/components/buy/modals/YearModal";
import MilesModal from "@/components/buy/modals/MilesModal";
import MoreFilterModal from "@/components/buy/modals/MoreFilterModal";
import LocationModal from "@/components/buy/modals/LocationModal";
import SortModal from "@/components/buy/modals/SortModal";

type Props = {
  vehicleType: string;
  setVehicleType: Function;
  searchKey: string;
  setSearchKey: Function;
  make: string;
  setMake: Function;
  models: Array<string>;
  setModels: Function;
  bodyType: Array<string>;
  setBodyType: Function;
  minYear: number;
  setMinYear: Function;
  maxYear: number;
  setMaxYear: Function;
  minMiles: number;
  setMinMiles: Function;
  maxMiles: number;
  setMaxMiles: Function;
  moreFiltersArr: any;
  setMoreFiltersArr: Function;
  location: string;
  setLocation: Function;
  radius: number;
  setRadius: Function;
  sort: string;
  SetSort: Function;
  makeData: Array<string>;
  moreFilterData: any;
};

const Filter = ({
  vehicleType,
  setVehicleType,
  searchKey,
  setSearchKey,
  make,
  setMake,
  models,
  setModels,
  bodyType,
  setBodyType,
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  minMiles,
  setMinMiles,
  maxMiles,
  setMaxMiles,
  moreFiltersArr,
  setMoreFiltersArr,
  location,
  setLocation,
  radius,
  setRadius,
  sort,
  SetSort,
  makeData,
  moreFilterData,
}: Props) => {
  const [isVehicleModal, setIsVehicleModal] = useState<Boolean>(false);
  const [isMakeModelModal, setIsMakeModelModal] = useState<Boolean>(false);
  const [isCarTypeModal, setIsCarTypeModal] = useState<Boolean>(false);
  const [isYearModal, setIsYearModal] = useState<Boolean>(false);
  const [isMilesModal, setIsMilesModal] = useState<Boolean>(false);
  const [isMoreFilterModal, setIsMoreFilterModal] = useState<Boolean>(false);
  const [isLocationModal, setIsLocationModal] = useState<Boolean>(false);
  const [isSortModal, setIsSortModal] = useState<Boolean>(false);

  const initModal = () => {
    setIsVehicleModal(false);
    setIsMakeModelModal(false);
    setIsCarTypeModal(false);
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

  const carTypeModal = () => {
    initModal();
    setIsCarTypeModal(!isCarTypeModal);
  };

  const yearModal = () => {
    initModal();
    setIsYearModal(!isYearModal);
  };

  const milesModal = () => {
    initModal();
    setIsMilesModal(!isMilesModal);
  };

  const moreFilterModal = () => {
    initModal();
    setIsMoreFilterModal(!isMoreFilterModal);
  };

  const locationModal = () => {
    initModal();
    setIsLocationModal(!isLocationModal);
  };

  const sortModal = () => {
    initModal();
    setIsSortModal(!isSortModal);
  };

  const setScrollHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="w-full">
      <div className="w-full px-[8%] bg-[#f1f5f9]">
        <div className="relative z-20">
          <button
            className="flex items-center space-x-4 py-4"
            onClick={() => vehicleModal()}
          >
            <span className="text-base text-[#333] font-medium">
              {vehicleType}
            </span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_icon.svg"
              alt="null"
            />
          </button>
          {isVehicleModal && (
            <VehicleTypeModal
              setVehicleType={setVehicleType}
              setIsVehicleModal={setIsVehicleModal}
            />
          )}
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
            {isMakeModelModal && <MakeModelModal makeData={makeData} />}
          </div>
          <div className="relative z-10">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => carTypeModal()}
            >
              <span className="text-slate-400">Body Type</span>
              <Image
                width={10}
                height={6}
                src="/assets/expand_more.svg"
                alt="null"
              />
            </button>
            {isCarTypeModal && <CarTypeModal />}
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
            {isYearModal && <YearModal />}
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
            {isMilesModal && <MilesModal />}
          </div>
          <div className="relative">
            <button
              className="bg-white border border-slate-400 flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded"
              onClick={() => {
                moreFilterModal();
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
            {isMoreFilterModal && (
              <MoreFilterModal
                setIsMoreFilterModal={setIsMoreFilterModal}
                moreFilterData={moreFilterData}
              />
            )}
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
          {isLocationModal && <LocationModal />}
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
          {isSortModal && <SortModal />}
        </div>
      </div>
    </div>
  );
};

export default Filter;

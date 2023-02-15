import { useState } from "react";
import Image from "next/image";
import VehicleTypeModal from "@/components/buy/modals/VehicleTypeModal";
import MakeModelModal from "@/components/buy/modals/MakeModelModal";
import CarTypeModal from "@/components/buy/modals/CarTypeModal";
import YearModal from "@/components/buy/modals/YearModal";
import MilesModal from "@/components/buy/modals/MilesModal";
import MoreFilterModal from "@/components/buy/modals/MoreFilterModal";
import LocationModal from "@/components/buy/modals/LocationModal";
import SortModal from "@/components/buy/modals/SortModal";
import Search from "@/components/buy/Search";

type Props = {
  vehicleType: string;
  setVehicleType: Function;
  searchKey: string;
  setSearchKey: Function;
  make: string;
  setMake: Function;
  models: Array<string>;
  setModels: Function;
  bodyType: any;
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
  setLat: Function;
  setLng: Function;
  radius: number;
  setRadius: Function;
  sort: string;
  setSort: Function;
  makeData: Array<string>;
  moreFilterData: any;
  clearAll: Function;
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
  setLat,
  setLng,
  radius,
  setRadius,
  sort,
  setSort,
  makeData,
  moreFilterData,
  clearAll,
}: Props) => {
  const [isVehicleModal, setIsVehicleModal] = useState<Boolean>(false);
  const [isMakeModelModal, setIsMakeModelModal] = useState<Boolean>(false);
  const [isCarTypeModal, setIsCarTypeModal] = useState<Boolean>(false);
  const [isYearModal, setIsYearModal] = useState<Boolean>(false);
  const [isMilesModal, setIsMilesModal] = useState<Boolean>(false);
  const [isMoreFilterModal, setIsMoreFilterModal] = useState<Boolean>(false);
  const [isLocationModal, setIsLocationModal] = useState<Boolean>(false);
  const [isSortModal, setIsSortModal] = useState<Boolean>(false);
  const [search, setSearch] = useState<string>(searchKey);

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
      document.body.style.overflowY = "scroll";
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
        <Search
          search={search}
          setSearch={setSearch}
          setSearchKey={setSearchKey}
        />
        <div className="block sm:flex space-x-4 py-4">
          <div className="block vs:flex justify-center space-x-4">
            <div className="flex justify-center space-x-4">
              <div className="relative z-10 py-3">
                <button
                  className={`w-[152px] bg-white border ${
                    make == "" ? "border-slate-400" : "border-[#00b3de]"
                  } flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded`}
                  onClick={() => makeModelModal()}
                >
                  {make == "" ? (
                    <span className="text-slate-400">Make and Model</span>
                  ) : models.length == 0 ? (
                    <span className="text-[#00b3de]">{make}-</span>
                  ) : (
                    <span className="text-[#00b3de]">
                      {make}-{models[0]}
                    </span>
                  )}
                  <Image
                    width={10}
                    height={6}
                    src={`${
                      make == ""
                        ? "/assets/expand_more.svg"
                        : "/assets/expand_more_blue.svg"
                    }`}
                    alt="null"
                  />
                </button>
                {isMakeModelModal && (
                  <MakeModelModal
                    parentMake={make}
                    parentModels={models}
                    setParentMake={setMake}
                    setParentModels={setModels}
                    makeData={makeData}
                    setIsMakeModelModal={setIsMakeModelModal}
                  />
                )}
              </div>
              <div className="relative z-10 py-3">
                <button
                  className={`w-[113px] bg-white border ${
                    bodyType.length ? "border-[#00b3de]" : "border-slate-400"
                  } flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded`}
                  onClick={() => carTypeModal()}
                >
                  {bodyType.length ? (
                    <span className="text-[#00b3de]">{bodyType[0]}</span>
                  ) : (
                    <span className="text-slate-400">Body Type</span>
                  )}
                  <Image
                    width={10}
                    height={6}
                    src={`${
                      bodyType.length
                        ? "/assets/expand_more_blue.svg"
                        : "/assets/expand_more.svg"
                    }`}
                    alt="null"
                  />
                </button>
                {isCarTypeModal && (
                  <CarTypeModal
                    bodyType={bodyType}
                    setBodyType={setBodyType}
                    setIsCarTypeModal={setIsCarTypeModal}
                  />
                )}
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="relative py-3">
                <button
                  className={`bg-white border ${
                    minYear == 1910 && maxYear == 2022
                      ? "border-slate-400"
                      : "border-[#00b3de]"
                  } flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded`}
                  onClick={() => yearModal()}
                >
                  {minYear == 1910 && maxYear == 2022 ? (
                    <span className="text-slate-400">Year</span>
                  ) : (
                    <span className="text-[#00b3de]">
                      {minYear} - {maxYear}
                    </span>
                  )}
                  <Image
                    width={10}
                    height={6}
                    src={`${
                      minYear == 1910 && maxYear == 2022
                        ? "/assets/expand_more.svg"
                        : "/assets/expand_more_blue.svg"
                    }`}
                    alt="null"
                  />
                </button>
                {isYearModal && (
                  <YearModal
                    parentMinYear={minYear}
                    setParentMinYear={setMinYear}
                    parentMaxYear={maxYear}
                    setParentMaxYear={setMaxYear}
                    setIsYearModal={setIsYearModal}
                  />
                )}
              </div>
              <div className="relative py-3">
                <button
                  className={`bg-white border ${
                    minMiles == 0 && maxMiles == 300000
                      ? "border-slate-400"
                      : "border-[#00b3de]"
                  } flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded`}
                  onClick={() => milesModal()}
                >
                  {minMiles == 0 && maxMiles == 300000 ? (
                    <span className="text-slate-400">Miles</span>
                  ) : (
                    <span className="text-[#00b3de]">
                      {minMiles} - {maxMiles}
                    </span>
                  )}
                  <Image
                    width={10}
                    height={6}
                    src={`${
                      minMiles == 0 && maxMiles == 300000
                        ? "/assets/expand_more.svg"
                        : "/assets/expand_more_blue.svg"
                    }`}
                    alt="null"
                  />
                </button>
                {isMilesModal && (
                  <MilesModal
                    parentMinMiles={minMiles}
                    setParentMinMiles={setMinMiles}
                    parentMaxMiles={maxMiles}
                    setParentMaxMiles={setMaxMiles}
                    setIsMilesModal={setIsMilesModal}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="relative py-3">
              <button
                className={`w-[122px] bg-white border ${
                  !moreFiltersArr.trim.length &&
                  !moreFiltersArr.exteriorColor.length &&
                  !moreFiltersArr.interiorColor.length &&
                  !moreFiltersArr.fuelType.length &&
                  !moreFiltersArr.transmission.length &&
                  !moreFiltersArr.driveType.length &&
                  !moreFiltersArr.cylinders.length
                    ? "border-slate-400"
                    : "border-[#00b3de]"
                } flex items-center text-sm font-medium px-2 space-x-4 py-2 rounded`}
                onClick={() => {
                  moreFilterModal();
                  setScrollHidden();
                }}
              >
                <span
                  className={`${
                    !moreFiltersArr.trim.length &&
                    !moreFiltersArr.exteriorColor.length &&
                    !moreFiltersArr.interiorColor.length &&
                    !moreFiltersArr.fuelType.length &&
                    !moreFiltersArr.transmission.length &&
                    !moreFiltersArr.driveType.length &&
                    !moreFiltersArr.cylinders.length
                      ? "text-slate-400"
                      : "text-[#00b3de]"
                  }`}
                >
                  More Filters
                </span>
                <Image
                  width={10}
                  height={6}
                  src={`${
                    !moreFiltersArr.trim.length &&
                    !moreFiltersArr.exteriorColor.length &&
                    !moreFiltersArr.interiorColor.length &&
                    !moreFiltersArr.fuelType.length &&
                    !moreFiltersArr.transmission.length &&
                    !moreFiltersArr.driveType.length &&
                    !moreFiltersArr.cylinders.length
                      ? "/assets/expand_more.svg"
                      : "/assets/expand_more_blue.svg"
                  }`}
                  alt="null"
                />
              </button>
              {isMoreFilterModal && (
                <MoreFilterModal
                  moreFilterData={moreFilterData}
                  moreFiltersArr={moreFiltersArr}
                  setMoreFiltersArr={setMoreFiltersArr}
                  setIsMoreFilterModal={setIsMoreFilterModal}
                />
              )}
            </div>
            <button
              className="flex items-center space-x-4 py-2"
              onClick={() => clearAll()}
            >
              <span className="text-[#063829] text-sm">Clear All</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full px-[2%] vs:px-[8%] flex justify-between bg-white ">
        <div className="relative">
          <button
            className="flex items-center text-sm font-medium space-x-1 vs:space-x-4 py-4"
            onClick={() => locationModal()}
          >
            <span className="text-slate-400">Location:</span>
            {location == "" ? (
              <span className="text-slate-700">All Locations</span>
            ) : (
              <span className="text-slate-700">
                {location.slice(0, location.length - 5)}-{radius}miles
              </span>
            )}
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          {isLocationModal && (
            <LocationModal
              location={location}
              setLocation={setLocation}
              setLat={setLat}
              setLng={setLng}
              radius={radius}
              setRadius={setRadius}
              setIsLocationModal={setIsLocationModal}
            />
          )}
        </div>
        <div className="relative">
          <button
            className="flex items-center text-sm font-medium space-x-1 vs:space-x-4 py-4"
            onClick={() => sortModal()}
          >
            <span className="text-slate-400">Sort by:</span>
            <span>{sort}</span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_more.svg"
              alt="null"
            />
          </button>
          {isSortModal && (
            <SortModal setIsSortModal={setIsSortModal} setSort={setSort} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;

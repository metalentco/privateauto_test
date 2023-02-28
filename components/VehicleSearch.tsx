import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Filter from "@/components/buy/Filter";
import Pagination from "@/components/buy/Pagination";
import API from "@/hooks/useApi";
import { MoreFilter } from "@/interfaces/MoreFilter";
import { initFilters } from "@/libs/constants";

type Props = {
  data: any;
  vehicleListing: any;
};

const VehicleSearch = ({ data, vehicleListing }: Props) => {
  const IMAGE_BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isFirstLoading, setIsFirstLoading] = useState<Boolean>(true);
  const [pageData, setPageData] = useState<any>([]);
  const [pages, setPages] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [makeData, setMakeData] = useState<Array<string>>([]);
  const [moreFilterData, setMoreFilterData] = useState<any>(null);
  const [isHovering, setIsHovered] = useState<Boolean>(false);
  const [hoverNum, setHoverNum] = useState<number>(-1);
  const onMouseEnter = (index: number) => {
    setIsHovered(true);
    setHoverNum(index);
  };
  const onMouseLeave = (index: number) => {
    setIsHovered(false);
    setHoverNum(index);
  };

  const rows = data.DisplayRows != null ? data.DisplayRows : 6;
  const limit = data.MaxListings != null ? data.MaxListings : 0;
  useEffect(() => {
    console.log("Page Loading");
    setIsLoading(false);
    setCurrent(vehicleListing._meta.page);
    imageFormat(vehicleListing);
    setPageData(vehicleListing.data);
    if (limit == 0) {
      setPages(Math.floor(vehicleListing._meta.total / (rows * 4)));
      setTotal(vehicleListing._meta.total);
    } else {
      setPages(Math.floor(limit / (rows * 4)));
      setTotal(limit);
    }
    setIsFirstLoading(false);
  }, []);

  //page states
  const [vehicleType, setVehicleType] = useState<string>(
    data.Filters != null &&
      data.Filters.VehicleType != null &&
      data.Filters.VehicleType != undefined
      ? data.Filters.VehicleType == "Car"
        ? "Auto"
        : data.Filters.VehicleType
      : "All Vehicles"
  );
  const [searchKey, setSearchKey] = useState<string>("");
  const [make, setMake] = useState<string>(
    data.Filters != null &&
      data.Filters.Make != null &&
      data.Filters.Make != undefined
      ? data.Filters.Make
      : ""
  );
  const [models, setModels] = useState<Array<string>>(
    data.Filters != null &&
      data.Filters.Model != null &&
      data.Filters.Model != undefined
      ? data.Filters.Model.split()
      : []
  );
  const [bodyType, setBodyType] = useState<Array<string>>(
    data.Filters != null &&
      data.Filters.BodyType != null &&
      data.Filters.BodyType != undefined
      ? data.Filters.BodyType.split()
      : []
  );
  const [minYear, setMinYear] = useState<number>(
    data.Filters != null &&
      data.Filters.YearMin != null &&
      data.Filters.YearMin != undefined
      ? data.Filters.YearMin
      : 1910
  );
  const [maxYear, setMaxYear] = useState<number>(
    data.Filters != null &&
      data.Filters.YearMax != null &&
      data.Filters.YearMax != undefined
      ? data.Filters.YearMax
      : 2022
  );
  const [minMiles, setMinMiles] = useState<number>(
    data.Filters != null &&
      data.Filters.MilesMin != null &&
      data.Filters.MilesMin != undefined
      ? data.Filters.MilesMin
      : 0
  );
  const [maxMiles, setMaxMiles] = useState<number>(
    data.Filters != null &&
      data.Filters.MilesMax != null &&
      data.Filters.MilesMax != undefined
      ? data.Filters.MilesMax
      : 300000
  );
  const [moreFiltersArr, setMoreFiltersArr] = useState<MoreFilter>(initFilters);
  const [location, setLocation] = useState<string>(
    data.Filters != null &&
      data.Filters.Location != null &&
      data.Filters.Location != undefined
      ? data.Filters.Location + ", USA"
      : ""
  );
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [radius, setRadius] = useState<number>(50);
  const [sort, setSort] = useState<string>("Newest");

  useEffect(() => {
    const { getInitMakeData, getCarDetailsFilter } = API();
    const getMakeData = async () => {
      let data = await getInitMakeData();
      const makeArr = [];
      const resultData = data.results;
      for (var i = 0; i < resultData.commonMakes.length; i++) {
        makeArr.push(resultData.commonMakes[i]);
      }
      for (var i = 0; i < resultData.remainingMakes.length; i++) {
        makeArr.push(resultData.remainingMakes[i]);
      }
      setMakeData(makeArr);
    };

    const getMoreFilterData = async () => {
      let data = await getCarDetailsFilter();
      setMoreFilterData(data.results);
    };

    const initPage = () => {
      getMakeData();
      getMoreFilterData();
    };
    initPage();
  }, []);

  useEffect(() => {
    const { getPageData } = API();
    const getData = async () => {
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: "smooth",
      // });
      setIsLoading(true);
      const data = await getPageData(
        rows,
        limit,
        current,
        vehicleType,
        searchKey,
        make,
        models,
        bodyType,
        minYear,
        maxYear,
        minMiles,
        maxMiles,
        moreFiltersArr,
        location,
        lat,
        lng,
        radius,
        sort,
        false
      );
      setIsLoading(false);
      setCurrent(data._meta.page);
      imageFormat(data);
      setPageData(data.data);
      if (limit == 0) {
        setPages(Math.floor(data._meta.total / (rows * 4)));
        setTotal(data._meta.total);
      } else {
        setPages(Math.floor(limit / (rows * 4)));
        setTotal(limit);
      }
    };
    if (!isFirstLoading) {
      getData();
    }
  }, [
    vehicleType,
    searchKey,
    make,
    models,
    bodyType,
    minYear,
    maxYear,
    minMiles,
    maxMiles,
    moreFiltersArr,
    location,
    lat,
    lng,
    radius,
    sort,
    current,
  ]);

  const imageFormat = (data: any) => {
    data.data.map((item: any, index: number) => {
      const image_url = item.uploadImages[0].images;
      //replace the image url fit for source url
      if (item.uploadImages[0].images.includes("vehicle-listing")) {
        item.uploadImages[0].images =
          "/images/264x198/" +
          image_url.substring(
            image_url.indexOf("vehicle-listing"),
            image_url.length
          );
      } else if (item.uploadImages[0].images.includes("jfif")) {
        item.uploadImages[0].images = item.uploadImages[0].images;
      } else {
        item.uploadImages[0].images =
          "/images/264x198/" +
          image_url.substring(image_url.indexOf("listings"), image_url.length);
      }
    });
  };

  const clearAll = () => {
    setVehicleType("All Vehicles");
    setSearchKey("");
    setMake("");
    setModels([]);
    setBodyType([]);
    setMinYear(1910);
    setMaxYear(2022);
    setMinMiles(0);
    setMaxMiles(300000);
    setMoreFiltersArr(initFilters);
    setLocation("");
    setLat(0);
    setLng(0);
    setRadius(50);
    setSort("Newest");
  };
  return (
    <div className="w-full">
      {!isLoading ? (
        <div className="w-full">
          {!data.AllowFilterChanges ? (
            ""
          ) : (
            <Filter
              vehicleType={vehicleType}
              setVehicleType={setVehicleType}
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              make={make}
              setMake={setMake}
              models={models}
              setModels={setModels}
              bodyType={bodyType}
              setBodyType={setBodyType}
              minYear={minYear}
              setMinYear={setMinYear}
              maxYear={maxYear}
              setMaxYear={setMaxYear}
              minMiles={minMiles}
              setMinMiles={setMinMiles}
              maxMiles={maxMiles}
              setMaxMiles={setMaxMiles}
              moreFiltersArr={moreFiltersArr}
              setMoreFiltersArr={setMoreFiltersArr}
              location={location}
              setLocation={setLocation}
              setLat={setLat}
              setLng={setLng}
              radius={radius}
              setRadius={setRadius}
              sort={sort}
              setSort={setSort}
              makeData={makeData}
              moreFilterData={moreFilterData}
              clearAll={clearAll}
              isFilterDisable={!data.AllowFilterChanges}
            />
          )}
          {total ? (
            <section className="max-w-[1160px] mx-auto w-full flex justify-center space-x-6 flex-wrap">
              {pageData.map((item: any, index: number) => {
                return (
                  <Link href={`${BASE_URL}listing/${item.slug}`} key={index}>
                    <div className="w-[264px] bg-white rounded-lg shadow cursor-pointer my-6">
                      <div className="relative w-full overflow-hidden rounded-t-lg">
                        <Image
                          width={264}
                          height={160}
                          className="w-[264px] h-[160px] object-cover"
                          src={`${IMAGE_BASE_URL}${item.uploadImages[0].images}`}
                          alt={`${item.CarMake}_${item.CarModel}`}
                        />
                        <div
                          onMouseEnter={() => onMouseEnter(index)}
                          onMouseLeave={() => onMouseLeave(index)}
                        >
                          <Image
                            width={20}
                            height={20}
                            className="absolute top-1 right-1"
                            src="/assets/fav-heart.svg"
                            alt="heart"
                          />
                          {isHovering && hoverNum == index && (
                            <Image
                              width={20}
                              height={20}
                              className="absolute top-1 right-1"
                              src="/assets/fav-active.svg"
                              alt="heart"
                            />
                          )}
                        </div>
                      </div>
                      <div className="px-4 py-4 space-y-6">
                        <div>
                          <div className="flex justify-between">
                            <div className="text-sm font-medium text-[#212529]">
                              {item.RegistrationYear} {item.CarMake}
                            </div>
                            <div className="text-lg text-[#00b3de] font-bold">
                              ${item.Price.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-sm font-medium text-[#212529]">
                            {item.CarModel}
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <div className="text-xs text-[#808080] font-normal">
                            <div>{item.Trim}</div>
                            <div>
                              {item.Mileage.toLocaleString()}&nbsp;miles
                            </div>
                          </div>
                          <div className="flex space-x-1 items-center">
                            <div className="relative w-[28px] h-[28px]">
                              {item.userId.userDetails.profileImage != null ? (
                                <div>
                                  <Image
                                    width={28}
                                    height={28}
                                    className="w-[28px] h-[28px] rounded-full"
                                    src={`${IMAGE_BASE_URL}${item.userId.userDetails.profileImage}`}
                                    alt="profile"
                                  />
                                  {item.userId.verification.vouched &&
                                  item.userId.verification.email &&
                                  item.userId.verification.phone &&
                                  item.userId.verification.bank ? (
                                    <Image
                                      width={14}
                                      height={14}
                                      className="absolute top-[15px] left-[13px]"
                                      src="/assets/verified.svg"
                                      alt="verified"
                                    />
                                  ) : (
                                    <Image
                                      width={14}
                                      height={14}
                                      className="absolute top-[15px] left-[13px]"
                                      src="/assets/not-verified.svg"
                                      alt="not-verified"
                                    />
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <Image
                                    width={28}
                                    height={28}
                                    className="w-full rounded-full"
                                    src={`${IMAGE_BASE_URL}${"/assets/defaultImg.png"}`}
                                    alt="profile"
                                  />
                                  {item.userId.verification.vouched ? (
                                    <Image
                                      width={14}
                                      height={14}
                                      className="absolute top-[15px] left-[13px]"
                                      src="/assets/verified.svg"
                                      alt="verified"
                                    />
                                  ) : (
                                    <Image
                                      width={14}
                                      height={14}
                                      className="absolute top-[15px] left-[13px]"
                                      src="/assets/not-verified.svg"
                                      alt="not-verified"
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="text-sm font-medium text-[#212529]">
                              <p>
                                {item.userId.userDetails.nickname != null
                                  ? item.userId.userDetails.nickname
                                  : item.userId.userDetails.firstName}
                                &nbsp;
                                {item.userId.userDetails.lastName}.
                              </p>
                              {item.listingLocation ? (
                                <p className="font-xs text-[#808080] font-normal">
                                  {item.listingLocation.city},&nbsp;
                                  {item.listingLocation.stateShortname}
                                </p>
                              ) : (
                                <p className="font-xs text-[#808080] font-normal">
                                  N/A
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </section>
          ) : (
            <section className="w-full">
              <div className="w-full flex justify-center pt-8 pb-3">
                <Image
                  width={212}
                  height={200}
                  src="/assets/no-search-results.svg"
                  alt="no-search"
                />
              </div>
              <div className="w-full text-center text-[#000]">
                <p className="text-xl font-semibold py-1">
                  We didn&apos;t find any matches
                </p>
                <p className="text-sm">
                  Try changing your search criteria or remove filters.
                </p>
              </div>
              <div className="w-full flex justify-center py-6">
                <button
                  className="bg-white hover:bg-blue-500 text-sm text-[#00b3de] font-medium hover:text-white py-2 px-4 border border-[#00b3de] hover:border-transparent rounded"
                  onClick={() => clearAll()}
                >
                  Clear search
                </button>
              </div>
            </section>
          )}
          {total ? (
            <Pagination
              pages={pages}
              currentPage={current}
              total={total}
              rows={rows}
              onClick={setCurrent}
            />
          ) : null}
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full flex justify-center">
            <Image
              width={640}
              height={600}
              src="/assets/loading.gif"
              alt="loading"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleSearch;

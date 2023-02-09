import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";
import Pagination from "@/components/buy/Pagination";
import useApi from "@/hooks/useApi";
import { BASE_URL, PAGE_SIZE } from "@/libs/constants";
import { MoreFilter } from "@/interfaces/MoreFilter";

export default function Buy() {
  const initFilters = {
    trim: [],
    exteriorColor: [],
    interiorColor: [],
    fuelType: [],
    transmission: [],
    driveType: [],
    cylinders: [],
  };
  const { getPageData, getInitMakeData, getCarDetailsFilter } = useApi();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [pageData, setPageData] = useState<any>([]);
  const [pages, setPages] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [makeData, setMakeData] = useState<Array<string>>([]);
  const [moreFilterData, setMoreFilterData] = useState<any>(null);

  //page states
  const [vehicleType, setVehicleType] = useState<string>("All Vehicles");
  const [searchKey, setSearchKey] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [models, setModels] = useState<Array<string>>([]);
  const [bodyType, setBodyType] = useState<Array<string>>([]);
  const [minYear, setMinYear] = useState<number>(1910);
  const [maxYear, setMaxYear] = useState<number>(2022);
  const [minMiles, setMinMiles] = useState<number>(0);
  const [maxMiles, setMaxMiles] = useState<number>(300000);
  const [moreFiltersArr, setMoreFiltersArr] = useState<MoreFilter>(initFilters);
  const [location, setLocation] = useState<string>("");
  const [lat, setLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(0);
  const [radius, setRadius] = useState<number>(50);
  const [sort, setSort] = useState<string>("Newest");

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    getData();
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
    lat,
    lng,
    radius,
    sort,
  ]);

  const initPage = () => {
    getMakeData();
    getMoreFilterData();
  };

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

  const getData = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setIsLoading(true);
    const data = await getPageData(
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
      radius,
      sort
    );
    setIsLoading(false);
    console.log("RESULT:", data);
    setPages(Math.floor(data._meta.total / PAGE_SIZE));
    setCurrent(data._meta.page);
    imageFormat(data);
    setPageData(data.data);
    setTotal(data._meta.total);
  };

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
          <Header />
          <Menu />
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
            radius={radius}
            setRadius={setRadius}
            sort={sort}
            setSort={setSort}
            makeData={makeData}
            moreFilterData={moreFilterData}
            clearAll={clearAll}
          />
          {total ? (
            <div className="px-[8%] grid grid-cols-1 vs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8">
              {pageData.map((item: any, index: number) => {
                return (
                  <div
                    className="w-full bg-white border rounded-lg shadow cursor-pointer my-6"
                    key={index}
                  >
                    <div className="w-full h-[230px] vs:h-[160px] overflow-hidden rounded-t-lg">
                      <Image
                        width={264}
                        height={160}
                        className="w-full object-cover"
                        src={`${BASE_URL}${item.uploadImages[0].images}`}
                        alt={`${item.CarMake}_${item.CarModel}`}
                      />
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
                          <div>{item.Mileage.toLocaleString()}&nbsp;miles</div>
                        </div>
                        <div className="flex space-x-1 items-center">
                          <div className="relative w-[28px] h-[28px]">
                            {item.userId.userDetails.profileImage != null ? (
                              <div>
                                <Image
                                  width={28}
                                  height={28}
                                  className="w-[28px] h-[28px] rounded-full"
                                  src={`${BASE_URL}${item.userId.userDetails.profileImage}`}
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
                            ) : (
                              <div>
                                <Image
                                  width={28}
                                  height={28}
                                  className="w-full rounded-full"
                                  src={`${BASE_URL}${"/assets/defaultImg.png"}`}
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
                            {item.userId.userDetails.nickname != null
                              ? item.userId.userDetails.nickname
                              : item.userId.userDetails.firstName}
                            &nbsp;
                            {item.userId.userDetails.lastName}.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full">
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
                  We didn't find any matches
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
            </div>
          )}
          {total ? (
            <Pagination
              pages={pages}
              currentPage={current}
              total={total}
              onClick={setCurrent}
            />
          ) : null}
          <Footer />
        </div>
      ) : (
        <div className="w-full">
          <Header />
          <Menu />
          <div className="w-full flex justify-center">
            <Image
              width={640}
              height={600}
              src="/assets/loading.gif"
              alt="loading"
            />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

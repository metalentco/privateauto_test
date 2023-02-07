import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";
import Pagination from "@/components/buy/Pagination";
import useApi from "@/hooks/useApi";
import { BASE_URL, PAGE_SIZE } from "@/libs/constants";

export default function Buy() {
  const { getAllData, getInitMakeData, getCarDetailsFilter } = useApi();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [allData, setAllData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
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
  const [moreFiltersArr, setMoreFiltersArr] = useState<any>([]);
  const [location, setLocation] = useState<string>("");
  const [radius, setRadius] = useState<number>(0);
  const [sort, SetSort] = useState<string>("Newest");

  useEffect(() => {
    initPage();
  }, []);

  useEffect(() => {
    filterFunc(
      allData,
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
  }, [vehicleType, searchKey]);

  const initPage = () => {
    getAllPageData();
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

  const getAllPageData = async () => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    let data = await getAllData();
    setIsLoading(false);
    setPages(Math.floor(data._meta.total / PAGE_SIZE));
    setCurrent(data._meta.page);
    imageFormat(data);
    setAllData(data.data);
    setFilterData(data.data);
    console.log("data:", data);
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

  const filterFunc = (
    allData: any,
    vehicleType: string,
    searchKey: string,
    make: string,
    models: Array<string>,
    bodyType: Array<string>,
    minYear: number,
    maxYear: number,
    minMiles: number,
    maxMiles: number,
    moreFiltersArr: any,
    location: string,
    radius: number,
    sort: string
  ) => {
    var filteredData = allData.slice();
    if (vehicleType != "All Vehicles") {
      const data = filteredData;
      filteredData = [];
      data.map((item: any, index: number) => {
        if (item.vehicleType == vehicleType) {
          filteredData.push(item);
        }
      });
    }
    if (searchKey != "") {
      const data = filteredData;
      filteredData = [];
      data.map((item: any, index: number) => {
        // if()
      });
    }
    console.log("filteredData:", filteredData);
    setFilterData(filteredData);
    setPages(Math.floor(filteredData.length / PAGE_SIZE));
    setCurrent(0);
    setTotal(filteredData.length);
  };

  return (
    <div>
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
            SetSort={SetSort}
            makeData={makeData}
            moreFilterData={moreFilterData}
          />
          <div className="px-[8%] grid grid-cols-4 gap-x-8">
            {filterData
              .slice(current * PAGE_SIZE, (current + 1) * PAGE_SIZE)
              .map((item: any, index: number) => {
                return (
                  <div
                    className="w-full bg-white border rounded-lg shadow cursor-pointer my-6"
                    key={index}
                  >
                    <div className="w-full h-[160px] overflow-hidden rounded-t-lg">
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

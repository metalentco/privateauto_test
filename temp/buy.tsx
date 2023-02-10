import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";
import Pagination from "@/components/buy/Pagination";
import useApi from "@/hooks/useApi";

export default function Buy() {
  const BASE_URL = "https://padev.xyz";
  const { getPageData, getInitMakeData } = useApi();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [pageData, setPageData] = useState<any>([]);
  const [pages, setPages] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [makeData, setMakeData] = useState<Array<string>>([]);

  useEffect(() => {
    initPage();
  }, []);

  const initPage = () => {
    getPaginationData(0);
    getMakeData();
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

  const getPaginationData = async (num: any) => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    let data = await getPageData(num);
    setIsLoading(false);
    setPages(Math.floor(data._meta.total / data._meta.limit));
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

  return (
    <div>
      {!isLoading ? (
        <div className="w-full">
          <Header />
          <Menu />
          <Filter makeData={makeData} />
          <div className="px-[8%] grid grid-cols-4 gap-x-8">
            {pageData.map((item: any, index: number) => {
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
                        <div className="w-[28px] h-[28px]">
                          {item.userId.userDetails.profileImage != null ? (
                            <Image
                              width={28}
                              height={28}
                              className="w-[28px] h-[28px] rounded-full"
                              src={`${BASE_URL}${item.userId.userDetails.profileImage}`}
                              alt="profile"
                            />
                          ) : (
                            <Image
                              width={28}
                              height={28}
                              className="w-full rounded-full"
                              src={`${BASE_URL}${"/assets/defaultImg.png"}`}
                              alt="profile"
                            />
                          )}
                        </div>
                        <div className="text-sm font-medium text-[#212529]">
                          {item.userId.userDetails.nickname}&nbsp;
                          {item.userId.userDetails.lastName}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Pagination
            pages={pages}
            currentPage={current}
            total={total}
            onClick={getPaginationData}
          />
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

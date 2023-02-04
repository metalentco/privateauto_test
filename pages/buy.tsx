import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Filter from "@/components/buy/Filter";
import useApi from "@/hooks/useApi";

export default function Buy() {
  const BASE_URL = "https://padev.xyz/images/264x198/";
  const BASE_PROFILE_URL = "https://padev.xyz";
  const { getInitialData } = useApi();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [initList, setInitList] = useState<any>([]);

  useEffect(() => {
    getLoading();
  }, []);

  const getLoading = async () => {
    let initialData = await getInitialData();
    setIsLoading(false);
    console.log("data:", initialData);
    initialData.data.map((item: any, index: number) => {
      const image_url = item.uploadImages[0].images;
      //replace the image url fit for source url
      item.uploadImages[0].images = image_url.substring(
        image_url.indexOf("listings"),
        image_url.length
      );
    });
    setInitList(initialData.data);
  };

  return (
    <div>
      {!isLoading ? (
        <div className="w-full">
          <Header />
          <Menu />
          <Filter />
          <div>
            <div className="px-[8%] grid grid-cols-4 gap-x-8">
              {initList.map((item: any, index: number) => {
                return (
                  <div className="w-full bg-white border rounded-lg shadow cursor-pointer my-6">
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
                                src={`${BASE_PROFILE_URL}${item.userId.userDetails.profileImage}`}
                                alt="profile"
                              />
                            ) : (
                              <Image
                                width={28}
                                height={28}
                                className="w-full rounded-full"
                                src={`${BASE_PROFILE_URL}${"/assets/defaultImg.png"}`}
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
            <div className="flex justify-center"></div>
          </div>
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

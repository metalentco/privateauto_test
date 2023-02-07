import { useEffect, useState } from "react";
import Image from "next/image";
import useApi from "@/hooks/useApi";

type Props = {
  makeData: Array<string>;
};

const makeModelModal = ({ makeData }: Props) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [listData, setListData] = useState<Array<string>>(makeData);
  const [isModel, setIsModel] = useState<Boolean>(false);
  const [make, setMake] = useState<string>("");
  const { getModelDataByMake } = useApi();

  const getModelByMake = async (make: string) => {
    setIsLoading(true);
    const data = await getModelDataByMake(make);
    setIsLoading(false);
    setIsModel(true);
    setMake(make);
    setListData(data.results.models);
    // setListData
  };

  const backToMake = () => {
    setIsModel(false);
    setListData(makeData);
  };

  return (
    <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      <div className="w-full px-6 pb-8 space-y-4">
        <div className="text-left">
          {isModel && (
            <div
              className="text-xs font-medium text-[#063829] cursor-pointer"
              onClick={() => backToMake()}
            >
              {"<"}&nbsp;Back to make
            </div>
          )}
          <label className="form-label inline-block text-base font-medium text-[#333] py-4">
            {isModel ? make : "Make"}
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-sm font-medium text-[#333] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder={`search ${isModel ? "model" : "make"}`}
          />
        </div>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <Image
              width={640}
              height={600}
              src="/assets/loading.gif"
              alt="loading"
            />
          </div>
        ) : (
          <div className="h-[130px] whitespace-nowrap overflow-auto scrollbar-hide text-left">
            {listData.map((item: string, index: number) => {
              return (
                <div key={index}>
                  {!isModel ? (
                    <div
                      className="flex justify-between cursor-pointer px-2"
                      key={index}
                      onClick={() => getModelByMake(item)}
                    >
                      <div className="text-sm font-medium text-[#333] py-2">
                        {item}
                      </div>
                      <Image
                        width={6}
                        height={12}
                        src="assets/right.svg"
                        alt="right"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center cursor-pointer px-2 space-x-2"
                      key={index}
                    >
                      <input type="checkbox" className="cursor-pointer" />
                      <div className="text-sm font-medium text-[#333] py-2">
                        {item}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
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
  );
};

export default makeModelModal;

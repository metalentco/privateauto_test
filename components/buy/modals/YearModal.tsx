import { useEffect, useState } from "react";
import MultiRangeSlider from "@/components/multiRangeSlider/multiRangeSlider";

type Props = {
  parentMinYear: number;
  setParentMinYear: Function;
  parentMaxYear: number;
  setParentMaxYear: Function;
  setIsYearModal: Function;
};

const YearModal = ({
  parentMinYear,
  setParentMinYear,
  parentMaxYear,
  setParentMaxYear,
  setIsYearModal,
}: Props) => {
  const [minYearInput, setMinYearInput] = useState<number>(parentMinYear);
  const [maxYearInput, setMaxYearInput] = useState<number>(parentMaxYear);

  const [minYear, setMinYear] = useState<number>(parentMinYear);
  const [maxYear, setMaxYear] = useState<number>(parentMinYear);

  useEffect(() => {
    setMinYearInput(minYear);
    setMaxYearInput(maxYear);
  }, [minYear, maxYear]);

  const apply = () => {
    setIsYearModal(false);
    setParentMinYear(minYearInput);
    setParentMaxYear(maxYearInput);
  };

  const clear = () => {
    setIsYearModal(false);
    setParentMinYear(1910);
    setParentMaxYear(2022);
  };

  return (
    <div className="absolute top-[50px] left-[-90px] vs:left-[-200px] sm:left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg z-20">
      <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
        Year
      </div>
      <MultiRangeSlider
        min={1910}
        max={2022}
        minValue={minYearInput}
        maxValue={maxYearInput}
        step={1}
        onChange={({ min, max }: { min: number; max: number }) => {
          setMinYear(min);
          setMaxYear(max);
        }}
      />
      <div className="w-full px-6 grid grid-cols-2 gap-x-4 py-8">
        <div className="text-left">
          <label className="form-label inline-block mb-2 text-gray-700">
            Min Year
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            min="1910"
            max="2022"
            value={minYearInput}
            onBlur={() => {
              if (minYearInput < 1910) {
                setMinYearInput(1910);
              } else if (minYearInput > maxYearInput) {
                setMinYearInput(maxYearInput);
              }
            }}
            onChange={(e: any) => {
              setMinYearInput(e.target.value);
            }}
          />
        </div>
        <div className="text-left">
          <label className="form-label inline-block mb-2 text-gray-700">
            Max Year
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            min="1910"
            max="2022"
            value={maxYearInput}
            onBlur={() => {
              if (maxYearInput > 2022) {
                setMaxYearInput(2022);
              } else if (minYearInput > maxYearInput) {
                setMaxYearInput(minYearInput);
              }
            }}
            onChange={(e: any) => {
              setMaxYearInput(e.target.value);
            }}
          />
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between px-4 pt-6">
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
  );
};

export default YearModal;

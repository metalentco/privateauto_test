import { useEffect, useState } from "react";
import MultiRangeSlider from "@/components/multiRangeSlider/multiRangeSlider";

const MilesModal = () => {
  const [minMiles, setMinMiles] = useState<number>(0);
  const [maxMiles, setMaxMiles] = useState<number>(300000);
  const [minMilesInput, setMinMilesInput] = useState<number>(0);
  const [maxMilesInput, setMaxMilesInput] = useState<number>(300000);

  useEffect(() => {
    setMinMilesInput(minMiles);
    setMaxMilesInput(maxMiles);
  }, [minMiles, maxMiles]);

  return (
    <div className="absolute top-[40px] left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
        Miles
      </div>
      <MultiRangeSlider
        min={0}
        max={300000}
        minValue={minMilesInput}
        maxValue={maxMilesInput}
        step={5000}
        onChange={({ min, max }: { min: number; max: number }) => {
          setMinMiles(min);
          setMaxMiles(max);
        }}
      />
      <div className="w-full px-6 grid grid-cols-2 gap-x-4 py-8">
        <div className="text-left">
          <label className="form-label inline-block mb-2 text-gray-700">
            Min Miles
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            min="0"
            max="300000"
            step="5000"
            value={minMilesInput}
            onBlur={() => {
              if (minMilesInput < 0) {
                setMinMilesInput(0);
              } else if (minMilesInput > maxMilesInput) {
                setMinMilesInput(maxMilesInput);
              } else if (minMilesInput % 5000 < 2500) {
                setMinMilesInput(minMilesInput - (minMilesInput % 5000));
              } else if (minMilesInput % 5000 > 2499) {
                setMinMilesInput(minMilesInput - (minMilesInput % 5000) + 5000);
              }
            }}
            onChange={(e: any) => {
              setMinMilesInput(e.target.value);
            }}
          />
        </div>
        <div className="text-left">
          <label className="form-label inline-block mb-2 text-gray-700">
            Max Miles
          </label>
          <input
            type="number"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            min="0"
            max="300000"
            step="5000"
            placeholder="300000"
            value={maxMilesInput}
            onBlur={() => {
              if (maxMilesInput > 300000) {
                setMaxMilesInput(300000);
              } else if (minMilesInput > maxMilesInput) {
                setMaxMilesInput(minMilesInput);
              } else if (maxMilesInput % 5000 < 2500) {
                setMaxMilesInput(maxMilesInput - (maxMilesInput % 5000));
              } else if (maxMilesInput % 5000 > 2499) {
                setMaxMilesInput(maxMilesInput - (maxMilesInput % 5000) + 5000);
              }
            }}
            onChange={(e: any) => {
              setMaxMilesInput(e.target.value);
            }}
          />
        </div>
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

export default MilesModal;

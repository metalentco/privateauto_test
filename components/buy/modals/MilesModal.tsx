import { useEffect, useState } from "react";
import MultiRangeSlider from "@/components/multiRangeSlider/multiRangeSlider";

type Props = {
  parentMinMiles: number;
  setParentMinMiles: Function;
  parentMaxMiles: number;
  setParentMaxMiles: Function;
  setIsMilesModal: Function;
};

const MilesModal = ({
  parentMinMiles,
  setParentMinMiles,
  parentMaxMiles,
  setParentMaxMiles,
  setIsMilesModal,
}: Props) => {
  const [minMiles, setMinMiles] = useState<number>(parentMinMiles);
  const [maxMiles, setMaxMiles] = useState<number>(parentMaxMiles);

  const [minMilesInput, setMinMilesInput] = useState<number>(parentMinMiles);
  const [maxMilesInput, setMaxMilesInput] = useState<number>(parentMaxMiles);

  useEffect(() => {
    setMinMilesInput(minMiles);
    setMaxMilesInput(maxMiles);
  }, [minMiles, maxMiles]);

  const apply = () => {
    setIsMilesModal(false);
    setParentMinMiles(minMilesInput);
    setParentMaxMiles(maxMilesInput);
  };

  const clear = () => {
    setIsMilesModal(false);
    setParentMinMiles(0);
    setParentMaxMiles(300000);
  };

  return (
    <div className="absolute top-[50px] left-[-190px] vs:left-[-300px] sm:left-[-80px] md:left-[0px] w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg z-20">
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
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
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
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none"
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

export default MilesModal;

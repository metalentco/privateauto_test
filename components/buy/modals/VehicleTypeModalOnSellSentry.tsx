import Image from "next/image";
import { vehiclesOnSellEntry, comingVehicles } from "@/libs/constants";

type Props = {
  setIsVehicleModalOnSellEntry: Function;
  setVehicleType: Function;
};

const VehicleTypeModalOnSellSentry = ({
  setIsVehicleModalOnSellEntry,
  setVehicleType,
}: Props) => {
  return (
    <div className="absolute top-[50px] left-1/12 sm:left-[20%] w-11/12 sm:w-3/5 py-2 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg z-30">
      {vehiclesOnSellEntry.map((item: string, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className="w-full h-[56px] text-left px-4 hover:bg-[#e9ecef]"
            onClick={() => {
              setVehicleType(item);
              setIsVehicleModalOnSellEntry(false);
            }}
          >
            {item}
          </button>
        );
      })}
      {comingVehicles.map((item: string, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className="w-[256px] h-[56px] flex items-center text-left text-slate-300 px-4"
            disabled
          >
            {item}&nbsp;&nbsp;&nbsp;&nbsp;
            <Image
              width={90}
              height={20}
              src="/assets/comingSoon.svg"
              alt="comingSoon"
            />
          </button>
        );
      })}
    </div>
  );
};

export default VehicleTypeModalOnSellSentry;

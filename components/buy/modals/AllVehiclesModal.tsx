import Image from "next/image";
import { vehicles, comingVehicles } from "@/libs/constants";

const AllVehiclesModal = () => {
  return (
    <div className="absolute top-[50px] left-[0px] w-[264px] py-2 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      {vehicles.map((item: string, index: number) => {
        return (
          <button
            key={index}
            type="button"
            className="w-[256px] h-[56px] text-left px-4 hover:bg-[#e9ecef]"
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

export default AllVehiclesModal;

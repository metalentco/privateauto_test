import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import VehicleTypeModalOnSellSentry from "@/components/buy/modals/VehicleTypeModalOnSellSentry";

type Props = {
  data: any;
};

const SellEntry = ({ data }: Props) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  if (data.VehicleType == "Car") {
    data.VehicleType = "Auto";
  }

  const [vehicleType, setVehicleType] = useState<string>(data.VehicleType);
  const [isVehicleModalOnSellEntry, setIsVehicleModalOnSellEntry] =
    useState<Boolean>(false);
  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-11/12 sm:w-3/5 bg-[#eef1f5] py-6 space-y-6">
        <div className="text-center text-lg font-semibold px-4 sm:px-0">
          {data.Title}
        </div>
        <div className="relative flex justify-center">
          <button
            className=" w-11/12 sm:w-3/5 bg-white flex items-center justify-between text-base text-white font-normal py-2 px-4 border border-[#9797aa] focus:border-[#00a0c7] border-solid rounded"
            onClick={() =>
              setIsVehicleModalOnSellEntry(!isVehicleModalOnSellEntry)
            }
          >
            <span className="text-base text-[#333] font-medium">
              {vehicleType}
            </span>
            <Image
              width={10}
              height={6}
              src="/assets/expand_icon.svg"
              alt="null"
            />
          </button>
          {isVehicleModalOnSellEntry && (
            <VehicleTypeModalOnSellSentry
              setIsVehicleModalOnSellEntry={setIsVehicleModalOnSellEntry}
              setVehicleType={setVehicleType}
            />
          )}
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            className="form-control block w-11/12 sm:w-3/5 px-4 py-2 text-base font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] roundedt m-0 focus:border-[#00a0c7]"
            placeholder="Enter VIN..."
          />
        </div>
        <div className="w-full text-sm text-center">
          A valid Vin is required to list your car on PrivateAuto.{" "}
          <Link
            href={`${BASE_URL}blog/where-is-my-vin-number`}
            className="text-[#3eb7df]"
          >
            Learn more
          </Link>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-12 rounded cursor-pointer">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellEntry;

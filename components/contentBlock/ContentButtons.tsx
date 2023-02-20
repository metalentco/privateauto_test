import Link from "next/link";
import Image from "next/image";

type Props = {
  buttonType: string;
};

const ContentButtons = ({ buttonType }: Props) => {
  return (
    <div>
      {buttonType == "Sell & Browse" ? (
        <div className="flex space-x-8 pt-12">
          <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
            Sell a vehicle
          </button>
          <button className=" bg-[#eff0f6] hover:bg-slate-300 text-black text-base font-bonormalld py-2 px-3 rounded-sm cursor-pointer">
            Browse Vehicles <strong>&#62;</strong>
          </button>
        </div>
      ) : buttonType == "Sell" ? (
        <div className="pt-12">
          <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
            Sell your vehicle
          </button>
        </div>
      ) : buttonType == "Browse" ? (
        <div className="pt-12">
          <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
            Browse Vehicles
          </button>
        </div>
      ) : buttonType == "App Stores" ? (
        <div className="flex justify-center sm:justify-start mt-8 space-x-8">
          <Link
            href="https://apps.apple.com/us/app/privateauto-sell-privately/id1614271597"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={132}
              height={45}
              src="/assets/appstore.svg"
              alt="appstore"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=io.gonative.android.qwkoyk"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={137}
              height={49}
              src="/assets/googleplay.svg"
              alt="googleplay"
            />
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContentButtons;

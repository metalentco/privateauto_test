import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { parseColor, parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const ContentBlock = ({ data }: Props) => {
  return data.Position == "Center" ? (
    <div
      className={twMerge(
        "w-full block sm:flex items-center px-[10%] space-x-0 md:space-x-8 space-y-8 md:space-y-0 mb-8 text-[#333] pt-8",
        parseColor(data.Color)
      )}
    >
      <div className="w-full sm:w-1/2 text-center sm:text-left space-y-4">
        <div className={`text-[#333] text-4xl ${parseTitle(data.TitleStyle)}`}>
          {data.Title}
        </div>
        {data.SubTitle ? (
          <div className={`text-lg md:${parseTitle(data.SubTitleStyle)}`}>
            {data.SubTitle}
          </div>
        ) : (
          ""
        )}
        <div
          className={`text-xl font-normal ${
            data.Color == "Dark Blue" ? "text-white" : "text-[#4f4f4f]"
          }`}
        >
          <div dangerouslySetInnerHTML={{ __html: data.Content }}></div>
        </div>
        {data.Buttons == "Sell & Browse" ? (
          <div className="flex space-x-8 pt-12">
            <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
              Sell a vehicle
            </button>
            <button className=" bg-[#eff0f6] hover:bg-slate-300 text-black text-base font-bonormalld py-2 px-3 rounded-sm cursor-pointer">
              Browse Vehicles <strong>&#62;</strong>
            </button>
          </div>
        ) : data.Buttons == "Sell" ? (
          <div className="pt-12">
            <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
              Sell your vehicle
            </button>
          </div>
        ) : data.Buttons == "Browse" ? (
          <div className="pt-12">
            <button className=" bg-[#00b3de] hover:bg-blue-300 text-white text-base font-normal py-2 px-3 rounded-sm cursor-pointer">
              Browse Vehicles
            </button>
          </div>
        ) : data.Buttons == "App Stores" ? (
          <div className="flex justify-center sm:justify-start mt-8 space-x-8">
            <a
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
            </a>
            <a
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
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full sm:w-1/2 flex md:block justify-center">
        {data.Image.data != null ? (
          <Image
            width={data.Image.data.attributes.width}
            height={data.Image.data.attributes.height}
            className={`w-full ${
              data.Buttons == "Sell & Browse" ? "md:h-[490px]" : "md:h-[334px]"
            }`}
            src={data.Image.data.attributes.url}
            alt="4.term"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  ) : data.Position == "Right" ? (
    <div className="w-full mb-8">
      <div
        className={`w-[90%] sm:h-[538px] ${parseColor(
          data.Color
        )} block sm:flex ml-[10%] items-center mt-16 space-x-0 md:space-x-8 space-y-8 md:space-y-0 rounded-l-xl
        `}
      >
        <div className="w-full sm:w-2/6 pt-8 sm:pt-0 flex justify-center items-center">
          <Image
            width={data.Image.data.attributes.width}
            height={data.Image.data.attributes.height}
            className="w-[225px]"
            src={data.Image.data.attributes.url}
            alt="4.term"
          />
        </div>
        <div className="w-full sm:w-1/2  text-center sm:text-left px-[10%] sm:px-4 space-y-4 pb-4">
          <div className={`text-[#828282] ${parseTitle(data.TitleStyle)}`}>
            {data.Title}
          </div>
          {data.SubTitle ? (
            <div className={`text-3xl ${parseTitle(data.SubTitleStyle)}`}>
              {data.SubTitle}
            </div>
          ) : (
            ""
          )}
          <div
            className={`text-xl font-normal ${
              data.Color == "Dark Blue" ? "text-white" : "text-[#4f4f4f]"
            }`}
          >
            <div dangerouslySetInnerHTML={{ __html: data.Content }}></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full mb-8">
      <div
        className={`w-[90%] ${parseColor(data.Color)} ${
          data.Color == "Dark Blue" ? "text-white" : ""
        } block sm:flex items-center mt-16 px-[10%] py-8 rounded-tr-xl space-x-0 md:space-x-40 rounded-br-xl`}
      >
        <div className="w-full sm:w-2/3 text-center sm:text-left pl-[5%] space-y-4">
          <div
            className={`text-lg ${parseTitle(
              data.TitleStyle
            )} text-center md:text-left`}
          >
            {data.Title}
          </div>
          {data.SubTitle ? (
            <div
              className={`text-white text-2xl ${parseTitle(
                data.SubTitleStyle
              )} text-center md:text-left`}
            >
              {data.SubTitle}
            </div>
          ) : (
            ""
          )}
          <div
            className={`text-xl font-normal ${
              data.Color == "Dark Blue" ? "text-white" : "text-[#4f4f4f]"
            } flex items-center mx-auto mt-8 space-x-8`}
          >
            <div dangerouslySetInnerHTML={{ __html: data.Content }}></div>
          </div>
          {data.Buttons != "None" ? (
            <div className="flex justify-center sm:justify-start mt-8 space-x-8">
              <a
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
              </a>
              <a
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
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full md:w-1/3 flex md:block justify-center">
          <Image
            className={`w-[225px] mt-6 md:mt-0`}
            width={data.Image.data.attributes.width}
            height={data.Image.data.attributes.height}
            src={data.Image.data.attributes.url}
            alt="left_img"
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;

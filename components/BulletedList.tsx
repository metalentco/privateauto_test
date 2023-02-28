import Image from "next/image";
import { parseWidth, parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const BulletedList = ({ data }: Props) => {
  let url = "";
  let alt = "";
  let width = 0;
  let height = 0;
  return (
    <div className={`w-[${parseWidth(data.Width)}]% space-y-6`}>
      <div className={`w-5/6 md:w-4/6 mx-auto ${parseTitle(data.TitleStyle)}`}>
        {data.Title}
      </div>
      <div className="w-5/6 md:w-4/6 mx-auto space-y-4">
        {data.Items.map((item: any, index: number) => {
          if (item.Image.data != null) {
            url = item.Image?.data.attributes.url;
            alt = item.Image?.data.attributesalternativeText;
            width = item.Image?.data.attributes.width;
            height = item.Image?.data.attributes.height;
          }
          return (
            <div className="w-full flex items-center space-x-4" key={index}>
              {item.Image.data != null && (
                <Image
                  className={`w-[${width}]px h-[${height}px]`}
                  width={width}
                  height={height}
                  src={url}
                  alt={alt}
                />
              )}
              <div className="text-lg md:text-2xl text-[#4f4f4f] font-normal">
                {item.Text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BulletedList;

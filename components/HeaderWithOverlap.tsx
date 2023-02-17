import Image from "next/image";
import { parseTextColor, parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const HeaderWithOverlap = ({ data }: Props) => {
  return (
    <div className={`relative w-full py-8 ${parseTextColor(data.Color)}`}>
      {data.Image.data != null ? (
        <Image
          width={data.Image.data.attributes.width}
          height={data.Image.data.attributes.height}
          src={data.Image.data.attributes.url}
          alt="Overlap"
        />
      ) : (
        ""
      )}
      <div className="absolute top-0 left-0 w-full">
        <p
          className={`w-full text-center text-2xl ${parseTitle(
            data.TitleStyle
          )} pt-16 md:pt-20`}
        >
          {data.Title}
        </p>
        <p
          className={`w-full text-center text-xl ${parseTitle(
            data.SubTitleStyle
          )} py-3 md:py-8`}
        >
          {data.SubTitle}
        </p>
        <p className={`w-full text-center text-lg md:text-xl py-4 md:py-10`}>
          {data.Content}
        </p>
      </div>
    </div>
  );
};

export default HeaderWithOverlap;

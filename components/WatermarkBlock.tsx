import Image from "next/image";
import { parseWidth } from "@/libs/utils";

type Props = {
  data: any;
};

const WatermarkBlock = ({ data }: Props) => {
  return (
    <div
      className={`relative w-[${parseWidth(
        data.Width
      )}%] bg-[linear-gradient(180deg,#53cce8,#53d9e8)] py-[100px]`}
    >
      {data.Logo.data != null ? (
        <div className="absolute top-[75px] left-[15px] opacity-100">
          <Image
            width={data.Logo.data.attributes.width}
            height={data.Logo.data.attributes.height}
            src={data.Logo.data.attributes.url}
            alt="Logo"
          />
        </div>
      ) : (
        ""
      )}
      <p className="text-center text-[#2c2641] text-[40px] font-normal z-10">
        {data.Content}
      </p>
      <p className="absolute right-0 bottom-[-20px] text-right text-white text-[60px] font-bold opacity-60">
        {data.Watermark}
      </p>
    </div>
  );
};

export default WatermarkBlock;

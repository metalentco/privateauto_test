import Image from "next/image";

type Props = {
  data: any;
};

const InlineImage = ({ data }: Props) => {
  return (
    <div className="flex justify-center">
      {data.Image != undefined &&
        data.Image != null &&
        data.Image.data != null && (
          <Image
            className={`w-[${data.Image.data.attributes.formats.small.width}px] h-[${data.Image.data.attributes.formats.small.height}px] mt-12`}
            width={data.Image.data.attributes.formats.small.width}
            height={data.Image.data.attributes.formats.small.height}
            src={data.Image.data.attributes.formats.small.url}
            alt={data.Image.data.attributes.formats.small.name}
          />
        )}
    </div>
  );
};

export default InlineImage;

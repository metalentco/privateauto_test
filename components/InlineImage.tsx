import Image from 'next/image';

type Props = {
  data: any;
};

const InlineImage = ({ data }: Props) => {
  return (
    <div className="flex justify-center pb-12">
      <Image
        className={`w-[${data.Image.data.attributes.formats.large.width}px] h-[${data.Image.data.attributes.formats.large.height}px] mt-12`}
        src={data.Image.data.attributes.formats.large.url}
        alt={data.Image.data.attributes.formats.large.name}
      />
    </div>
  );
};

export default InlineImage;

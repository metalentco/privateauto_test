import Image from 'next/image';
import { parseTitle, parseColor } from '@/common/Parse';

type Props = {
  data: any;
};

const Lists = ({ data }: Props) => {
  let url = '';
  let alt = '';
  let width = 0;
  let height = 0;

  return (
    <div className="w-5/6 md:w-4/6 mx-auto py-8">
      <div className={`flex justify-center`}>
        <div
          className={`w-[330px] bg-[${parseColor(
            data.Color
          )}] px-12 py-6 space-y-4 border-2 border-[#e6e6e6] border-solid rounded-lg`}
        >
          <div
            className={`${parseTitle(
              data.TitleStyle
            )} text-center text-[#354360]`}
          >
            {data.Title}
          </div>
          <div className="text-center">
            <div
              className={`${parseTitle(
                data.SubTitleStyle
              )} font-bold text-[#354360]`}
            >
              {data.SubTitle}
            </div>
            <div className="text-xs text-[#6c757d]">{data.Content}</div>
          </div>
          <div className="space-y-4">
            {data.Items.map((item: any, index: number) => {
              if (item.Icon.data != null) {
                url = item.Icon.data.attributes.url;
                alt = item.Icon.data.attributesalternativeText;
                width = item.Icon.data.attributes.width;
                height = item.Icon.data.attributes.height;
              }
              return (
                <div className="w-full flex items-center space-x-4" key={index}>
                  <Image
                    width={width}
                    height={height}
                    src={url}
                    className={`w-[${width}]px h-[${height}px]`}
                    alt={alt}
                  />
                  <div className="text-sm text-[#182035] font-normal">
                    {item.Item}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="bg-[#00b3de] hover:bg-blue-500 text-base text-white font-normal py-2 px-4 border border-[#00a0c7] hover:border-transparent border-solid rounded">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;

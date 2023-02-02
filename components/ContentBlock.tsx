import Image from 'next/image';

import { parseColor, parseWidth, parseTitle } from '@/common/Parse';

type Props = {
  data: any;
};

const ContentBlock = ({ data }: Props) => {
  return data.Position == 'Left' ? (
    <div className="w-full">
      <div
        className={`w-[80%] bg-[${parseColor(
          data.Color
        )}] block md:flex items-center mx-auto mt-16 space-x-0 md:space-x-8 space-y-8 md:space-y-0`}
      >
        <div className="w-full flex md:block justify-center">
          <Image
            className={`w-[${data.Image.data.attributes.width}px] h-[${data.Image.data.attributes.height}px]`}
            src={data.Image.data.attributes.url}
            alt={data.Image.data.attributes.alternativeText}
          />
        </div>
        <div className="space-y-4">
          <div className={`text-3xl md:${parseTitle(data.TitleStyle)}`}>
            {data.Title}
          </div>
          {data.SubTitle ? (
            <div className={`text-lg md:${parseTitle(data.SubTitleStyle)}`}>
              {data.SubTitle}
            </div>
          ) : (
            ''
          )}
          <div className="text-xl font-normal text-[#4f4f4f]">
            {data.Content}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      <div
        className={`w-full md:w-[${parseWidth(data.Width)}%] bg-[${parseColor(
          data.Color
        )}] ${
          data.Color == 'Dark Blue' ? 'text-white' : ''
        } block md:flex items-center mt-16 px-[10%] py-8 rounded-tr-xl space-x-0 md:space-x-40 rounded-br-xl`}
      >
        <div className="w-full space-y-4">
          <div
            className={`text-3xl md:${parseTitle(
              data.TitleStyle
            )} text-center md:text-left`}
          >
            {data.Title}
          </div>
          {data.SubTitle ? (
            <div
              className={`text-xl md:${parseTitle(
                data.SubTitleStyle
              )} text-center md:text-left`}
            >
              {data.SubTitle}
            </div>
          ) : (
            ''
          )}
          <div
            className={`text-xl font-normal ${
              data.Color == 'Dark Blue' ? 'text-white' : 'text-[#4f4f4f]'
            } flex items-center mx-auto mt-8 space-x-8`}
          >
            <div dangerouslySetInnerHTML={{ __html: data.Content }}></div>
          </div>
          {data.Buttons != 'None' ? (
            <div className="flex justify-center md:justify-start mt-8 space-x-8">
              <a
                href="https://apps.apple.com/us/app/privateauto-sell-privately/id1614271597"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/assets/appstore.svg"
                  width={132}
                  height={45}
                  alt={data.Image.data.attributes.alternativeText}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.gonative.android.qwkoyk"
                target="_blank"
                rel="noreferrer"
              >
                <Image src="/assets/googleplay.svg" alt="GooglePlay" />
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="w-full flex md:block justify-center">
          <Image
            className={`w-[${data.Image.data.attributes.width}px] h-[${data.Image.data.attributes.height}px] mt-6 md:mt-0`}
            src={data.Image.data.attributes.url}
            alt={data.Image.data.attributes.alternativeText}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentBlock;

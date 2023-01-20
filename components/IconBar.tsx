import Image from 'next/image';

type Props = {
  data: any;
};

const IconBar = ({ data }: Props) => {
  return (
    <div className="w-4/6 mx-auto mt-6 space-y-16">
      <div className="space-y-8">
        <hr className="w-full border-1 border-black" />
        <h2 className="text-xl">{data.Content}</h2>
        <div className="flex justify-center">
          <div className="flex space-x-8">
            {data.Links.map((item: any, index: number) => {
              return (
                <a
                  href={item.URL}
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    className={`w-[${item.Image.data.attributes.width}px] h-[${item.Image.data.attributes.height}px]`}
                    src={item.Image.data.attributes.url}
                    alt={item.Image.data.attributes.alternativeText}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <hr className="w-full border-2 border-b-zinc-300" />
      </div>
      <div className="space-y-8">
        <div className="flex justify-center">
          <h1 className="text-[40px] font-bold text-[#212529]">How it Works</h1>
        </div>
        <div className="flex justify-center space-x-24">
          <div className="justify-items-center space-y-2">
            <div className="flex justify-center">
              <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#45577d] text-white text-4xl rounded-full ">
                1
              </div>
            </div>
            <div className="text-xl text-[#212529] font-bold">Get listed.</div>
          </div>
          <div className="justify-items-center space-y-2">
            <div className="flex justify-center">
              <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#45577d] text-white text-4xl rounded-full ">
                2
              </div>
            </div>
            <div className="text-xl text-[#212529] font-bold">Get found.</div>
          </div>
          <div className="justify-items-center space-y-2">
            <div className="flex justify-center">
              <div className="w-[68px] h-[68px] flex items-center justify-center bg-[#45577d] text-white text-4xl rounded-full ">
                3
              </div>
            </div>
            <div className="text-xl text-[#212529] font-bold">Get paid.</div>
          </div>
        </div>
        <div className="w-4/5 mx-auto text-center text-xl font-normal">
          All within a single easy app. No giving out personal details or
          contact information. It’s so streamlined and intuitive, you’ll want to
          sell another.
        </div>
      </div>
    </div>
  );
};

export default IconBar;

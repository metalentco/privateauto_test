import Image from "next/image";
import LinkHubSubComp from "@/components/LinkHubSubComp";
import { parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const gridArr = [0, 1, 2, 3, 4];

const LinkHub = ({ data }: Props) => {
  return (
    <div className="w-full px-[10%] my-8">
      {data.Style == "Link" ? (
        <div className="grid grid-cols-2 md:grid-cols-5">
          {gridArr.map((i: number) => {
            return (
              <LinkHubSubComp
                data={data.LinkHub.data.attributes.Pages}
                index={i}
                key={i}
              />
            );
          })}
        </div>
      ) : (
        <div className="px-0 md:px-[10%]">
          <div
            className={`text-[#999] font-semibold ${parseTitle(
              data.TitleStyle
            )}`}
          >
            {data.Title.toUpperCase()}
          </div>
          {data.LinkHub.data.attributes.Pages.map(
            (item: any, index: number) => {
              return (
                <div className="block md:flex space-x-8 my-8" key={index}>
                  <div className="w-full flex md:block justify-center mb-4">
                    {item.link.data.attributes.Image &&
                      item.link.data.attributes.Image.data && (
                        <Image
                          width={
                            item.link.data.attributes.Image.data.attributes
                              .formats.thumbnail.width
                          }
                          height={
                            item.link.data.attributes.Image.data.attributes
                              .formats.thumbnail.height
                          }
                          src={
                            item.link.data.attributes.Image.data.attributes
                              .formats.thumbnail.url
                          }
                          alt={
                            item.link.data.attributes.Image.data.attributes
                              .formats.thumbnail.name
                          }
                        />
                      )}
                  </div>
                  <div>
                    <div className="text-lg text-[#1a1a1a] font-medium mb-4">
                      {item.Title}
                    </div>
                    <div className="text-[15px] text-[#999]">
                      {item.link.data.attributes.Body}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};

export default LinkHub;

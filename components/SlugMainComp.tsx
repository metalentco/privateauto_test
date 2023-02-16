import Image from "next/image";
import JumpLinkTarget from "@/components/JumpLinkTarget";
import IconBar from "@/components/IconBar";
import ContentBlock from "@/components/ContentBlock";
import Faq from "@/components/Faq";
import InlineImage from "@/components/InlineImage";
import VehicleSearch from "@/components/VehicleSearch";
import BulletedList from "@/components/BulletedList";
import Lists from "@/components/Lists";
import JumpLinks from "@/components/JumpLinks";

type Props = {
  data: any;
  indexFaq: number;
};

const SlugMainComp = ({ data, indexFaq }: Props) => {
  return (
    <main className="w-full">
      <section className="w-4/6 mx-auto">
        {data &&
        data.attributes.Image != undefined &&
        data.attributes.Image.data ? (
          <div className="w-full flex justify-center mt-8">
            <Image
              src={data.attributes.Image.data.attributes.formats.small.url}
              width={data.attributes.Image.data.attributes.formats.small.width}
              height={
                data.attributes.Image.data.attributes.formats.small.height
              }
              alt={data.attributes.Image.data.attributes.formats.small.name}
            />
          </div>
        ) : (
          ""
        )}
        <div className="text-base text-center break-words">
          {data.attributes.Body}
        </div>
      </section>
      {data && data.attributes.Content.length != 0
        ? data.attributes.Content.map((item: any, index: number) => {
            return item.__component == "page-elements.jump-link-target" ? (
              <JumpLinkTarget key={index} data={item} />
            ) : item.__component == "page-elements.icon-bar" ? (
              <IconBar key={index} data={item} />
            ) : item.__component == "page-elements.image-text" ? (
              <ContentBlock key={index} data={item} />
            ) : item.__component == "page-elements.inline-image" ? (
              <InlineImage key={index} data={item} />
            ) : item.__component == "page-elements.bulleted-list" ? (
              <BulletedList key={index} data={item} />
            ) : item.__component == "app-forms.vehicle-search" ? (
              <VehicleSearch key={index} data={item} />
            ) : item.__component == "page-elements.list" ? (
              <Lists key={index} data={item} />
            ) : item.__component == "page-elements.jump-links" ? (
              <JumpLinks key={index} data={item} />
            ) : (
              <Faq key={index} data={item} faq={indexFaq} index={index} />
            );
          })
        : null}
    </main>
  );
};

export default SlugMainComp;

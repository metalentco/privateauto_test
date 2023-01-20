import { useEffect, useState } from "react";

type Props = {
  data: any;
  faq: number;
  index: number;
};

const Faq = ({ data, faq, index }: Props) => {
  const firstShow = data.Default == "Open" ? true : false;
  const [isShow, setIsShow] = useState<Boolean>(firstShow);

  const showContent = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  return (
    <div className="w-8/12 mx-auto">
      {faq == index ? (
        <div className="text-center text-4xl font-bold space-y-5">
          <span>Frequently Asked Questions</span>
          <hr className="py-3" />
        </div>
      ) : (
        ""
      )}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => showContent()}
      >
        <div className="w-[95%] font-bold text-lg cursor-pointer">
          {data.Title}
        </div>
        {isShow ? (
          <svg
            fill="#00b3de"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 92.13 92.13"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M2.141,89.13c1.425,1.429,3.299,2.142,5.167,2.142c1.869,0,3.742-0.713,5.167-2.142l33.591-33.592L79.657,89.13 c1.426,1.429,3.299,2.142,5.167,2.142c1.867,0,3.74-0.713,5.167-2.142c2.854-2.854,2.854-7.48,0-10.334L56.398,45.205 l31.869-31.869c2.855-2.853,2.855-7.481,0-10.334c-2.853-2.855-7.479-2.855-10.334,0L46.065,34.87L14.198,3.001 c-2.854-2.855-7.481-2.855-10.333,0c-2.855,2.853-2.855,7.481,0,10.334l31.868,31.869L2.143,78.795 C-0.714,81.648-0.714,86.274,2.141,89.13z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        ) : (
          <div className="font-semibold text-3xl text-[#00b3de] cursor-pointer">
            +
          </div>
        )}
      </div>
      {isShow ? (
        <div className="font-medium text-[#828282] text-lg pt-6">
          {data.Content}
        </div>
      ) : (
        ""
      )}
      <hr className="mt-[20px]" />
    </div>
  );
};

export default Faq;

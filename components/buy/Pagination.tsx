import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  pages: number;
  currentPage: number;
  total: number;
  onClick: Function;
};

const IntegerToArray = (pages: Number) => {
  const pagesArr = [];
  for (var i = 0; i <= pages; i++) {
    pagesArr.push(i);
  }
  console.log("pagesArr:", pagesArr);
  return pagesArr;
};

const Pagination = ({ pages, currentPage, total, onClick }: Props) => {
  const [pagesArr, setPagesArr] = useState<any>(null);
  useEffect(() => {
    setPagesArr(IntegerToArray(pages));
  }, [total]);
  if (pagesArr != null) {
    return (
      <div>
        <div className="flex justify-center items-center space-x-3 pt-8">
          {currentPage == 0 ? (
            <Image
              width={8}
              height={14}
              className="cursor-pointer"
              src="/assets/chevron-left-disabled.svg"
              alt="left"
            />
          ) : (
            <Image
              width={24}
              height={24}
              className="cursor-pointer"
              src="/assets/chevron-left.svg"
              alt="left"
              onClick={() => {
                window.scrollTo(0, 0);
                onClick(currentPage - 1);
              }}
            />
          )}
          {pagesArr.map((page: number, index: number) => {
            return page == currentPage ? (
              <div
                key={index}
                className="w-[30px] h-[30px] bg-[#2e3b54] flex justify-center items-center text-white rounded-full cursor-pointer"
              >
                {page + 1}
              </div>
            ) : (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  window.scrollTo(0, 0);
                  onClick(page);
                }}
              >
                {page + 1}
              </div>
            );
          })}
          {currentPage == pages ? (
            <Image
              width={8}
              height={14}
              className="cursor-pointer"
              src="/assets/chevron-right-disabled.svg"
              alt="left"
            />
          ) : (
            <Image
              width={8}
              height={14}
              className="cursor-pointer"
              src="/assets/chevron-right.svg"
              alt="left"
              onClick={() => {
                window.scrollTo(0, 0);
                onClick(currentPage + 1);
              }}
            />
          )}
        </div>
        <div className="text-center text-base font-normal text-[#212529] py-4">
          {currentPage * 24 + 1}&nbsp; - &nbsp;
          <span>{currentPage == pages ? total : currentPage * 24 + 24}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;

import { sortArray } from "@/libs/constants";

const SortModal = () => {
  return (
    <div className="absolute top-[40px] left-[0px] w-[172px] py-6 bg-white text-base text-[#333] border-2 shadow-2xl rounded-lg">
      {sortArray.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer px-4 py-1 hover:bg-[#e9ecef]"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SortModal;

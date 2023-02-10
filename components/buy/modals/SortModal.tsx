import { sortArray } from "@/libs/constants";

type Props = {
  setIsSortModal: Function;
  setSort: Function;
};

const SortModal = ({ setIsSortModal, setSort }: Props) => {
  const sort = (name: string) => {
    setIsSortModal(false);
    if (name == "Newest inventory") {
      setSort("Newest");
    } else {
      setSort(name);
    }
  };

  return (
    <div className="absolute top-[40px] left-[-60px] vs:left-[0px] w-[172px] py-6 bg-white text-base text-[#333] border-2 shadow-2xl rounded-lg z-30">
      {sortArray.map((item, index) => {
        return (
          <div
            key={index}
            className="cursor-pointer px-4 py-1 hover:bg-[#e9ecef]"
            onClick={() => sort(item)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default SortModal;

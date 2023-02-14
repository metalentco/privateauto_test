export const parseColor = (color: string): string => {
  // return color.toLocaleLowerCase();
  if (color == "White") {
    return "bg-[#fff]";
  } else if (color == "Dark Blue") {
    return "bg-[#45577d]";
  } else if (color == "Grey") {
    return "bg-[#eff0f6]";
  }
  return "bg-[#b2e8de]";
};

export const parseWidth = (width: string): string => {
  if (width == "w Full") {
    return "100";
  } else {
    var arr = width.split(" ");
    return arr[1];
  }
};

export const parseTitle = (type: string): string => {
  if (type == "H1") {
    return "md:text-[56px] font-bold leading-[3rem] leading-[4rem]";
  } else if (type == "H2") {
    return "md:text-3xl font-semibold";
  } else if (type == "H3") {
    return "md:text-2xl font-normal text-[#333]";
  } else {
    return "md:text-sm font-medium";
  }
};

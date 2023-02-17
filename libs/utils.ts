export const parseColor = (color: string): string => {
  if (color == "White") {
    return "bg-[#fff]";
  } else if (color == "Dark Blue") {
    return "bg-[#45577d]";
  } else if (color == "Grey") {
    return "bg-[#eff0f6]";
  }
  return "bg-[#b2e8de]";
};

export const parseTextColor = (color: string): string => {
  if (color == "White") {
    return "text-[#fff]";
  } else if (color == "Dark Blue") {
    return "text-[#45577d]";
  } else if (color == "Grey") {
    return "text-[#eff0f6]";
  }
  return "text-[#b2e8de]";
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
    return "md:text-[56px] font-bold md:leading-[3rem] md:leading-[4rem]";
  } else if (type == "H2") {
    return "md:text-3xl font-semibold";
  } else if (type == "H3") {
    return "md:text-2xl font-normal text-[#333]";
  } else if (type == "H4") {
    return "md:text-lg font-medium";
  } else if (type == "H5") {
    return "md:text-base font-medium";
  } else {
    return "md:text-sm font-medium";
  }
};

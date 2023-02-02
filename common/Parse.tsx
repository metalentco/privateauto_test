export const parseColor = (color: String) => {
  // return color.toLocaleLowerCase();
  if (color == 'White') {
    return '#000';
  } else if (color == 'Dark Blue') {
    return '#45577d';
  }
};

export const parseWidth = (width: string) => {
  if (width == 'w Full') {
    return '100';
  } else {
    const arr = width.split(' ');
    return arr[1];
  }
};

export const parseTitle = (type: string) => {
  if (type == 'H1') {
    return 'text-4xl font-bold';
  } else if (type == 'H2') {
    return 'text-3xl font-semibold';
  } else if (type == 'H3') {
    return 'text-2xl font-medium';
  } else {
    return 'text-sm font-medium';
  }
};

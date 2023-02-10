import { useState } from "react";
import Image from "next/image";
import { initalCarsArray } from "@/libs/constants";

type Props = {
  bodyType: Array<string>;
  setBodyType: Function;
  setIsCarTypeModal: Function;
};

const CarTypeModal = ({ bodyType, setBodyType, setIsCarTypeModal }: Props) => {
  initalCarsArray.map((item: any, index: number) => {
    if (bodyType.includes(item.type)) {
      item.isSelected = true;
    }
  });
  const [cars, SetCars] = useState<any>(initalCarsArray);

  const carHandle = (type: string, selected: Boolean) => {
    let _cars = cars.slice();
    _cars.map((item: any, index: number) => {
      if (item.type == type) {
        item.isSelected = selected;
      }
    });
    SetCars(_cars);
  };

  const apply = () => {
    setIsCarTypeModal(false);
    const data: any = [];
    cars.map((item: any, index: number) => {
      if (item.isSelected) {
        data.push(item.type);
      }
    });
    setBodyType(data);
  };

  const clear = () => {
    setIsCarTypeModal(false);
    cars.map((item: any, index: number) => {
      item.isSelected = false;
    });
    SetCars(cars);
    setBodyType([]);
  };

  return (
    <div className="absolute top-[50px] left-[-170px] vs:left-[-70px] sm:left-[0px] w-[280px] vs:w-[358px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      <div className="text-left text-lg text-[#333] font-normal px-6 pb-4">
        Body type
      </div>
      <div className="grid grid-cols-3 gap-x-10 px-6">
        {cars.map((car: any, index: number) => {
          return (
            <div key={index}>
              {car.isSelected ? (
                <div
                  className="bg-[#e2e8f0] py-1 mb-4 rounded"
                  onClick={() => {
                    carHandle(car.type, false);
                  }}
                >
                  <div className="w-full flex justify-center">
                    <Image
                      src={`/assets/car-icons/${car.img}`}
                      className=""
                      width={70}
                      height={28}
                      alt={car.type}
                      key={index}
                    />
                  </div>
                  <div className="text-xs font-semibold text-center cursor-default">
                    {car.type}
                  </div>
                </div>
              ) : (
                <div
                  className="py-1 mb-4"
                  key={index}
                  onClick={() => {
                    carHandle(car.type, true);
                  }}
                >
                  <div className="w-full flex justify-center">
                    <Image
                      src={`/assets/car-icons/${car.img}`}
                      className=""
                      width={70}
                      height={28}
                      alt={car.type}
                      key={index}
                    />
                  </div>
                  <div className="text-xs font-semibold text-center cursor-default">
                    {car.type}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <hr className="w-full" />
      <div className="flex justify-between px-4 pt-6">
        <button
          className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded"
          onClick={() => clear()}
        >
          Clear
        </button>
        <button
          className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer"
          onClick={() => apply()}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default CarTypeModal;

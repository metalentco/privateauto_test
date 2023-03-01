import { useEffect, useState } from "react";
import { parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const PaymentCalculator = ({ data }: Props) => {
  const [vehiclePrice, setVehiclePrice] = useState<number>(20000);
  const [downPayment, setDownPayment] = useState<number>(1500);
  const [interestRate, setInterestRate] = useState<number>(2.99);
  const loanPayment = vehiclePrice - downPayment + 0.07 * vehiclePrice;
  const monthlyPayment = Math.floor(loanPayment * (interestRate / 1200));

  return (
    <div className="w-full">
      <div className="w-full h-[300px] bg-[#45577d]">
        <div className={`w-full text-2xl ${parseTitle(data.TitleStyle)} pt-8`}>
          <p className="text-center text-white opacity-90">{data.Title}</p>
        </div>
      </div>
      <div className="w-full block sm:flex justify-center space-x-0 sm:space-x-20 px-10 mt-[-150px] space-y-8 sm:space-y-0">
        <div
          className={`w-full sm:w-1/3 md:w-1/4 bg-white px-8 py-6 space-y-4 border-2 border-[#e6e6e6] border-solid rounded-lg`}
        >
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">
              Vehicle Price
            </label>
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              value={vehiclePrice.toLocaleString()}
              onChange={(e: any) => {
                setVehiclePrice(Number(e.target.value.replace(/\D/g, "")));
              }}
            />
          </div>
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">Down Payment</label>
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              value={downPayment.toLocaleString()}
              onChange={(e: any) => {
                setDownPayment(Number(e.target.value.replace(/\D/g, "")));
              }}
            />
          </div>
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">Credit Score</label>
            <select
              className="form-control block w-full px-3 py-2 text-sm font-medium text-[#063829] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none cursor-pointer"
              value="Good(660-719)"
              onChange={() => {}}
            >
              <option value="Good(660-719)">Good(660-719)</option>
              <option value="Good(660-719)">Good(660-719)</option>
              <option value="Good(660-719)">Good(660-719)</option>
              <option value="Good(660-719)">Good(660-719)</option>
            </select>
          </div>
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">
              Interest Rate
            </label>
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              value={interestRate + "%"}
              onChange={(e: any) => {
                let rate = e.target.value.slice(0, e.target.value.length - 1);
                if (Number(rate) > 100) {
                  rate = 100;
                  setInterestRate(100);
                }
                if (Number(rate) < 0) {
                  rate = 0;
                  setInterestRate(0);
                } else {
                  setInterestRate(rate);
                }
              }}
            />
          </div>
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">Loan Term</label>
            <select
              className="form-control block w-full px-3 py-2 text-sm font-medium text-[#063829] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-700 focus:outline-none cursor-pointer"
              value="72"
              onChange={() => {}}
            >
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
              <option value="72">72 months</option>
            </select>
          </div>
        </div>
        <div
          className={`w-full sm:w-1/3 md:w-1/4 bg-white text-center px-8 py-6 space-y-4 border-2 border-[#e6e6e6] border-solid rounded-lg`}
        >
          <p className="pt-8 text-[#595c5f]">Estimated monthly payment</p>
          <p className="font-semibold text-3xl">
            ${monthlyPayment.toLocaleString()}
            <span className="font-bold text-lg">/mo</span>
          </p>
          <p className="pb-4">for 5 years</p>
          <hr className="text-[#d2d2d2] border-[1.5px]" />
          <div className="text-left text-sm text-[#154335] space-y-4">
            <div className="font-semibold">Loan Summary</div>
            <div className="w-full flex">
              <p className="w-[70%]">Vehicle Budget</p>
              <p className="w-[30%]">${vehiclePrice.toLocaleString()}</p>
            </div>
            <div className="w-full flex">
              <p className="w-[70%]">Down Payment</p>
              <p className="w-[30%]">-${downPayment.toLocaleString()}</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[70%]">Est, Tax, Title&Registration</p>
              <p className="w-[30%]">
                ${(0.07 * vehiclePrice).toLocaleString()}
              </p>
            </div>
            <hr className="text-[#d2d2d2] border-[1.5px]" />
            <div className="w-full flex">
              <p className="w-[70%] text-[#565656]">Total Loan Amount</p>
              <p className="w-[30%]">${loanPayment.toLocaleString()}</p>
            </div>
            <div className="w-full flex">
              <p className="w-[70%] text-black font-semibold">
                Monthly Payment
              </p>
              <p className="w-[30%]">${monthlyPayment.toLocaleString()}/mo</p>
            </div>
          </div>
          <div className="text-left text-xs text-[#a5a5a5]">{data.Content}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;

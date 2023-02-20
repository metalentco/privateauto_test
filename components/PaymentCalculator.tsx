import { parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const PaymentCalculator = ({ data }: Props) => {
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
              value="20,000"
              onChange={() => {}}
            />
          </div>
          <div className="w-full space-y-2">
            <label className="text-[#083829] font-semibold">Down Payment</label>
            <input
              type="text"
              className="form-control block w-full px-4 py-2 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              value="1,500"
              onChange={() => {}}
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
              value="2.99%"
              onChange={() => {}}
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
            $300<span className="font-bold text-lg">/mo</span>
          </p>
          <p className="pb-4">for 5 years</p>
          <hr className="text-[#d2d2d2] border-[1.5px]" />
          <div className="text-left text-sm text-[#154335] space-y-4">
            <div className="font-semibold">Loan Summary</div>
            <div className="w-full flex">
              <p className="w-[70%]">Vehicle Budget</p>
              <p className="w-[30%]">$20,000</p>
            </div>
            <div className="w-full flex">
              <p className="w-[70%]">Down Payment</p>
              <p className="w-[30%]">-$5,000</p>
            </div>
            <div className="w-full flex items-center">
              <p className="w-[70%]">Est, Tax, Title&Registration</p>
              <p className="w-[30%]">$1,000</p>
            </div>
            <hr className="text-[#d2d2d2] border-[1.5px]" />
            <div className="w-full flex">
              <p className="w-[70%] text-[#565656]">Total Loan Amount</p>
              <p className="w-[30%]">$16,000</p>
            </div>
            <div className="w-full flex">
              <p className="w-[70%] text-black font-semibold">
                Monthly Payment
              </p>
              <p className="w-[30%]">$300/mo</p>
            </div>
          </div>
          <div className="text-left text-xs text-[#a5a5a5]">{data.Content}</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;

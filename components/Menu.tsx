import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const [showMenuModal, setShowMenuModal] = useState<Boolean>(false);

  const router = useRouter();

  const setScrollHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  };
  return (
    <div className="w-full px-[8%] py-4 bg-[#eef2f5]">
      <div className="md:flex justify-between">
        <div className="flex justify-between md:items-center space-x-8">
          <Link className="cursor-pointer" href={`${BASE_URL}`}>
            <Image width={134} height={24} src="/assets/logo.svg" alt="logo" />
          </Link>
          <div className="hidden md:flex text-xl font-normal text-[#333] space-x-6">
            <Link
              className={`"cursor-pointer" ${
                router.pathname == "/sell" ? "underline" : ""
              }`}
              href={`${BASE_URL}sell`}
            >
              Sell
            </Link>
            <Link
              className={`"cursor-pointer" ${
                router.pathname == "/buy" ? "underline" : ""
              }`}
              href={`${BASE_URL}buy`}
            >
              Buy
            </Link>
            <Link
              className={`"cursor-pointer" ${
                router.pathname == "/pricing" ? "underline" : ""
              }`}
              href={`${BASE_URL}pricing`}
            >
              Pricing
            </Link>
            <Link
              className={`"cursor-pointer" ${
                router.pathname == "/how-it-works" ? "underline" : ""
              }`}
              href={`${BASE_URL}how-it-works`}
            >
              How it works
            </Link>
            <Link
              className={`"cursor-pointer" ${
                router.pathname == "/blog" ? "underline" : ""
              }`}
              href={`${BASE_URL}blog`}
            >
              Blog
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="30px"
            height="30px"
            className="block md:hidden"
            onClick={() => {
              setShowMenuModal(true);
              setScrollHidden();
            }}
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
          </svg>
        </div>
        {showMenuModal ? (
          <div className="w-[80%] h-[550px] bg-white justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none border-1 border-2-gray-400 shadow-md px-8 mt-[52px] mx-[20%]">
            <div className="flex justify-end py-4">
              <svg
                fill="#00b3de"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                height="15px"
                viewBox="0 0 92.13 92.13"
                onClick={() => {
                  setShowMenuModal(false);
                  document.body.style.overflowY = "scroll";
                }}
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
            </div>
            <div>
              <Link
                className="text-xl font-bold text-[#333] cursor-pointer"
                href={`${BASE_URL}sell`}
              >
                Sell
              </Link>
              <hr className="bg-black my-4" />
            </div>
            <div>
              <Link
                className="text-xl font-bold text-[#333] cursor-pointer"
                href={`${BASE_URL}buy`}
              >
                Buy
              </Link>
              <hr className="bg-black my-4" />
            </div>
            <div>
              <Link
                className="text-xl font-bold text-[#333] cursor-pointer"
                href={`${BASE_URL}pricing`}
              >
                Pricing
              </Link>
              <hr className="bg-black my-4" />
            </div>
            <div>
              <Link
                className="text-xl font-bold text-[#333] cursor-pointer"
                href={`${BASE_URL}how-it-works`}
              >
                How it works
              </Link>
              <hr className="bg-black my-4" />
            </div>
            <div>
              <Link
                className="text-xl font-bold text-[#333] cursor-pointer"
                href={`${BASE_URL}blog`}
              >
                Blog
              </Link>
              <hr className="bg-black my-4" />
            </div>
            <div className="w-[80%] mx-auto my-8">
              <button className="w-full bg-white hover:bg-blue-500 text-sm text-[#00b3de] font-medium hover:text-white py-2 px-4 border border-[#00b3de] hover:border-transparent rounded">
                Sign in
              </button>
            </div>
            <div className="w-[80%] mx-auto my-8">
              <button className="w-full bg-[#00b3de] hover:bg-blue-300 text-white text-base font-bold py-2 px-4 rounded-lg cursor-pointer">
                Create account
              </button>
            </div>
          </div>
        ) : null}
        <div className="hidden md:flex space-x-6">
          <button
            className="bg-white hover:bg-blue-500 text-sm text-[#00b3de] font-medium hover:text-white py-2 px-4 border border-[#00b3de] hover:border-transparent rounded"
            onClick={() => window.alert("Sign in")}
          >
            Sign in
          </button>
          <button
            className="bg-[#00b3de] hover:bg-blue-300 text-white text-base font-bold py-1 px-4 rounded-lg cursor-pointer"
            onClick={() => window.alert("Create account")}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;

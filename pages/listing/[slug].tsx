import Head from "next/head";
import { useEffect, useState } from "react";
import React from "react";
import GoogleMapReact from "google-map-react";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
const AnyReactComponent = ({ lat, lng }: { lat: any; lng: any }) => <div></div>;

function SlugPage(content: any) {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState<any>();
  const [isAdditionalInfo, setIsAdditionalInfo] = useState<Boolean>(false);
  const [isSellerDisclosures, setIsSellerDisclosures] =
    useState<Boolean>(false);
  const [imageURI, setImageURI] = useState<String>("");
  const [showImageModal, setShowImageModal] = useState<Boolean>(false);

  useEffect(() => {
    if (slug) {
      const slugValue = slug.toString();
      getData(slugValue);
    }
  }, [slug]);

  const getData = (value: string) => {
    const listing_content = content.content;
    for (var i = 0; i < listing_content.length; i++) {
      if (listing_content[i].slug === value) {
        var date = new Date(
          Number(
            listing_content[i].ownershipInfo.seller.joined.$date.$numberLong
          )
        );
        var arr = date.toString().split(" ");
        var date_str = arr[1] + " " + arr[2] + ", " + arr[3];
        listing_content[i].ownershipInfo.seller.joined.$date.$numberLong =
          date_str;
        setData(listing_content[i]);
        setImageURI(listing_content[i].uploadImages[0].images);
      }
    }
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 15,
  };

  const showAdditionalInfo = () => {
    if (isAdditionalInfo == false) {
      setIsAdditionalInfo(true);
    } else {
      setIsAdditionalInfo(false);
    }
  };

  const showSellerDisclosures = () => {
    if (isSellerDisclosures == false) {
      setIsSellerDisclosures(true);
    } else {
      setIsSellerDisclosures(false);
    }
  };

  const changeImage = (image_uri: string) => {
    setImageURI(image_uri);
  };

  const setScrollHidden = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  if (data) {
    return (
      <div className="w-full">
        <Head>
          <title>Car buying | selling</title>
          <meta
            name="description"
            content={`Used ${data.vehicleType} for sale. ${data.RegistrationYear} ${data.CarMake} ${data.CarModel} for sale in ${data.listingLocation.city},${data.listingLocation.stateShortname}. Buy and sell used cars on PrivateAuto.`}
            key="desc"
          />
        </Head>
        <Header />
        <Menu />
        <main className="w-11/12 kl:w-10/12 lg:w-3/4 mx-auto">
          <section className="mt-14">
            <span className="flex hover:underline cursor-pointer">
              <span>
                <Image
                  className="mt-[6px]"
                  width={14}
                  height={14}
                  src="/assets/listings/arrow.png"
                  alt="back to search"
                />
              </span>
              <span>&nbsp;&nbsp;Back to search</span>
            </span>
            <div className="w-full mt-6">
              {data ? (
                <div className="flex justify-center">
                  <div className="w-[420px] h-[490px] flex-wrap overflow-hidden hidden md:flex">
                    {data?.uploadImages.map((item: any, index: number) => {
                      return (
                        <div
                          className="w-[202px] h-[236px] mt-2.5 mr-2"
                          key={index}
                        >
                          <Image
                            className="cursor-pointer"
                            src={"/images/202x236" + item.images}
                            width={202}
                            height={236}
                            key={index}
                            onClick={() => changeImage(item.images)}
                            alt="car_image_202x236"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className="w-full md:w-[570px] relative pt-2.5 pb-1.5 pl-1.5"
                    onClick={() => {
                      setShowImageModal(true);
                      setScrollHidden();
                    }}
                  >
                    <div className="flex justify-center">
                      <Image
                        className="cursor-pointer"
                        width={564}
                        height={480}
                        src={"/images/564x480" + imageURI}
                        alt="car_image_564x480"
                      />
                    </div>
                    <button className="bg-white absolute top-[440px] left-[375px] hidden md:flex items-center text-base text-[#00b3de] font-medium py-2 px-4 border border-[#00b3de] hover:border-transparent rounded space-x-1">
                      <svg
                        fill="#00b3de"
                        viewBox="-32 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#00b3de"
                        className="w-[20px]"
                      >
                        <g id="SVGRepo_bgCarrier"></g>
                        <g id="SVGRepo_tracerCarrier"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path>
                        </g>
                      </svg>
                      <span>Show All Photos</span>
                    </button>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {showImageModal ? (
              <div className="w-full bg-white justify-center items-center overflow-x-hidden overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="w-5/6 mx-auto">
                  <div
                    className="h-[70px] flex items-center px-8 hover:underline cursor-pointer"
                    onClick={() => {
                      setShowImageModal(false);
                      document.body.style.overflow = "scroll";
                    }}
                  >
                    <div className="flex">
                      <span>
                        <Image
                          className="mt-[6px]"
                          width={14}
                          height={14}
                          src="/assets/listings/arrow.png"
                          alt="back to search"
                        />
                      </span>
                      <span className="text-[#727a82]">
                        &nbsp;&nbsp;Back to listing
                      </span>
                    </div>
                  </div>
                  <div>
                    {data?.uploadImages.map((item: any, index: number) => {
                      return (
                        <div className="w-full lg:w-[1154px] mb-8" key={index}>
                          <Image
                            className="w-full h-full cursor-pointer"
                            src={"/images/1250x1000" + item.images}
                            width={1153}
                            height={923}
                            key={index}
                            alt="car_image_1250x1000"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
          <section className="w-full md:max-w-[650px] mt-8">
            <h1 className="text-xl md:text-4xl text-slate-800 font-bold leading-8">
              {data.RegistrationYear}&nbsp;{data.CarMake}&nbsp;{data.CarModel}
              &nbsp;{data.Trim}
            </h1>
            <div className="text-base text-slate-500 font-medium flex items-end mt-3 space-x-4">
              <h1 className="text-4xl text-slate-900 font-bold leading-10">
                ${data.Price.toLocaleString()}
              </h1>
              <span>
                {data.listingLocation.city},&nbsp;
                {data.listingLocation.stateShortname}
              </span>
            </div>
            <div className="flex mt-10 space-x-4">
              <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-1 px-4 rounded cursor-pointer">
                Message Seller
              </button>
              <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-sm font-medium py-1 px-4 rounded cursor-pointer">
                Schedule Test Drive
              </button>
              <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-sm font-medium py-1 px-4 rounded cursor-pointer">
                Make Offer
              </button>
            </div>
          </section>
          <hr className="w-full mt-8 mb-4" />
          <section className="w-full">
            <h3 className="text-2xl font-bold mb-4">Details</h3>
            <div className="w-full">
              <div className="w-full md:w-[600px] block md:grid grid-cols-3 gap-2 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    width={25}
                    height={22}
                    src="/assets/listings/miles.png"
                    alt="miles"
                  />
                  <div>
                    <div className="font-bold text-[#000]">{data.Mileage}</div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Miles
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    width={22}
                    height={22}
                    src="/assets/listings/gearbox.png"
                    alt="null"
                  />
                  <div>
                    <div className="font-bold text-[#000]">
                      {data.Transmission}
                    </div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Transmission
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    width={25}
                    height={26}
                    src="/assets/listings/interior.png"
                    alt="null"
                  />
                  <div>
                    <div className="font-bold text-[#000]">
                      {data.InteriorColor}
                    </div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Interior
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[600px] mt-8 block md:grid grid-cols-3 gap-2 space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    width={25}
                    height={16}
                    src="/assets/listings/engine.png"
                    alt="null"
                  />
                  <div>
                    <div className="font-bold text-[#000]">{data.Engine}</div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Engine
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    width={25}
                    height={27}
                    src="/assets/listings/fuel.png"
                    alt="null"
                  />
                  <div>
                    <div className="font-bold text-[#000]">{data.Fuel}</div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Fuel
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Image
                    width={25}
                    height={25}
                    src="/assets/listings/drive.png"
                    alt="null"
                  />
                  <div>
                    <div className="font-bold text-[#000]">
                      {data.DriveType}
                    </div>
                    <div className="text-sm text-[#7e7e7e] font-normal">
                      Drive
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-1">Description</h3>
              <div className="space-y-4">
                {data.vehicleDescription
                  .split("\n")
                  .map((item: any, i: number) => (
                    <p key={i}>{item}</p>
                  ))}
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <Image
                width={70}
                height={24}
                src="/assets/listings/authochek-logo.png"
                alt="authocheck-logo"
              />
              <a className="text-xs text-[#727a82] font-normal cursor-pointer">
                Vehicle history {">"}
              </a>
            </div>
          </section>
          <section className="w-full mt-12">
            <hr />
            <div className="mt-[13px]">
              <div className="flex items-end">
                <div
                  className="w-[95%] font-bold text-base cursor-pointer"
                  onClick={showAdditionalInfo}
                >
                  Additional Info
                </div>
                {isAdditionalInfo ? (
                  <div className="font-semibold text-3xl cursor-pointer">-</div>
                ) : (
                  <div className="font-semibold text-3xl cursor-pointer">+</div>
                )}
              </div>
              {isAdditionalInfo ? (
                <div className="block sm:flex mt-4">
                  <div className="w-full sm:w-1/2 space-y-4">
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Trim</p>
                      <p className="text-sm font-bold">{data.Trim}</p>
                    </div>
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Number of cylinders</p>
                      <p className="text-sm font-bold">{data.Cylinders}</p>
                    </div>
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Number of doors</p>
                      <p className="text-sm font-bold">{data.Doors}</p>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 space-y-4">
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Body style</p>
                      <p className="text-sm font-bold">{data.BodyStyle}</p>
                    </div>
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Exterior color</p>
                      <p className="text-sm font-bold">{data.ExteriorColor}</p>
                    </div>
                    <div className="grid grid-cols-2 pr-0 sm:pr-32">
                      <p>Title type</p>
                      <p className="text-sm font-bold">{data.TitleType}</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            <hr className="mt-[20px]" />
            <div className="mt-[13px]">
              <div className="flex items-end" onClick={showSellerDisclosures}>
                <div className="w-[95%] font-bold text-base cursor-pointer">
                  Seller Disclosures
                </div>
                {isSellerDisclosures ? (
                  <div className="font-semibold text-3xl cursor-pointer">-</div>
                ) : (
                  <div className="font-semibold text-3xl cursor-pointer">+</div>
                )}
              </div>
              {isSellerDisclosures ? (
                <div>
                  <div className="py-6">
                    Are you aware of any damage or defects that would materially
                    effect the value of the vehicle?
                  </div>
                  {data.hasDamage ? (
                    <div className="flex space-x-3">
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          className="text-white cursor-pointer"
                          checked
                        />{" "}
                        &nbsp;
                        <span>Yes</span>
                      </div>
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          className=" cursor-pointer"
                          disabled
                        />{" "}
                        &nbsp;
                        <span>No</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex space-x-3">
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          className=" cursor-pointer"
                          disabled
                        />{" "}
                        &nbsp;
                        <span>Yes</span>
                      </div>
                      <div className="cursor-pointer">
                        <input
                          type="checkbox"
                          className=" cursor-pointer"
                          checked
                        />{" "}
                        &nbsp;
                        <span>No</span>
                      </div>
                    </div>
                  )}
                  {data && data.description != "" ? (
                    <div className="w-full bg-[#f7f9fc] text-sm font-normal px-4 py-4 my-4 border-[#dee2e6] border rounded">
                      {data.description
                        .split("\n")
                        .map((item: any, i: number) => (
                          <p key={i}>{item}</p>
                        ))}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <hr className="mt-[20px]" />
          </section>
          <section className="w-full bg-[#f7f9fc] px-8 py-8 my-8">
            <div className="w-full block md:flex justify-between space-y-8">
              <div className="flex items-center">
                <Image
                  className="mr-8"
                  width={45}
                  height={45}
                  src="/assets/listings/green-circle-dollar.png"
                  alt="$"
                />
                <div className="space-y-4">
                  <p className="font-bold text-base">
                    Need financing to buy a vehicle?
                  </p>
                  <p className="font-medium text-sm">
                    Banking services provided by USALLIANCE Financial
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-transparent hover:bg-blue-500 text-sm text-[#00b3de] font-medium hover:text-white py-2 px-4 border border-[#00b3de] hover:border-transparent rounded">
                  Apply for a loan
                </button>
              </div>
            </div>
          </section>
          <section className="w-full pt-3">
            <div className="block md:flex justify-between space-y-8">
              <div className="flex space-x-4">
                <div className="flex relative">
                  {data && data.ownershipInfo.seller.profileImage != null ? (
                    <Image
                      className="w-[56px] h-[56px] rounded-full"
                      width={56}
                      height={56}
                      src={"/images" + data.ownershipInfo.seller.profileImage}
                      alt="profile"
                    />
                  ) : (
                    <Image
                      className="w-[56px] h-[56px] rounded-full"
                      width={56}
                      height={56}
                      src="/static/profile/defaultImg.png"
                      alt="profile"
                    />
                  )}
                  <svg
                    fill="#0b9709"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="0 0 342.508 342.508"
                    className="w-4 h-4 absolute top-[40px] left-[40px]"
                  >
                    <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold">
                    {data.ownershipInfo.seller.firstName}&nbsp;
                    {data.ownershipInfo.seller.lastName}.
                  </div>
                  <div className="text-neutral-400">
                    Joined {data.ownershipInfo.seller.joined.$date.$numberLong}
                  </div>
                </div>
              </div>
              <div className="space-x-4">
                <button className="bg-transparent hover:bg-blue-500 text-sm text-[#00b3de] font-bold hover:text-white py-1 px-4 border border-[#00b3de] hover:border-transparent rounded">
                  Make Offer
                </button>
                <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-1 px-4 rounded cursor-pointer">
                  Message Seller
                </button>
              </div>
            </div>
            <div className="flex items-center text-2xl font-bold mt-8">
              Seller's Verification&nbsp;
              <svg
                fill="#828282"
                className="w-5 h-5 svg-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 682.666667a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z m42.666667-220.16V597.333333a42.666667 42.666667 0 0 1-85.333334 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667 64 64 0 1 0-64-64 42.666667 42.666667 0 0 1-85.333333 0 149.333333 149.333333 0 1 1 192 142.506667z" />
              </svg>
            </div>
            <div className="w-3/5 block md:flex justify-between pt-4">
              <div className="flex items-center">
                <svg
                  fill="#0b9709"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 342.508 342.508"
                  className="w-4 h-4"
                >
                  <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
                </svg>
                &nbsp;
                <span>Email</span>
              </div>
              <div className="flex items-center">
                <svg
                  fill="#0b9709"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 342.508 342.508"
                  className="w-4 h-4"
                >
                  <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
                </svg>
                &nbsp;
                <span>Mobile</span>
              </div>
              <div className="flex items-center">
                <svg
                  fill="#0b9709"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 342.508 342.508"
                  className="w-4 h-4"
                >
                  <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
                </svg>
                &nbsp;
                <span>Driver's license</span>
              </div>
              <div className="flex items-center">
                <svg
                  fill="#0b9709"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 342.508 342.508"
                  className="w-4 h-4"
                >
                  <path d="M171.254,0C76.837,0,0.003,76.819,0.003,171.248c0,94.428,76.829,171.26,171.251,171.26 c94.438,0,171.251-76.826,171.251-171.26C342.505,76.819,265.697,0,171.254,0z M245.371,136.161l-89.69,89.69 c-2.693,2.69-6.242,4.048-9.758,4.048c-3.543,0-7.059-1.357-9.761-4.048l-39.007-39.007c-5.393-5.398-5.393-14.129,0-19.521 c5.392-5.392,14.123-5.392,19.516,0l29.252,29.262l79.944-79.948c5.381-5.386,14.111-5.386,19.504,0 C250.764,122.038,250.764,130.769,245.371,136.161z" />
                </svg>
                &nbsp;
                <span>PrivateAuto Pay</span>
              </div>
            </div>
          </section>
          <section className="w-full mt-8">
            <div className="flex items-center text-2xl font-bold">
              Payment Methods&nbsp;
              <svg
                fill="#828282"
                className="w-5 h-5 svg-icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 85.333333a426.666667 426.666667 0 1 0 426.666667 426.666667A426.666667 426.666667 0 0 0 512 85.333333z m0 682.666667a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z m42.666667-220.16V597.333333a42.666667 42.666667 0 0 1-85.333334 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667 64 64 0 1 0-64-64 42.666667 42.666667 0 0 1-85.333333 0 149.333333 149.333333 0 1 1 192 142.506667z" />
              </svg>
            </div>
            <div className="flex space-x-8 mt-8">
              {data && data.dealPreferences.paymentMethod.privateAutoPay ? (
                <div className="px-4 py-2 border border-[#dee2e6] rounded">
                  <Image
                    width={46}
                    height={17}
                    src="/assets/listings/payment-pa-pay.png"
                    alt="pa-pay"
                  />
                </div>
              ) : (
                ""
              )}
              {data && data.dealPreferences.paymentMethod.cash ? (
                <div className="px-4 py-2 border border-[#dee2e6] rounded">
                  <Image
                    width={60}
                    height={14}
                    src="/assets/listings/payment-cash.png"
                    alt="cash"
                  />
                </div>
              ) : (
                ""
              )}
              {data && data.dealPreferences.paymentMethod.crypto.btc ? (
                <div className="px-4 py-2 border border-[#dee2e6] rounded">
                  <Image
                    width={60}
                    height={13}
                    src="/assets/listings/payment-btc.png"
                    alt="bitcoin"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <hr className="mt-6" />
          </section>
          {data && data.testDriveLocation ? (
            <section className="w-full my-8">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm md:text-[25px] font-bold">
                    Test drive location
                  </p>
                  <p className="text-xs md:text-sm text-[#212529]">
                    {data.listingLocation.city},&nbsp;
                    {data.listingLocation.stateShortname}
                  </p>
                </div>
                <div className="flex items-center">
                  <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-xs md:text-sm font-bold py-1 px-4 rounded cursor-pointer">
                    Schedule Test Drive
                  </button>
                </div>
              </div>
              <div className="w-full h-[216px] my-6">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyBAefhRlXEH3vCko-zZTX6PHllTR6av4WI",
                  }}
                  defaultCenter={{
                    lat: data.testDriveLocation.geometry.latitude,
                    lng: data.testDriveLocation.geometry.longitude,
                  }}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={data.testDriveLocation.geometry.latitude}
                    lng={data.testDriveLocation.geometry.longitude}
                  />
                </GoogleMapReact>
              </div>
            </section>
          ) : (
            ""
          )}
          <section className="w-full bg-[#f7f9fc] mt-20 px-4 md:px-12 py-8 md:py-16">
            <div className="text-[28px] font-bold pb-4">Why PrivateAuto</div>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <Image
                  width={82}
                  height={82}
                  src="/assets/listings/sendMoneyIcon.svg"
                  alt="img-size"
                />
                <div>
                  <p className="text-lg md:text-2xl font-medium">
                    Direct banking integration
                  </p>
                  <p className="text-sm md:text-base font-normal">
                    Instantly transfer or receive money with PrivateAuto Pay. No
                    transaction fees.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Image
                  width={82}
                  height={82}
                  src="/assets/listings/chatFeatureIcon.svg"
                  alt="img-size"
                />
                <div>
                  <p className="text-lg md:text-2xl font-medium">
                    Online chat feature
                  </p>
                  <p className="text-sm md:text-base font-normal">
                    Simply communicate with the seller without disclosing your
                    personal info.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <Image
                  width={82}
                  height={82}
                  src="/assets/listings/easySchedulingIcon.svg"
                  alt="img-size"
                />
                <div>
                  <p className="text-lg md:text-2xl font-medium">
                    Buying made easy
                  </p>
                  <p className="text-sm md:text-base font-normal">
                    Easily schedule test drives, make offers, and e-sign your
                    bill of sale.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px-1 pt-[77px] pb-4">
            <p className="text-xs text-center text-[#212529]">
              The vehicle information is supplied by the seller and may include
              data from third parties; PrivateAuto is not responsible for the
              accuracy of such information. PrivateAuto provides this service
              and materials without representations or warranties of any kind,
              either expressed or implied.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "2020-harley-davidson-flhxs-vwfd" } },
      { params: { slug: "2020-ford-f-150-vwet" } },
      { params: { slug: "2020-mazda-mx-5-vwd-a6tzwde" } },
      { params: { slug: "2020-mercedes-benz-amg-gt-vwdpjdrr7k8" } },
      { params: { slug: "2020-mini-countryman-vwe1csxodqy" } },
      { params: { slug: "2020-hyundai-tucson-vwenbuvlzwm" } },
      { params: { slug: "2020-ford-explorer-vwfelq4nuki" } },
      { params: { slug: "2020-toyota-4-runner-vwczacbuawi" } },
      { params: { slug: "2019-toyota-86-vwdlxudqids" } },
      { params: { slug: "2020-mini-countryman-vwcrnxhv-tu" } },
      { params: { slug: "2020-tesla-model-x-vwdnaqtzmd0" } },
      { params: { slug: "2019-volkswagen-jetta-vwffqj5-xgs" } },
      { params: { slug: "2019-toyota-camry-vwc4gmivyeg" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/json/seller_listings.json");
  const content = await res.json();
  return {
    props: {
      content,
    },
  };
}

export default SlugPage;

import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";
import API from "@/hooks/useApi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { Google_Map_API_Key } from "@/libs/constants";
import {
  CheckSVG,
  ExclamationSVG,
  QuestionSVG,
  GripHorizontalSVG,
} from "@/components/Icon/Icons";
const AnyReactComponent = ({ lat, lng }: { lat: any; lng: any }) => <div></div>;

interface Props {
  content: any;
}

function SlugPage(content: Props) {
  const BASE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const [data] = useState<any>(content.content);
  const [isAdditionalInfo, setIsAdditionalInfo] = useState<Boolean>(false);
  const [isSellerDisclosures, setIsSellerDisclosures] =
    useState<Boolean>(false);
  const [imageURI, setImageURI] = useState<String>(
    content.content.uploadImages[0].images
  );
  const [showImageModal, setShowImageModal] = useState<Boolean>(false);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 15,
  };

  const showAdditionalInfo = () => {
    if (!isAdditionalInfo) {
      setIsAdditionalInfo(true);
    } else {
      setIsAdditionalInfo(false);
    }
  };

  const showSellerDisclosures = () => {
    if (!isSellerDisclosures) {
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
      document.body.style.overflowY = "scroll";
    }
  };

  if (data) {
    return (
      <div className="w-full">
        <Head>
          <title>Car buying | selling</title>
          <meta
            name="description"
            content={`Used ${data.vehicleType} for sale. ${
              data.RegistrationYear
            } ${data.CarMake} ${data.CarModel} ${
              data.listingLocation != undefined
                ? ` for sale in ${data.listingLocation.city}, ${data.listingLocation.stateShortname}`
                : ""
            }. Buy and sell used cars on PrivateAuto.`}
            key="desc"
          />
        </Head>
        <Header />
        <Menu />
        <main className="w-11/12 kl:w-10/12 lg:w-3/4 mx-auto">
          <section className="mt-14">
            <Link
              href={`${BASE_URL}buy`}
              className="flex hover:underline cursor-pointer"
            >
              <span>
                <Image
                  className="mt-[6px]"
                  width={14}
                  height={14}
                  src="/assets/listings/arrow.png"
                  alt="back"
                />
              </span>
              <span>&nbsp;&nbsp;Back to search</span>
            </Link>
            <div className="w-full mt-6">
              {data ? (
                <div className="flex justify-center">
                  <div className="w-[420px] h-[490px] flex-wrap overflow-hidden hidden md:flex">
                    {data?.uploadImages.map((item: any, index: number) => {
                      return (
                        <div
                          className="w-[202px] h-[236px] mt-2.5 mr-2"
                          key={item.id}
                        >
                          <Image
                            className="cursor-pointer"
                            src={
                              "https://padev.xyz/images/202x236" + item.images
                            }
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
                        src={"https://padev.xyz/images/564x480" + imageURI}
                        alt="car_image_564x480"
                      />
                    </div>
                    <button className="bg-white absolute top-[440px] left-[375px] hidden md:flex items-center text-base text-[#00b3de] font-medium py-2 px-4 border border-[#00b3de] hover:border-transparent rounded space-x-1">
                      <GripHorizontalSVG />
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
                      document.body.style.overflowY = "scroll";
                    }}
                  >
                    <div className="flex">
                      <span>
                        <Image
                          className="mt-[6px]"
                          width={14}
                          height={14}
                          src="/assets/listings/arrow.png"
                          alt="back"
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
                        <div
                          className="w-full lg:w-[1154px] mb-8"
                          key={item.id}
                        >
                          <Image
                            className="w-full h-full cursor-pointer"
                            src={
                              "https://padev.xyz/images/1250x1000" + item.images
                            }
                            width={1153}
                            height={923}
                            key={item.id}
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
              {data.listingLocation ? (
                <span>
                  {data.listingLocation.city},&nbsp;
                  {data.listingLocation.stateShortname}
                </span>
              ) : (
                <span>N/A</span>
              )}
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
              <span className="text-xs text-[#727a82] font-normal cursor-pointer">
                Vehicle history {">"}
              </span>
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
                  {data.description != "" ? (
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
                  {data && data.userId.userDetails.profileImage != null ? (
                    <Image
                      className="w-[56px] h-[56px] rounded-full"
                      width={56}
                      height={56}
                      src={
                        "https://padev.xyz" +
                        data.userId.userDetails.profileImage
                      }
                      alt="profile"
                    />
                  ) : (
                    <Image
                      className="w-[56px] h-[56px] rounded-full"
                      width={56}
                      height={56}
                      src="/images/static/profile/defaultImg.png"
                      alt="profile"
                    />
                  )}
                  <div className="w-4 h-4 absolute top-[40px] left-[40px]">
                    {data.userId.verification.email &&
                    data.userId.verification.phone &&
                    data.userId.verification.bank &&
                    data.userId.verification.vouched ? (
                      <CheckSVG />
                    ) : (
                      <ExclamationSVG />
                    )}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-bold">
                    {data.userId.userDetails.nickname != null
                      ? data.userId.userDetails.nickname
                      : data.userId.userDetails.firstName}
                    &nbsp;
                    {data.userId.userDetails.lastName}.
                  </div>
                  <div className="text-neutral-400">
                    Joined {data.userId.createdAt}
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
              Seller&apos;s Verification&nbsp;
              <QuestionSVG />
            </div>
            <div className="w-3/6 block md:flex justify-between pt-4">
              <div className="flex items-center">
                {data.userId.verification.email ? (
                  <CheckSVG />
                ) : (
                  <ExclamationSVG />
                )}
                &nbsp;
                <span>Email</span>
              </div>
              <div className="flex items-center">
                {data.userId.verification.phone ? (
                  <CheckSVG />
                ) : (
                  <ExclamationSVG />
                )}
                &nbsp;
                <span>Mobile</span>
              </div>
              <div className="flex items-center">
                {data.userId.verification.vouched ? (
                  <CheckSVG />
                ) : (
                  <ExclamationSVG />
                )}
                &nbsp;
                <span>Driver&apos;s license</span>
              </div>
              <div className="flex items-center">
                {data.userId.verification.bacnk ? (
                  <CheckSVG />
                ) : (
                  <ExclamationSVG />
                )}
                &nbsp;
                <span>PrivateAuto Pay</span>
              </div>
            </div>
          </section>
          <section className="w-full mt-8">
            <div className="flex items-center text-2xl font-bold">
              Payment Methods&nbsp;
              <QuestionSVG />
            </div>
            <div className="flex space-x-8 mt-8">
              {data.dealPreferences.paymentMethod.privateAutoPay ? (
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
              {data.dealPreferences.paymentMethod.cash ? (
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
              {data.dealPreferences.paymentMethod.crypto.btc ? (
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
          {data &&
          data.testDriveLocation != undefined &&
          Object.keys(data.testDriveLocation).length != 0 ? (
            <section className="w-full my-8">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm md:text-[25px] font-bold">
                    Test drive location
                  </p>
                  {data.listingLocation != undefined ? (
                    <p className="text-xs md:text-sm text-[#212529]">
                      {data.listingLocation.city},&nbsp;
                      {data.listingLocation.stateShortname}
                    </p>
                  ) : (
                    ""
                  )}
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
                    key: Google_Map_API_Key,
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
                  alt="Image-size"
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
                  alt="Image-size"
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
                  alt="Image-size"
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { getTotalData } = API();
  const content = await getTotalData();

  const paths = content.data.map((item: any, index: number) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (
  context
): Promise<{ props: Props; revalidate: number }> => {
  const { getTotalData } = API();
  const totalData = await getTotalData();
  let slug: string | string[] | undefined;
  let content: any;
  if (context.params != undefined) {
    slug = context.params.slug;
  }
  totalData.data.map((item: any, index: number) => {
    if (item.slug == slug) {
      content = item;
    }
  });

  if (content.userId.createdAt != null) {
    var date = new Date(content.userId.createdAt);
    var arr = date.toString().split(" ");
    var date_str = arr[1] + " " + arr[2] + ", " + arr[3];
    content.userId.createdAt = date_str;
  }
  content.uploadImages.map((item: any, index: number) => {
    const image_url = item.images;
    if (item.images.includes("vehicle-listing")) {
      item.images = image_url.substring(
        image_url.indexOf("/vehicle-listing"),
        image_url.length
      );
    } else if (item.images.includes("jfif")) {
      item.images = item.images;
    } else {
      item.images = image_url.substring(
        image_url.indexOf("/listings"),
        image_url.length
      );
    }
  });

  return {
    props: {
      content,
    },
    revalidate: 30,
  };
};

export default SlugPage;

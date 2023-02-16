import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/libs/constants";
const Footer = () => {
  return (
    <footer className="w-full md:px-32 bg-[#45577d] pb-12">
      <div className="w-full block md:flex justify-between pt-12">
        <div className="space-y-4 md:space-y-0">
          <div className="flex md:block justify-center">
            <Image
              className=" flex justify-center"
              width={134}
              height={24}
              src="/assets/listings/logo-white.svg"
              alt="Logo"
            />
          </div>
          <div className="w-full md:max-w-[398px] font-normal text-sm text-white text-center md:text-left pt-1 px-4 md:px-0">
            PrivateAuto makes selling a car privately safe, simple, and secure.
            The only technology-driven, self-service solution to close the deal
            on your own.
          </div>
        </div>
        <div className="w-5/6 md:w-3/6 mx-auto flex justify-between mt-4 md:mt-0">
          <div className="font-normal text-sm text-[#fafcfe] space-y-3">
            <div className="font-semibold">For Sellers</div>
            <div>
              <Link href="/how-it-works">How it works</Link>
            </div>
            <div>
              <Link href="/sell">Sell your car</Link>
            </div>
          </div>
          <div className="font-normal text-sm text-[#fafcfe] space-y-3">
            <div className="font-semibold">For Buyers</div>
            <div>
              <Link href="/buy">Browse Listings</Link>
            </div>
            <div>
              <Link href="/how-it-works/buy">How to Buy</Link>
            </div>
          </div>
          <div className="font-normal text-sm text-[#fafcfe] space-y-3">
            <div className="font-semibold pr-0 md:pr-20">Company</div>
            <div>
              <Link href="/about">Our Story</Link>
            </div>
            <div>
              <Link href="/blog">Blog</Link>
            </div>
            <div>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:flex md:justify-between pt-6 md:px-0">
        <div className="w-1/2 mx-auto md:w-[220px] flex justify-between">
          <Link
            href="https://www.facebook.com/privateauto"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/assets/listings/facebook.svg"
              alt="facebook"
            />
          </Link>
          <Link
            href="https://twitter.com/_PrivateAuto"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/assets/listings/twitter.svg"
              alt="twitter"
            />
          </Link>
          <Link
            href="https://www.instagram.com/privateauto/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/assets/listings/instagram.svg"
              alt="instagram"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/privateauto/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/assets/listings/linkedin.svg"
              alt="linkedin"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCAzVYyuUM09LDhaZN_uDrGQ"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={20}
              height={20}
              src="/assets/listings/youtube.svg"
              alt="youtube"
            />
          </Link>
        </div>
        <div className="md:w-[183px] mx-auto md:mx-0 flex justify-center md:justify-between space-x-8 mt-8 md:mt-0">
          <Link
            href="https://www.facebook.com/privateauto"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={78}
              height={26}
              src="/assets/appstore.svg"
              alt="IOS store"
            />
          </Link>
          <Link
            href="https://twitter.com/_PrivateAuto"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              width={81}
              height={29}
              src="/assets/googleplay.svg"
              alt="Google Play Store"
            />
          </Link>
        </div>
      </div>
      <div className="border border-[#6e83af] mt-[24px]"></div>
      <div className="block md:flex justify-between mt-4">
        <div className="text-sm text-normal text-[#c5cddf] px-4 text-center md:px-0">
          Copyrights &copy; 2023. All Rights Reserved by PrivateAuto Inc
        </div>
        <div className="text-sm text-normal text-[#c5cddf] text-center md:text-left pt-4 md:pt-0">
          Terms | Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

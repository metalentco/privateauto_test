const Footer = () => {
  return (
    <footer className="w-full px-32 bg-[#45577d] pb-12">
      <div className="flex justify-between pt-12">
        <div>
          <img src="/assets/listings/logo-white.svg" alt="Logo" />
          <div className="max-w-[398px] font-normal text-sm text-white pt-1">
            PrivateAuto makes selling a car privately safe, simple, and secure.
            The only technology-driven, self-service solution to close the deal
            on your own.
          </div>
        </div>
        <div className="font-normal text-sm text-[#fafcfe] space-y-3">
          <div className="font-semibold">For Sellers</div>
          <div>How it works</div>
          <div>Sell your car</div>
        </div>
        <div className="font-normal text-sm text-[#fafcfe] space-y-3">
          <div className="font-semibold">For Buyers</div>
          <div>Browse Listings</div>
          <div>How to Buy</div>
        </div>
        <div className="font-normal text-sm text-[#fafcfe] space-y-3">
          <div className="font-semibold pr-20">Company</div>
          <div>Our Story</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="flex justify-between pt-6">
        <div className="w-[220px] flex justify-between">
          <a href="https://www.facebook.com/privateauto" target="_blank">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/listings/facebook.svg"
              alt="facebook"
            />
          </a>
          <a href="https://twitter.com/_PrivateAuto" target="_blank">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/listings/twitter.svg"
              alt="twitter"
            />
          </a>
          <a href="https://www.instagram.com/privateauto/" target="_blank">
            <img
              className="w-[20px] h-[20px]"
              src="/assets/listings/instagram.svg"
              alt="instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/privateauto/"
            target="_blank"
          >
            <img
              className="w-[20px] h-[20px]"
              src="/assets/listings/linkedin.svg"
              alt="linkedin"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCAzVYyuUM09LDhaZN_uDrGQ"
            target="_blank"
          >
            <img
              className="w-[20px] h-[20px]"
              src="/assets/listings/youtube.svg"
              alt="youtube"
            />
          </a>
        </div>
        <div className="w-[183px] flex justify-between">
          <a href="https://www.facebook.com/privateauto" target="_blank">
            <img
              className="w-[78px] h-[26px]"
              src="/assets/appstore.svg"
              alt="IOS store"
            />
          </a>
          <a href="https://twitter.com/_PrivateAuto" target="_blank">
            <img
              className="w-[81px] h-[29px]"
              src="/assets/googleplay.svg"
              alt="Google Play Store"
            />
          </a>
        </div>
      </div>
      <div className="border border-[#6e83af] mt-[24px]"></div>
      <div className="flex justify-between mt-4">
        <div className="text-sm text-normal text-[#c5cddf]">
          Copyrights &copy; 2023. All Rights Reserved by PrivateAuto Inc
        </div>
        <div className="text-sm text-normal text-[#c5cddf]">
          Terms | Privacy
        </div>
      </div>
    </footer>
  );
};

export default Footer;

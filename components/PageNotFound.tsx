import Image from "next/image";
const PageNotFound = () => {
  return (
    <div className="w-[80%] md:w-[70%] mx-auto py-20">
      <div className="block md:flex items-center justify-between">
        <div className="hidden md:block text-center md:text-left space-y-8">
          <div className="text-[40px] font-bold">Uh no... Page not found</div>
          <div className="text-xl font-normal">
            We couldn&apos;t find the page you were looking for.
          </div>
          <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-base font-medium py-1 px-4 rounded cursor-pointer">
            Go back
          </button>
        </div>
        <div className="flex md:block justify-center pb-20 md:pb-0">
          <Image
            width={286}
            height={286}
            src="/assets/notFoundCar.svg"
            alt="notFoundCar"
          />
        </div>
        <div className="block md:hidden text-center md:text-left space-y-8">
          <div className="text-2xl sm:text-3xl md:text-[40px] font-bold">
            Uh no... Page not found
          </div>
          <div className="text-base sm:text-lg md:text-xl font-normal">
            We couldn&apos;t find the page you were looking for.
          </div>
          <button className="bg-[#f7f9fc] hover:bg-slate-200 text-black text-base font-medium py-1 px-4 rounded cursor-pointer">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;

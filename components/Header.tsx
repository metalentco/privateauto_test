const Header = () => {
  return (
    <header className="w-full h-[52px] p-2 flex justify-center items-end bg-[#64e5cb] space-x-8">
      <div className="text-lg font-normal">
        <strong>New Pay Later Option.</strong>&nbsp;&nbsp;Only pay when the car
        sells
      </div>
      <button className="bg-white hover:bg-slate-100 text-sm px-2 py-1 rounded cursor-pointer">
        View Pricing
      </button>
    </header>
  );
};

export default Header;

type Props = {
  data: any;
};

const JumpLinks = ({ data }: Props) => {
  return (
    <div className="w-5/6 md:w-3/5 mx-auto pb-20">
      {data.Links.map((item: any, index: number) => {
        return (
          <div className="flex items-center space-x-8" key={index}>
            <div className="w-[4px] h-[4px] bg-slate-300 rounded"></div>
            <div key={index} className="w-[95%] text-base md:text-xl space-y-4">
              <a href={`${"#"}${item.Label}`}>
                <div className="flex justify-between text-slate-500 mt-4 cursor-pointer">
                  <span>{item.TargetName}</span>
                  <span className="pr-4"> {">"} </span>
                </div>
              </a>
              <hr className="border text-black" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JumpLinks;

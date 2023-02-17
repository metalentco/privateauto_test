type Props = {
  data: any;
};

const JumpLinkTarget = ({ data }: Props) => {
  return <div className="w-full" id={data.Name}></div>;
};

export default JumpLinkTarget;

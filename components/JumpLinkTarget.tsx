type Props = {
  data: any;
};

const JumpLinkTarget = ({ data }: Props) => {
  return <div id={data.Name}></div>;
};

export default JumpLinkTarget;

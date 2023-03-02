type Props = {
  data: any;
};

const VideoPlayer = ({ data }: Props) => {
  return (
    <div className="w-full flex justify-center px-4">
      {data.Poster.data != null && (
        <video
          poster={data.Poster.data.attributes.formats.small.url}
          width={data.Poster.data.attributes.formats.small.width}
          height={data.Poster.data.attributes.formats.small.height}
          controls
        >
          <source type="video/mp4" src={data.URL} />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;

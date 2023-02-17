import { parseTitle } from "@/libs/utils";

type Props = {
  data: any;
};

const ContactForm = ({ data }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#eef0f5] py-8">
        <p className={`text-center text-2xl ${parseTitle(data.TitleStyle)}`}>
          {data.Title}
        </p>
      </div>
      <div className="w-full py-12 text-[#828282]">
        <div className="w-full flex justify-center">
          <div className="w-4/6 sm:w-1/3 space-y-2">
            <label className="text-xl">Your Name</label>
            <input
              type="text"
              className="form-control block w-full px-4 py-3 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              placeholder="First and last name"
            />
          </div>
        </div>
        <div className="w-full flex justify-center pt-10">
          <div className="w-4/6 sm:w-1/3 space-y-2">
            <label className="text-xl">Email Address</label>
            <input
              type="text"
              className="form-control block w-full px-4 py-3 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              placeholder="What's your email?"
            />
          </div>
        </div>
        <div className="w-full flex justify-center pt-10">
          <div className="w-4/6 sm:w-1/3 space-y-2">
            <label className="text-xl">Message</label>
            <textarea
              rows={10}
              className="form-control block w-full px-4 py-3 text-sm font-medium bg-white bg-clip-padding border border-solid border-[#9797aa] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-sky-700 focus:outline-2"
              placeholder="Write your message"
            />
          </div>
        </div>
        <div className="flex justify-center pt-20">
          <button className="bg-[#00b3de] hover:bg-blue-200 text-base text-white font-bold py-2 px-4 border border-[#00a0c7] hover:border-transparent border-solid rounded-lg">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

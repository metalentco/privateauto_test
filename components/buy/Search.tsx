type Props = {
  search: string;
  setSearch: Function;
  setSearchKey: Function;
};

const Search = ({ search, setSearch, setSearchKey }: Props) => {
  return (
    <input
      className="bg-[url('/assets/search.svg')] bg-no-repeat bg-[center_left_0.5rem] border border-[#333] rounded-full w-full py-2 px-8 text-[#2e3b54] leading-tight focus:border-sky-400 focus:outline-none"
      id="search"
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e: any) => setSearch(e.target.value)}
      onKeyPress={(event: any) => {
        if (event.key === "Enter") {
          setSearchKey(search);
        }
      }}
    />
  );
};

export default Search;

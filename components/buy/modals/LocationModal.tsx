import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { Google_Map_API_Key } from "@/libs/constants";

const LocationModal = () => {
  const [updateAddress, setUpdateAddress] = useState("");
  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: Google_Map_API_Key,
    });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length) {
      console.log(placePredictions);
    }
  }, [placePredictions]);
  useEffect(() => {
    register("address", { required: true });
  }, []);

  return (
    <div className="absolute top-[40px] left-[0px] w-[250px] vs:w-[340px] py-6 bg-white text-base text-[#212529] border-2 shadow-2xl rounded-lg">
      <div className="w-full px-6 pb-8 space-y-4">
        <div className="text-left">
          <label className="form-label inline-block text-base font-medium text-[#333]">
            Location
          </label>
          <div>
            <input
              onChange={(evt: any) => {
                console.log(evt.target.value);
                console.log(
                  "------>",
                  getPlacePredictions({ input: "los angels" })
                );
                setValue("address", evt.target.value);
                setUpdateAddress(evt.target.value);
              }}
              type="text"
              name="address"
              value={updateAddress}
              id="address"
              autoComplete="off"
              placeholder="1416 Queens Rd,
                      Berkeley, CA 94708"
            />
            {!isPlacePredictionsLoading && (
              <ul>
                {placePredictions.map((item) => (
                  <li
                    onClick={() => {
                      setValue("address", item.description);
                      setUpdateAddress(item.description);
                    }}
                  >
                    {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="text-left">
          <label className="form-label inline-block text-base font-medium text-[#333]">
            Mile radius
          </label>
          <select
            className="form-control block w-full px-3 py-1.5 text-sm font-medium text-[#063829] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
            defaultValue={50}
          >
            <option value={10}>10 miles</option>
            <option value={25}>25 miles</option>
            <option value={50}>50 miles</option>
            <option value={100}>100 miles</option>
            <option value={200}>200+ miles</option>
          </select>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex justify-between px-4 pt-6">
        <button className="bg-[#f7f9fc] hover:bg-blue-500 text-sm font-medium hover:text-white py-2 px-3 hover:border-transparent rounded">
          Clear
        </button>
        <button className="bg-[#00b3de] hover:bg-blue-300 text-white text-sm font-bold py-2 px-3 rounded cursor-pointer">
          Apply
        </button>
      </div>
    </div>
  );
};

export default LocationModal;
